import rgbToHex from "../utils/util";

import { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index }) => {
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="present-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && (
        <p className={`alert ${index > 10 && "alert-light"}`}>
          Copied to clipboard
        </p>
      )}
    </article>
  );
};

export default SingleColor;
