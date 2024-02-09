import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

// Deklarasi gaya tombol yang mirip dengan Tailwind CSS
const buttonStyles: React.CSSProperties = {
  padding: "1rem 1.5rem",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#ffffff",
  backgroundImage: "linear-gradient(to right, #9b07a9, #fe6965)", // Gradien warna ungu ke biru
  borderRadius: "0.5rem",
  border: "1px solid transparent",
  transition: "background-color 0.2s",
  cursor: "pointer",
  display: "inline-block",
  textAlign: "center",
  textDecoration: "none",
  marginBottom: "3rem",
};

// Deklarasi gaya untuk iframe
const iframeStyles: React.CSSProperties = {
  padding: "1rem", // Padding yang diinginkan
  border: "none", // Menghilangkan border
  overflowX: "hidden",
  background: "none",
};

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Mint An NFT!</h1>

      <p className={styles.explain}>
        Here is where we use our <b>Edition Drop</b> contract to allow users to
        mint one of the NFTs that we lazy minted.
      </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* nft 1 */}
        <div>
          <iframe
            src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0x31A6655746D4C6cbF1f92443e3139323d2f28d54&chain=%7B%22name%22%3A%22BNB+Smart+Chain+Mainnet%22%2C%22chain%22%3A%22BSC%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fbinance.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22BNB+Chain+Native+Token%22%2C%22symbol%22%3A%22BNB%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22bnb%22%2C%22chainId%22%3A56%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22binance%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fbinance-coin%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=24d8887e4205b8fd0d19e86135509ac1&tokenId=0&theme=dark&primaryColor=purple"
            width="400px"
            height="600px"
            style={iframeStyles} // Terapkan gaya untuk iframe
          ></iframe>
          <h2 className={styles.selectBoxTitle}>Your Stake NFTs</h2>

          {/* Gunakan properti style untuk menerapkan gaya tombol */}
          <button
            style={buttonStyles}
            onClick={() => router.push("/stake-starters-oasis")}
          >
            Check Now
          </button>
        </div>
        {/* nft 2 */}
        <div>
          <iframe
            src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0xaaDF63E510fdf55420F3255FF432bcBBa11A035a&chain=%7B%22name%22%3A%22BNB+Smart+Chain+Mainnet%22%2C%22chain%22%3A%22BSC%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fbinance.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22BNB+Chain+Native+Token%22%2C%22symbol%22%3A%22BNB%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22bnb%22%2C%22chainId%22%3A56%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22binance%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fbinance-coin%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=24d8887e4205b8fd0d19e86135509ac1&tokenId=0&theme=dark&primaryColor=purple"
            width="400px"
            height="600px"
            style={iframeStyles} // Terapkan gaya untuk iframe
          ></iframe>
          <h2 className={styles.selectBoxTitle}>Your Stake NFTs</h2>

          {/* Gunakan properti style untuk menerapkan gaya tombol */}
          <button
            style={buttonStyles}
            onClick={() => router.push("/stake-futuristic-haven")}
          >
            Check Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mint;
