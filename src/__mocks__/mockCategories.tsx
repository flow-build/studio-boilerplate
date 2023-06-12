import { DownhillSkiing, Google, Villa } from 'shared/icons';

export const mockCategories = [
  {
    label: 'Google',
    icon: <Google />,
    description: 'This property is close to the beach!',
    pathname: '/listings/Action'
  },
  {
    label: 'Beach',
    icon: <Villa />,
    description: 'This property is close to the beach!',
    pathname: '/listings/Shooter'
  },
  {
    label: 'Windmills',
    icon: <DownhillSkiing />,
    description: 'This property is has windmills!',
    pathname: '/listings/Action'
  },
  {
    label: 'Modern',
    icon: <Villa />,
    description: 'This property is modern!',
    pathname: '/listings/Shooter'
  },
  {
    label: 'Countryside',
    icon: <DownhillSkiing />,
    description: 'This property is in the countryside!',
    pathname: '/listings/Action'
  },
  {
    label: 'Pools',
    icon: <Google />,
    description: 'This is property has a beautiful pool!',
    pathname: '/listings/Shooter'
  },
  {
    label: 'Islands',
    icon: <DownhillSkiing />,
    description: 'This property is on an island!',
    pathname: '/listings/Action'
  },
  {
    label: 'Lake',
    icon: <Villa />,
    description: 'This property is near a lake!',
    pathname: '/listings/Shooter'
  },
  {
    label: 'Skiing',
    icon: <DownhillSkiing />,
    description: 'This property has skiing activies!',
    pathname: '/listings/Action'
  },
  {
    label: 'Castles',
    icon: <Villa />,
    description: 'This property is an ancient castle!',
    pathname: '/listings/Shooter'
  },
  {
    label: 'Caves',
    icon: <Google />,
    description: 'This property is in a spooky cave!',
    pathname: '/listings/Action'
  },
  {
    label: 'Camping',
    icon: <DownhillSkiing />,
    description: 'This property offers camping activities!',
    pathname: '/listings/Shooter'
  },
  {
    label: 'Arctic',
    icon: <Villa />,
    description: 'This property is in arctic environment!',
    pathname: '/listings/Action'
  },
  {
    label: 'Desert',
    icon: <DownhillSkiing />,
    description: 'This property is in the desert!',
    pathname: '/listings/Shooter'
  },
  {
    label: 'Barns',
    icon: <Google />,
    description: 'This property is in a barn!',
    pathname: '/listings/Action'
  },
  {
    label: 'Lux',
    icon: <Villa />,
    description: 'This property is brand new and luxurious!',
    pathname: '/listings/Shooter'
  }
];

export const configFields = {
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
      customValue: '/posts'
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
