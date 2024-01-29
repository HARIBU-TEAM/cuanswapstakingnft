import { FC } from 'react';
import { ThirdwebNFTMedia, usecontract, useNFT, web3button } from '@thirdweb-dev/react';

interface NFTCardProps {
    tokenId: number;
}

const NFTCard; FC<NFTCardProps> = ({ tokenId }) =>{
    const cuanswapstakingnft = "0x31A6655746D4C6cbF1f92443e3139323d2f28d54";
    const stakingaddress = "xB333A7825885c5722B6BAC29c5991B1dD272865b";

    const { contract: Cuanswapcontract } = useContract(cuanswapstakingnft, "nft-drop");
    const { contract: stakingContract } = useContract(stakingaddress, "staking");
    const { data: nft } = useNFT(Cuanswapcontract, tokenId);

    async function withdraw(nftId: string){
        await stakingContract?.call("withdraw", [nftId]);
    }
        
    return (
        <>
        {nft && (
            <div>
                <h3>{nft.metadata.name}</h3>
                {nft.metadata && (
                    <ThirdwebNFTMedia
                    metadata={nft.metadata}
                    />


                )}
                <web3button
                contractAddress={stakingaddress}
                action={() => withdraw(nft.metadata.id)}
                >withdraw</web3button>
            </div>
 )}
        </>
    )
}
export default NFTCard;