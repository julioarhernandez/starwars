import React, {useEffect, useRef, useState} from 'react';
import Error from "../Error/Error";
import {TweenLite} from "gsap";
import Loading from "../Loading/Loading";
import './People.scss';

const PeopleView = ({items, error, isLoading}) => {
    let peopleItem = useRef([]);

    const convertNames = (name) => {
        const lowerNoSpace = (typeof name == 'string') && name.replace(/\s+/g, '_').toLowerCase();
        return `../images/people/${lowerNoSpace}.png`;
    }

    useEffect(() => {
        console.log(items);
        TweenLite.from(peopleItem.current, 0.5, {x: 500,  opacity: 0, scale: 0.5, stagger: 0.1});
    }, [items]);

    if (error){
       return <Error text="People" />
    }

    return (
        <div className="People">
             <div className="loader">
                <Loading text="People" isLoading={isLoading} />
            </div>
            <ul>
            {items && items.map((itm,index)=> {
                return  <li className="List_item" key={`people${index}`} ref={ li => peopleItem.current[index] = li }>
                        <div className="People_card">
                            <div className="People_header">
                                <div className="People_item"><h2 className="People_title">{itm.name}</h2></div>
                                <div className="People_item"><label>Birth year:</label> {itm.birth_year}</div>
                                <div className="People_item"><label>Gender:</label> {itm.gender}</div>
                                <div className="People_item"><label>Height:</label> {itm.height}</div>
                                <div className="People_item"><label>Mass:</label> {itm.mass}</div>
                            </div>
                            <div className="People_figure">
                                <img src={convertNames(itm.name)} alt="Person Image" title="Default image" className="People_image"/>
                            </div>
                        </div>
                    </li>
            })}
            </ul>
        </div>
    );
}

export default PeopleView;