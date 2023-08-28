import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/ThirdwebGuideFooter";
import Header from "../components/Header";



// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;
/*<ThirdwebProvider
activeChain="goerli"
clientId="MY_CLIENT_ID" // You can get a client id from dashboard settings
>
...
</ThirdwebProvider>*/

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
  //  desiredChainId={activeChainId}
    activeChain={activeChainId}
    clientId={process.env.MY_CLIENT_ID}
    >
      <Head>
        <title>Фан Шоп ФК Титан</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn How To Use Thirdweb's Marketplace with Next.JS To List Your NFTs For Sale, Accept Bids, and Buy NFTs"
        />
        <meta
          name="keywords"
          content="Thirdweb, Marketplace, NFT Marketplace Tutorial, NFT Auction Tutorial, How To Make OpenSea"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
