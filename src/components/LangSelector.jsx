import DropDownButton from "./DropDownButton";
import LangButton from "./UI/LangButton";

export default function LangSelector({ input = false }) {
  return (
    <div>
      {input && (
        <LangButton name="detect" input >Detect Language</LangButton>
      )}
      <LangButton input={input} name="en">English</LangButton>
      <LangButton input={input} name="fr">French</LangButton>
      <DropDownButton input={input} name="es" />
    </div>
  );
}
