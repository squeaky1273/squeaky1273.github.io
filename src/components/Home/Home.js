import React from 'react'
import Typist from 'react-typist';
import './Home.css';

function Home() {
    return (
        <div className="TypistExample">   
            <Typist
                className="header"
                avgTypingDelay={40}
                startDelay={2000}>
                padyn
            </Typist>
            {/* <hr /> */}
            <Typist
              className="message"
              cursor={{ hideWhenDone: true }}>
                <Typist.Delay ms={3250} />
                Software Engineer
            </Typist>
        </div>
    )
}

export default Home