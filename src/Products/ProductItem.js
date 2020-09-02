import * as React from "react";

export const ProductItem = ({ 
  product:Product,
  carbohydrates,
  fat,
  fiber,
  kiloJoules,
  productCategoryId,
  protein,
  salt,
  name,
  productCategory
   }) => {
  return (
    <li className="item">
      <img src={name} className="ui mini rounded image" alt={name} />
      <div className="content">
        <h4 className="header">{name}</h4>
        <div className="description">Węglowodany: {carbohydrates}</div>
        <div className="description">Tłuszcz: {fat}</div>
        <div className="description">Błonnik: {fiber}</div>
        <div className="description">KiloJoule: {kiloJoules}</div>
        <div className="description">Białko: {protein}<div/> 
        <div className="description">Sól: {salt}</div>
        <div className="description">Kategoria produktu: {productCategory}</div>
      </div>
      </div>
    </li>
  );
};