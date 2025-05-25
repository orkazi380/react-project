import React, { useState } from "react";
import "./dropdown.css";
function Dropdown() {
    const [selected, setselected] = useState(null);
    const [multiple, setmultiple] = useState([]);
    const [enablemultiple, setenablemultiple] = useState(null);
    
  const data = [
    {
      id: 1,
      name: "React",
      description:
        "React is a JavaScript library for building user interfaces.",
      image: "https://reactjs.org/logo-og.png",
    },
    {
      id: 2,
      name: "JavaScript",
      description:
        "JavaScript is a programming language that conforms to the ECMAScript specification.",
      image: "https://www.javascript.com/images/shared/brand/js-logo.svg",
    },
    {
      id: 3,
      name: "CSS",
      description:
        "CSS is a style sheet language used for describing the presentation of a document written in HTML or XML.",
      image: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      id: 4,
      name: "HTML",
      description:
        "HTML is the standard markup language for documents designed to be displayed in a web browser.",
      image: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
    },
  ];
  const handle = (index) => {
    setselected(index === selected ? null : index);
  };

    const handlemultiple = (index) => {
        setenablemultiple(index)
      };

  return (
    <div>
        <button onClick={() => setenablemultiple(!enablemultiple)}>enable multi selection</button>
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <div className="div1" key={index} onClick={() => handle(index)}>
            <div className="div3">
              <h1>{item.name}</h1>
              <span>++</span>
            </div>
            {selected === index ? (
              <div className="div2">
                {item.description}
                {/* <img src={item.image} alt="nothing" /> */}
              </div>
            ) : null}
          </div>
        ))
      ) : (
        <div>no data is found</div>
      )}
    </div>
  );
}

export default Dropdown;
