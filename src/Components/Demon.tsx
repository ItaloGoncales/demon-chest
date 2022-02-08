import React from "react";
import { DEMON_TILE_SIZE, TILE_SIZE } from "../Settings/constants";

import styles from "./Demon.module.css";

const Demon = () => {
  const [position, setPosition] = React.useState({
    x: 17,
    y: 10,
  });

  return (
    <div
      style={{
        width: DEMON_TILE_SIZE,
        height: DEMON_TILE_SIZE,
        bottom: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(./assets/Demon.png)",
      }}
      className={styles.demon}
    ></div>
  );
};

export default Demon;
