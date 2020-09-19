import React from 'react'; 

type Product = {
    foodProductId:number,
    calories:number,
    productCategory:ProductCategory,
    name:string,
    carbohydrates:number,
    fat:number,
    fiber?:number,
    kiloJoules:number,
    productCategoryId:number,
    protein:number,
    salt?:number,
}

type ProductCategory = {
    productCategoryId:number,
    pCategoryId:string,
}