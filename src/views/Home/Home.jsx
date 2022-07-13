import NavBar from "../../components/NavBar/NavBar";

import Logo from "../../assets/background-stars.svg";
import styles from "./Home.module.css";

function App() {
  return (
    <>
      <div class={styles.bgc}>
        <Logo />
      </div>
      <NavBar />
      <div>
        <h1>Home</h1>
      </div>
    </>
  );
}

export default App;
