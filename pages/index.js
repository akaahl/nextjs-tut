import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
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

      <Link href="/ninjas">
        <a>See ninja listing</a>
      </Link>
    </div>
  );
}
