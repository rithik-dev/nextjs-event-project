// noinspection JSUnusedGlobalSymbols

import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "../components/layout/layout";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

NProgress.configure({
    minimum: 0.35,
    easing: 'ease',
    speed: 800,
    showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({Component, pageProps}: AppProps) => (
    <Layout>
        <Component {...pageProps}/>
    </Layout>
)

export default MyApp;
