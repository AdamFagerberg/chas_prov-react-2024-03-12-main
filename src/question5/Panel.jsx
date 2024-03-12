// 5. Återanvändbar Panel-Komponent med Children (3p)

import { useState } from "react";

// Skapa en återanvändbar komponent Panel som tar emot
// children och title som props. Denna Panel-komponent ska
// visa en titel (definierad av title prop) och innehåll
// (definierad av children som passeras till komponenten).
// Komponenten ska också ta emot en prop collapsible som
// bestämmer om panelen kan kollapsas (stängas likt faq-uppgiften) eller inte.

// När collapsible är true, ska panelen visa en
// "Visa/Mindre"-knapp som låter användaren växla
// mellan att visa och dölja children-innehållet.

// Steg för att genomföra uppgiften:

// 1. Skriv klart Panel-komponenten som ska ta children, title, och collapsible som props.
// 2. Om collapsible är true, ska komponenten visa en knapp som låter användaren
//    kollapsa eller expandera innehållet.
// 3. Visa panelens titel oavsett om innehållet är kollapsat eller inte.
// 4. Implementera logik inuti Panel för att hantera visning och döljande av
//    children baserat på användarens interaktion med "Visa/Mindre"-knappen.
// 5. Använd Panel-komponenten i din App-komponent med olika innehåll och
//    konfigurationer för att demonstrera dess återanvändbarhet. (Redan gjort)
//    Se exempel nedanför.

export default function Panel({ title, children, collapsible }) {
  const [show, setShow] = useState(true);

  if (collapsible) {
    return (
      <div>
        <h1>{title}</h1>
        <div className={`${show ? "hidden" : ""}`}>{children}</div>
        <button onClick={() => setShow(!show)}>{show ? "Visa" : "Göm"}</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
}
