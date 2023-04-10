import { useMemo } from "react";
import seedrandom from "seedrandom";
import { campgroundOptions, Country } from "../domain/cgs";

const forcedCountries: Record<string, string> = {
  "2021-05-04": "UPN",
  "2021-04-05": "AKA",
};

export function useCountry(dayString: string): [Country, number, number] {
  const country = useMemo(() => {
    const forcedCountryCode = forcedCountries[dayString];
    const forcedCountry =
      forcedCountryCode != null
        ? campgroundOptions.find(
            (country) => country.code === forcedCountryCode
          )
        : undefined;

    return (
      forcedCountry ??
      campgroundOptions[
        Math.floor(seedrandom.alea(dayString)() * campgroundOptions.length)
      ]
    );
  }, [dayString]);

  const randomAngle = useMemo(
    () => seedrandom.alea(dayString)() * 360,
    [dayString]
  );

  const imageScale = useMemo(() => {
    const normalizedAngle = 45 - (randomAngle % 90);
    const radianAngle = (normalizedAngle * Math.PI) / 180;
    return 1 / (Math.cos(radianAngle) * Math.sqrt(2));
  }, [randomAngle]);

  return [country, randomAngle, imageScale];
}
