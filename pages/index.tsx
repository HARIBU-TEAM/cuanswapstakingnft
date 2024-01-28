import { useAddress, useContract, Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  const address = useAddress();

  const cuanswapstakingnft = "0x31A6655746D4C6cbF1f92443e3139323d2f28d54";
  const stakingaddress = "";

  const { contract: Cuanswapcontract } = useContract (cuanswapstakingnft, "nft-drop");
  const { contract: stakingContract } = useContract (stakingaddress, "staking");
  return (
    <main className={styles.main}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>CUANSWAP STAKING NFT</h1>
      </div>
      <Web3Button contractAddress={cuanswapstakingnft} action={(cuanswapcontract) => cuanswapcontract.erc721.claim(1)}>Claim Cuan NFT</Web3Button>
    </div>
  </main>
  );
}

export default Home;