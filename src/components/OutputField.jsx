import { useContext } from "react";
import Wrapper from "./Wrapper";
import { AppContext } from "../state/translate_app_context";

export default function OutputText() {
  const {translatedText} = useContext(AppContext);

  return (
    <Wrapper roll="output">
        <p className="scrollbar">
          {translatedText}
        </p>
    </Wrapper>
  );
}
