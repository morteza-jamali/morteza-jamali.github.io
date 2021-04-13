import { useEffect, Fragment, FunctionComponent } from "react";
import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";
import { AppProps } from "next/app";
import { Head } from "../components/.";
import CssBaseline from "@material-ui/core/CssBaseline";
import "../styles/global.css";

const renderer = createRenderer();

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <Head
        title="Main Page"
        meta={[
          {
            name: "viewport",
            content: "minimum-scale=1, initial-scale=1, width=device-width",
          },
        ]}
      />
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <RendererProvider renderer={renderer}>
        <Component {...pageProps} />
      </RendererProvider>
    </Fragment>
  );
};

export default App;
