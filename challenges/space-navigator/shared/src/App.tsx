import { Component } from "solid-js";
import Layout from "./Layout";
import readme from "../README.md?raw";

const App: Component = () => {
  return <Layout markdown={readme}>Sample</Layout>;
};

export default App;
