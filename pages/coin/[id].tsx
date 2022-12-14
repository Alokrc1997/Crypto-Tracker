import Image from "next/image";
import Layout from "../../components/Layout"
import styles from "./Coin.module.css"
const Coin = ({ coin }:any) => {
    return (
      <Layout>
        <div className={styles.coin_page}>
          <div className={styles.coin_container}>
            <Image
              src={coin.image.large}
              alt={coin.name}
              width={100}
              height= {100}
              className={styles.coin_image}
            />
            <h1 className={styles.coin_name}>{coin.name}</h1>
            <p className={styles.coin_ticker}>{coin.symbol}</p>
            <p className={styles.coin_current}>&#8377; 
              {coin.market_data.current_price.inr}
            </p>
          </div>
        </div>
      </Layout>
    );
  };
  
  export default Coin;
  
  export async function getServerSideProps(context: any) {
    const { id } = context.query;
  
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
    `);
  
    const data = await res.json();
  
    return {
      props: {
        coin: data
      }
    };
  }