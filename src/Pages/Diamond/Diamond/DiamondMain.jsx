import React from 'react';
import DiamondOlds from '../DiamondOld/DiamondOlds';
import DiamondLatests from './DiamondLatest/DiamondLatests';

const DiamondMain = () => {
    return (
        <div>
            <DiamondOlds></DiamondOlds>
            <DiamondLatests></DiamondLatests>
        </div>
    );
};

export default DiamondMain;