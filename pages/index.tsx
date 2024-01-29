import { useAddress, useContract, Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  const address = useAddress();

  const cuanswapstakingnft = "0x31A6655746D4C6cbF1f92443e3139323d2f28d54";
  const stakingaddress = "0xB333A7825885c5722B6BAC29c5991B1dD272865b";

  const { contract: Cuanswapcontract } = useContract (cuanswapstakingnft, "nft-drop");
  const { contract: stakingContract } = useContract (stakingaddress, "staking");

const { data: myCuanswapNFT} = useOwnedNFTs(cuanswapstakingnft, address);

  return (
    <main className={styles.main}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>CUANSWAP STAKING NFT</h1>
      </div>
      <Web3Button contractAddress={cuanswapstakingnft} action={(cuanswapcontract) => cuanswapcontract.erc721.claim(1)}>Claim Cuanswap</Web3Button>
      <br />
      <h1>My Cuanswap</h1>
      <div>
        {myCuanswapNFT?.map((nft) =>(
          <div>
            <h3>{nft.metadata.name}</h3>
            <ThirdwebNftMedia
            metadata={nft.metadata}
            />

      </div>
        ))}
    </div>
  </main>
  );
}

export default Home;