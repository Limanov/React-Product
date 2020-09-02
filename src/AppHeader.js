import * as React from "react";

export const AppHeader = () => {
  return (
    <header className="ui fixed menu">
      <nav className="ui container">
        <span  className="header item">
          Lista produktów
        </span>
        <div className="header item">
          <button className="ui button">Dodaj</button>
        </div>
      </nav>
    </header>
  );
};