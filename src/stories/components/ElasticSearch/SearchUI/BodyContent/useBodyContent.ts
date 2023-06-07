/* eslint-disable @typescript-eslint/no-explicit-any */

import type { SearchResult } from '@elastic/search-ui';
import _isArray from 'lodash/isArray';
import Mustache from 'mustache';

import { FieldsItemResult } from '../types';
import { DynamicObject } from './types';

export const useBodyContent = (fields?: FieldsItemResult[]) => {
  function transformArrayToNestedObject(
    daynamicObjects: Array<DynamicObject>
  ): Record<string, any> {
    const nestedObject: Record<string, any> = {};

    const names = daynamicObjects.map((item) => item.name);
    const values = daynamicObjects.map((item) => item.value);

    names.forEach((str, indexArray) => {
      const parts = str.split('.');
      let currentObject: Record<string, any> = nestedObject;

      parts.forEach((part, index) => {
        if (!currentObject[part]) {
          if (!daynamicObjects[indexArray].isArray) {
            currentObject[part] = {};
          } else {
            currentObject[part] = [];
          }
        }

        if (index === parts.length - 1) {
          if (!daynamicObjects[indexArray].isArray) {
            currentObject[part] = values[indexArray];
          } else {
            currentObject[part].push(values[indexArray]);
          }
        }

        currentObject = currentObject[part];
      });
    });

    const newObject = Object.keys(nestedObject).reduce((prev, current) => {
      if (_isArray(nestedObject[current])) {
        const mapObject = Object.keys(nestedObject[current]).reduce((acc: any, curr: any) => {
          const arr = nestedObject[current][curr];
          const result = arr.map((_: any, index: number) => {
            return {
              [curr]: arr[index]
            };
          });

          if (!acc.length) {
            return [...result];
          }

          const newAcc = acc.map((item: any, index: number) => {
            if (item[curr]) {
              return item;
            }

            return {
              ...item,
              ...result[index]
            };
          });

          return newAcc;
        }, []);

        return {
          ...prev,
          [current]: mapObject
        };
      }

      return prev;
    }, nestedObject);

    return { ...nestedObject, ...newObject };
  }

  function getValue(field: FieldsItemResult, searchResult: SearchResult) {
    if (field.customValue) {
      const objReplace = {
        [field.namePropElasticSearch]: field.namePropElasticSearch
          ? searchResult[field.namePropElasticSearch]?.raw ?? ''
          : ''
      };

      return Mustache.render(field.customValue, objReplace);
    }

    return searchResult[field.namePropElasticSearch]?.raw ?? '';
  }

  function buildProp(field: FieldsItemResult, searchResult: SearchResult) {
    return {
      [field.namePropComponent]: getValue(field, searchResult)
    };
  }

  function getPropsCard<T>(result: SearchResult): T | null {
    let objects: Array<DynamicObject> = [];

    if (!fields) return null;

    let propsCard = fields.reduce((prev, current) => {
      const propsObj = current.namePropComponent.split('.');
      const isObject = propsObj.length > 1;

      if (isObject) {
        objects = [
          ...objects,
          {
            name: current.namePropComponent,
            value: getValue(current, result),
            isArray: current.isArray
          }
        ];

        return prev;
      } else {
        const valueProp = buildProp(current, result);

        return {
          ...prev,
          ...valueProp
        };
      }
    }, {});

    if (objects.length) {
      const complexObj = transformArrayToNestedObject(objects);
      propsCard = {
        ...propsCard,
        ...complexObj
      };
    }

    return propsCard as T;
  }

  return {
    getPropsCard
  };
};
