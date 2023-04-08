import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Worldle } from "../Worldle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function Infos({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="How to play" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>Guess the Glacier wilderness campground in 6 guesses.</div>
        <div>
          Each guess must be a valid campground. Only frontcountry campgrounds
          that serve as wilderness campgrounds are included.
        </div>
        <div>
          After each guess, you will have the distance, the direction and the
          physical proximity of your guess to the target campground.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Examples</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Hole in the Wall",
                direction: "SE",
                distance: 19634,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Your guess&nbsp;
            <span className="font-bold">Hole in the Wall</span> is&nbsp;
            {formatDistance(19634, settingsData.distanceUnit)} away from the
            target campground, the target campground is in the South-East
            direction and you have 77% proximity, so the target is not too far
            away!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Flattop",
                direction: "N",
                distance: 7805,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Your second guess&nbsp;
            <span className="font-bold">Flattop</span> is getting quite
            close!&nbsp;
            {formatDistance(7805, settingsData.distanceUnit)} away, North
            direction and 91%!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Fifty Mountain",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Next guess, <span className="font-bold">Fifty Mountain</span>, is
            the target campground! Congrats! 🎉
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        A new <Worldle /> will be available every day!
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">About distance</div>
        <div>
          The distances displayed are <i>straight line distances</i>, so
          remember that some campgrounds are very distant by trail, but quite
          close in a straight line because they are in different valleys.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Worldle /> has been <span className="font-bold">heavily</span> inspired
        by{" "}
        <a
          className="underline"
          href="https://www.powerlanguage.co.uk/wordle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wordle
        </a>{" "}
        created by{" "}
        <a
          className="underline"
          href="https://twitter.com/powerlanguish"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josh Wardle (@powerlanguish)
        </a>
        , as well as{" "}
        <a
          className="underline"
          href="https://worldle.teuteuf.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Worldle
        </a>
        , made by &nbsp;
        <a
          className="underline"
          href="https://twitter.com/teuteuf"
          target="_blank"
          rel="noopener noreferrer"
        >
          @teuteuf
        </a>
        .{" "}
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>Made by Andrew Smith</div>
      </div>
    </Panel>
  );
}
