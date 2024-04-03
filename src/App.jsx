import "./App.css";
import InputField from "./components/InputField";
import OutputField from "./components/OutputField";
import logo from "./assets/svg/logo.svg";
import AppContextProvider from "./state/translate_app_context";
import LimitationWarn from "./components/LimitationWarn";

function App() {
  return (
    <AppContextProvider>
      <img className="logo" src={logo} alt="Translate app logo" />
      <div id="container">
        <InputField />
        <OutputField />
      </div>
      <LimitationWarn/>
    </AppContextProvider>
  );
}

export default App;
