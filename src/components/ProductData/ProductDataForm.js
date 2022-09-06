import React from 'react';
import Card from '../UI/Card';

export default function ProductDataForm() {
  return (
    <Card>
      <h1 className="text-lg font-medium bg-orange-300 pl-3 shadow-md">
        Product description
      </h1>
      <form className="p-3">
        <div className="flex flex-col">
          <label htmlFor="platums">Width (mm)</label>
          <input
            type="number"
            id="platums"
            name="platums"
            className="border mt-2 focus:outline-orange-300"
          ></input>
        </div>
      </form>
    </Card>
  );
}
