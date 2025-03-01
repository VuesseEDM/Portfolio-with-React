import '../styles/projects.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProjectCard from '../components/CardProject';
import Mood from '../components/Mood';
import '../styles/projects.css';
import { Helmet } from 'react-helmet';

function Projects() {
  
  return (
    <>
<Helmet>
        <title>My Projects - Vincenzo Sorrentino</title>
        <meta name="description" content="Explore the projects of Vincenzo Sorrentino, a front-end developer." />
        <meta name="keywords" content="projects, portfolio, front end development, react, javascript" />
        <meta name="author" content="Vincenzo Sorrentino" />
</Helmet>


      <NavBar />
      <main className="main animate__animated animate__slideInLeft">
        <a name="projects">
          <h1 className="projects-title">MY PROJECTS</h1>
        </a>
        <div className="container-4">

        <ProjectCard
          image="https://raw.githubusercontent.com/VuesseEDM/meditate-app/refs/heads/main/src/img/anteprima.png"
          alt="Meditate App"
          title="Meditate App"
          url="https://github.com/VuesseEDM/meditate-app"
          />

          <ProjectCard
          image="https://raw.githubusercontent.com/VuesseEDM/il-nostro-pianeta/main/public/img/home.png"
          alt="Il nostro Pianeta"
          title="Il nostro Pianeta"
          url="https://github.com/VuesseEDM/il-nostro-pianeta"
          />

          <ProjectCard
            image="https://github.com/VuesseEDM/PORTFOLIO-PROJECT/blob/main/assets/images/game.png?raw=true"
            alt="My first mini-game"
            title="Cosmic Counter X"
            url="https://github.com/VuesseEDM/COSMIC-COUNTER-X"
          />
          <ProjectCard
            image="https://github.com/VuesseEDM/PORTFOLIO-PROJECT/blob/main/assets/images/cyber.png?raw=true"
            alt="My first project using API"
            title="Cyber Chronicle"
            url="https://github.com/VuesseEDM/meditate-app"
          />

          <ProjectCard
            image="https://github.com/VuesseEDM/PORTFOLIO-PROJECT/blob/main/assets/images/temp.png?raw=true"
            alt="My app for calculate temperature"
            title="Temperature Converter"
            url="https://github.com/VuesseEDM/TEMPERATURE-CONVERTER-"
          /> 

          <ProjectCard
          image="../../../public/image/pokemonnn.png"
          alt="Pokemon Card"
          title="Pokemon Card"
          url="https://github.com/VuesseEDM/All-Pokemon"
          />

          <ProjectCard
          image="../../../public/image/foto typescript project.png"
          alt="Bonny the bonus"
          title="Bonny the bonus"
          url="https://github.com/VuesseEDM/Bonny-The-Bonus"
          />
  
          <ProjectCard
            image="https://github.com/VuesseEDM/PORTFOLIO-PROJECT/blob/main/assets/images/quiz.png?raw=true"
            alt="Multiplayer Quiz App"
            title="Multiplayer Quiz App"
            url="https://github.com/VuesseEDM/Trivia-Quiz"
          />
            <ProjectCard
            image="https://github.com/VuesseEDM/PORTFOLIO-PROJECT/blob/main/assets/images/pomelia.png?raw=true"
            alt="my first project"
            title="Hotel Pomelia"
            url="https://github.com/VuesseEDM/HOTEL-POMELIA"
          />
          <ProjectCard
            image="https://github.com/VuesseEDM/PORTFOLIO-PROJECT/blob/main/assets/images/personal.png?raw=true"
            alt="my second project"
            title="Personal Portfolio"
            url="https://github.com/VuesseEDM/PORTFOLIO-PROJECT"
          />
        
          <ProjectCard
            image="https://github.com/VuesseEDM/PORTFOLIO-PROJECT/blob/main/assets/images/progress.png?raw=true"
            alt="Work in progress"
            title="Work in Progress"
            url="https://github.com/VuesseEDM/WORK-IN-PROGRESS"
            />
         
        </div>
      </main>
     <Mood/>
      <Footer/>
    </>
  );
}

export default Projects;
