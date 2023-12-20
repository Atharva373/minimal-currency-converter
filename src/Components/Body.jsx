import React,{useEffect, useState} from 'react'
import Card from './Card'
import getCurrencyInfo from '../hooks/Currency'
import countryMapping from '../Country Codes/CountryCodes';

function Body() {
    const [amount,setAmount]=useState(0); 
    const [from,setFrom]=useState('inr');
    const [to,setTo]=useState('usd');
    const [convAmt,setConvAmt]=useState(0);

    const currencyInfo=getCurrencyInfo(from);
    const options=Object.keys(currencyInfo);

    const stringFrom=from.toUpperCase();
    const stringTo=to.toUpperCase();

    const convert=()=>{
      setConvAmt(Number(amount*currencyInfo[to]))
      console.log(valueCurrency);
    };


  return (
    <>
    <div className='w-screen bg-teal-400 h-[1px]'></div>
    <div className='flex items-center mb-[-15px] justify-center flex-grow bg-gradient-to-b from-black to-gray-950 w-screen h-[70vh]'>
        <Card 
        color='magenta' 
        cardType="FROM" 
        isDisabled={false}
        placeHolder="Enter the amount"
        amount={amount}
        currencyOptions={options}
        onAmountChange={(amount)=>setAmount(amount)}
        onCurrencyChange={(amount)=>setFrom(amount)}
        selectedCurrency={from}
        />
        <span className='mx-[50px]'/>
        <Card 
        color='teal' 
        cardType="TO" 
        isDisabled={true}
        placeHolder="Converted Amount"
        amount={convAmt}
        currencyOptions={options}
        onCurrencyChange={(currency)=>setTo(currency)}
        selectedCurrency={to}
        />
    </div>
    <div className='flex justify-center bg-gradient-to-b from-gray-950 to-black w-screen h-[20vh]'>
        <div>
            <button className='bg-teal-400  w-[30vw] h-[8vh] text-3xl rounded-md ' onClick={convert}>
              CONVERT FROM {stringFrom} TO {stringTo}
            </button>
        </div>
    </div>
    </>
    
  )
}

export default Body