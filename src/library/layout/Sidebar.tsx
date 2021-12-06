import React, { CSSProperties, useState } from 'react';

type Option = {
    label: string,
    icon: string 
}

type props = {
    onchange : (changed:string) => void
    compressed : boolean,
    active : string,
    options : Option[]
}

export const Sidebar = ( props : props) => {

    const style = {
    } as CSSProperties

    return <div 
        style={style} 
    >
        sidebar
    </div>


}
