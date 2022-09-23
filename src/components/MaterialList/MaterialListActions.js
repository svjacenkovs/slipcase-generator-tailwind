import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { boardMaterialActions } from '../../store/board-materials-slice';
import { coverMaterialActions } from '../../store/cover-materials-slice';
import Button from '../UI/Button';

export default function MaterialListActions(props) {
  const boxData = useSelector((state) => state.upsCalculations.submittedBoxSizes);
  const dispatch = useDispatch();
  const [materialData, setMaterialData] = useState({
    width: '',
    height: '',
    grain: '',
  });

  const handleChange = (event) => {
    setMaterialData((prevMaterialData) => {
      const newMaterialData = {
        ...prevMaterialData,
        [event.target.name]: event.target.value,
      };
      newMaterialData.grain = newMaterialData.width < newMaterialData.height ? 'long' : 'short';
      return { ...newMaterialData };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //Convert string data to Number value
    let data = {};
    for (const [key, value] of Object.entries(materialData)) {
      // console.log(`${key}: ${value}`);
      key === 'grain' ? (data[key] = value) : (data[key] = Number(value));
    }

    dispatch(props.tableFor === 'boardMaterials' ? boardMaterialActions.addItem(data) : coverMaterialActions.addItem(data));
    if (boxData.length > 0) {
      dispatch(props.tableFor === 'boardMaterials' ? boardMaterialActions.calculateUps(boxData) : coverMaterialActions.calculateUps(boxData));
    }
  };

  return (
    <form className="flex bg-navy p-3 min-w-min" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-yellow">Width:</label>
        <input className="pl-2 mt-1 border focus:outline-red w-16" type="number" placeholder="mm" name="width" onChange={handleChange} value={materialData.width} />
      </div>
      <div className="flex flex-col">
        <label className="text-yellow">Height:</label>
        <input className="pl-2 mt-1 ml-2 border focus:outline-red w-16" type="number" placeholder="mm" name="height" onChange={handleChange} value={materialData.height} />
      </div>
      <Button className="self-end bg-white text-navy font-medium ml-2 whitespace-nowrap overflow-visible">Add Material</Button>
    </form>
  );
}
