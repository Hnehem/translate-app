import translateIcon from "../assets/svg/Sort_alfa.svg";
import hear from "../assets/svg/sound_max_fill.svg";
import copy from "../assets/svg/Copy.svg";
import Icon from "./UI/IconButton";
import { useContext, useEffect } from "react";
import { AppContext } from "../state/translate_app_context";
import { fetchTranslation } from "../utils/fetch_translation";
import { languageDetect } from "../utils/detect_lang";

export default function FooterSection({ input = false }) {
  const { inputLang, outputLang, inputedText, updateTranslationInfo, updateLang } =
    useContext(AppContext);
  
  let language = inputLang;

  useEffect(() => {
    handleTranslation();
  }, []);

  async function handleTranslation() {
    let encodedText = encodeURIComponent(inputedText);
    encodedText = encodedText.replace(/%3F/g, "?");
    
    if (inputLang === "detect") {
      let result = await languageDetect(inputedText.toString());
      language = result.languages[0].languageCode;
    }

    const translatedText = await fetchTranslation(encodedText, language, outputLang);

    updateTranslationInfo(translatedText, true);
    if (inputLang !== language) updateLang(language, 'input'); //in detec language mode...
  }

  return (
    <div className="features">
      <div className="icons">
        <Icon name='hear' route={hear} title="Listen text" input={input} />
        <Icon name='copy' route={copy} title="Copy text" input={input} />
      </div>

      {input && (
        <div
          title="translate"
          className="translate--btn"
          onClick={handleTranslation}
        >
          <img src={translateIcon} alt="translate icon" />
          <span>Translate</span>
        </div>
      )}
    </div>
  );
}
