/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./index.css";

function ConvertButton({ setConvert }) {
  return <button onClick={() => setConvert(true)}>Convert</button>;
}
function ConvertFrom({ setFromCurr }) {
  function handleFromCurr(fromCurr) {
    console.log("Varname:fromCurr->", fromCurr);
    setFromCurr(fromCurr);
  }
  return (
    <div>
      <label htmlFor="FromAmount">From: </label>
      <select
        name=""
        id="FromAmount"
        onChange={(e) => handleFromCurr(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="CAN">CAN</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
}

function ConvertTo() {
  return (
    <div>
      <label htmlFor="ToAmount">To: </label>
      <select name="" id="ToAmount">
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="EUR">CAN</option>
        <option value="CAN">EUR</option>
      </select>
    </div>
  );
}

function EnterAmount({ amt, setAmt, convertedAmt }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Amount"
        value={amt}
        onChange={(e) => setAmt(e.target.value)}
      />
      <p>{convertedAmt}</p>
    </div>
  );
}
export default function CurrencyConverter() {
  const [amt, setAmt] = useState("200");
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("EUR");
  const [convert, setConvert] = useState(false);
  const [convertedAmt, setConvertedAmt] = useState();

  useEffect(() => {
    async function getConvertedAmount() {
      const resp = await fetch(
        `https://api.frankfurter.app/latest?amount=${amt}&from=${fromCurr}&to=${toCurr}`
      );
      const data = await resp.json();
      // console.log("VarName:data->", data);
      const rates = Object.values(data?.rates)[0];
      setConvertedAmt(rates);
    }
    convert && getConvertedAmount();
  }, [amt, fromCurr, toCurr, convert]);
  return (
    <div className="currency-converter">
      <EnterAmount amt={amt} setAmt={setAmt} convertedAmt={convertedAmt} />
      <ConvertFrom setFromCurr={setFromCurr} />
      <ConvertTo />
      <ConvertButton setConvert={setConvert} />
    </div>
  );
}
