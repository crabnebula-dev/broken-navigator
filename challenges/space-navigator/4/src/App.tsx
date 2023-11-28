import type { VoidComponent } from "solid-js";
import Layout from "space-navigator-shared/layout";
import README from "../README.md?raw";

const App: VoidComponent = () => {

  return (
    <Layout markdown={README}>
      <article class="prose prose-invert my-4 xl:prose-lg">
      <h3>Coordinate Adjuster!</h3>
      <p>This tool helps us to adjust coordinates but the whole user
        interface seems broken. Maybe hacking it works...
      </p>
      </article>
    </Layout>
  );
};

export default App;
