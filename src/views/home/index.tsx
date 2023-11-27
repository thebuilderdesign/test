// Next, React
import { FC, useEffect, useState } from 'react';
import CountdownTimer from '../../hooks/CountdownTimer';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';


// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import CountDownTimer from '../../hooks/CountdownTimer';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;

  return (

    <div className="p-4 mx-auto md:hero">
      <div className="flex flex-col md:hero-content">
        <div className='mt-6'>
        <h1 className="mb-4 text-5xl font-bold text-center text-transparent md:pl-12 bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500">
          Solana Farm
        </h1>
        </div>
        <h4 className="my-2 text-center md:w-full text-2x1 md:text-4xl text-slate-300">
          <p>Unleash the full power of blockchain with Solana and Next.js 13.</p>
          <p className='leading-relaxed text-slate-500 text-2x1'>Full-stack Solana applications made easy.</p>
        </h4>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-lg blur opacity-40 animate-tilt"></div>
          <div className="max-w-md mx-auto mockup-code bg-primary border-2 border-[#5252529f] p-6 px-10 my-2">
           
              <code className="truncate">{`Stake TEST-USD`} </code>
              <div className='mb-4 font-bold text-center text-transparent text-7xl md:pl-12 bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500'>
              <CountDownTimer hours={72} minutes={20} seconds={40}/>
              </div>
          </div>
          <div className="max-w-md mx-auto mockup-code bg-primary border-2 border-[#5252529f] p-6 px-10 my-2">
           
              <code className="truncate">{`Stake SOL-TEST`} </code>
              <div className='mb-4 font-bold text-center text-transparent text-7xl md:pl-12 bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500'>
              <CountDownTimer hours={72} minutes={20} seconds={40}/>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
