import { useAddress, useMetamask } from '@thirdweb-dev/react';
import logo from './images/icon.png';

const App = () => {
  //Use the hooks thirdweb give us
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log('Address: ', address);

  //If user hasn't connected wallet to web app yet
  if(!address){
    return(
      <div className='landing'>
        <div >
          <img src={ logo } alt="logo" />
        </div>
        <h1>Welcome to SnowDAO</h1>
        <button onClick={connectWithMetamask} className='btn-hero'>🔗 Connect your wallet
        </button>
      </div>
    );
  }
  //If we have the user's address(they connected their wallet already)
  return (
    <div className="landing">
      <h1>👍🏽 Wallet connected! Now what?</h1>
    </div>
  );
};

export default App;
