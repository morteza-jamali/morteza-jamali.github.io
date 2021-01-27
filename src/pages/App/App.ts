import h from "react-hyperscript";
import styles from "./App.style";

const App = () =>
  h(
    ".flex.width-100.height-100.justify-content-center.align-items-center",
    { ...styles() },
    [
      h(
        "h1",
        { className: "display-title display-title-xl" },
        "Welcome To My Portfolio"
      ),
    ]
  );

export default App;
