import infoIcon from "../assets/svg/Info.svg";

export default function LimitationWarn() {
  return (
    <div className="limitations">
      <div className="info">
        <p>
          <span>WARNING:</span> the "Listen text" function might not work
          correctly for all suported languages.
        </p>
      </div>
      <div className="warn">
        <p>
          <img src={infoIcon} className="info--icon" alt="Info Icon" />
          This project operates within the limits of available tools, adapting
          strategies and decisions to make the most of their capabilities.
        </p>
      </div>
    </div>
  );
}
