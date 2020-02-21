import React from 'react';
import Error from "../Error/Error";
import Loading from "../Loading/Loading";

const PeopleView = ({items, error, clickHandler}) => {

    if (error){
       return <Error text="People" />
    }
    if (!items)
        return <Loading text="People" />

    return (
        <div className="people">
            <ul>
            {items.map((itm,index)=> {
                return  <li key={index}>{itm.name}</li>
            })}
            </ul>
        </div>
    );
}

export default PeopleView;