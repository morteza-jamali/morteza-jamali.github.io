import React from 'react';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css'
import '../styles/globals.css';

export const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
