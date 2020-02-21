import React, {useEffect, useState} from 'react';
import Loading from "../components/Loading/Loading";
import FilmsView from "../components/Films/Films-view";
import useFetch from "../helpers/useFetch";
import {FILMS_URL} from "../variables";
import Error from "../components/Error/Error";
import Button from "../elements/button";


const Films = () => {
    const [urls, setUrls] = useState(FILMS_URL);
    const [data, error, nextPage] = useFetch(urls, true);

    const clickHandler = () => {
        setUrls(urls);
    }

    return (
        <>
            <div>Films</div>
            <FilmsView items={data} error={error}/>
            {nextPage &&
                <Button classes="btn" text="Load more" clickHandler={clickHandler} />}

        </>
    );
}

export default Films;

