import React from 'react';
import MaterialListItem from './MaterialListItem';

export default function MaterialListTable() {
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
      <tbody className="">
        <MaterialListItem />
        <MaterialListItem />
        <MaterialListItem />
      </tbody>
    </table>
  );
}
