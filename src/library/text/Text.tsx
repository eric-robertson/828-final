import React, { CSSProperties, useState } from 'react';
import { getTheme } from '../../controllers/color';

type props = {
    children: React.ReactNode
}

export const Text = ( props : props) => {

    const style = {
        color : getTheme().text
    } as CSSProperties

    return <div 
        className="padSmall "
        style={style} > 
        {props.children}
    </div>


}
