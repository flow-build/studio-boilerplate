import type { SearchDriverOptions } from '@elastic/search-ui';
import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector';

import { ConfigFields } from './types';

const connector = new AppSearchAPIConnector({
  searchKey: 'search-feodmjyfmqinygyb4u1y254k',
  engineName: 'video-games',
  endpointBase: 'https://host-2376rb.api.swiftype.com'
});

export const configFields: ConfigFields = {
  fields: [
    {
      namePropComponent: 'title',
      namePropElasticSearch: 'name'
    },
    {
      namePropComponent: 'urlImg',
      namePropElasticSearch: 'image_url'
    },
    {
      namePropComponent: 'description',
      namePropElasticSearch: 'publisher'
    },
    {
      namePropComponent: 'urlRedirect',
      namePropElasticSearch: 'id',
      customValue: '/product/{{id}}'
    },
    {
      namePropComponent: 'price.value',
      namePropElasticSearch: 'critic_score'
    },
    {
      namePropComponent: 'price.description',
      namePropElasticSearch: '',
      customValue: 'por período'
    },
    {
      namePropComponent: 'attributes.name',
      namePropElasticSearch: '',
      customValue: 'Plataforma',
      isArray: true
    },
    {
      namePropComponent: 'attributes.value',
      namePropElasticSearch: 'platform',
      isArray: true
    },
    {
      namePropComponent: 'attributes.name',
      namePropElasticSearch: '',
      customValue: 'Fabricante',
      isArray: true
    },
    {
      namePropComponent: 'attributes.value',
      namePropElasticSearch: 'publisher',
      isArray: true
    }
  ]
};

export const congigSearchUI: SearchDriverOptions = {
  apiConnector: connector,
  initialState: {
    searchTerm: ' '
  }
};
