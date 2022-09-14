import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { boardMaterialActions } from '../../store/board-materials-slice';
import { coverMaterialActions } from '../../store/cover-materials-slice';
import Button from '../UI/Button';

export default function MaterialListActions(props) {
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
        [event.target.name]: event.target.valueAsNumber,
      };
      newMaterialData.grain =
        newMaterialData.width < newMaterialData.height ? 'long' : 'short';
      return { ...newMaterialData };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      props.tableFor === 'boardMaterials'
        ? boardMaterialActions.addItem(materialData)
        : coverMaterialActions.addItem(materialData)
    );
    setMaterialData({
      width: '',
      height: '',
      grain: '',
    });
  };

  return (
    <form className="flex bg-navy p-3 max-w-fit" onSubmit={handleSubmit}>
      <div>
        <label className="text-yellow">Width:</label>
        <input
          className="pl-2 mt-1 border focus:outline-red w-full"
          type="number"
          placeholder="mm"
          name="width"
          onChange={handleChange}
          value={materialData.width}
        />
      </div>
      <div className="ml-1">
        <label className="text-yellow">Height:</label>
        <input
          className="pl-2 mt-1 border focus:outline-red w-full"
          type="number"
          placeholder="mm"
          name="height"
          onChange={handleChange}
          value={materialData.height}
        />
      </div>
      <Button className="self-end bg-white text-navy font-medium ml-1 whitespace-nowrap overflow-visible">
        Add Material
      </Button>
    </form>
  );
}
