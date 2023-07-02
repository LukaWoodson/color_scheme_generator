import "./styles.css";
import TitleDesc from "./components/title-desc/title-desc.component";
import MiniSiteComponent from "./components/mini-site/mini-site.component";

export default function App() {
  return (
    <div className="App">
      {/*<ColorsComponent />*/}
      <TitleDesc />
      <MiniSiteComponent />
    </div>
  );
}
