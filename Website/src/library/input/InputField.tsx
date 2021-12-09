import React, {CSSProperties, useState} from 'react';
import { getTheme } from '../../controllers/color';
import {Button} from './Button'

type props = {
    onChange : (value:string) => void
    validate ?: (value:string) => boolean
    color ?: 'default' | 'warn' | 'accept'
    value : string
}

export const InputField = ( props : props) => {
    // Validation is done with callback
    // Box shadow on focus
    // Parent element maintains state of child
    
    let color = props.color ?? 'default'
    let theme = getTheme()
    let valid = props.validate ? props.validate(props.value) : true
    const [hasFocus, setFocus] = useState(false);

    let style = {
        height: 35,
        lineHeight: '32px',
        boxSizing: 'border-box',
        color: theme.text,
        background : theme.back[0],
        border : `2px solid ${theme[color][0]}`,
        outline: 'none',
        paddingLeft: 10
    } as CSSProperties

    if ( !valid ) {
        style.border = `2px solid ${theme.warn[0]}`
    }

    if ( hasFocus ) {
        style.boxShadow = `${theme.shadow} 0px 0px 4px 0px`
    }

    return <input
        className="round animate clickable spaceSmall"
        spellCheck={false}
        style={style}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onInput={(e) => props.onChange(e.currentTarget.value)}
        value={props.value}
    />
        
}