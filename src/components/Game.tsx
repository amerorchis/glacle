import { DateTime } from "luxon";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import {
  countries,
  getCountryName,
  sanitizeCountryName,
  matchCountryName,
} from "../domain/cgs";
import { useGuesses } from "../hooks/useGuesses";
import { CountryInput } from "./CountryInput";
import * as geolib from "geolib";
import { Share } from "./Share";
import { Guesses } from "./Guesses";
import { useTranslation } from "react-i18next";
import { SettingsData } from "../hooks/useSettings";
import { useMode } from "../hooks/useMode";
import { useCountry } from "../hooks/useCountry";

function getDayString() {
  return DateTime.now().toFormat("yyyy-MM-dd");
}

const MAX_TRY_COUNT = 6;

interface GameProps {
  settingsData: SettingsData;
}

export function Game({ settingsData }: GameProps) {
  const { t, i18n } = useTranslation();
  const dayString = useMemo(getDayString, []);

  const [country] = useCountry(dayString);

  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, addGuess] = useGuesses(dayString);
  const [hideImageMode] = useMode(
    "hideImageMode",
    dayString,
    settingsData.noImageMode
  );
  const [rotationMode] = useMode(
    "rotationMode",
    dayString,
    settingsData.rotationMode
  );

  const gameEnded =
    guesses.length === MAX_TRY_COUNT ||
    guesses[guesses.length - 1]?.distance === 0;

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const guessedCountry = countries.find(
        (country) =>
          sanitizeCountryName(getCountryName(country)) ===
          sanitizeCountryName(currentGuess)
      );

      const cgName = matchCountryName(currentGuess, countries);

      if (guessedCountry == null) {
        toast.error(t("unknownCountry"));
        return;
      }

      const newGuess = {
        name: cgName,
        distance: geolib.getDistance(guessedCountry, country),
        direction: geolib.getCompassDirection(guessedCountry, country),
      };

      addGuess(newGuess);
      setCurrentGuess("");

      if (newGuess.distance === 0) {
        toast.success(t("welldone"), { delay: 2000 });
      }
    },
    [addGuess, country, currentGuess, t]
  );

  useEffect(() => {
    if (
      guesses.length === MAX_TRY_COUNT &&
      guesses[guesses.length - 1].distance > 0
    ) {
      toast.info(getCountryName(country).toUpperCase(), {
        autoClose: false,
        delay: 2000,
      });
    }
  }, [country, guesses, i18n.resolvedLanguage]);

  return (
    <div className="flex-grow flex flex-col mx-2">
      <br></br>
      <Guesses
        rowCount={MAX_TRY_COUNT}
        guesses={guesses}
        settingsData={settingsData}
      />
      <div className="my-2">
        {gameEnded ? (
          <>
            <Share
              guesses={guesses}
              dayString={dayString}
              settingsData={settingsData}
              hideImageMode={hideImageMode}
              rotationMode={rotationMode}
            />
            <a
              className="underline w-full text-center block mt-4"
              href={`https://www.nps.gov/glac/planyourvisit/upload/Wilderness-Campground-Map-2023.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("showOnGoogleMaps")}
            </a>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-1">
              <CountryInput
                currentGuess={currentGuess}
                setCurrentGuess={setCurrentGuess}
              />
              <button
                className="border-2 uppercase h-10 mt-3 my-0.5 bg-dark-blue hover:bg-slate-800 active:bg-slate-700 font-bold"
                type="submit"
              >
                🏕️ &nbsp;{t("guess")}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
