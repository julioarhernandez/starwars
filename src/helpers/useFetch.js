import {useEffect, useState} from 'react';

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
                // setTimeout(() => {setData(res);setNextPage(next);},1000);
                setData(res);
                setNextPage(next);
            }
            catch (error){
                setError(error);
            }
        }
        fetchData(url);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return [data, error, nextPage];
}

export default useFetch;