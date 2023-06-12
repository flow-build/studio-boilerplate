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
      isPropArrayComponent: true
    },
    {
      namePropComponent: 'attributes.value',
      namePropElasticSearch: 'platform',
      isPropArrayComponent: true
    },
    {
      namePropComponent: 'attributes.name',
      namePropElasticSearch: '',
      customValue: 'Fabricante',
      isPropArrayComponent: true
    },
    {
      namePropComponent: 'attributes.value',
      namePropElasticSearch: 'publisher',
      isPropArrayComponent: true
    }
  ]
};

export const congigSearchUI: SearchDriverOptions = {
  apiConnector: connector,
  initialState: {
    searchTerm: ' '
  }
};
