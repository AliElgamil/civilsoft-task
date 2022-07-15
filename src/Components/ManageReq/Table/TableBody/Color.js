import React, { useRef, useState } from "react";

export default function Color({
  color,
  ind,
  colorList,
  indexOb,
  requests,
  setRequests,
}) {
  const item = useRef(null);
  const [bgColor, setBgColor] = useState(color);

  const handleColor = () => {
    const newReq = [...requests];
    newReq[indexOb].reqType = colorList[ind];
    setRequests(newReq);
    setBgColor(colorList[ind]);
  };
  //   useEffect(() => {
  //   }, [requests]);

  return (
    <li
      className={`bg-${bgColor}`}
      key={ind}
      onClick={() => handleColor()}
      ref={item}
    ></li>
  );
}
