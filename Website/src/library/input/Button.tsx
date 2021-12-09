import React, { CSSProperties, useState } from 'react';
import { getTheme } from '../../controllers/color';
import { Row } from '../_';

type props = {
    text ?: string,
    left ?: any,
    type ?: 'solid' | 'outline' | 'hidden'
    color ?: 'default' | 'warn' | 'accept'
    justify ?: string
    width ?: any
    onClick : () => void,
    style?: any
}

export const Button = ( props : props) => {

    let button_type = props.type ?? 'solid' 
    let color = props.color ?? 'default'
    let theme = getTheme()

    // Set style

    const [hover, setHover] = useState(false)
    const [click, setClick] = useState(false)

    const style = {
        height: 35,
        fontWeight: 600,
        textAlign: 'center',
        lineHeight: '32px',
        boxSizing: 'border-box',
        color: button_type == 'solid' ? theme.text2 : theme.text,
        border : `2px solid transparent`,
        width : props.width,
        ...props.style
    } as CSSProperties

    if ( !hover && !click) {
        if ( button_type == 'solid' )
            style.background = theme[color][0]
        else if ( button_type == 'outline' )
            style.border = `2px solid ${theme[color][0]}`

    }
    if ( hover ) {
        if ( button_type == 'solid' ){
            style.background = theme[color][1]
            style.boxShadow = `${theme.shadow} 0px 0px 10px 0px`
        }
        else if ( button_type == 'outline' ) {
            style.background = theme.back[0]
            style.border = `2px solid ${theme[color][1]}`
            style.boxShadow = `${theme.shadow} 0px 0px 4px 0px`
        }
        else if ( button_type == 'hidden' ) {
            style.background = theme.back[1]
        }
    }
    if ( click ) {
        if ( button_type == 'solid' ){
            style.background = theme[color][2]
        }
        else if ( button_type == 'outline' ) {
            style.border = `2px solid ${theme[color][2]}`
        }
        else if ( button_type == 'hidden' ) {
            style.background = theme.back[1]
            style.border = `2px solid ${theme[color][2]}`
        }
    }

    // Set content

    let content = [] as React.ReactNode[];

    if ( props.left && typeof(props.left) == 'string' )
        content.push(<img src={props.left} width={29} height={29} style={{marginTop:1}} key="img-str"/>)
    if ( props.left && typeof(props.left) != 'string' )
        content.push(<div key="img-obj">{props.left}</div>)
    if ( props.text ) 
        content.push(<div key="text">{props.text}</div>)

    if ( content.length > 1 )
        content = [<Row key="row" children={content} justify={props.justify}></Row>]

    // Set button

    return <div
        className="round animate clickable spaceSmall stretchWidth unselectable"
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>{setHover(false); setClick(false)}}
        onMouseDown={()=>{setHover(false); setClick(true)}}
        onMouseUp={()=>{setClick(false); setHover(true); props.onClick() }}
        style={style}
    >
        {content}
    </div>


}
