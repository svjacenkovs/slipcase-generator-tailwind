import React from 'react';
import Card from '../UI/Card';

export default function MaterialListItem(props) {
  return (
    <tr className="outline outline-navy outline-offset-0 outline-2 bg-white">
      <td>700</td>
      <td>x</td>
      <td>1000</td>
      <td>short</td>
      <td className="p-1 flex justify-center">
        <Card className="w-fit m-auto shadow-none border">
          <p className="w-full px-2 text-sm border-b-2 bg-gradient-to-r bg-navy text-yellow">
            Box type
          </p>
          <div className="flex">
            <h2 className="text-3xl font-semibold text-gray-600/50 mx-1">H</h2>
            <div className="border-l w-full">
              <p className="text-navy font-bold text-center">4</p>
              <p className="text-xs text-gray-600/50">2x3</p>
            </div>
          </div>
        </Card>
        <Card className="w-fit m-auto shadow-none border">
          <p className="w-full px-2 text-sm border-b-2 bg-gradient-to-r bg-navy text-yellow">
            Box type
          </p>
          <div className="flex">
            <h2 className="text-3xl font-semibold text-gray-600/50 mx-1">T</h2>
            <div className="border-l w-full">
              <p className="text-navy font-bold text-center">4</p>
              <p className="text-xs text-gray-600/50">2x3</p>
            </div>
          </div>
        </Card>
      </td>
    </tr>
  );
}
