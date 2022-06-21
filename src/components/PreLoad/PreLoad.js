import React from 'react';
import './PreLoad.scss'
const PreLoad = ({active}) => {
    return (
        <div className={active ? 'loader-container active': 'loader-container'}>
                <div className="cell">
                        <div className="pl pl-hourglass"></div>
                        <div className="pl-name">Загрузка</div>
                </div>
        </div>
    );
};

export default PreLoad;