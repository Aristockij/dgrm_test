import React, { ReactNode, useCallback, useEffect } from 'react';
import Router from 'next/router';
import ym, { YMInitializer } from 'react-yandex-metrika';


const WithYandexMetrika = ({children}) => {


    const hit = useCallback((url) => {
        ym('hit', url);
    }, []);

    useEffect(() => {
        hit(window.location.pathname + window.location.search);
        Router.events.on('routeChangeComplete', (url) => {hit(url)});
    }, []);

    return (
        <>

            <YMInitializer
                accounts={[72997480]}
                options={{ webvisor: true, defer: true }}
                version="2"
            />

            {children}
        </>
    )


}

export default WithYandexMetrika;