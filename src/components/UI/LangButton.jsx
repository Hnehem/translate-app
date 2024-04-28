import { useContext } from "react";
import { AppContext } from "../../state/translate_app_context";

export default function LangButton ({name, children, className, input = false, ...props }) {
  const { inputLang, outputLang, updateLang } = useContext(AppContext);

  const language = input || name === 'detect' ? inputLang : outputLang;
  const roll = input || name === 'detect' ? 'input' : 'output';

  let selected = language == name;
  
  return (
      <button
        type="button"
        name={name}
        className={`btn--lang ${className && className} ${selected && 'selected'}`}
        {...props}
        onClick={() => updateLang(name, roll)}
      >
        {children}
      </button>
  );
};