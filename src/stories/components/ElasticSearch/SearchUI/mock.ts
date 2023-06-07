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

export const configFields2: ConfigFields = {
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
      namePropElasticSearch: 'address.street'
    },
    {
      namePropComponent: 'urlRedirect',
      namePropElasticSearch: 'id',
      customValue: '/listing/{{id}}'
    },
    {
      namePropComponent: 'price.value',
      namePropElasticSearch: 'price'
    },
    {
      namePropComponent: 'price.description',
      namePropElasticSearch: '',
      customValue: 'por período'
    },
    {
      namePropComponent: 'attributes.name',
      namePropElasticSearch: '',
      customValue: 'Área',
      isPropArrayComponent: true
    },
    {
      namePropComponent: 'attributes.value',
      namePropElasticSearch: 'attributes.area',
      isPropArrayComponent: true
    },
    {
      namePropComponent: 'attributes.name',
      namePropElasticSearch: '',
      customValue: 'Quartos',
      isPropArrayComponent: true
    },
    {
      namePropComponent: 'attributes.value',
      namePropElasticSearch: 'attributes.bedrooms',
      isPropArrayComponent: true
    },
    {
      namePropComponent: 'attributes.name',
      namePropElasticSearch: '',
      customValue: 'Banheiros',
      isPropArrayComponent: true
    },
    {
      namePropComponent: 'attributes.value',
      namePropElasticSearch: 'attributes.baths',
      isPropArrayComponent: true
    }
  ]
};

const connector2 = new AppSearchAPIConnector({
  searchKey: 'search-nawi3j3vgrr292hkfs83iuai',
  engineName: '2lar-listings-dev',
  endpointBase: 'https://fdte.ent.us-east-1.aws.found.io'
});

export const congigSearchUI2: SearchDriverOptions = {
  apiConnector: connector2,
  initialState: {
    searchTerm: ' '
  }
};
