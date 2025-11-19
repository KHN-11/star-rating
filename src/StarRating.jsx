import { useState } from "react";
import { Star } from "./components/Star";
import {
  ratingsContainerStyle,
  starContainerStyle,
} from "./components/componentStyles/ComponentStyles";

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 49,
  message = [],
  onSetRating,
}) {
  const textStyle = {
    margin: "0",
    lineHeight: "1",
    fontWeight: "bold",
    fontSize: `${size / 1.5}px`,
    color,
  };
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  function handleRating(rating) {
    setRating(rating);
    if (onSetRating) onSetRating(rating);
  }
  function handleTempRating(tempRating) {
    setTempRating(tempRating);
  }
  return (
    <div style={ratingsContainerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, indexVal) => (
          <Star
            onRate={() => handleRating(indexVal + 1)}
            hoverIn={() => handleTempRating(indexVal + 1)}
            hoverOut={() => handleTempRating(0)}
            full={
              tempRating ? tempRating >= indexVal + 1 : rating >= indexVal + 1
            }
            color={color}
            size={size}
            key={indexVal}
          />
        ))}
      </div>
      <p style={textStyle}>
        {message.length === maxRating
          ? tempRating
            ? message[tempRating - 1]
            : message[rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}
