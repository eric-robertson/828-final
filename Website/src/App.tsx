import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import { Explanation } from './components/explanation';
import { Question } from './components/questions';
import { Button, Panel } from './library/_';

type props = {
    children : React.ReactNode
}

export default function() {

    const [page, setPage] = useState(true)

    let text = page ? "Start Answering Questions" : "Back to Explanation"
    let content = page ? <Explanation/> : <Question/>

    return <div>
        <Panel centerX width={400} style={{textAlign: 'center', fontSize: 30}}>
            828J Data Collection
        </Panel>
        <Panel centerX width={700} >
            {content}
        </Panel>
        <br/>
        <br/>
        <br/>
        <Panel centerX width={400}>
            <Button text={text} onClick={()=>{
                setPage(!page)
            }} width={380}/>
        </Panel>
    </div>
}

