import React from "react";
import "./main.css";
import names from "../data/name.json";
import ImA from "./ImA";
function Main() {
  //   console.log(names.name[0].name);
  return (
    <>
      <section className="sectionOne">
        <div className="sectionOneMain">
          <div className="line"></div>
          <div className="name">{names.name[0].name}</div>
          <div className="IMA">I'M </div>
          <ImA />
        </div>
      </section>
      <section className="sectionTow"></section>
      <section></section>
      <section></section>
    </>
  );
}

export default Main;
