import React from 'react';
import { useSelector } from 'react-redux';
import MaterialListItem from './MaterialListItem';

export default function MaterialListTable(props) {
  const { tableFor } = props;

  // const materialListArray = useSelector((state) => state[tableFor].items);
  const materialListArray = useSelector(
    (state) => state[`${tableFor}`]?.items || [] // ar state[] dinamiski piekļūtstam steitam! state.coverMaterials vai state.caseMaterials. galā ar ?. optional chaning izveidojam default lielumus, ja nav tādas .items vērtības
  );

  const hasStampSize =
    useSelector((state) => state.upsCalculations.submittedBoxSizes).length > 0;

  const items = materialListArray.map((item, index) => {
    return <MaterialListItem key={index} data={{ ...item, hasStampSize }} />;
  });
  return (
    <table className="w-full text-center table-auto border-separate border-spacing-y-3">
      <thead className="bg-navy text-yellow h-12">
        <tr className="outline outline-navy outline-offset-0 outline-2">
          <th>Width</th>
          <th>x</th>
          <th>Height</th>
          <th>Grain</th>
          {hasStampSize && <th>Amount</th>}
        </tr>
      </thead>
      <tbody>{items}</tbody>
    </table>
  );
}
