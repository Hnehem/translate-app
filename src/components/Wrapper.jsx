import Icon from "./IconButton";
import LangSelector from './LangSelector';
import switchLang from "../assets/svg/Horizontal_top_left_main.svg";
import FooterSection from "./FooterSection";

export default function Wrapper({ children, roll }) {
  return (
    <div className={`wrapper ${roll}`}>
      <div className="langs">
        <LangSelector roll={roll} />
        {roll === "output" && <Icon title='Switch languages' roll={roll} name='switch' route={switchLang} />}
      </div>
      <div className="content">{children}</div>
      <FooterSection roll={roll}/>
    </div>
  );
}
