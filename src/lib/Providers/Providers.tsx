"use client"
import {  store } from '@/redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const Providers = ({ children }: { children: React.ReactNode }) => {
// let persistor = persistStore(store)

    return (
        <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
                {children}
            {/* </PersistGate> */}
        </Provider>
    );
};

export default Providers;