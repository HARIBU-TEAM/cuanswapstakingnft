import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <Image
        src="/images/logo-cuan.png"
        className="mb-4"
        alt="drop"
        width={100}
        height={64}
      />
      <h1 className="text-3xl font-extrabold text-purple-500">
        Welcome toCuanswap NFT
      </h1>
      <h5>Stake your NFT</h5>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/mint")}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/drop.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Mint a new NFT</h2>
          <p className={styles.selectBoxDescription}>
            Use the Edition Drop Contract to claim an NFT from the collection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
