import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  MediaRenderer,
  useActiveListings,
  useContract,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { marketplaceContractAddress } from "../addressesM";


const Home: NextPage = () => {
  const router = useRouter();
  const { contract: marketplace } = useContract(marketplaceContractAddress, "marketplace");
  const { data: listings, isLoading: loadingListings } = useActiveListings(marketplace);
    return (
          <div>
            <div className="Main"> 
              <h1>Клубiв багато 
                <a>                - найкращий один! </a></h1>   
            </div>
    
            <div className="Content">
              <div className="Grid">
                <div className="grid1">
                  <div className="section1"> Мы открыли свой crypto FanShop</div>
                  <div className="section2"></div>
                </div>
    
                <div className="grid2">
                  <div className="section3"></div>
                  <div className="section4"></div>
                </div>
              </div>
    
              <div className="grid3">
                <div className="section5"></div>
                <div className="section5"></div>
                <div className="section5"></div>
                <div className="section5"></div>
              </div>
            </div>
    
            <div className="footer">
              <h1>Клубiв багато 
                <a>             - найкращий один! </a></h1>   
            </div>
          </div>
      );
    };
    
export default Home;
