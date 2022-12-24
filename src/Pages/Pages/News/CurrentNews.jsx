import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import { ReactComponent as Right } from "../../../Imgs/Left.svg";
import { ReactComponent as Left } from "../../../Imgs/Right.svg";

import Coin from "../../../Imgs/newsCoin.png";
import Calc from "../../../Imgs/newsCalc.png";
import Comp from "../../../Imgs/NewsComp.png";

import "./CurrentNews.scss";
const CurrentNews = () => {
  const list = [
    {
      title: "Рынок акций США закрылся падением, Dow Jones снизился на 0,63%",

      text_sub1:
        "Cardano is the second largest PoS blockchain in terms of staking market capitalization in monetary terms, according to data from crypto analytics portal CryptoRank. Second only to Ethereum, but by more than double, Cardano has $8.12 billion in ADA tokens staked.Source: CryptoRank ",
      text_sub2:
        "Even more impressive is Cardano's staking ratio, i.e., what percentage of the token's supply is locked in staking. Thus, according to the Staking Rewards portal, 71.63% of the circulating ADA offering is staked. Of the top crypto projects, only BNB Chain (BNB) and Internet Computer (ICP) can compete with Cardano.",
      text_sub3: "Cardano v. Solana",
      text_sub4:
        "Solana (SOL) is not far behind, with a staking ratio of 69.6%, but its staked market cap is only $4.96 billion. It is likely that Solana would have been higher on this list than Cardano had the SOL price not fallen by more than 50% due to the project's affiliation with infamous cryptocurrency exchange FTX.",
      text_sub5:
        "Cardano itself rather benefited from the collapse of FTX. First, ADA was not listed on the exchange, which helped avoid a large sell-off. Second, its main competitor, Solana, washed down the market cap top along with investor confidence in it. Third, the number of new addresses being created on the ADA network increased significantly after the incident, which also signals a migration away from blockchains like Solana to Cardano.",
      img1: Coin,
      img2: Calc,
    },

    // {
    //   title:
    //     "Bitcoin Miners Selling at Fastest Rate in 7 Years, Mining Stocks Slump",
    //   text_sub1: `Bitcoin miners are having a rough time at the moment. They’re offloading the asset at increased rates and company stocks are slumping.`,
    //   text_sub2:
    //     "With BTC prices hitting a new bear cycle low on Nov. 22, the pressure on Bitcoin miners has never been greater.",
    //   text_sub3:
    //     "On Nov. 21, Capriole Fund founder Charles Edwards observed that Bitcoin miners were selling aggressively. According to the chart, the sell-off has increased by 400% so far this month.",
    //   text_sub4:
    //     "It is also the most aggressive selling seen in almost seven years, he said before adding:",
    //   text_sub5:
    //     "Pressure Mounts on Bitcoin Miners Bitcoin miners are facing a triple whammy at the moment. Hash rates are near their highest levels which makes it harder to mine the next block. This is good for network security but bad for miners. According to Blockchain.com, the network hash rate is currently 261 EH/s (exahashes per second). Furthermore, it hit a peak of 273 EH/s on Nov. 2.",
    //   img2: Comp,
    // },
  ];
  // current_news_carusel current_news_carusel_title current_news_carusel_text current_news_img current_news_img_text
  return (
    <div>
      <Header />
      <div className="current_news">
        <div className="current_news_">
          <div className="current_news_rigth">
            <Right className="slick-prev_news" />
          </div>
          <div className="current_news_content">
            {list.map((item, i) => (
              <div key={i}>
                <div className="current_news_carusel">
                  <div className="current_news_carusel_title">{item.title}</div>
                  <div className="current_news_carusel_text">
                    {item.text_sub1}
                  </div>
                  <div className="current_news_carusel_text">
                    {item.text_sub2}
                  </div>
                  <div className="current_news_img">
                    <img src={item.img1} alt="" className="current_news_img_" />
                  </div>
                  <div className="current_news_carusel_text">
                    {item.text_sub3}
                  </div>
                  <div className="current_news_carusel_text">
                    {item.text_sub4}
                  </div>
                  <div className="current_news_img">
                    <img src={item.img2} alt="" className="current_news_img_" />
                  </div>
                  <div className="current_news_carusel_text">
                    {item.text_sub5}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="current_news_left">
            <Left className="slick-next_news" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CurrentNews;
