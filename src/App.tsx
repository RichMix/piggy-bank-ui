import { useState } from 'react'
import reactLogo from './assets/media/PiggyGif.gif'
import viteLogo from '/vite.svg'
import backgroundImage from './assets/media/pig-bg/pg.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(count)

  const [minting, setMinting] = useState(false);

  const handleMint =async () => {
    setMinting(true);
    console.log('Minting the Piggy Bank NFT');
    setMinting(false);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Ready To Mint That Piggy?</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Mint site currently in development. Please be patient.
        </p>
      </div>
      <p className="read-the-docs">
        Please connect your wallet to mint a pig.
      </p>
    </>
  )
}

export default App
