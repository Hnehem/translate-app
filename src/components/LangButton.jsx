import { forwardRef, useContext } from "react";
import { AppContext } from "../state/translate_app_context";

const LangButton = forwardRef(({name, children, className, roll, ...props }, ref) => {
  const { inputLang, outputLang, updateLang } = useContext(AppContext);

  const language = roll === 'input' ? inputLang : outputLang;

  let selected = language == name;
  
  return (
      <button
        ref={ref}
        type="button"
        name={name}
        className={`btn--lang ${className && className} ${selected && 'selected'}`}
        {...props}
        onClick={() => updateLang(name, roll)}
      >
        {children}
      </button>
  );
});

export default LangButton;
