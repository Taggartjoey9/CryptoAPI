import './App.css';
import {useState, useEffect} from 'react';


const COINS = [
  'BTCUSDT',
  'ETHUSDT',
  'SOLUSDT',
  'ADAUSDT',
  'DOGUSDT'
]

function App() {

  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    fetch('https://binance.us/api/v3/ticker/24hr')
    .then((res) => res.json())
    .then((data) => {
      const filteredData = data.filter((ticker) => {
        if (COINS.includes(ticker.symbol)) {
          return true;
        }
      });
      setCoinData(filteredData);
    });
  }, []);

  return (
        <div className="App">
          <nav>
            <img
              alt="logo"
              src="https://assets.codepen.io/6060109/crypto-logo-secondary.png"
            />
            <input type="text" placeholder="Search" />
          </nav>
          <div className="main-content">
            <h2>Today's cryptocurrency prices</h2>
            <table>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>24h %</th>
              </tr>
              
              <tr>
                <td>1</td>
                <td>Bitcoin</td>
                <td>$40,000</td>
                <td style={{ color: "green" }}>▲1.02%</td>
              </tr>
            </table>
            <div className="bottom-logo-ctr">
              <img
                className="bottom-logo"
                alt="logo"
                src="https://assets.codepen.io/6060109/crypto-logo-primary.png"
              />
            </div>
          </div>
        </div>
      );
    }    

export default App;
