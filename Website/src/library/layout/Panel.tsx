import React, { CSSProperties, useState } from 'react';

type props = {
    children: React.ReactNode
    width: any
    height ?: any,
    margin ?: any,
    style ?: any
    centerX ?: boolean
}

export const Panel = ( props : props) => {

    const style = {
        width : props.width,
        height : props.height,
        margin : props.margin,
        ...props.style
    } as CSSProperties

    if ( props.centerX )
        style.marginLeft = `calc(50% - ${props.width/2}px)`

    return <div 
        className="padSmall"
        style={style} 
    >
        {props.children}
    </div>


}
