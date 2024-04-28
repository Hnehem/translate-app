import { useContext, useRef, useState } from "react";
import { useInLangChange } from "../hooks/useInLangChange.js";
import { useClickOutside } from "../hooks/useClickOutside.js";
import dropDownIcon from "../assets/svg/Expand_down.svg";
import DropDownLangMenu from "./DropDownLangMenu.jsx";
import LangButton from "./UI/LangButton.jsx";
import { AppContext } from "../state/translate_app_context.jsx";
import { AVAILABLE_LANGS, isLangAvailable } from "../utils/langs.js";

export default function DropDownButton({ name, input = false }) {
  const { inputLang, outputLang, updateLang, updateTranslationInfo } =
    useContext(AppContext);

  let language = input ? inputLang : outputLang;
  if (!isLangAvailable(language)) language = name;

  const [displayMenu, setDisplayMenu] = useState(false);
  const [buttonIso, setButtonIso] = useState(language);
  const menuRef = useRef();

  useClickOutside(menuRef, () => {
    setDisplayMenu(false);
  });

  //dropDownButton display on language detection, switch languages and language selection...
  useInLangChange(input, buttonIso, inputLang, () => {
    setButtonIso(inputLang);
  });

  //dropDownButton display on switch languages and language selection...
  useInLangChange(!input, buttonIso, outputLang, () => {
    setButtonIso(outputLang);
  });

  //in case detected language is not supported...
  let langs = [
    ...AVAILABLE_LANGS.map((elem) => elem.iso),
    "fr",
    "es",
    "en",
    "detect",
  ].includes(inputLang);

  useInLangChange(!langs, null, inputLang, () => {
    updateLang("en", "output");
    updateLang("detect", "input");
    updateTranslationInfo(
      "The language you are looking for is not suported!",
      true
    );
  });

  function handleMenuDisplay() {
    setDisplayMenu(!displayMenu);
  }

  function handleButtonValue() {
    setDisplayMenu(!displayMenu);
  }

  return (
    <div className="drop--wrapper" ref={menuRef}>
      <LangButton
        input={input}
        name={buttonIso}
        className={`drop--down--btn`}
      >
        <span>
          {AVAILABLE_LANGS.map((elem) => {
            if (elem.iso === buttonIso) {
              return elem.lang;
            }
          })}
        </span>
        <img
          title="Select another language."
          className="drop"
          src={dropDownIcon}
          alt="Drop down icon"
          onClick={handleMenuDisplay}
        />
        {displayMenu && (
          <DropDownLangMenu
            onSelect={handleButtonValue}
            input={input}
          />
        )}
      </LangButton>
    </div>
  );
}
