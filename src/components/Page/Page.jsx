import React, { Fragment } from 'react';
import styles from './Page.module.css';

import Header from '../Header';
import Form from '../Form';
import Loader from '../Loader';
import Error from '../Error';
import Forecast from'../Forecast';

import useForecast from "../../hooks/useForecast";

const Page = () => {
    const { isError, isLoading, forecast, submitRequest } = useForecast();

    const onSubmit = (value) => {
        submitRequest(value);
    }
    return (
        <Fragment>
            <Header />
            <div className={styles.box}>
                {/* Form */}
                {!isLoading && <Form submitSearch={onSubmit}/>}

                {/* Error */}
                {isError && <Error message={isError}/> }
                
                {/* Loading */}
                {isLoading && <Loader/> }
                
                {/* Forecast */}
                {forecast && <Forecast/>}
            </div>
        </Fragment>
    );
};

export default Page;
