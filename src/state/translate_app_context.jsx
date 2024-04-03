import { createContext, useState } from "react";

export const AppContext = createContext({
  inputLang: "",
  outputLang: "",
  inputedText: "",
  translatedText: "",
  updateLang: () => {},
  updateTranslationInfo: () => {},
});

export default function AppContextProvider({ children }) {
  const [state, setState] = useState({
    inputLang: "en",
    outputLang: "fr",
    inputedText: "Hello, how are you?",
    translatedText: "",
  });

  function updateLangHandler(val, type) {
    if (type === "input") {
      setState((prevState) => {
        return {
          ...prevState,
          inputLang: val,
        };
      });
    }

    if (type === "output") {
      setState((prevState) => {
        return {
          ...prevState,
          outputLang: val,
        };
      });
    }
  }

  function handleTranslation(val, translate) {
    if (translate) {
      setState((prevState) => {
        return {
          ...prevState,
          translatedText: val,
        };
      });
    } else {
      setState((prevState) => {
        return {
          ...prevState,
          inputedText: val,
        };
      });
    }
  }

  const ctxValue = {
    inputLang: state.inputLang,
    outputLang: state.outputLang,
    updateLang: updateLangHandler,
    inputedText: state.inputedText,
    translatedText: state.translatedText,
    updateTranslationInfo: handleTranslation,
  };

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
}
