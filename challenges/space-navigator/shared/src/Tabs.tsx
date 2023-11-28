import {
  Accessor,
  createContext,
  createSignal,
  Match,
  ParentComponent,
  Switch,
  useContext,
} from "solid-js";
import Markdown, { MarkdownProps } from "./Markdown";
import Status from "./Status";
import FlagForm from "./FlagForm ";

export enum ETab {
  ABOUT = "about",
  CHALLENGE = "challenge",
  SOLVE = "solution"
}

// we need to explicitly mark the type as a tuple
const createTabContext = (
  value: ETab,
): [Accessor<ETab>, (to: ETab) => void] => {
  const [tab, setTab] = createSignal(value);
  return [tab, (to: ETab) => setTab(to)];
};

const TabContext = createContext(createTabContext(ETab.ABOUT));
export const useTabContext = () => useContext(TabContext);

export const TabProvider: ParentComponent<{ active: ETab }> = ({
  active,
  children,
}) => {
  const context = createTabContext(active);
  return <TabContext.Provider value={context}>{children}</TabContext.Provider>;
};

export const Tabs: ParentComponent = ({ children }) => {
  return (
    <nav class="py-4 text-lg">
      <ul class="flex justify-center">{children}</ul>
    </nav>
  );
};

export const Tab: ParentComponent<{ is: ETab }> = ({ is, children }) => {
  const [tab, setTab] = useTabContext();
  return (
    <li
      class={`mx-8 cursor-pointer border-primary px-4 py-1.5 ${
        tab() === is ? "border-b-2" : ""
      }`}
      onClick={() => setTab(is)}
    >
      {children}
    </li>
  );
};

export const TabPanel: ParentComponent<MarkdownProps> = ({
  markdown,
  children,
}) => {
  let [tab, _] = useTabContext();
  return (
    <Switch>
      <Match when={tab() === ETab.ABOUT}>
        <Markdown markdown={markdown} />
      </Match>
      <Match when={tab() === ETab.CHALLENGE}>{children}</Match>
      <Match when={tab() === ETab.SOLVE}>
        <div class="flex justify-around">
          <Status />
          <FlagForm />
        </div>
      </Match>
    </Switch>
  );
};
