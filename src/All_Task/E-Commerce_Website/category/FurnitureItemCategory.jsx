import React, { useEffect, useState } from "react";
import ProductItemCategory from "./ProductItemCategory";
import Navbar_Product from "../Navbar_Product";

function FurnitureItemCategory() {
  const fetchdata = async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    console.log(data);
    setProducts(data.products);
    console.log(products);
  };

  const [products, setProducts] = useState("");
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <Navbar_Product />
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Furniture</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products
          ? products.map((product) => {
              if (product.category === "home-decoration") {
                return (
                  <ProductItemCategory
                    save={product.discountPercentage}
                    url={product.images[0]}
                    title={product.title}
                    price={product.price}
                    desc={product.description}
                    rating={product.rating}
                  ></ProductItemCategory>
                );
              }
            })
          : ""}
      </div>
    </>
  );
}

export default FurnitureItemCategory;
