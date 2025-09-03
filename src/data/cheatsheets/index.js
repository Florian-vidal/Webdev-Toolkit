import html from "./html";
import css from "./css";
import javascript from "./javascript";
import react from "./react";
import express from "./express";
import mongodb from "./mongodb";
import git from "./git";
import tools from "./tools";

export default [
  {
    ...html,
    id: "html", // ✅ /category/html
  },
  {
    ...css,
    id: "css", // ✅ /category/css
  },
  {
    ...javascript,
    id: "javascript", // ✅ /category/javascript
  },
  {
    ...react,
    id: "react", // ✅ /category/react
  },
  {
    ...express,
    id: "express", // ✅ /category/express
  },
  {
    ...mongodb,
    id: "mongodb", // ✅ /category/mongodb
  },
  {
    ...git,
    id: "git", // ✅ /category/git
  },
  {
    ...tools,
    id: "tools", // ✅ /category/tools
  },
];
