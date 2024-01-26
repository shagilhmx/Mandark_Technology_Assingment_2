import React, { useEffect, useState } from "react";
import "./App.css";
import InfiniteScrollImpl from "./pages/InfiniteScrollImpl";
import NestedListCompImpl from "./pages/NestedListCompImpl";
import ElementTransferImpl from "./pages/ElementTransferImpl";
import BoxSplit from "./pages/BoxSplit";
import Game from "./components/game/Game";

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState("Game");

  const handleComponentChange = (event: any) => {
    setSelectedComponent(event.target.value);
  };

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "InfiniteScrollImpl":
        return <InfiniteScrollImpl />;
      case "NestedListCompImpl":
        return <NestedListCompImpl />;
      case "ElementTransferImpl":
        return <ElementTransferImpl />;
      case "BoxSplit":
        return <BoxSplit />;
      default:
        return <Game />;
    }
  };

  return (
    <div className="App">
      <div className="containerApp">
        <div className="dropdown">
          <label>Select Component: </label>
          <select value={selectedComponent} onChange={handleComponentChange}>
            <option value="Game">Game</option>
            <option value="InfiniteScrollImpl">Infinite Scroll</option>
            <option value="NestedListCompImpl">Nested List</option>
            <option value="ElementTransferImpl">Element Transfer</option>
            <option value="BoxSplit">Box Split</option>
          </select>
        </div>

        {renderSelectedComponent()}
      </div>
    </div>
  );
};

export default App;
