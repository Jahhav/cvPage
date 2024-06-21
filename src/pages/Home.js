import "./Home.css";
import Kurz from "../components/Kurz";
import Zkusenost from "../components/Zkusenost";

const Home = () => {
  return (
    <div className="body-container">
      <div className="border-window">
        <div className="picture-cvontainer"></div>
        <div className="heading-container">
          <h1>Jan Havlát</h1>
          <h3 className="hedings-margins">Vývojář Javascriptu - junior</h3>
        </div>
        <div className="content-container">
          <div className="left-side">
            <div className="osobni-ifno">
              <h2>Osobní informace</h2>
              <ul>
                <li>
                  <span>Email</span>: jan.havlath@gmail.com
                </li>
                <li>
                  <span>Tel</span>: 730 652 581
                </li>
                <li>
                  <span>Bydliště</span>: Brno, Česko
                </li>
                <li>
                  <span>Řidičské oprávnění</span>: B, A2
                </li>
                <li>
                  <a href="https://jahhav.github.io/">Prtfolio</a>
                </li>
                <li>
                  <a href="https://github.com/Jahhav">GitHub</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jan-havlat">LinkedIN</a>
                </li>
              </ul>
            </div>
            <div className="vzdelani">
              <h2>Vzdělání</h2>
              <h4 className="hedings-margins">
                Středoškolské s maturitou (Logistika - ukončená maturitní
                zkouškou)
              </h4>
              <p className="paragraps-uls-margins">
                Střední škola informatiky, poštovnictví a finančnictví Brno,
                příspěvková organizace zář 2015 - čvn 2019
              </p>
            </div>
            <div className="dovednosti">
              <h2>Dovednosti</h2>
              <ul>
                <li>Psaní všema deseti - ATF</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Objektově orientované</li>
                <li>Rozhraní API REST</li>
                <li>Git/GitHub</li>
                <li>Coding (HTML, CSS)</li>
                <li>Office 365</li>
              </ul>
            </div>
            <div className="jazyky">
              <h2>Jazyky</h2>
              <ul>
                <li>Čeština</li>
                <li>Angličtina</li>
              </ul>
            </div>
          </div>
          <div className="right-side">
            <div className="souhrn">
              <h2>Souhrn</h2>
              <p>
                Pracuji na pozici monitoringu IT infrastruktury pro velké
                korporace. Stále více mě přitahuje vývoj webových aplikací,
                kterému se věnuji ve svém volném čase, zejména v JavaScriptu a
                Reactu. Pokračuji ve vzdělávání a motivuje mě přechod do
                softwarového vývoje.
              </p>
            </div>
            <div className="prac-zkus">
              <h2>Pracovní zkušenosti</h2>

              <Zkusenost
                nameOfPosition="Associate Systems Management - Science Logic"
                company="Kyndryl Client Center"
                dateFromTo="květen 2022 - Současnost"
                tasks={[
                  "Monitorování serverů pomocí technologie Science Logic",
                  "Práce s Linux terminálem",
                  "Práce s nástrojem pro správu tiketů ServiceNow",
                  "Monitorování pomocí Netcool",
                  "Ad-hoc řešení problémů",
                  "Odstraňování problémů",
                  "Údržba kolektorů a serverů",
                  "Denní komunikace se zákazníky",
                ]}
              />

              <Zkusenost
                nameOfPosition="Supply chain associate"
                company="Currys CoE s.r.o., Brno"
                dateFromTo="září 2019 - březen 2022"
                tasks={[
                  "Prošetřování odchylek v dodávkách",
                  "Kontrola systému SAP ERP a zjišťování stavu objednávek",
                  "Podpora dopravců (identifikace neznámých produktů na pobočkách)",
                  "Denní komunikace se sklady, obchody a zákaznickými centry prostřednictvím e-mailu",
                  "Synchronizace dat",
                  "Meetingy s obchodními partnery",
                  "Hledání zlepšení a úspor nákladů",
                ]}
              />
            </div>
            <div className="kurzy">
              <h2>Kurzy</h2>

              <Kurz
                nameOfKurz={"ENGETO CERTIFIED REACT GRADUATE"}
                company={"Engeto"}
                date={"Červen 2024"}
                id={"ID pověření 2024-R-012"}
                description={
                  "React.JS, components, UseEffekt, npm, API, TypeScript, Reagující web design, states"
                }
              />
              <Kurz
                nameOfKurz={"The Complete Web Development Bootcamp"}
                company={"Udemy"}
                date={"leden 2023"}
                // id={"ID pověření 2024-R-012"}
                description={
                  "Bootstrap 5, Javascript ES6, DOM Manipulation, Git, GitHub Version Control"
                }
              />
              <Kurz
                nameOfKurz={
                  "Complete React Developer (w/ Redux, Hooks, GraphQL)"
                }
                company={"Udemy"}
                date={"prosinec 2023"}
                // id={"ID pověření 2024-R-012"}
                description={
                  "React Basics, React Router, Authentication, Firebase, Netlify"
                }
              />
            </div>
            <div className="konicky">
              <h2>Koníčky</h2>
              <ul>
                <li>Rodina</li>
                <li>Zimní sporty</li>
                <li>Jízda na kole</li>
                <li>Videohry</li>
                <li>Investice</li>
                <li>Formule 1</li>
                <li>Vzdělávání se (historie, vesmír, ...)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
