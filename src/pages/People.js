import React, {useState} from 'react';
import PeopleView from "../components/People/People-view";
import useFetch from "../helpers/useFetch";
import {PEOPLE_URL} from "../variables";
import Button from "../elements/button";


const People = () => {
    const [urls, setUrls] = useState(PEOPLE_URL);
    const [data, error, nextPage] = useFetch(urls, true);

    const clickHandler = () => {
        setUrls(nextPage);
    }

    return (
        <>
            <div className="Page_header">People</div>
            <PeopleView items={data} error={error}/>
            {nextPage &&
                <Button classes="btn" text="Load more" clickHandler={clickHandler} />}
        </>
    );
}

export default People;

