import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { boardMaterialActions } from '../../store/board-materials-slice';
import Button from '../UI/Button';

export default function MaterialListActions(props) {
  const dispatch = useDispatch();
  const [materialData, setMaterialData] = useState({ width: 0, height: 0, grain: '' });

  const handleChange = (event) => {
    setMaterialData((prevMaterialData) => {
      const newMaterialData = {
        ...prevMaterialData,
        [event.target.name]: event.target.valueAsNumber,
      };
      newMaterialData.grain = newMaterialData.width < newMaterialData.height ? 'long' : 'short';
      return { ...newMaterialData };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(boardMaterialActions.addItem(materialData));
  };

  return (
    <form className="flex bg-navy p-3 justify-between" onSubmit={handleSubmit}>
      <div className="w-2/6">
        <label className="text-yellow">Width:</label>
        <input className="pl-2 mt-1 border focus:outline-orange-300 w-full" type="number" placeholder="mm" name="width" onChange={handleChange} />
      </div>
      <div className="w-2/6 ml-1">
        <label className="text-yellow">Height:</label>
        <input className="pl-2 mt-1 border focus:outline-orange-300 w-full" type="number" placeholder="mm" name="height" onChange={handleChange} />
      </div>
      <Button className="self-end w-full bg-white text-navy font-medium">Add material</Button>
    </form>
  );
}
