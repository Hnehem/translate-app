import DropDownButton from "./DropDownButton";
import LangButton from "./LangButton";

export default function LangNavBar({ roll }) {
  return (
    <div>
      {roll === "input" && (
        <LangButton  roll='input' name="detect">Detect Language</LangButton>
      )}
      <LangButton roll={roll} name="en">English</LangButton>
      <LangButton roll={roll} name="fr">French</LangButton>
      <DropDownButton roll={roll} name="es" />
    </div>
  );
}
