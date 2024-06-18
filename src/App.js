import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

import './App.css';
import Awoke from './components/wallet-connect'
export default function App() {
  return (
    <div className='App font-[400] font-travel'>
      <BrowserRouter>
        <main className="pt-[60px] xs:px-4 md:pt-20 md:px-6 xl:pt-[100px] xl:px-[75px] pb-[100px] md:pb-[160px]">
          <Routes>
            <Route exact path="/wallets" element={<Awoke />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
