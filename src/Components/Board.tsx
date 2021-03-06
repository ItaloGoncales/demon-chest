import React from "react";
import { GAME_SIZE } from "../Settings/constants";
import Chest from "./Chest";
import Demon from "./Demon";
import Hero from "./Hero";
import MiniDemon from "./MiniDemon";
import Trap from "./Trap";

const Board = () => {
  return (
    <div>
      <Hero />
      <MiniDemon />
      <Demon />
      <Chest />
      <Trap
        initialPosition={{
          x: 8,
          y: 3,
        }}
      />
      <Trap
        initialPosition={{
          x: 14,
          y: 13,
        }}
      />
      <Trap
        initialPosition={{
          x: 3,
          y: 13,
        }}
      />
      <Trap
        initialPosition={{
          x: 16,
          y: 5,
        }}
      />
      <img
        src="./assets/tileset.gif"
        alt=""
        style={{ width: GAME_SIZE, height: GAME_SIZE }}
      />
    </div>
  );
};

export default Board;
