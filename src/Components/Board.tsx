import React from "react";
import { GAME_SIZE } from "../Settings/constants";
import Hero from "./Hero";

const Board = () => {
  return (
    <div>
      <Hero />
      <img
        src="./assets/tileset.gif"
        alt=""
        style={{ width: GAME_SIZE, height: GAME_SIZE }}
      />
    </div>
  );
};

export default Board;
