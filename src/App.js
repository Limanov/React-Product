import * as React from "react";
import { ProductsList } from "./ProductsList";
import { AppHeader } from "./AppHeader";
import  {Login}  from "./Components/Login";
import  {Textbox}  from "./Components/Textbox";
export class App extends React.Component {
  state = {
    products: null
  };

  componentDidMount() {
    fetch("http://chamniam.pl/api/foodproduct")
      .then(res => res.json())
      .then(json => this.setState({ products: json})
        );
  }

  render() {
    const products = this.state.products;
    return (
      <div>
        <Login/>
        <AppHeader />
        <main className="ui main text container">
          {products ? <ProductsList products={products} /> : 'Ładowanie…'}
        </main>
      </div>
    );
  }
}