import "./styles.css";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemIcon,
  Drawer,
  Avatar,
  Alert
} from "@mui/material";

import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ListIcon from "@mui/icons-material/List";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";
import HighlightOff from "@mui/icons-material/HighlightOff";

import data from "./AppData.js";

export default function App() {
  const [productData, setProdData] = useState(data.productData);
  const [cartData, setCartData] = useState(data.cartData);
  const [selectedSize, setSize] = useState([]);
  const [selectedBrand, setBrand] = useState([]);
  const [selectedColor, setColor] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    if (
      selectedSize.length === 0 &&
      selectedBrand.length === 0 &&
      selectedColor.length === 0
    ) {
      setProdData(data.productData);
      return;
    }
    const newProdData = data.productData.filter((prod) => {
      if (
        prod.sizeId.some((s) => selectedSize.indexOf(s) > -1) &&
        selectedBrand.indexOf(prod.brandId) > -1 &&
        prod.colorId.some((s) => selectedColor.indexOf(s) > -1)
      ) {
        return true;
      } else {
        return false;
      }
    });
    setProdData(newProdData);
  }, [selectedSize, selectedBrand, selectedColor]);

  function onCategoryClick(category) {
    if (category === 0) {
      setProdData(data.productData);
      return;
    }
    const newProdData = data.productData.filter(
      (prod) => prod.categoryId.indexOf(category) > -1
    );
    setProdData(newProdData);
  }

  function onSizeChange(event) {
    const selectedValues = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value, 0)
    );

    setSize(selectedValues);

    /*const newProdData = data.productData.filter((prod) =>
      prod.sizeId.some((s) => selectedValues.indexOf(s) > -1)
    );
    setProdData(newProdData);*/
  }

  function onBrandChange(event) {
    const selectedValues = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value, 0)
    );

    setBrand(selectedValues);
    /*const newProdData = data.productData.filter(
      (prod) => selectedValues.indexOf(prod.brandId) > -1
    );
    setProdData(newProdData);*/
  }

  function onColorChange(event) {
    const selectedValues = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value, 0)
    );

    setColor(selectedValues);
    /*const newProdData = data.productData.filter((prod) =>
      prod.colorId.some((s) => selectedValues.indexOf(s) > -1)
    );
    setProdData(newProdData);*/
  }

  function onCartClearAll() {
    const newCartData = {
      ...cartData,
      totalPrice: 0,
      totalQuantity: 0,
      items: []
    };
    setCartData(newCartData);
  }

  function onCartAddQuantity(itemId) {
    let addPrice = 0;
    const newCartItemsData = cartData.items.map((item) => {
      if (item.prodId === itemId) {
        addPrice = item.price;
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return { ...item };
      }
    });

    const newCartData = {
      totalPrice: cartData.totalPrice + addPrice,
      totalQuantity: cartData.totalQuantity + 1,
      items: newCartItemsData
    };

    setCartData(newCartData);
  }

  function onCartRemoveQuantity(itemId) {
    let subPrice = 0;
    let tempQuan = 0;
    cartData.items.map((item) => {
      if (item.prodId === itemId) {
        tempQuan = item.quantity;
      }
      return item;
    });

    if (tempQuan !== 1) {
      const newCartItemsData = cartData.items.map((item) => {
        if (item.prodId === itemId) {
          subPrice = item.price;
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return { ...item };
        }
      });

      const newCartData = {
        totalPrice: cartData.totalPrice - subPrice,
        totalQuantity: cartData.totalQuantity - 1,
        items: newCartItemsData
      };

      setCartData(newCartData);
    }
  }

  function onCartRemoveItem(itemId) {
    let tempPrice = 0;
    let tempQuan = 0;

    cartData.items.map((item) => {
      if (item.prodId === itemId) {
        tempPrice = item.price;
        tempQuan = item.quantity;
      }
      return item;
    });

    const newCartItemsData = cartData.items.filter(
      (item) => itemId !== item.prodId
    );

    const newCartData = {
      totalPrice: cartData.totalPrice - tempPrice * tempQuan,
      totalQuantity: cartData.totalQuantity - tempQuan,
      items: newCartItemsData
    };

    setCartData(newCartData);
  }

  function onCartAddItem(itemId, price) {
    if (cartData.items.some((item) => itemId === item.prodId)) {
      onCartAddQuantity(itemId);
    } else {
      let newCartItem = {
        prodId: itemId,
        price: price,
        quantity: 1
      };

      const cartItems = [...cartData.items, newCartItem];

      const newCartData = {
        totalPrice: cartData.totalPrice + price,
        totalQuantity: cartData.totalQuantity + 1,
        items: cartItems
      };

      setCartData(newCartData);
    }
  }

  function onSortSelect(event) {
    if (event.target.value === "high") {
      const newProdData = [...productData].sort((a, b) =>
        a.price > b.price ? -1 : 1
      );
      setProdData(newProdData);
    } else if (event.target.value === "low") {
      const newProdData = [...productData].sort((a, b) =>
        a.price > b.price ? 1 : -1
      );
      setProdData(newProdData);
    }
  }

  function onIsFreeShippingChange(event) {
    let IsFreeShippingFromValue = parseInt(event.target.value, 2);
    if (IsFreeShippingFromValue === -1) {
      setProdData(data.productData);
      return;
    }

    let isFreeShipping = IsFreeShippingFromValue === 1 ? true : false;

    const newProdData = data.productData.filter(
      (prod) => prod.isFreeShipping === isFreeShipping
    );
    setProdData(newProdData);
  }

  function getProductById(productId) {
    var product = data.productData.filter((item) => item.id === productId);

    return product[0];
  }

  return (
    <div className="App">
      <AppBar position="fixed">
        <Toolbar>
          <CurrencyBitcoinIcon className="app-logo" />
          <Typography variant="h6" component="div">
            E-Veikals
          </Typography>
          <IconButton
            color="inherit"
            sx={{ marginLeft: "auto" }}
            onClick={setCartVisible}
          >
            <Badge badgeContent={cartData.totalQuantity} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className="empty-row" />
      <div className="app-layout">
        <div>
          <div>
            <div className="list-header">Sadaļas</div>
            <List>
              {data.categoryData &&
                data.categoryData.length > 0 &&
                data.categoryData.map((item, index) => {
                  return (
                    <ListItem
                      key={index}
                      button
                      onClick={() => onCategoryClick(item.id)}
                    >
                      <ListItemIcon>
                        <ListIcon />
                      </ListItemIcon>
                      <ListItemText
                        className="category-list-text"
                        primary={item.name}
                      />
                    </ListItem>
                  );
                })}
            </List>
          </div>
          {/*<div>
            <select multiple onChange={onSizeChange}>
              {data.sizeData &&
                data.sizeData.length > 0 &&
                data.sizeData.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
            <select multiple onChange={onBrandChange}>
              {data.brandData &&
                data.brandData.length > 0 &&
                data.brandData.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
            <select multiple onChange={onColorChange}>
              {data.colorData &&
                data.colorData.length > 0 &&
                data.colorData.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
            <div onChange={onIsFreeShippingChange}>
              <span>Bezmaksas piegāde</span>
              <input type="radio" name="freeShipping" value="1" />
              Yes
              <input type="radio" name="freeShipping" value="0" />
              No
              <input type="radio" name="freeShipping" value="-1" />
              Both
            </div>
          </div>*/}
        </div>
        <div>
          <div className="product-length">
            Atrasti {productData.length} produkti
          </div>
          <Grid container spacing={4}>
            {productData &&
              productData.length > 0 &&
              productData.map((item, index) => {
                return (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="200"
                        title={item.name}
                        image={item.image}
                      />
                      <CardContent>
                        <div className="product-item-name">{item.name}</div>
                        <div className="product-item-price">
                          {item.price.toFixed(2)} €
                        </div>
                        <div className="product-item-description">
                          {item.description}
                        </div>
                      </CardContent>
                      <CardActions className="card-actions-content">
                        <Button
                          className="button-style-text"
                          variant="outlined"
                          onClick={() => onCartAddItem(item.id, item.price)}
                          startIcon={<AddShoppingCartIcon />}
                          sx={{ justifyContent: "center" }}
                        >
                          Pievienot grozam
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
          {/*
          <div>
            <select onChange={onSortSelect}>
              <option>............</option>
              <option value="high">Augstākā cena</option>
              <option value="low">Zemākā cena</option>
            </select>
          </div>*/}
        </div>
      </div>
      <Drawer
        open={isCartVisible}
        anchor="right"
        onClose={() => setCartVisible(false)}
        PaperProps={{ sx: { width: "500px", backgroundColor: "#87CADB" } }}
      >
        <div className="drawer-content">
          <div className="drawer-badge-content">
            <div className="drawer-badge-title">Iepirkuma grozs</div>
            <Badge badgeContent={cartData.totalQuantity} color="error">
              <ShoppingCartIcon
                className="drawer-shopping-cart"
                color="primary"
              />
            </Badge>
          </div>
          {cartData.totalQuantity === 0 && (
            <div className="drawer-nodata-content">
              <span>Pievienojat vismaz vienu produktu grozā! :(</span>
            </div>
          )}
          {cartData.totalQuantity > 0 && (
            <>
              <List>
                {cartData &&
                  cartData.items &&
                  cartData.items.length > 0 &&
                  cartData.items.map((item, index) => {
                    var product = getProductById(item.prodId);
                    return (
                      <Card className="drawer-cart-item">
                        <ListItem
                          key={index}
                          secondaryAction={
                            <div>
                              <IconButton
                                edge="end"
                                title="Palielināt skaitu"
                                onClick={() => onCartAddQuantity(item.prodId)}
                              >
                                <AddCircleOutline />
                              </IconButton>
                              <IconButton
                                edge="end"
                                title="Samazināt skaitu"
                                onClick={() =>
                                  onCartRemoveQuantity(item.prodId)
                                }
                              >
                                <RemoveCircleOutline />
                              </IconButton>
                              <IconButton
                                edge="end"
                                title="Noņemt produktu"
                                onClick={() => onCartRemoveItem(item.prodId)}
                              >
                                <HighlightOff />
                              </IconButton>
                            </div>
                          }
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <img
                                src={product.image}
                                alt="product"
                                height="40"
                                width="40"
                              />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              product.name +
                              " [" +
                              item.price.toFixed(2) +
                              " €]"
                            }
                            secondary={"Daudzums: " + item.quantity}
                          />
                        </ListItem>
                      </Card>
                    );
                  })}
              </List>
              <div>
                <Alert variant="outlined" severity="info">
                  <div>
                    Kopējā cena: {cartData.totalPrice.toFixed(2) + " €"}
                  </div>
                  <div>Kopējais preču daudzums: {cartData.totalQuantity}</div>
                  <Button variant="contained" disabled>
                    Pasūtīt
                  </Button>
                  <Button
                    className="drawer-footer-btn"
                    variant="outlined"
                    onClick={onCartClearAll}
                  >
                    Notīrīt
                  </Button>
                </Alert>
              </div>
            </>
          )}
        </div>
      </Drawer>
    </div>
  );
}
