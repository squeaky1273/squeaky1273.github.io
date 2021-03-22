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
            <hr />
            <Typist
              className="message"
              cursor={{ hideWhenDone: true }}>
                <Typist.Delay ms={3250} />
                Software Engineer
            </Typist>
            {/* <br />
            <a href={process.env.PUBLIC_URL + 'resume.pdf'}>
                Resume
            </a>
            <br />
            <a href="https://github.com/squeaky1273">
                Github
            </a>
            <br />
            <a href="https://www.linkedin.com/in/padyn-riddell/">
                LinkedIn
            </a>
            <br />
            <a href="https://medium.com/@padyn">
                Medium
            </a> */}
        </div>
    )
}

export default Home