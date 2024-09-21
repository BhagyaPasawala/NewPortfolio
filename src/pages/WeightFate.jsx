export default function WeightFate() {
    return(
        <>
           <div className="wired-container">
                <div className="wired-title">
                    <h1>
                    ➸ Weight's Fate
                    </h1>
                    <p>
                        Video Game
                    </p>
                    <div className="vertical-line"></div>
                    <div  className="wired-links">
                        <a href="https://bonker-games.itch.io/weights-fate" target="_blank" rel="noopener noreferrer">Download</a>
                    </div>
                </div>
                <div className="wired-content">
                <video controls width="800" src="/weight.mp4" type="video/mp4">
                     Does not support the video tag.
                </video>
                    <div className="wired-context">
                        <h1>➸Context</h1>
                        <p> I still remember the excitement and anxiety I had while building this game. 
                            I participated in GMTK game jam. I had 4 days to build the game
                            and submit. So 4 days of roller coaster and caffeine overdose.
                            </p>
                        <h1>➸Process</h1>
                        <p> So the theme was about 'scale'. It can be depicted with size, dimensions, height, etc.
                            I thought of going the other way around and depict the 'scale' as a weighing scale.
                            And he wants to escape the house because there's a fat guy trying to jump on him.
                            So I modelled a cute little weighing scale using Blender and imported in Unreal Engine 5.
                            <br /><br />
                            With the help of Mixamo, I imported a few basic movement animations for the character but 
                            struggled a lot with one bug which was that my character was walking upwards instead of forward.
                            I struggled with that bug for a whole day and later on I just fixed it temporarily by rotating the axis,
                            which isn't a logical solution but did the job. Next 3 days I just worked on the movement, 
                            object collecting logic and door logic.
                            <br /><br />
                            Enemy character was also super fun to build because I built a custom 
                            AI behaviour tree, gave the AI tasks to either roam around the house and find the player
                            and once found, then to chase the player and if the player is in specific distance,
                            then just jump on him.
                            <br /><br />
                            It was just so fun. First game jam, done!
                            </p>
                            <br />
                        <div className="wired-photo">
                        <img src="/photo1.png" alt="" />
                        <img src="/photo2.png" alt="" />
                        <img src="/photo3.png" alt="" />
                        <img src="/photo4.png" alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

