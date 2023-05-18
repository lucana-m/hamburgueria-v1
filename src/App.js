import { React, useState, useEffect } from "react";
import { api } from "./services/api";
import { Header } from "./components/Header/Header";
import { Cart } from "./components/Cart/Cart";
import { ProductsList } from "./components/ProductsList/ProductsList";
import BurguerKenzie from "./assets/logo.svg";

function App() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [selectProduct, setSelectProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("/products");

        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  const addProduct = (event) => {
    const targetId = parseInt(event.target.id);

    const filteredProduct = products.filter(
      (product) => product.id === targetId
    );

    setSelectProduct((previousValue) => [...previousValue, filteredProduct[0]]);
  };

  const removeValue = (event) => {
    const targetId = event.target.id;

    const newList = selectProduct.filter(
      (product) => product.id !== parseInt(targetId)
    );

    setSelectProduct(newList);
  };

  return (
    <>
      <Header logo={BurguerKenzie} setSearch={setSearch} />
      <main>
        <ProductsList
          search={search}
          products={products}
          setProducts={setProducts}
          addProduct={addProduct}
        />
        <Cart selectProduct={selectProduct} removeValue={removeValue} />
      </main>
    </>
  );
}

export default App;
