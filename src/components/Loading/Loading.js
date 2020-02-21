import React from 'react';
import './Loading.scss';

const Loading = ({text}) => {
    return (
        <div className="loading">
            <div className="loading_content">
                Loading {text}
            </div>
        </div>
    );
}

export default Loading;