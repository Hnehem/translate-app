import { AVAILABLE_LANGS } from "../utils/langs";

export default function DropDownLangMenu({onSelect}) {
  return (
    <div className="lang--list">
      <ul className="drop--down--content scrollbar">
        {AVAILABLE_LANGS.map((elem) => {
          return (
            <li key={elem.iso} onClick={() => onSelect(elem.iso)}>
              {elem.lang}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
