import React from 'react'
import countryMapping from '../Country Codes/CountryCodes';

function Card({
  color,
  cardType,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectedCurrency="usd",
  currencyOptions=[1,2,3],
  isDisabled,
  placeHolder,

}) {
  
  const currencyCode=selectedCurrency.toUpperCase();
  const countryFinder=(currencyCode)=>{
    for(let o of countryMapping){
      if(o.currency_code===currencyCode)return o.country;
    }
    return null;
  }
  const countryName=countryFinder(currencyCode);
  console.log(currencyCode+" "+countryName);
  

  return (
    <div className={`flex flex-col items-center w-[20vw] h-[40vh]  bg-black border-4 border-solid border-teal-400 rounded-lg`}>
        <div className='text-teal-400 w-auto mt-[15px] mb-[5px] text-[20px]'>
          {cardType}
        </div>
        <div className='text-teal-400 text-[20px] mt-[5px] mb-[5px]' >CURRENCY:</div>

        <select 
          typeof='text' 
          className={`rounded-lg mt-[10px] w-[150px] h-[5vh] mb-[10px] border-2 border-teal-500 bg-black text-white 
          focus:border-[#54f6fc] px-[10px]`}
          value={selectedCurrency}
          onChange={(e)=> onCurrencyChange && onCurrencyChange((e.target.value))}
        >
          {currencyOptions.map((currency)=>
            <option  value={currency} >
              {currency}
            </option>
          
          )}
        </select>

        <div className='mt-[10px] text-teal-400 text-[20px] mb-[5px]'>
          AMOUNT
        </div>

        <input className='border-2 rounded-lg border-teal-100 bg-black text-white w-[15vw] h-[6vh] 
        mt-[10px] focus:border-lime-500 px-[10px]'  
        placeholder={placeHolder}
        value={amount}
        onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
        disabled={isDisabled}
        ></input>
        <div className='text-cyan-200 mt-[5px] '>{countryName}</div>
    </div>
  )
}

export default Card