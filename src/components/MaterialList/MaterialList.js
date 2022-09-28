import React from 'react';
import Card from '../UI/Card';
import MaterialListTable from './MaterialListTable';
import MaterialListActions from './MaterialListActions';

export default function MaterialList(props) {
  const { title, listFor: materialType } = props;
  return (
    <section>
      <Card className="ml-5 h-full flex flex-col justify-between bg-red">
        <h1 className="sticky-top-0 text-xl  text-yellow text-center font-medium bg-gradient-to-r bg-navy drop-shadow-lg">{title}</h1>
        <div className="p-5 grow w-full overflow-auto">
          <MaterialListTable tableFor={materialType} />
        </div>
        <MaterialListActions tableFor={materialType} />
      </Card>
    </section>
  );
}
