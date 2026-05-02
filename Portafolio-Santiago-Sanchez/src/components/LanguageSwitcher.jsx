import React from "react";

/**
 * @param {{ currentLang: string }} props
 */
export default function LanguageSwitcher({ currentLang }) {
  const isEs = currentLang === "es";
  const nextLang = isEs ? "en" : "es";
  const nextLangLabel = isEs ? "ENGLISH" : "ESPAÑOL";
  const flag = isEs ? "🇺🇸" : "🇪🇸";

  return (
    <div className="language-switcher-wrapper">
      <a href={`/${nextLang}`} className="lang-link">
        <span className="lang-text">{nextLangLabel}</span>
        <span className="lang-flag">{flag}</span>
      </a>
    </div>
  );
}
