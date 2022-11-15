import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>{/*{}안에 문자열을 쓰려면 백틱으로 쓰는거 잊지말기*/}
      {loading ? <strong>Loading...</strong> :       <select>
        {coins.map((coin) => (
          <option>
            {coin.name}({coin.symbol}): ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>}

      {/* coins배열에 있는 데이터를 map()으로 나열하는데 함수로 리스트를 뿌려줌.ㅇㅋ */}
    </div>
  );
}

export default App;
