import React from 'react';
import './Error.scss';

const Error = ({text}) => {
    return (
        <div className="error">
            <div className="error_content">
                The {text} endpoint returned with error. Please try again. If problem persist report it to error@email.com
            </div>
        </div>
    );
}

export default Error;