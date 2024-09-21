export default function CorridorGame() {
    return(
        <>
           <div className="wired-container">
                <div className="wired-title">
                    <h1>
                    ➸ Corridor Game
                    </h1>
                    <p>
                        Video Game
                    </p>
                    <div className="vertical-line"></div>
                </div>
                <div className="wired-content">
                <video controls width="800" src="/corridor.mp4" type="video/mp4">
                    Does not support the video tag.
                </video>
                    <div className="wired-context">
                        <h1>➸Context</h1>
                        <p> Funny backstory,
                            one night I was coding and I went for a coffee at 3am and my appartment corridor looked 
                            super spooky. And I always wanted to make a video game so I thought why not make a horror 
                            game based on my corridor.
                            </p>
                        <h1>➸Process</h1>
                        <p> I wasn't relatively new with Unreal Engine 5, I played around with the software a few 
                            times but never touched the Blueprints {`(Unreal's visual scripting system)`} ever. 
                            So I started the project and it was overwhelming at the beginning learning a new software 
                            and boy oh boy Unreal Engine is a BIG software. There's just so much to learn.
                            <br /><br />
                            So started off with importing the hand model and imported the animations, wrote some logic to 
                            make it work with the mouse events. Wrote logic about basic movement. Then I 3D modelled the corridor,
                            which took a while because I wanted to set the horror tone and also make it look like my corridor.
                            Then imported the zombie model and pretty much did the same thing with it's character too. 
                            I will probably finish building this game when I will have more time.
                            </p>
                            <br />
                        <div className="wired-photo">
                        <img src="/corridor.png" alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

