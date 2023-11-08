import type { VoidComponent } from "solid-js";
import Layout from "space-navigator-shared/layout";
import README from "../README.md?raw";
import PasswordForm from "./PasswordForm.tsx";
import Status from "./Status.tsx";


const App: VoidComponent = () => {
  return (
    <Layout markdown={README}>
      <div class="flex justify-around">
        <Status />
        <PasswordForm />
      </div>
    </Layout>
  );
};

export default App;
