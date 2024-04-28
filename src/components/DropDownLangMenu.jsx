import { useContext } from "react";
import { AVAILABLE_LANGS } from "../utils/langs";
import { AppContext } from "../state/translate_app_context";

export default function DropDownLangMenu({onSelect, input = false}) {
  const {updateLang} = useContext(AppContext);

  function handleClick(iso) {
    onSelect(iso);

    setTimeout(() => {
      if (input) {
        updateLang(iso, 'input');
      } else {
        updateLang(iso, 'output');
      }
    }, 30);

  }
  
  return (
    <div className="lang--list">
      <ul className="drop--down--content scrollbar">
        {AVAILABLE_LANGS.map((elem) => {
          return (
            <li key={elem.iso} onClick={() => handleClick(elem.iso)}>
              {elem.lang}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
