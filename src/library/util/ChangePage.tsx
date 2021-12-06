import React from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../store/hooks';
import { changeLocation } from '../../store/reducers/location';

type props = {
    children : React.ReactNode
    location : string
}

export default ({ location, children } : props) => {

    const navigate = useNavigate();


    return <div
        className="clickable"
        onClick={()=> navigate(location) }>
        {children}
    </div>

}