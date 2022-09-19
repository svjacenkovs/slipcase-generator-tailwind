import React, { useState } from 'react';
import Button from '../UI/Button';
import { useDispatch } from 'react-redux';
import { upsCalculationActions } from '../../store/ups-calculation-slice';

export default function ProductForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    spine: '',
    boardThickness: '',
  });
  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.valueAsNumber, // ES6 computed properties
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(upsCalculationActions.calculateStampSizes(formData));
  };

  return (
    <form className="p-3 flex flex-col">
      <div>
        <div className="flex flex-col">
          <label htmlFor="width">Width:</label>
          <input type="number" id="width" name="width" placeholder="mm" value={formData.width} onChange={handleChange} className="pl-2 mt-1 border focus:outline-red"></input>
        </div>
        <div className="flex flex-col">
          <label className="mt-2" htmlFor="height">
            Height:
          </label>
          <input type="number" id="height" name="height" placeholder="mm" value={formData.height} onChange={handleChange} className="pl-2 mt-1 border focus:outline-red"></input>
        </div>
        <div className="flex flex-col">
          <label className="mt-2" htmlFor="spine">
            Spine:
          </label>
          <input type="number" id="spine" name="spine" placeholder="mm" value={formData.spine} onChange={handleChange} className="pl-2 mt-1 border focus:outline-red"></input>
        </div>
        <div className="flex flex-col">
          <label className="mt-2" htmlFor="spine">
            Board Thickness:
          </label>
          <input
            type="number"
            id="boardThickness"
            name="boardThickness"
            placeholder="mm"
            value={formData.boardThickness}
            onChange={handleChange}
            className="pl-2 mt-1 border focus:outline-red"
          ></input>
        </div>
      </div>
      <Button className="mt-4" onClick={handleSubmit}>
        Calculate Boxes
      </Button>
    </form>
  );
}
