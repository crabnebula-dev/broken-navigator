import { Component } from "solid-js";
import Layout from "./Layout";
import readme from "../README.md?raw";

const App: Component = () => {
  return (
    <Layout markdown={readme}>
      This is the reason you see a pnpm-lock.yaml. That being said, any package
      manager will work. This file can be safely be removed once you clone a
      template.
    </Layout>
  );
};

export default App;
