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
            <div className = "Media">
                <a href={process.env.PUBLIC_URL + 'resume.pdf'}>
                    <i class="fa fa-file-pdf-o" style={{ fontSize: '3em' }} />
                </a>
                <a href="https://github.com/squeaky1273">
                    <i class="fa fa-github" style={{ fontSize: '3em' }} />
                </a>
                <a href="https://www.linkedin.com/in/padyn-riddell/">
                    <i class="fa fa-linkedin" style={{ fontSize: '3em' }} />
                </a>
                <a href="https://medium.com/@padyn">
                    <i class="fa fa-medium" style={{ fontSize: '3em' }} />
                </a>
                <a href="https://medium.com/@padyn">
                    <i class="fa fa-medium" style={{ fontSize: '3em' }} />
                </a>
            </div>
        </div>
    )
}

export default Home