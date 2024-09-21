export default function Wired() {
    return(
        <>
            <div className="wired-container">
                <div className="wired-title">
                    <h1>
                    ➸ Wired
                    </h1>
                    <p>
                        Productivity tool
                    </p>
                    <div className="vertical-line"></div>
                    <div className="wired-links">
                        <a href="https://github.com/BhagyaPasawala/Wired" target="_blank" rel="noopener noreferrer">Github</a>
                        <a href="https://wiredd.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Website</a>
                    </div>
                    
                </div>
                <div className="wired-content">
                    <div className="wired-photo">
                        <img src="/wired.png" alt="" />
                    </div>
                    <div className="wired-context">
                    
                        <h1>➸Context</h1>
                        <p> Currently I am learning multiple things and we all know how stressfull it gets
                            when nothing is organized. I wanted to time my study sessions, listen to my favorite music
                            and be able to brainstorm ideas all into one place. I tried a couple of web apps and they were good
                            but I needed more customization. So I built a custom productivity tool for myself in which I can 
                            time my study sessions, prioritize my tasks, listen to my favorite music, set up a moodboard and 
                            brainstorm ideas, all in one place.
                            </p>
                        <h1>➸Process</h1>
                        <p> This project particularly was very exciting because I was solving a problem which I was facing.
                            So initially the process was fairly simple, I broke down the app into smaller tasks and built
                            each component seperately using ReactJs. Struggled a bit with state-management but overall it was fun
                            and now I use it everyday!
                            </p>
                            <br />
                    </div>
                </div>
            </div>
        </>
    );
}

