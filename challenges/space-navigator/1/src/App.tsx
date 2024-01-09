import Layout from "space-navigator-shared/layout";
import readme from "../README.md?raw";
import DirectorySearcher from "./DirectorySearcher.tsx";

function App() {
  return (
    <Layout markdown={readme}>
      <article class="prose prose-invert my-4 xl:prose-lg">
        <h2>Log Reader!</h2>
        <p>
          We need to access our navigation system, but it seems to be locked
          down and there's no way we can go anywhere if you don't remember the
          password. The navigation logs don't seem to need any authentication -
          it seems our last hope lies in the password being logged
          accidentally...
        </p>
      </article>
      <DirectorySearcher />
    </Layout>
  );
}

export default App;
