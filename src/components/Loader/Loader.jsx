import React from "react";
import { Circles } from "react-loader-spinner";
import s from "../Loader/Loader.module.css";

function Loader() {
  return (
    <div className={s.loader}>
      <Circles color="#3f51b5" height={100} width={100} />
    </div>
  );
}

export default Loader;
