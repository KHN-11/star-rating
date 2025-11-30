/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./index.css";

function ConvertButton({ setConvert }) {
  return <button onClick={() => setConvert(true)}>Convert</button>;
}
function ConvertFrom() {
  return (
    <div>
      <label htmlFor="FromAmount">From: </label>
      <select name="" id="FromAmount">
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
  const [amt, setAmt] = useState("100");
  const [fromCurr, setFromCurr] = useState("EUR");
  const [toCurr, setToCurr] = useState("USD");
  const [convert, setConvert] = useState(false);
  const [convertedAmt, setConvertedAmt] = useState();

  useEffect(() => {
    async function getConvertedAmount() {
      if (!fromCurr || !toCurr) return;
      const resp = await fetch(
        `https://api.frankfurter.app/latest?amount=${amt}&from=${fromCurr}&to=${toCurr}`
      );
      const data = await resp.json();
      const [amount] = [...Object.values(data.rates)];
      setConvertedAmt(amount);
    }
    convert && getConvertedAmount();
  }, [amt, fromCurr, toCurr, convert]);
  return (
    <div className="currency-converter">
      <EnterAmount amt={amt} setAmt={setAmt} convertedAmt={convertedAmt} />
      <ConvertFrom />
      <ConvertTo />
      <ConvertButton setConvert={setConvert} />
    </div>
  );
}
