import React, {useEffect, useState} from 'react';

const useFetch = (url, append) => {
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(()=>{
        const fetchData = async (url) => {
            try{
                const data = await fetch(url);
                const {results} = await data.json();
                const res = append ? [...data, ...results] : results;
                setData(res);
                console.log(results);
            }
            catch (error){
                setError(error);
            }
        }
        fetchData(url);
    }, []);

    return [data, error];
}

export default useFetch;