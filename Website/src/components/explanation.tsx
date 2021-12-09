import React, { CSSProperties, useEffect, useState} from 'react';

type props = {}

export const Explanation = ( props : props) => {
    return <div >
        <br/>

        <img src="https://raw.githubusercontent.com/eric-robertson/828-final/master/public/demo.gif" style={{borderRadius: 5, display: 'block', width:600, marginLeft: 50, marginBottom: 20}} />
        Natural language models have advanced rapidly in recent years but still struggle with many everyday reasonings about the natural world.
        Part of this deficit involves the understanding of physical objects and their movements. 
        This problem though, is quite simply computed with off the shelf physics-engines which can easily 
        tell what physical actions will occur given a very specificly defined setup.

        <br/>
        <br/>

        In this questionair you will be presented with rather vague description of a physical scene involving shapes and attributes such as:

        <div className="code">
        In a simulation, there is a cube (cube0), a ball, and another cube (cube2). They are placed above a bowl, the ball below of cube0, and cube2 above of cube0.
        </div>

        Then you will be presented with a list of statements about what occured. An example of the physics engine is at the top of this page.
        <br/>
        <br/>
        All objects have gravity, mass, friction, and a host of other default properties unless specificly mentioned otherwise. 
        Questions are not trick questions
        for example, objects placed in mid-air will begin moving immediately, assuming it has gravity. Thus the following sentence should be marked as true.

        <div className="code">
        At the start of the simulation, it is reasonable that the ball is moving
        </div>

        You will be asked to mark each one as true or false. 
        Statements may be vague or confusing as they are mostly auto-generated, do not over think it. You may leave answers blank if you want.

        There may be follow up questions with changing conditions like so:
        <div className="code">
        The ball is then given a push to the left
        </div>

        At the end, click the submit button and you will be given another question.
        Repeat for as long as you want, there are over 300 questions. You do not need to do them all.

    </div>

}
