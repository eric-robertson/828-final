import React, { CSSProperties, useEffect, useState} from 'react';

type props = {
    children : React.ReactNode
}

export const FadeTransition = ( props : props) => {
   
    const [lastChild, setChild] = useState(props.children)
    const [mode, setMode] = useState( "fade-in" )

    let CSS = 
        mode == "solid"
        ? "animateEntry"
        : mode == "fade-out"
        ? "animateEntry fading"
        : "animateEntry apearing"

    useEffect(() => {
        if ( mode == "solid")
            setMode("fade-out")
        setTimeout(() => {
            setChild(props.children)
            setMode("fade-in")
            setTimeout(()=>{
                setMode("solid")
            }, 150)
        }, 150)
    }, [props.children])

    return <div className={CSS} >
        {lastChild}
    </div>

}
