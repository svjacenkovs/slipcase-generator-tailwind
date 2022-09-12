import React from 'react';
import Card from '../UI/Card';
import MaterialListTable from './MaterialListTable';
import MaterialListActions from './MaterialListActions';

export default function MaterialList(props) {
  return (
    <section className="w-full">
      <Card className="ml-5">
        <h1 className="text-xl text-yellow text-center font-medium bg-gradient-to-r bg-navy drop-shadow-lg">{props.title}</h1>
        <div className="m-2">
          <MaterialListTable />
        </div>
        <MaterialListActions btnText={props.title} />
      </Card>
    </section>
  );
}
