import React,{useEffect,useState} from 'react'

function getCurrencyInfo(currencyKey){

    const [data,setData]=useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyKey}.json`)
        .then((response)=> response.json() )
        .then((response)=>{setData(response[currencyKey])})
        .catch((e)=>console.log(e))
        console.log(data);
    },[currencyKey]);
    return data;
}
export default getCurrencyInfo;