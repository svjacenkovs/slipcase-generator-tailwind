import React from 'react';

// import { coverMaterialActions } from '../../store/cover-materials-slice';
import Card from '../UI/Card';
import MaterialListTable from './MaterialListTable';
import MaterialListActions from './MaterialListActions';

export default function MaterialList(props) {
  const { title, listFor: materialType } = props;
  return (
    <section>
      <Card className="ml-5 h-full flex flex-col justify-between bg-yellow">
        <div>
          <h1 className="text-xl text-yellow text-center font-medium bg-gradient-to-r bg-navy drop-shadow-lg">{title}</h1>
          <div className="m-3">
            <MaterialListTable tableFor={materialType} />
          </div>
        </div>
        <MaterialListActions />
      </Card>
    </section>
  );
}
