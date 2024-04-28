import { useContext } from "react";
import Wrapper from "./UI/Wrapper";
import { AppContext } from "../state/translate_app_context";
import LangSelector from './LangSelector';
import FooterSection from "./FooterSection";
import Icon from "./UI/IconButton";
import switchLang from "../assets/svg/Horizontal_top_left_main.svg";


export default function OutputText() {
  const { translatedText } = useContext(AppContext);

  return (
    <Wrapper name="output">
      <div className="langs">
        <LangSelector />
        <Icon
          title="Switch languages"
          output
          name="switch"
          route={switchLang}
        />
      </div>
      <div className="content">
        <p className="scrollbar">{translatedText}</p>
      </div>
      <FooterSection />
    </Wrapper>
  );
}
