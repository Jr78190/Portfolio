import React from 'react';
import './Competences.css';
import images from '../../data/images';

function Competences() {
  return (
    <main>
        <section className="competences-all" id="competences">
          <h2>Compétences</h2>
            <div className="comp-text">
              <div>
                <img src={images.Html} className="photbannerP" alt="HTML" title="HTML" />
                <p>HTML</p>
              </div>
              <div>
                <img src={images.Css} className="photbannerP" alt="CSS" title="CSS" />
                <p>CSS</p>
              </div>
              <div>
                <img src={images.Js} className="photbannerP" alt="JavaScript" title="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div>
                <img src={images.React} className="photbannerP" alt="React" title="React" />
                <p>React</p>
              </div>
              <div>
                <img src={images.Saas} className="photbannerP" alt="SaaS" title="SaaS" />
                <p>SaaS</p>
              </div>
              <div>
                <img src={images.Ts} className="photbannerP" alt="TypeScript" title="TypeScript" />
                <p>TypeScript</p>
              </div>
              <div>
                <img src={images.Redux} className="photbannerP" alt="Redux" title="Redux" />
                <p>Redux</p>
              </div>
              <div>
                <img src={images.Node} className="photbannerP" alt="Node.js" title="Node.js" />
                <p>Node.js</p>
              </div>
              <div>
                <img src={images.Mysql} className="photbannerP" alt="MySQL" title="MySQL" />
                <p>MySQL</p>
              </div>
              <div>
                <img src={images.MongoDB} className="photbannerP" alt="MongoDB" title="MongoDB" />
                <p>MongoDB</p>
              </div>
              <div>
                <img src={images.GitHub} className="photbannerP" alt="GitHub" title="GitHub" />
                <p>GitHub</p>
              </div>
              <div>
                <img src={images.GitLab} className="photbannerP" alt="GitLab" title="GitLab" />
                <p>GitLab</p>
              </div>
              <div>
                <img src={images.Trello} className="photbannerP" alt="Trello" title="Trello" />
                <p>Trello</p>
              </div>
              <div>
                <img src={images.Figma} className="photbannerP" alt="Figma" title="Figma" />
                <p>Figma</p>
              </div>
              <div>
                <img src={images.Canva} className="photbannerP" alt="Canva" title="Canva" />
                <p>Canva</p>
              </div>
            </div>
        </section>
    </main>
  );
}

export default Competences;
