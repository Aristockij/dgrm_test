import '../styles/reset.css';
import '../scss/style.scss';
import React, {useState} from 'react';
import App, { Container } from 'next/app';
import { getStores, StoreProvider } from '../store/store';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AnimatePresence } from 'framer-motion';
import WithYandexMetrika from "../components/lib/WithYandexMetrika";



class CustomApp extends App {

    render() {
        const {Component, pageProps, initialData, router} = this.props;

        // During SSR, this will create new store instances so having `initialData` is crucial.
        // During the client-side hydration, same applies.
        // From then on, calls to `getStores()` return existing instances.


        const stores = getStores(initialData);

        return (
            <AnimatePresence exitBeforeEnter>
                <StoreProvider value={stores}>
                    <WithYandexMetrika>
                    <Component {...pageProps} key={router.route}/>
                    </WithYandexMetrika>
                </StoreProvider>
            </AnimatePresence>
        );
    }
}

export default CustomApp;
