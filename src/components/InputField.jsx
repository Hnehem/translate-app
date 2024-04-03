import { useContext, useRef, useState } from "react";
import Wrapper from "./Wrapper";
import { AppContext } from "../state/translate_app_context";

export default function InputText() {
  const {inputedText, updateTranslationInfo} = useContext(AppContext);

  const [counter, setCounter] = useState(0);
  const inputRef = useRef();

  if (inputedText.length !== counter) {
    setCounter(inputedText.length);
  }

  function handleInputedTextCounter() {
    setCounter(inputRef.current.value.length)

    updateTranslationInfo(inputRef.current.value);
  }
  
  return (
    <Wrapper roll="input">
        <textarea value={inputedText} maxLength={500} ref={inputRef} className="scrollbar" onChange={handleInputedTextCounter}/>
        <div className="counter">{counter}/500</div>
    </Wrapper>
  );
}
