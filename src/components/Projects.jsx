import React from 'react';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo(0, 0); 
};

const Projects = () => {
  return (
    <div className='projects-container'>
      <div className='projects'>
        <div className='project-1'>
          <Link to={"/Wired"} className='project-title' onClick={scrollToTop}>
            Wired <span>{`(Web App)`}</span>
          </Link>
          <p>
            Productivity tool I built for myself using ReactJs.
          </p>
        </div>
        <div className='project-1'>
          <Link to={"/StinkedIn"} className='project-title' onClick={scrollToTop}>
            Job Portal <span>{`(Web App) (On-Going)`}</span>
          </Link>
          <p>
            Job portal parody
          </p>
        </div>
        <div className='project-1'>
          <Link to={"/MovieRec"} className='project-title' onClick={scrollToTop}>
            Cinemart <span>{`(Web App)`}</span>
          </Link>
          <p>
            Movie Recommendation app based on genre and IMDB ratings using ReactJs.
          </p>
        </div>
        <div className='project-1'>
          <Link to={"/Protech"} className='project-title' onClick={scrollToTop}>
            Protech <span>{`(UI/UX) (On-Going)`}</span>
          </Link>
          <p>
            Mobile app for existing problem regarding personal safety. MVP and documentation designed using <br />
            Figma and Adobe Creative Suite. Now building the app using React Native.
          </p>
        </div>
        <div className='project-1'>
          <Link to={"/AimTrainer"} className='project-title' onClick={scrollToTop}>
            Aim Trainer <span>{`(Web App)`}</span>
          </Link>
          <p>
            Aim Trainer app with scoring system built using ReactJs.
          </p>
        </div>
        <div className='project-1'>
          <Link to={"/CorridorGame"} className='project-title' onClick={scrollToTop}>
            Corridor Game <span>{`(Video Game)`}</span>
          </Link>
          <p>
            Horror video game built using Unreal Engine 5 and its visual scripting system {`(Blueprints)`}.
          </p>
        </div>
        <div className='project-1'>
          <Link to={"/WeightFate"} className='project-title' onClick={scrollToTop}>
            Weight's Fate <span>{`(Video Game)`}</span>
          </Link>
          <p>
            Escape Survival game built while participating at GMTK Game Jam 2024. Built the game using Unreal Engine 5
            <br />and its visual scripting system {`(Blueprints)`}.
          </p>
        </div>
        <div className='project-1'>
          <Link to={"/ObstacleCourse"} className='project-title' onClick={scrollToTop}>
            Obstacle Course <span>{`(Browser Game)`}</span>
          </Link>
          <p>
            Fun browser game built using React Three Fiber while attending Bruno Simon's course.
          </p>
        </div>
        <div className='project-1'>
          <Link to={"/Threedee"} className='project-title' onClick={scrollToTop}>
            Threedee <span>{`(3D)`}</span>
          </Link>
          <p>
            Some experiments with 3D here and there using Blender and Unreal Engine 5.
          </p>
        </div>
        <div className='project-1'>
          <Link to={"/Branding"} className='project-title' onClick={scrollToTop}>
            Branding <span>{`(Design)`}</span>
          </Link>
          <p>
            Social media posts designed for brands using Adobe Creative Suite.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
