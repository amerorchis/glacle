import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Game } from "./components/Game";
import React, { useEffect, useState } from "react";
import { Infos } from "./components/panels/Infos";
import { useTranslation } from "react-i18next";
import { InfosFr } from "./components/panels/InfosFr";
import { Settings } from "./components/panels/Settings";
import { useSettings } from "./hooks/useSettings";
import { Stats } from "./components/panels/Stats";
import { loadAllGuesses } from "./domain/guess";
import { toast } from "react-toastify";
import { inject } from "@vercel/analytics";

inject();

function App() {
  const { t, i18n } = useTranslation();

  const allGuesses = loadAllGuesses();
  const allGuessesEntries = Object.entries(allGuesses);
  const played = allGuessesEntries.length;

  const [infoOpen, setInfoOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [statsOpen, setStatsOpen] = useState(false);
  const [settingsData, updateSettings] = useSettings();

  useEffect(() => {
    if (settingsData.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settingsData.theme]);

  if (played === 0) {
    toast.info(t("welcome"), {
      toastId: "welcome",
      autoClose: 6000,
    });
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        transition={Flip}
        theme={settingsData.theme}
        autoClose={2000}
        bodyClassName="font-bold text-center"
        limit={2}
      />
      {i18n.resolvedLanguage === "fr" ? (
        <InfosFr
          isOpen={infoOpen}
          close={() => setInfoOpen(false)}
          settingsData={settingsData}
        />
      ) : (
        <Infos
          isOpen={infoOpen}
          close={() => setInfoOpen(false)}
          settingsData={settingsData}
        />
      )}
      <Settings
        isOpen={settingsOpen}
        close={() => setSettingsOpen(false)}
        settingsData={settingsData}
        updateSettings={updateSettings}
      />
      <Stats
        isOpen={statsOpen}
        close={() => setStatsOpen(false)}
        distanceUnit={settingsData.distanceUnit}
      />
      <div className="flex justify-center flex-auto dark:bg-midnight-green dark:text-slate-50">
        <div className="w-full max-w-lg flex flex-col">
          <header className="border-b-2 border-gray-200 flex">
            <button
              className="mx-3 text-xl"
              type="button"
              onClick={() => setInfoOpen(true)}
            >
              ❓
            </button>
            <h1 className="text-4xl font-bold uppercase tracking-wide text-center my-1 flex-auto">
              <span className="text-green-600">GLAC</span>le
            </h1>
            <button
              className="mx-3 text-xl"
              type="button"
              onClick={() => setStatsOpen(true)}
            >
              📊
            </button>
          </header>
          <Game settingsData={settingsData} />
          <footer className="flex justify-center text-sm text-center mt-8 mb-1">
            {t("buyMeACoffee")}
            <br></br>Game by Andrew Smith.
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
