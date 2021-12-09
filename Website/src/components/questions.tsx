import React, { CSSProperties, useEffect, useState} from 'react';
import { Button, ToggleSwitch } from '../library/_';

type props = {}
type data = {
    scene : string,
    effect : string,
    sim : string,
    scene_questions : {q:string,truth:boolean}[],
    effect_questions: {q:string,truth:boolean}[],
    total_questions: {q:string,truth:boolean}[],
}


export const Question = ( props : props) => {

    let [question, setQuestion] = useState(undefined)
    let [data, setData] = useState(undefined as data | undefined)
    let [selections, setSelections] = useState({} as any)
    let [submitting, setSubmitting] = useState("")

    useEffect(()=>{

        if ( !question )
            fetch('https://i2wb9qwl7h.execute-api.us-east-1.amazonaws.com/getQuestion', {
                method: 'post'
            })
            .then(async (r) => {
                let content = await r.json()
                setQuestion(content.query.Key.uploaded_id)
                let _data = JSON.parse(content.result).Item

                function select_some (q_true : string[], q_false : string[]) {
                    if ( ! q_true || ! q_false ) return []
                    let max = q_true.length + q_false.length
                    let total = max > 6 ? 6 : max
                    let results = [] as {q:string,truth:boolean}[]
                    let used = {} as any
                    for ( let i = 0; i < total; i ++ ) {
                        let id = Math.floor(Math.random()*max)
                        if ( used[id] ) continue
                        used[id] = true
                        if ( id <q_true.length)
                            results.push({
                                q : q_true[id],
                                truth: true
                            })
                        else 
                            results.push({
                                q : q_false[id - q_true.length],
                                truth: false
                            })
                    }
                    return results
                }

                console.log(_data)

                const data = {
                    scene : _data.scene,
                    sim : _data.simulation_id,
                    start_time: Date.now(),
                    scene_questions : select_some(
                        _data.true_scene,
                        _data.false_scene
                    ),
                    effect : _data.effects,
                    effect_questions : select_some(
                        _data.true_effects,
                        _data.false_effects
                    ),
                    total_questions : select_some(
                        _data.true_total,
                        _data.false_total
                    ),
                } as data

                setData(data)
            })

    }, [question])

    if ( !question )
        return <div style={{textAlign: 'center', width: 700, margin: 20}}>
            Loading Question ...
        </div>

    console.log(selections)

    return <div >
        {
            submitting.length != 0 ? <div style={{
                position: 'fixed', top : 0, left : 0, width : '100%', height: '100%', textAlign: 'center', lineHeight: "100vh",
                background : '#79797961', zIndex: 10, fontSize: 50, }}>
                {submitting}
            </div> : ''
        }
        <div style={{textAlign: 'center', width: 700, margin: 20}}>
            Question {question}
        </div>


        <div className="code">
            {data?.scene}
        </div>

        {
            data?.scene_questions.map( (q,i) => {
                return <div key={i} style={{position:'relative'}}>
                    <ToggleSwitch initialState={false} onToggle={(v)=>{
                        let name = 'scene-' + i
                        if (v)
                            selections[name] = true
                        else
                            delete selections[name]
                        setSelections({...selections})
                    }} />
                    <div style={{position: 'absolute', top: 12, left: 50}}>{q.q}</div>
                </div>
            })
        }

        { 
            data?.effect ? (
                <div>
        
                <div className="code">
                    {data?.effect}
                </div>
                
                {
                    data?.effect_questions.map( (q,i) => {
                        return <div key={i} style={{position:'relative'}}>
                            <ToggleSwitch initialState={false} onToggle={(v)=>{
                                let name = 'effect-' + i
                                if (v)
                                    selections[name] = true
                                else
                                    delete selections[name]
                                setSelections({...selections})
                            }} />
                            <div style={{position: 'absolute', top: 12, left: 50}}>{q.q}</div>
                        </div>
                    })
                }
                <div className="code">
                    Across the entire scene, including the initial values and the later changes
                </div>
                
                {
                    data?.total_questions.map( (q,i) => {
                        return <div key={i} style={{position:'relative'}}>
                            <ToggleSwitch initialState={false} onToggle={(v)=>{
                                let name = 'total-' + i
                                if (v)
                                    selections[name] = true
                                else
                                    delete selections[name]
                                setSelections({...selections})
                            }} />
                            <div style={{position: 'absolute', top: 12, left: 50}}>{q.q}</div>
                        </div>
                    })
                }
                </div>
            ) : '' 

        }

        <Button color="accept" text="Submit" onClick={()=>{

            setSubmitting("Submitting . . .")
            setTimeout(() => {
                fetch(" https://i2wb9qwl7h.execute-api.us-east-1.amazonaws.com/answerQuestion", {
                    method : 'POST',
                    body : JSON.stringify({
                        uploaded_time : "" + Date.now(),
                        ...data,
                        answers : [selections]
                    })
                }).then(() => {
                    setSubmitting('Success!')
                    setTimeout(() => {
                        setQuestion(undefined)
                        setSelections({})
                        setSubmitting("")
                    }, 500)
                })
            }, 500)


        }} width={400} style={{marginLeft:150}}/>


    </div>

}
