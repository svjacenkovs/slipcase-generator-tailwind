import React from 'react';
import BoxTypeResults from './components/BoxTypeResults/BoxTypeResults';
import MaterialList from './components/MaterialList/MaterialList';
import ProductDescriptionForm from './components/ProductDescriptionForm/ProductDescriptionForm';

function App() {
  return (
    <div className="flex h-screen p-2">
      <div className="max-w-max">
        <ProductDescriptionForm />
        <BoxTypeResults />
      </div>
      <MaterialList listFor="boardMaterials" title="Boards" />
      <MaterialList listFor="coverMaterials" title="Case materials" />
    </div>
  );
}

export default App;
