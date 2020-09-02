
import * as React from "react";
import { ProductItem } from "./ProductItem";

export class ProductsList extends React.Component {
  productToproductItem = product => {
    const productCategory = product.ProductCategory.PCategory;
    const name = product.ProductName;
    const foodProductId = product.FoodProductId;
    const calories = product.Calories;
    const carbohydrates = product.Carbohydrates;
    const fat = product.Fat;
    const fiber = product.Fiber;
    const kiloJoules = product.KiloJoules;
    const productCategoryId = product.ProductCategoryId;
    const protein = product.Protein;
    const salt = product.Salt;
    return <ProductItem key={foodProductId} 
                        calories = {calories}
                        productCategory={productCategory} 
                        name={name} 
                        carbohydrates={carbohydrates}
                        fat ={fat}
                        fiber = {fiber}
                        kiloJoules = {kiloJoules}
                        productCategoryId = {productCategoryId}
                        protein = {protein}
                        salt = {salt}
                        />;
  };

  render() {
    return (
      <ul className="ui relaxed divided list selection">
        {this.props.products.map(this.productToproductItem)}
      </ul>
    );
  }
}
