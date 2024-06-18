import React, { useState } from 'react';

const Login = () => {
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [wallets] = useState([
    { id: 1, name: 'MetaMask' },
    { id: 2, name: 'Trust Wallet' },
    { id: 3, name: 'Coinbase Wallet' },
    // Add more wallets as needed
  ]);

  const handleWalletChange = (event) => {
    setSelectedWallet(event.target.value);
  };

  const handleLogin = () => {
    // Implement your login logic here, using selectedWallet
    console.log('Logged in with wallet:', selectedWallet);
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="walletSelect">Select Wallet:</label>
        <select id="walletSelect" onChange={handleWalletChange}>
          <option value="">Select Wallet</option>
          {wallets.map(wallet => (
            <option key={wallet.id} value={wallet.name}>
              {wallet.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleLogin} disabled={!selectedWallet}>Login</button>
      {selectedWallet && (
        <div>
          <p>Selected Wallet: {selectedWallet}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
