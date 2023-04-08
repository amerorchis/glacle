import { t } from "i18next";
import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import { countries, getCountryName, sanitizeCountryName } from "../domain/cgs";

interface CountryInputProps {
  currentGuess: string;
  setCurrentGuess: (guess: string) => void;
}

export function CountryInput({
  currentGuess,
  setCurrentGuess,
}: CountryInputProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={({ value }) =>
        setSuggestions(
          countries
            .map((c) => getCountryName(c))
            .filter((countryName) =>
              sanitizeCountryName(countryName).includes(
                sanitizeCountryName(value)
              )
            )
        )
      }
      onSuggestionsClearRequested={() => setSuggestions([])}
      getSuggestionValue={(suggestion) => suggestion}
      renderSuggestion={(suggestion) => (
        <div className="border-2 dark:bg-slate-800 dark:text-slate-100">
          {suggestion}
        </div>
      )}
      containerProps={{
        className: "border-2 flex-auto relative",
      }}
      inputProps={{
        className:
          "w-full dark:bg-slate-800 dark:text-slate-100 h-10 text-center font-bold",
        placeholder: t("placeholder"),
        value: currentGuess,
        onChange: (_e, { newValue }) => setCurrentGuess(newValue),
      }}
      renderSuggestionsContainer={({ containerProps, children }) => (
        <div
          {...containerProps}
          className={`${containerProps.className} absolute bottom-full w-full bg-white mb-1 divide-x-2 max-h-52 overflow-auto`}
        >
          {children}
        </div>
      )}
    />
  );
}
