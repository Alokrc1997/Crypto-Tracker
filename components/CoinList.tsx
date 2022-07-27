import React from 'react'
import Coins from './Coins'
import {Coin} from '../interfaces'
type Props= {
    filteredCoins: any
}

const CoinList: React.FC<Props> = ({filteredCoins}) => {
  return (
    <>
    {filteredCoins.map((coin:any ) => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
      </>
  )
}

export default CoinList