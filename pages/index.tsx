import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import SearchBar from "../components/SearchBar";
import CoinList from "../components/CoinList";
import Layout from "../components/Layout";
import { useState } from "react";

const Home: NextPage = ({ filteredCoins }: any) => {
  const [search, setsearch] = useState('');

  const allCoins= filteredCoins.filter((coin:any)=>
    coin.name.toLowerCase().includes(search.toLowerCase()));

    const handleChange=(e:any)=>{
      e.preventDefault();
      setsearch(e.target.value)
    }
  return (
    <Layout>
      <div className="coin_app">
        <SearchBar type="text" placeholder="Search" onChange={handleChange} />
        <CoinList filteredCoins={allCoins} />
      </div>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );

  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};
