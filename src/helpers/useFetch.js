import React, {useEffect, useState} from 'react';

const useFetch = (url, append) => {
    const [data, setData] = useState('');
    const [error, setError] = useState();
    const [nextPage, setNextPage] = useState();

    useEffect(()=>{
        const fetchData = async (url) => {
            try {
                const dataFetch = await fetch(url);
                const {results, next} = await dataFetch.json();
                const res = (append && data) ? [...data , ...results] : results;
                setData(res);
                setNextPage(next);
            }
            catch (error){
                setError(error);
            }
        }
        fetchData(url);
    }, [url]);

    return [data, error, nextPage];
}

export default useFetch;