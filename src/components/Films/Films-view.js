import React, {useEffect, useRef, useState} from 'react';
import Error from "../Error/Error";
import {TweenLite} from "gsap";
import Loading from "../Loading/Loading";
import './Films.scss';

const FilmsView = ({items, error}) => {
    const [isLoading, setIsloading] = useState();
    let filmItem = useRef([]);
    let filmItemFigure = useRef([]);
    let filmItemDescription = useRef([]);

    const convertNames = (name) => {
        const lowerNoSpace = (typeof name == 'string') && name.replace(/\s+/g, '_').toLowerCase();
        return `../images/films/${lowerNoSpace}.jpg`;
    }

    const showDescription = (index) => {
        const thisDescription = filmItemDescription.current[index];
        // TweenLite.to(thisDescription, 1, { height: '100%'});
    }

   const hideDescription = (index) => {
        const thisDescription = filmItemDescription.current[index];
        // TweenLite.to(thisDescription, 1, { height: 0});
    }

    useEffect(() => {
        TweenLite.from(filmItem.current, 0.5, {x: 500,  opacity: 0, scale: 0.5, stagger: 0.1});
        setIsloading( !!items);
    }, [items]);

    if (error){
       return <Error text="Films" />
    }

    return (
        <div className="Films">
             <div className="loader">
                <Loading text="Films" isLoading={isLoading} />
            </div>
            <ul>
            {items && items.map((itm,index)=> {
                return  <li className="List_item" key={`film${index}`} ref={ li => filmItem.current[index] = li }>
                        <div className="Films_card" onMouseEnter={() => showDescription(index)} onMouseLeave={() => hideDescription(index)}>
                            <div className="Films_header">
                                <div className="Films_item">
                                    <h2 className="Films_title">{itm.title}</h2>
                                    <div className="Films_description" ref={ div => filmItemDescription.current[index] = div }>
                                         {itm.opening_crawl}
                                    </div>
                                </div>
                                <div className="Films_item"><label>Release year:</label>{itm.release_date}</div>
                                <div className="Films_item"><label>Director:</label> {itm.director}</div>
                                <div className="Films_item"><label>Producer:</label> {itm.producer}</div>
                            </div>
                            <div className="Films_figure" ref={ div => filmItemFigure.current[index] = div }>
                                <img src={convertNames(itm.title)} alt="tropper" title="Default image" className="Films_image"/>
                            </div>
                        </div>
                    </li>
            })}
            </ul>
        </div>
    );
}

export default FilmsView;