import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, saepe,
        vel, temporibus eum ex tempore ducimus rem unde perspiciatis ut iure
        magnam quo at omnis odio quas et architecto. Aliquid.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, saepe,
        vel, temporibus eum ex tempore ducimus rem unde perspiciatis ut iure
        magnam quo at omnis odio quas et architecto. Aliquid.
      </p>
      <Footer />
    </div>
  );
}
