import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./Welcome.md"))
  },
  {
    path: "/colors",
    title: "Colors",
    content: pageLoader(() => import("./colors.md"))
  },
  {
    path: "/fonts",
    title: "Fonts",
    content: pageLoader(() => import("./fonts.md"))
  },
  {
    path: "/images",
    title: "Images",
    content: pageLoader(() => import("./images.md"))
  }

];

ReactDOM.render(
  <Catalog title="Atlas Design" pages={pages} />,
  document.getElementById("catalog")
  
);
