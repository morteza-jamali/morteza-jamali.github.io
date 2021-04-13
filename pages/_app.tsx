import "../styles/global.css";
import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";
import { AppProps } from "next/app";

const renderer = createRenderer();

const App = ({ Component, pageProps }: AppProps) => (
  <RendererProvider renderer={renderer}>
    <Component {...pageProps} />
  </RendererProvider>
);

export default App;
