export default function MovieRec() {
    return(
        <>
            <div className="wired-container">
                <div className="wired-title">
                    <h1>
                    ➸ Cinemart
                    </h1>
                    <p>
                        Movie Recommendation app
                    </p>
                    <div className="vertical-line"></div>
                    <div  className="wired-links">
                        <a href="https://github.com/BhagyaPasawala/Movie-Rec" target="_blank" rel="noopener noreferrer">Github</a>
                        <a href="https://movieerecc.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Website</a>
                    </div>
                </div>
                <div className="wired-content">
                    <div className="wired-photo">
                        <img src="/movieone.png" alt="" />
                    </div>
                    <div className="wired-context">
                    
                        <h1>➸Context</h1>
                        <p> One night I spent nearly 2 hours finding 'the' movie, after that I felt so unproductive that night lol.
                            So I thought about making my own Movie Recommendation app and I made it. It generates a random movie 
                            with the genre and IMDB selected by the user.
                            </p>
                        <h1>➸Process</h1>
                        <p> It is a fun little project which I use, which taught me a lot of concepts about how to
                            fetch data using API. Built this app using ReactJs.
                            </p>
                            <br />
                    </div>
                    <div className="wired-photo">
                        <img src="/movietwo.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

