import React from "react";

export default function LanguageSwitcher({ currentLang }) {
  const alternateLang = currentLang === "es" ? "en 🇺🇸" : "es 🇪🇸";
  const hrefLang = currentLang === "es" ? "en" : "es";

  return (
    <div>
      <a href={`/${hrefLang}`}>{alternateLang}</a>
    </div>
  );
}
