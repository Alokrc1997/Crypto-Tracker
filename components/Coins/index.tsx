import Image from "next/image";
import Link from "next/link";
import { Coin } from "../../interfaces";
import styles from "./Coins.module.css";
const Coins: React.FC<Coin> = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) => {
  return (
    <Link href={`/coin/${id}`}>
      <a>
        <div className={styles.coin_container}>
          <div className={styles.coin_row}>
            <div className={styles.coin}>
              <Image
                src={image}
                alt={name}
                className={styles.coin_img}
                height={30}
                width={30}
              />
              <h1 className={styles.coin_h1}>{name}</h1>
              <p className={styles.coin_symbol}>{symbol}</p>
            </div>
            <div className={styles.coin_data}>
              <p className={styles.coin_price}>&#8377; {price}</p>
              <p className={styles.coin_volume}>
                &#8377; {volume.toLocaleString("en-US")}
              </p>
              {priceChange < 0 ? (
                <p className={(styles.coin_percent, styles.red)}>
                  {priceChange.toFixed(2)}%
                </p>
              ) : (
                <p className={(styles.coin_percent, styles.green)}>
                  {priceChange.toFixed(2)}%
                </p>
              )}
              <p className={styles.coin_marketcap}>
                Mkt Cap: &#8377; {marketcap.toLocaleString("en-US")}{" "}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Coins;
