import React, {useEffect, useState} from 'react';
import Loading from "../components/Loading/Loading";
import PeopleView from "../components/People/People-view";
import useFetch from "../helpers/useFetch";
import {PEOPLE_URL} from "../variables";
import Error from "../components/Error/Error";


const People = () => {
    const [data, error] = useFetch(PEOPLE_URL);

    return (
        <>
            <div>People</div>
            <PeopleView items={data} />
        </>
    );
}

export default People;

