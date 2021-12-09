import React, { CSSProperties, useState } from 'react';

type props = {
    children: React.ReactNode[],
    justify ?: string
    width ?: any
    style ?: any
}

export const Row = ( props : props) => {

    const style = {
        display: 'flex',
        justifyContent: props.justify ?? 'space-evenly',
        width : props.width,
        ...props.style
    } as CSSProperties

    return <div style={style} > 
        {props.children}
    </div>


}
