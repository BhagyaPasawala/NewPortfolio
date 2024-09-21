export default function ObstacleCourse() {
    return(
        <>
            <div className="wired-container">
                <div className="wired-title">
                    <h1>
                    ➸ 3D Developer Obstacle Course
                    </h1>
                    <p>
                        Browser Video Game
                    </p>
                    <div className="vertical-line"></div>
                    <div  className="wired-links">
                        <a href="https://github.com/BhagyaPasawala/3D-Developer-Obstacle-Course" target="_blank" rel="noopener noreferrer">Github</a>
                        <a href="https://obstaclegame.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Website</a>
                    </div>
                </div>
                <div className="wired-content">
                    <div className="wired-photo">
                        <img src="/obstacle.png" alt="" />
                    </div>
                    <div className="wired-context">
                    
                        <h1>➸Context</h1>
                        <p> I was enrolled in Bruno Simon's Threejs course and built this game while
                            learning Threejs and React Three Fiber.
                            </p>
                        <h1>➸Process</h1>
                        <p> It always fascinated me to integrate 3D elements in a website, I feel 
                            that it makes the experience of the user more immersive. So I built this 
                            small obstacle course game using React Three Fiber with a twist to it. 
                            </p>
                            <br />
                    </div>
                </div>
            </div>
        </>
    );
}

