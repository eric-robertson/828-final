import React, {useState, CSSProperties} from "react";
import { getTheme } from "../../controllers/color";

type props = {
    initialState : boolean
    color ?: 'default' | 'warn' | 'accept'
    onToggle : (state:boolean) => void
}

export const ToggleSwitch = (props : props) => {
    let color = props.color ?? 'default'
    let theme = getTheme()

    let [on, setOn] = useState(props.initialState)
    const [hover, setHover] = useState(false)
    const [click, setClick] = useState(false)

    let _color = theme[color]

    let style = {
        height: 24,
        width: 24,
        border: `2px solid ${theme[color][0]}`,
        background : theme.back[0],
        textAlign: 'center',
        lineHeight: '23px',
        fontSize: '14pt',
        display: 'inline-block',
        color: theme.text2
    } as CSSProperties

    const toggleState = () => {
        setOn(!on)
        props.onToggle(!on)
    }


    if ( hover || click ) {
        style.boxShadow = `${theme.shadow} 0px 0px 4px 0px`
    }
    if ( click ) {
    }
    if ( on ) {
        style.background = _color[0]
    }


    return <div 
        className="round animate clickable spaceSmall unselectable"
        style={style} 
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>{setHover(false); setClick(false)}}
        onMouseDown={()=>{setHover(false); setClick(true)}}
        onMouseUp={()=>{setClick(false); setHover(true); toggleState() }}>
            {on?'✔':'✔'}
    </div>
}