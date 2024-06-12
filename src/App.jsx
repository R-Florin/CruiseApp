import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Header,
  Favorite,
  Cart,
  LandingPage,
  Destinations,
  Deals,
  Fleet,
  Contact,
  About,
  Footer,
} from "./Components/exportFiles";

function App() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [warning, setWarning] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 3900);
      return;
    }
    setCart([...cart, item]);
  };

  const handleAddToFavorites = (item) => {
    if (!favorites.some((favorite) => favorite.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  const handleRemoveFromFavorites = (item) => {
    setFavorites(favorites.filter((favorite) => favorite.id !== item.id));
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <BrowserRouter>
      <Stack className="Cruise-App">
        <Header
          setSearchQuery={setSearchQuery}
          cartSize={cart.length}
          favoritesSize={favorites.length}
        />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/Favorite"
            element={
              <Favorite
                favorites={favorites}
                setFavorites={setFavorites}
                handleRemoveFromFavorites={handleRemoveFromFavorites}
              />
            }
          />
          <Route
            path="/Cart"
            element={
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            }
          />
          <Route
            path="/Destinations"
            element={
              <Destinations
                handleClick={handleClick}
                handleAddToFavorites={handleAddToFavorites}
                handleRemoveFromFavorites={handleRemoveFromFavorites}
                favorites={favorites}
                searchQuery={searchQuery}
              />
            }
          />
          <Route path="/Deals" element={<Deals />} />
          <Route path="/Fleet" element={<Fleet searchQuery={searchQuery} />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
        {warning && (
          <div className="warning">Item is already added to your cart!</div>
        )}
      </Stack>
    </BrowserRouter>
  );
}

export default App;
