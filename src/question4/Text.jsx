import { useContext } from "react";
import { ThemeContext } from "./themeContext";

export default function Text() {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <div>
      <p
        className={`dark:text-white dark:bg-black ${lightTheme ? "" : "dark"}`}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi earum
        harum, at quibusdam nisi nemo corrupti laudantium quam autem iure
        incidunt ipsum enim ut minima. Aspernatur debitis odit aperiam modi?
      </p>
    </div>
  );
}
