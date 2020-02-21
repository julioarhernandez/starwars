import React, {useEffect, useState} from 'react';
import Loading from "../components/Loading/Loading";
import FilmsView from "../components/Films/Films-view";
import useFetch from "../helpers/useFetch";
import {FILMS_URL} from "../variables";
import Error from "../components/Error/Error";


const Films = () => {
    const [data, error] = useFetch(FILMS_URL);

    const clickHandler = () => {
        console.log('clicked');
    }

    return (
        <>
            <div>Films</div>
            <FilmsView items={data} error={error} clickHandler={clickHandler}/>
        </>
    );
}

export default Films;

