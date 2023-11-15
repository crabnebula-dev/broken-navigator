import type { ParentComponent } from "solid-js";
import { MarkdownProps } from "./Markdown";
import { ETab, Tab, TabPanel, TabProvider, Tabs } from "./Tabs";
import Footer from "./Footer";

const Layout: ParentComponent<MarkdownProps> = ({ markdown, children }) => {
  return (
    <TabProvider active={ETab.ABOUT}>
      <header>
        <Tabs>
          <Tab is={ETab.ABOUT}>About</Tab>
          <Tab is={ETab.CHALLENGE}>Challenge</Tab>
          <Tab is={ETab.SOLVE}>Solution</Tab>        
        </Tabs>
      </header>
      <main class="mx-4 flex flex-col items-center sm:mx-0">
        <TabPanel markdown={markdown}>{children}</TabPanel>
      </main>
      <Footer />
    </TabProvider>
  );
};

export default Layout;
