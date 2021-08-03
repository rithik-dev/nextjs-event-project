// noinspection JSUnusedGlobalSymbols

import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "../components/layout/layout";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import Head from "next/head";
import {NotificationContextProvider} from "../store/notification-context";

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
    <NotificationContextProvider>
        <Layout>
            <Head>
                <title>NextEvents</title>
                <meta name={'description'} content={'All your events in one place.'}/>
                <meta name={'viewport'} content={'initial-scale=1.0, width=device-width'}/>
            </Head>
            <Component {...pageProps}/>
        </Layout>
    </NotificationContextProvider>
)

export default MyApp;
