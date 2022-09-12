import React from 'react';
import Button from '../UI/Button';

export default function MaterialListActions(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formSubmited');
  };
  return (
    <form className="flex bg-navy p-3 justify-between" onSubmit={handleSubmit}>
      <div className="w-2/6">
        <label className="text-yellow">Width:</label>
        <input className="pl-2 mt-1 border focus:outline-orange-300 w-full" type="number" placeholder="mm" />
      </div>
      <div className="w-2/6 ml-1">
        <label className="text-yellow">Height:</label>
        <input className="pl-2 mt-1 border focus:outline-orange-300 w-full" type="number" placeholder="mm" />
      </div>
      <Button className="ml-1 self-end w-full bg-white text-navy font-medium">Add material</Button>
    </form>
  );
}
