import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

import styles from "./NavBar.module.css";
import Chevron from "../../assets/icon-chevron.svg";
import Menu from "../../assets/icon-hamburger.svg";

function NavBar() {
  const [planets, setPlanets] = createStore([
    { name: "Mercury", color: "#DEF4FC", link: "/mercury" },
    { name: "Venus", color: "#F7CC7F", link: "/venus" },
    { name: "Earth", color: "#545BFE", link: "/earth" },
    { name: "Mars", color: "#FF6A45", link: "/mars" },
    { name: "Jupiter", color: "#ECAD7A", link: "/jupiter" },
    { name: "Saturn", color: "#FCC86B", link: "/saturn" },
    { name: "Uranus", color: "#65F0D5", link: "/uranus" },
    { name: "Neptune", color: "#497EFA", link: "/neptune" },
  ]);
  const [hideMenu, setHideMenu] = createSignal(false);

  return (
    <div class={styles.navbar}>
      <div class={styles.containerMenu}>
        <p class={styles.title}>the planets</p>
        <span class={styles.iconMenu} onClick={() => setHideMenu(!hideMenu())}>
          <Menu />
        </span>
      </div>
      {hideMenu() && (
        <div class={styles.containerLink}>
          <ul class={styles.planetList}>
            {planets.map((planet) => (
              <li key={planet.name} class={styles.planetItem}>
                <a href={planet.link} class={styles.planetLink}>
                  <div class={styles.planetName}>
                    <div
                      class={styles.roundColor}
                      style={{ "background-color": planet.color }}
                    ></div>
                    {planet.name}
                  </div>
                  <Chevron />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
