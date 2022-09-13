import React, { useState } from 'react';
import BoxTypeResults from './components/BoxTypeResults/BoxTypeResults';
import MaterialList from './components/MaterialList/MaterialList';
import ProductDescriptionForm from './components/ProductDescriptionForm/ProductDescriptionForm';

function App() {
  const [boxData, setBoxData] = useState([]);

  const handleFormSubmit = (formData) => {
    const { spine, width, height, boardThickness } = formData;
    console.log(formData);
    setBoxData((prevBoxData) => {
      const hTypeBox = {
        boxType: 'H',
        boardStamp: {
          width: 2 * width + spine,
          height: 2 * (spine + boardThickness) + height + 2 * boardThickness,
        },
        coverStamp: {
          width: 2 * width + spine + 7 * boardThickness + 30,
          height: 2 * spine + height + 5 * boardThickness,
        },
      };
      const tTypeBox = {
        boxType: 'T',
        boardStamp: {
          width: 2 * width + spine,
          height: 2 * (spine + boardThickness) + height,
        },
        coverStamp: {
          width: 2 * width + spine + 7 * boardThickness + 30,
          height: 2 * spine + height + 4 * boardThickness,
        },
      };
      return [hTypeBox, tTypeBox];
    });
  };

  return (
    <div className="flex h-screen p-2">
      <div className="max-w-max">
        <ProductDescriptionForm onSubmit={handleFormSubmit} />
        <BoxTypeResults boxData={boxData} />
      </div>
      <MaterialList listFor="boardMaterials" title="Boards" />
      <MaterialList listFor="coverMaterials" title="Case materials" />
    </div>
  );
}

export default App;
