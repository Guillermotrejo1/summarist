import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
// import { ThemeProvider } from "@mui/material/styles";
// import theme from "../../material-ui-theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
        <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </Provider>
  );
}