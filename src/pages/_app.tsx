import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import { QueryClient, QueryClientProvider } from "react-query";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Nunito } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import config from "./../aws-exports";
import AuthDrawer from "@/components/AuthDrawer";
import GlobalLayout from "@/layouts/GlobalLayout";
Amplify.configure(config);

const nunito = Nunito({ subsets: ["latin"] });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      theme={createTheme({
        typography: {
          fontFamily: nunito.style.fontFamily,
          subtitle1: {
            fontWeight: 600,
            fontSize: "1.2rem",
          },
          button: {
            textTransform: "capitalize",
          },
        },
        components: {
          MuiInputLabel: {
            defaultProps: {
              sx: { fontSize: "14px", color: "text.secondary" },
            },
          },
        },
      })}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <GlobalLayout>
            <Component {...pageProps} />
            <AuthDrawer />
          </GlobalLayout>
        </LocalizationProvider>
      </QueryClientProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </ThemeProvider>
  );
}
