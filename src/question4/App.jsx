// Context API för Temahantering (3p)
// Använd Context API för att skapa ett enkelt tema-byte-system.
// Skapa en ThemeContext som innehåller aktuellt tema (t.ex. "light" eller "dark").
// Använd en Provider från ThemeContext i App-komponenten nedanför.
// Skapa två barn-komponenter som använder temat.
// Skapa en tredje barn-komponent som innehåller en knapp som kan växla tema.
// Providern i App-komponenten ska omsluta de tre barn-komponenterna.

import Color from "./Color";
import Text from "./Text";
import Button from "./Button";
import { ThemeProvider } from "./themeContext";

function App() {
  return (
    <ThemeProvider>
      <Color />
      <Text />
      <Button />
    </ThemeProvider>
  );
}

export default App;
