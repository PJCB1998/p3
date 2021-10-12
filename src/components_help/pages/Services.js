import React from "react";
import "./services.css";
import Header from "./complementos/header";
import Posts from "./complementos/posts/posts";
import Sidebar from "./complementos/sidebar/sidebar";

export default function Services() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}

//Services equivale a articulos
