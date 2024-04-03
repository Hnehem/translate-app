import { useContext, useEffect, useRef, useState } from "react";
import dropDownIcon from "../assets/svg/Expand_down.svg";
import DropDownLangMenu from "./DropDownLangSelector.jsx";
import LangButton from "./LangButton.jsx";
import { AppContext } from "../state/translate_app_context.jsx";
import { AVAILABLE_LANGS } from "../utils/langs.js";

export default function DropDownButton({ name, roll }) {
  const { inputLang, outputLang, updateLang, updateTranslationInfo } =
    useContext(AppContext);

  let language = roll === "input" ? inputLang : outputLang;
  if (!AVAILABLE_LANGS.some((elem) => Object.values(elem).includes(language)))
    language = name;

  const [displayMenu, setDisplayMenu] = useState(false);
  const [buttonIso, setButtonIso] = useState(language);
  const menuRef = useRef();

  useEffect(() => {
    function handleOutsiderClick(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDisplayMenu(false);
      }
    }
    document.addEventListener("mousedown", handleOutsiderClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsiderClick);
    };
  }, []);

  //input or output language update on buttonIso state change...
  useEffect(() => {
    if (
      buttonIso !== name &&
      AVAILABLE_LANGS.some((elem) => Object.values(elem).includes(inputLang))
    ) {
      updateLang(buttonIso, roll);
    } else if (
      // buttonIso !== name &&
      AVAILABLE_LANGS.some((elem) => Object.values(elem).includes(outputLang))
    ) {
      updateLang(buttonIso, roll);
    }
  }, [buttonIso]);

  useEffect(() => {
    //in case detected language is not supported...
    let langs = [
      ...AVAILABLE_LANGS.map((elem) => elem.iso),
      "fr",
      "es",
      "en",
      "detect",
    ].includes(inputLang);
    if (!langs) {
      updateLang("en", "output");
      updateLang("detect", "input");
      updateTranslationInfo(
        "The language you are looking for is not suported!",
        true
      );
    }

    //dropDownButton display on language detection...
    if (roll === "input" && inputLang !== buttonIso) {
      if (
        AVAILABLE_LANGS.some((elem) => Object.values(elem).includes(inputLang))
      ) {
        setButtonIso(inputLang);
      }
    }
  }, [inputLang]);

  //dropDownButton display on switch languages...
  useEffect(() => {
    if (roll === "output" && outputLang !== buttonIso) {
      if (
        AVAILABLE_LANGS.some((elem) => Object.values(elem).includes(outputLang))
      ) {
        setButtonIso(outputLang);
      }
    }
  }, [outputLang]);

  function handleMenuDisplay() {
    setDisplayMenu(!displayMenu);
  }

  function handleButtonValue(iso) {
    setButtonIso(iso);
    setDisplayMenu(!displayMenu);
  }

  return (
    <LangButton
      roll={roll}
      ref={menuRef}
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
      {displayMenu && <DropDownLangMenu onSelect={handleButtonValue} />}
    </LangButton>
  );
}
