import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleChangeColor() {
    console.log('click')
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={handleChangeColor} color={isDarkMode} />
      <ShoppingList items={itemData} color={isDarkMode} />
    </div>
  );
}

export default App;
