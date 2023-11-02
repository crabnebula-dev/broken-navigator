import type { VoidComponent } from "solid-js";
import Layout from "space-navigator-shared/layout";
import README from "../README.md?raw";

const App: VoidComponent = () => {
  return (
    <Layout markdown={README}>
      <p class="text-center">this is a challenge</p>
    </Layout>
  );
};

export default App;
