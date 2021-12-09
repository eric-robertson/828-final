import React, { CSSProperties} from 'react';

type props = {
    source : string //is it better to convert the image to a string like this or to somehow pass a reference to one? hmmmnmnmnmnm
}


//https://w7.pngwing.com/pngs/873/489/png-transparent-avatar-youtube-cat-cute-dog-heroes-cat-like-mammal-carnivoran.png
export const ProfileIcon = ( props : props) => {
    const source = props.source

    const style = {
        height: 35,
        width: 35
    } as CSSProperties

    return <img alt ='' src={source} style={style}></img>


}
