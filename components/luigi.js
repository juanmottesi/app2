import Image from "next/image";
import styles from "../styles/Luigi.module.css";

const Luigi = () => {
  return (
    <main className={styles.main}>
      <Image
        src="/luigi.jpg"
        alt="Luigi"
        width={200}
        height={413}
      />
      <h1 className={styles.title}>{"G'day! I'm Luigi, a microfrontend."}</h1>
    </main>
  );
}

export default Luigi;