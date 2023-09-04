import { Box, Button, Menu, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./product.css";
import { Add, Remove } from "@mui/icons-material";
const E_commerce = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Fetcher = async () => {
    return await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .then(console.log(products));
  };
  useEffect(() => {
    Fetcher();
  }, []);
  function GrandTotal(args) {
    let sum = 0;
    args.forEach((item) => {
      sum += parseInt(item.price) * item.quantity;
    });
    return sum;
  }
  return (
    <>
      <Box sx={{ height: "100vh", width: "100%" }}>
        <div className="flex w-full justify-end bg-gray-800 h-[50px] px-7">
          <IconButton
            aria-label="settings"
            style={{ color: "#fff" }}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <ShoppingCartIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {!cart.length && (
              <div className="p-2">
                <h1>No Items in Cart!</h1>
              </div>
            )}
            {cart &&
              cart.map((item) => {
                return (
                  <MenuItem key={item.id}>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex justify-between items-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-10 h-10"
                        />
                        <div className="flex flex-col ml-2">
                          <span className="text-sm text-fade">
                            {item.title}
                          </span>
                          <span className="text-sm flex gap-1">
                            Price:{item.price + "$"}
                            <span className="text-sm">
                              Total:{Math.floor(item.price * item.quantity)}$
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <IconButton
                          color="error"
                          onClick={() => {
                            if (item.quantity > 1) {
                              let index = cart.findIndex(
                                (cartItem) => cartItem.id === item.id
                              );
                              let newCart = [...cart];
                              newCart[index].quantity -= 1;
                              setCart(newCart);
                              return;
                            }
                            let newCart = [...cart];
                            newCart = newCart.filter(
                              (cartItem) => cartItem.id !== item.id
                            );
                            setCart(newCart);
                          }}
                        >
                          <Remove />
                        </IconButton>
                        <span className="px-2">{item.quantity}</span>
                        <IconButton
                          color="success"
                          onClick={() => {
                            let index = cart.findIndex(
                              (cartItem) => cartItem.id === item.id
                            );
                            let newCart = [...cart];
                            newCart[index].quantity += 1;
                            setCart(newCart);
                          }}
                        >
                          <Add />
                        </IconButton>
                      </div>
                    </div>
                  </MenuItem>
                );
              })}
            {cart.length > 0 && (
              <div className="flex flex-col gap-1 justify-center items-center w-full">
                <hr className="w-full bg-black h-[2px]" />
                <span className="text-sm">
                  Summary: {cart.length + 1} Items
                </span>
                <span className="text-sm">
                  Grand Total: {cart.length > 0 && GrandTotal(cart)}$
                </span>
              </div>
            )}
          </Menu>
        </div>
        <div className="flex justify-center items-center h-full flex-wrap gap-2">
          {products &&
            products.slice(0, 3).map((product) => {
              return (
                <Card
                  sx={{
                    maxWidth: 345,
                    backgroundColor: "#1f1f1f",
                    color: "#fff",
                  }}
                  key={product.id}
                >
                  <CardHeader
                    style={{ color: "#fff" }}
                    action={
                      <IconButton
                        aria-label="settings"
                        style={{ color: "#fff" }}
                        onClick={() => {
                          let productData = {
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            image: product.image,
                            description: product.description,
                            category: product.category,
                            quantity: 1,
                          };
                          if (cart.find((item) => item.id === product.id)) {
                            let index = cart.findIndex(
                              (item) => item.id === product.id
                            );
                            let newCart = [...cart];
                            newCart[index].quantity += 1;
                            setCart(newCart);
                            return;
                          }
                          setCart([...cart, productData]);
                        }}
                      >
                        <Add />
                      </IconButton>
                    }
                    title={<span className="text-fade">{product.title}</span>}
                    subheader={
                      <span className="text-white">{product.price + " $"}</span>
                    }
                  />
                  <CardMedia
                    component="img"
                    height="194px"
                    image={product.image}
                    alt={product.title}
                    className="imgbg"
                    style={{
                      objectFit: "cover",
                      height: "350px",
                      backgroundSize: "contain",
                      aspectRatio: "16/9",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ color: "#fff" }}
                    >
                      {product.description.length > 100
                        ? product.description.slice(0, 100) + "..."
                        : product.description}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </Box>
    </>
  );
};

export default E_commerce;
