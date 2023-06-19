import { Button } from 'stories/components/Forms/Button';
import { Table } from 'stories/components/Table';
import { ColumnProps } from 'stories/components/Table/types';
import { Logger } from 'utils';

const column: ColumnProps[] = [
  { field: 'name', label: 'Dessert (100g serving)' },
  { field: 'calories', label: 'Calories', align: 'right' },
  { field: 'fat', label: 'Fat (g)', align: 'right' },
  { field: 'carbs', label: 'Carbs (g)', align: 'right' },
  { field: 'protein', label: 'Protein (g)', align: 'right' }
];

const data = [
  {
    name: 'Frozen yoghurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: <Button variant="outlined">Link</Button>
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: <Button variant="outlined">Link</Button>
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: <Button variant="outlined">Link</Button>
  },
  {
    name: 'Eclair 1',
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: <Button variant="outlined">Link</Button>
  },
  {
    name: 'Eclair 2',
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: <Button variant="outlined">Link</Button>
  },
  {
    name: 'Eclair 3',
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: <Button variant="outlined">Link</Button>
  }
];

export default function Teste() {
  return (
    <>
      <h3>Tabela de coisas</h3>
      <br />
      <Table column={column} rowData={data} paginable onRowClick={Logger.info} />
    </>
  );
}
