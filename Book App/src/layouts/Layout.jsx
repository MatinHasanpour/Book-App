import style from "./Layout.module.css";
import { FaHeartPulse } from "react-icons/fa6";

function Layout({ children }) {
  return (
    <>
      <header className={style.header}>
        <h1>Book App</h1>
        <p>
          <a href="https:botostart.ir">Botostart</a> | React.js Full Course
        </p>
      </header>
      {children}
      <footer className={style.footer}>
        <p>Developed by Matin with  <FaHeartPulse color="red" fontSize="1.4rem" /></p>
      </footer>
    </>
  );
}

export default Layout;
