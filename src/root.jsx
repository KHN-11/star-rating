import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StarRating from "./StarRating.jsx";
import Test from "./components/TestComponent.jsx";
Test;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StarRating />
    <StarRating maxRating={"10"} />
    <StarRating maxRating={7} size={49} color="#f783ac" />
    <StarRating
      color="#12b886"
      message={["Worst", "Bad", "Okay", "Good", "Amazing"]}
    />
    <Test />
  </StrictMode>
);
