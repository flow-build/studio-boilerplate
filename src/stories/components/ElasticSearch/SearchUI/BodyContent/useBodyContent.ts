/* eslint-disable @typescript-eslint/no-explicit-any */

import type { SearchResult } from '@elastic/search-ui';
import Mustache from 'mustache';

import { DynamicObject, FieldsItemResult } from './types';

export const useBodyContent = (fields: FieldsItemResult[]) => {
  function transformArrayToNestedObject(array: Array<DynamicObject>): Record<string, any> {
    const nestedObject: Record<string, any> = {};

    const names = array.map((item) => item.name);
    const values = array.map((item) => item.value);

    names.forEach((str, indexArray) => {
      const parts = str.split('.');
      let currentObject: Record<string, any> = nestedObject;

      parts.forEach((part, index) => {
        if (!currentObject[part]) {
          currentObject[part] = {};
        }

        if (index === parts.length - 1) {
          currentObject[part] = values[indexArray];
        }

        currentObject = currentObject[part];
      });
    });

    return nestedObject;
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

  function getPropsCard<T>(result: SearchResult): T {
    let objects: Array<DynamicObject> = [];

    let propsCard = fields.reduce((prev, current) => {
      const propsObj = current.namePropComponent.split('.');
      const isObject = propsObj.length > 1;

      if (isObject) {
        objects = [
          ...objects,
          {
            name: current.namePropComponent,
            value: getValue(current, result)
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
