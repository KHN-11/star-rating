import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StarRating from "./components/StarRating/StarRating.jsx";
import Test from "./components/StarRating/TestComponent.jsx";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <StarRating />
    <StarRating maxRating={"10"} />
    <StarRating maxRating={7} size={49} color="#f783ac" />
    <StarRating
      color="#12b886"
      message={["Worst", "Bad", "Okay", "Good", "Amazing"]}
    />
    <Test /> */}
    <CurrencyConverter />
  </StrictMode>
);
