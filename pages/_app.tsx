import React from "react";
import "../styles/globals.css";
import Script from "next/script";
import type { AppProps } from "next/app";
import { SplashScreen } from "../components";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <SplashScreen />

            <Component {...pageProps} />

            <Script strategy="lazyOnload" src="https://meet.jit.si/external_api.js" />

            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-E1KBFQCSTE" />
            <Script strategy="lazyOnload" src="/assets/js/analytics.js" />
        </>
    );
}
