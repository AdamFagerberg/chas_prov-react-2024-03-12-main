import { useContext } from "react";
import { ThemeContext } from "./themeContext";

export default function Button() {
  const { setLightTheme, lightTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setLightTheme(!lightTheme)}>TOGGLE THEME</button>
  );
}
