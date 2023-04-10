import React, { useState } from "react";
import styles from "./Greetings.module.css";

function Greetings() {
  const greetings = ["Hello!", "Bonjour!", "Hola!", "Nǐn hǎo!", "Konnichiwa!","Ciao!","Namaskar!" ];

  const [count, setCount] = useState(0);

  const handleNextClick = () => {
    setCount(count+1)
    if(count===greetings.length-1){
      setCount(count*0)
    }
  };

  return (
    <div>
      <h1 className={styles.greeting}>{greetings[count]}</h1>
      <button className={styles.button} onClick={handleNextClick}>Next Greeting</button>

    </div>
  );
}

export default Greetings;
