import React from 'react';
import Card from '../UI/Card';

export default function MaterialListItem(props) {
  const { data } = props;

  const typeHByWidth = Math.floor(data.upsOnSheet.typeH.byWidth);
  const typeHByHeight = Math.floor(data.upsOnSheet.typeH.byHeight);
  const typeHTotal = typeHByWidth * typeHByHeight;

  const typeTByWidth = Math.floor(data.upsOnSheet.typeT.byWidth);
  const typeTByHeight = Math.floor(data.upsOnSheet.typeT.byHeight);
  const typeTTotal = typeTByWidth * typeTByHeight;

  return (
    <tr className="outline outline-navy outline-offset-0 outline-2 bg-white">
      <td>{data.width}</td>
      <td>x</td>
      <td>{data.height}</td>
      <td>{data.grain}</td>
      {data.hasStampSize && (
        <td className="p-1 flex justify-center">
          <Card className="w-fit shadow-none border">
            <p className="w-full px-2 text-sm border-b-2 bg-gradient-to-r bg-navy text-yellow">
              Box type
            </p>
            <div className="flex">
              <h2 className="text-3xl font-semibold text-gray-600/50 mx-1">
                H
              </h2>
              <div className="border-l w-full">
                <p className="text-navy font-bold text-center">{typeHTotal}</p>
                <p className="text-xs text-gray-600/50">{`${typeHByWidth}x${typeHByHeight}`}</p>
              </div>
            </div>
          </Card>
          <Card className="w-fit mx-2 shadow-none border">
            <p className="w-full px-2 text-sm border-b-2 bg-gradient-to-r bg-navy text-yellow">
              Box type
            </p>
            <div className="flex">
              <h2 className="text-3xl font-semibold text-gray-600/50 mx-1">
                T
              </h2>
              <div className="border-l w-full">
                <p className="text-navy font-bold text-center">{typeTTotal}</p>
                <p className="text-xs text-gray-600/50">{`${typeTByWidth}x${typeTByHeight}`}</p>
              </div>
            </div>
          </Card>
        </td>
      )}
    </tr>
  );
}
