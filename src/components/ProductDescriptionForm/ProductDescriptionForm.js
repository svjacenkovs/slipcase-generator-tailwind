import React from 'react';
import Card from '../UI/Card';
import BoxSvg from '../../assets/images/BoxSVG.svg';
import ProductForm from './ProductForm';

export default function ProductDescriptionForm(props) {
  const handleFormSubmit = (formData) => {
    props.onSubmit(formData);
  };
  return (
    <section>
      <Card className="">
        <h1 className="text-xl text-yellow text-center font-medium bg-navy drop-shadow-lg">
          Product description
        </h1>
        <div className="flex">
          <ProductForm onSubmit={handleFormSubmit} />
          <div className="m-3 w-48 shrink-0">
            <img src={BoxSvg} alt="box" />
          </div>
        </div>
      </Card>
    </section>
  );
}
