import { Guess } from "../domain/guess";
import { GuessRow } from "./GuessRow";
import React from "react";
import { SettingsData } from "../hooks/useSettings";

interface GuessesProps {
  rowCount: number;
  guesses: Guess[];
  settingsData: SettingsData;
}

export function Guesses({ rowCount, guesses, settingsData }: GuessesProps) {
  return (
    <div>
      <div className="grid grid-cols-7 gap-3 text-center">
        {Array.from(Array(rowCount).keys()).map((index) => (
          <GuessRow
            key={index}
            guess={guesses[index]}
            settingsData={settingsData}
          />
        ))}
      </div>
    </div>
  );
}
