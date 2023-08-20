import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="category">
        <h2>Categorias</h2>

        <ul>
          <li>
            <a href="#">Ação</a>
          </li>
          <li>
            <a href="#">Aventura</a>
          </li>
          <li>
            <a href="#">Drama</a>
          </li>
          <li>
            <a href="#">Religioso</a>
          </li>
        </ul>
      </div>

      <div className="about">
        <h2>About</h2>

        <ul>
          <li>
            <a href="#">Website</a>
          </li>
          <li>
            <a href="#">Linkedin</a>
          </li>
          <li>
            <a href="#">GitHub</a>
          </li>
        </ul>
      </div>

      <div className="newsletter">
        <h2>Newsletter</h2>

        <div className="content-input">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            neque
          </p>
          <input placeholder="fulano@gmail.com" type="email" />

          <button>Escreva-se</button>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
