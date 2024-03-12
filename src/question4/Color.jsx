import { useContext } from "react";
import { ThemeContext } from "./themeContext";

export default function Color() {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <div
      className={`h-80 w-80 bg-red-800 dark:bg-lime-600 ${
        lightTheme ? "" : "dark"
      }`}
    ></div>
  );
}
