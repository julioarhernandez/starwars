import React from 'react';
import Button from "../../elements/button";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";

const FilmsView = ({items, error}) => {

    if (error){
       return <Error text="Films" />
    }
    if (!items)
        return <Loading text="Films" />

    return (
        <div className="films">
            <ul>
            {items.map((itm,index)=> {
                return  <li key={index}>{itm.title}</li>
            })}
            </ul>
        </div>
    );
}

export default FilmsView;