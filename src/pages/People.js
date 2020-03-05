import React, {useEffect, useState} from 'react';
import PeopleView from "../components/People/People-view";
import useFetch from "../helpers/useFetch";
import {PEOPLE_URL} from "../variables";
import Button from "../elements/button";


const People = () => {
    const [isLoading, setIsloading] = useState(true);
    const [urls, setUrls] = useState(PEOPLE_URL);
    const [data, error, nextPage] = useFetch(urls, false);

    const clickHandler = () => {
        setIsloading(true);
        setUrls(nextPage);
    }

    useEffect(() => {
        setIsloading(!!!data);
    }, [data]);

    return (
        <>
            <div className="Page_header">People</div>
            <PeopleView items={data} error={error} isLoading={isLoading}/>
            {nextPage &&
                <div className="Load_button">
                    <Button classes="btn btn-load" text="Load more" hiddenText clickHandler={clickHandler} />
                </div>}
        </>
    );
}

export default People;

