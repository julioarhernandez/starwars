import React, {useEffect, useRef} from 'react';
import Error from "../Error/Error";
import {TweenLite} from "gsap";
import Loading from "../Loading/Loading";
import './People.scss';
import Trooper from '../../images/people/Star_Wars_Storm-Trooper.svg'

const PeopleView = ({items, error}) => {

    let peopleItem = useRef([]);

    useEffect(() => {
        TweenLite.from(peopleItem.current, 0.5, {x: 500,  opacity: 0, scale: 0.5, stagger: 0.1});
    }, [items]);

    if (error){
       return <Error text="People" />
    }
    if (!items)
        return <Loading text="People" />

    return (
        <div className="People">
            <ul>
            {items.map((itm,index)=> {
                return  <li key={`people${index}`} ref={ li => peopleItem.current[index] = li }>
                        <div className="People_card">
                            <div className="People_header">
                                <div className="People_item"><h2 className="People_title">{itm.name}</h2></div>
                                <div className="People_item"><label>Birth year:</label> {itm.birth_year}</div>
                                <div className="People_item"><label>Gender:</label> {itm.gender}</div>
                                <div className="People_item"><label>Height:</label> {itm.height}</div>
                                <div className="People_item"><label>Mass:</label> {itm.mass}</div>
                            </div>
                            <div className="People_figure">
                                <img src={Trooper} alt="tropper" title="Default image" class="People_image"/>
                            </div>
                        </div>
                    </li>
            })}
            </ul>
        </div>
    );
}

export default PeopleView;