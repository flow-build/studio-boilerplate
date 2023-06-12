import { ColumnProps, Data } from 'stories/components/Table/types';

export const column: ColumnProps[] = [
  { field: 'name', label: 'Dessert (100g serving)' },
  { field: 'calories', label: 'Calories', align: 'right' },
  { field: 'fat', label: 'Fat (g)', align: 'right' },
  { field: 'carbs', label: 'Carbs (g)', align: 'right' },
  { field: 'protein', label: 'Protein (g)', align: 'right' }
];

export const rowData: Data[] = [
  { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
  { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: 'Eclair 1', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: 'Eclair 2', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: 'Eclair 3', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 }
];
