import { useState } from "react";
import "./name.css";
import Button from "@mui/material/Button";

function Name() {
  const radhaNames = [
    "राधा",
    "रासेश्वरी",
    "रम्या",
    "कृष्णमत्राधिदेवता",
    "सर्वाद्या",
    "सर्ववन्द्या",
    "वृन्दावनविहारिणी",
    "वृन्दाराध्या",
    "रमा",
    "अशेषगोपीमण्डलपूजिता",
    "सत्या",
    "सत्यपरा",
    "सत्यभामा",
    "श्रीकृष्णवल्लभा",
    "वृषभानुसुता",
    "गोपी",
    "मूल प्रकृति",
    "ईश्वरी",
    "गान्धर्वा",
    "राधिका",
    "रम्या",
    "रुक्मिणी",
    "परमेश्वरी",
    "परात्परतरा",
    "पूर्णा",
    "पूर्णचन्द्रविमानना",
    "भुक्ति- मुक्तिप्रदा",
    "भवव्याधि-विनाशिनी",
  ];

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => (prev + 1 > radhaNames.length ? 1 : prev + 1));
  };

  const displayedName =
    count === 0 ? "!!श्री राधा जी के 28 नाम!!" : `${count}. ${radhaNames[count - 1]}`;

  return (
    <div className="container">
      <h1 className="heading">{displayedName}</h1>
      <Button variant="contained" color="success" onClick={handleClick} className="btn">
        Count = {count}
      </Button>
    </div>
  );
}

export default Name;
