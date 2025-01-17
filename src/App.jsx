import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <header className="header-container">
        <nav className="header-list">
          <ul className="header-navbar-list">
            <li className="header-listes">
              <a href="#" className="header-link">Home</a>
            </li>
            <li className="header-listes">
              <a href="#" className="header-link">TUIT2025</a>
            </li>
            <li className="header-listes">
              <a href="#" className="header-link">Program</a>
            </li>
            <li className="header-listes">
              <a href="#" className="header-link">Registration</a>
            </li>
            <li className="header-listes">
              <a href="#" className="header-link">Venu & Travel</a>
            </li>
            <li className="header-listes">
              <a href="#" className="header-link">Commite</a>
            </li>
            <li className="header-listes">
              <a href="#" className="header-link">Contact us</a>
            </li>
          </ul>
        </nav>

        <section className="section">
          <div className="section-list">
            <img
              src="https://static.tuit.uz/crop/3/2/850__80_3202886790.jpg"
              alt="Tatu"
              width={600}
              height={400}
            />
            <br />
            <a
              href="https://www.icisct2024.org/icisct2024.png"
              className="section-link"
            >
              <b>TUIT2025 Conference Brochure</b>
            </a>
            <br />
            <img
              src="https://www.icisct2024.org/images/TUIT_LOGO.png"
              alt="TUIT logo"
              className="logo-img"
            />
            <img
              src="https://www.icisct2024.org/images/DT_LOGO.2.png"
              alt="DTlogo"
              className="logo-img"
            />
          </div>

          <div className="section-listes">
            <p className="section-title">
              International Conference on Information Science and Communications
              Technologies - Applications, Trends and Opportunities
            </p>
            <br />
            <b className="section-listes-text">
              <a href="#">http://icisct2024.org/openconf/openconf.php</a> Paper
              submission is open. Authors can attend or present paper(s) online.
            </b>
            <br />
            <b className="section-listes-text">
              ICISCT 2024 conference is co-organized by Kookmin University of
              Republic of Korea, and is Sponsored technically by IEEE and IEEE
              Photonics Society.
            </b>
            <br />
            <b className="section-listes-text">
              Accepted papers will be submitted for inclusion in Engineering
              Index (EI), EI Compendex, Scopus, and IEEE XploreTM. ISBN numbers
              will be assigned to accepted papers.
            </b>
            <br />
            <p className="section-navbar-title">
              XPLORE COMPLIANT: Part Number: CFP24H74-ART ISBN: 979-8-3315-2792-1
            </p>
            <b className="section-listes-textes">
              7th, and 8th of November 2024, Kookmin University, Republic of
              Korea. Conference Venue: Kookmin University, South Korea.
            </b>
            <br />
            <b className="section-listes-text">
              Accepted papers will be published in the conference's proceedings
              and/or USB: Part Number: CFP24H74-USB, ISBN: 979-8-3315-2791-4.
            </b>
            <br />
            <img
              src="https://www.icisct2024.org/images/ieeeps.png"
              alt="ieee"
            />
            <br />
            <img
              src="https://www.icisct2024.org/images/image001.gif"
              alt=""
            />
          </div>
        </section>
      </header>
    </>
  );
}

export default App;
