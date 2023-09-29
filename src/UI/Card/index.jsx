import React from 'react';
import "./style.scss";

const index = () => {
    console.log("card render");
    return (
        <>
            <div className="card p-5 shadow">
                <h6>Card</h6>
            </div>
        </>
    );
};

export default React.memo(index);