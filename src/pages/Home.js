import "./Home.css";

const Home = () => {
  return (
    <div className="body-container">
      <div className="border-window">
        <div className="picture-cvontainer"></div>
        <div className="heading-container">
          <h1>Jan Havlát</h1>
          <h3>Vývojář Javascriptu - junior</h3>
        </div>
        <div className="content-container">
          <div className="left-side">
            <div className="osobni-ifno">
              <h2>Osobní informace</h2>
              <ul>
                <li>jan.havlath@gmail.com</li>
                <li>730 652 581</li>
                <li>Brno, Česko</li>
                <li>B, A2</li>
              </ul>
            </div>
            <div className="vzdelani">
              <h2>Vzdělání</h2>
              <h4>
                Středoškolské s maturitou (Logistika - ukončená maturitní
                zkouškou)
              </h4>
              <p>
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

              <h3>Associate Systems Management - Science Logic</h3>
              <h4>Kyndryl Client Center</h4>
              <p>květen 2022 - Současnost</p>
              <ul>
                <li>Monitorování serverů pomocí technologie Science Logic</li>
                <li>Práce s Linux terminálem</li>
                <li>Práce s nástrojem pro správu tiketů ServiceNow</li>
                <li>Monitorování pomocí Netcool</li>
                <li>Ad-hoc řešení problémů</li>
                <li>Odstraňování problémů</li>
                <li>Údržba kolektorů a serverů</li>
                <li>Denní komunikace se zákazníky</li>
              </ul>

              <h3>Supply chain associate</h3>
              <h4>Currys CoE s.r.o., Brno</h4>
              <p>září 2019 - březen 2022</p>
              <ul>
                <li>Prošetřování odchylek v dodávkách</li>
                <li>Kontrola systému SAP ERP a zjišťování stavu objednávek</li>
                <li>
                  Podpora dopravců (identifikace neznámých produktů na
                  pobočkách)
                </li>
                <li>
                  Denní komunikace se sklady, obchody a zákaznickými centry
                  prostřednictvím e-mailu
                </li>
                <li>Synchronizace dat</li>
                <li>Meetingy s obchodními partnery</li>
                <li>Hledání zlepšení a úspor nákladů</li>
              </ul>
            </div>
            <div className="kurzy">
              <h2>Kurzy</h2>

              <h3>The Complete Web Development Bootcamp</h3>
              <h4>Udemy</h4>
              <p>leden 2023</p>

              <h3>Complete React Developer (w/ Redux, Hooks, GraphQL)</h3>
              <h4>Udemy</h4>
              <p>prosinec 2023</p>
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
