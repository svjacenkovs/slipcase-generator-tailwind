import React from 'react';
import MaterialListItem from './MaterialListItem';

export default function MaterialListTable() {
  return (
    <table className="w-full text-center">
      <thead className="bg-navy text-yellow ">
        <tr>
          <th>Width</th>
          <th>Height</th>
          <th>Grain</th>
        </tr>
      </thead>
      <tbody>
        <MaterialListItem />
        <MaterialListItem />
        <MaterialListItem />
        <MaterialListItem />
        <MaterialListItem />
        <MaterialListItem />
        <MaterialListItem />
        <MaterialListItem />
      </tbody>
    </table>
  );
}
