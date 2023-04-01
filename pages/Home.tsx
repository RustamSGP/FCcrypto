import type { NextPage } from "next";

const Home: NextPage = () => {

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