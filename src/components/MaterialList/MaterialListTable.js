import React from 'react';
import { useSelector } from 'react-redux';
import MaterialListItem from './MaterialListItem';

export default function MaterialListTable(props) {
  const { tableFor } = props;

  const materialListArray = useSelector((state) => state.boardMaterials.items);

  const items = materialListArray.map((item, index) => {
    return <MaterialListItem key={index} data={item} />;
  });
  return (
    <table className="w-full text-center table-auto border-separate border-spacing-y-3">
      <thead className="bg-navy text-yellow h-12">
        <tr className="outline outline-navy outline-offset-0 outline-2">
          <th>Width</th>
          <th>x</th>
          <th>Height</th>
          <th>Grain</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>{items}</tbody>
    </table>
  );
}
