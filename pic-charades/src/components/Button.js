import React from "react";
import { useEffect, useState } from "react";
export default function Button(props) {
  const [inputState, setInputState] = useState([]);

  //dynamic form inputs

  useEffect(() => {
    props.word.split().map((val, i) => {
      let newar = [];

      for (let i = 0; i < props.word.length; i++) {
        newar.push("");
      }

      setInputState([...newar]);
    });
  }, [props.word]);

  const handleChange = (e) => {
    let newArr = [...inputState];

    newArr[e.target.name] = e.target.value;

    setInputState([...newArr]);

    console.log(inputState);
  };

  const checkEnter = (e) => {
    if (e.key == "Enter") {
      console.log("pressed enter");
    }

    const query = inputState.indexOf("");

    console.log(query);

    console.log(`id-${query}`);

    const ele = document.getElementById(`i-${query}`);

    console.log(ele);
    if (ele) ele.focus();
  };

  return (
    <>
      <h1>{props.word}</h1>
      <form>
        {props.word.split("").map((i, key) => (
          <input
            name={key}
            id={`i-${key}`}
            type="text"
            maxLength={1}
            key={key}
            onChange={handleChange}
            onKeyUp={checkEnter}
          />
        ))}
      </form>
    </>
  );
}
