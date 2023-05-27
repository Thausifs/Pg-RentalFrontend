import React, { useState, useEffect } from "react";
import { IndiceProvider } from "../contexts";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/fontFamily.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import "../styles/style.css";
import "../styles/responsive.css";

import "../styles/designTab1.css";
import "../styles/designTab2.css";
import "../styles/designTabHeading.css";
import "../styles/gallery.css";
import "../styles/appattachment.css";

import "../styles/foodmenue.css";
import "../styles/home.css";

import Layout from "../components/_App/Layout";
import Loader from "../components/Shared/Loader";
import GoTop from "../components/Shared/GoTop";
import { AuthContextProvider } from "../contexts/authContext";
import Header from "../components/_App/Header";
import Footer from "../components/_App/Footer";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [queryClient] = React.useState(() => new QueryClient());

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <IndiceProvider>
            <AuthContextProvider>
              <Header />
              <Toaster position="top-right" reverseOrder={false} />
              <Component {...pageProps} />

              <Loader loading={loading} />

              <GoTop scrollStepInPx="100" delayInMs="10.50" />
              <Footer />
            </AuthContextProvider>
            1
          </IndiceProvider>
        </QueryClientProvider>
      </Layout>
    </>
  );
}

export default MyApp;
