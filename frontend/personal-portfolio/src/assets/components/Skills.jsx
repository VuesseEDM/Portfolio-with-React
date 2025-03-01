import '../styles/skills.css';

function Skills() {
  return (
    <article>
      <h2 className='skills-title'>MY SKILLS</h2>
      <div className="icon-skills">

        {/* HTML */}
        <div className="icon">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" width="46" height="46"/>
          </a>
        </div>

        {/* CSS */}
        <div className="icon">
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" width="46" height="46"/>
          </a>
        </div>

        {/* JavaScript */}
        <div className="icon">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="46" height="46"/>
          </a>
        </div>

        {/* React */}
        <div className="icon">
          <a href="https://react.dev/" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="46" height="46"/>
          </a>
        </div>

        {/* Redux */}
        <div className="icon">
          <a href="https://redux.js.org/" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" width="46" height="46"/>
          </a>
        </div>

          {/* MongoDB */}
          <div className="icon">
          <a href="https://www.mongodb.com/" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" width="46" height="46"/>
          </a>
        </div>

        {/* Node.js */}
        <div className="icon">
          <a href="https://nodejs.org/" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" width="46" height="46"/>
          </a>
        </div>

        {/* Axios */}
        <div className="icon">
          <a href="https://axios-http.com/" target="_blank">
            <img src="https://axios-http.com/assets/logo.svg" alt="Axios" width="46" height="46"/>
          </a>
        </div>

        {/* Webpack */}
        <div className="icon">
          <a href="https://webpack.js.org/" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="Webpack" width="46" height="46"/>
          </a>
        </div>

        {/* TypeScript */}
        <div className="icon">
          <a href="https://www.typescriptlang.org/" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="46" height="46"/>
          </a>
        </div>

        {/* Sass */}
        <div className="icon">
          <a href="https://sass-lang.com/" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" width="46" height="46"/>
          </a>
        </div>
      </div>
    </article>
  );
}

export default Skills;
