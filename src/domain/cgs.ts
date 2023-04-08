// Source:
// Countries with long/lat => https://developers.google.com/public-data/docs/canonical/countries_csv
// Countries images => https://github.com/djaiss/mapsicon

const countryCodesWithImage = [
  "ada",
  "ako",
  "arr",
  "atl",
  "bea",
  "bou",
  "bow",
  "bro",
  "cam",
  "coa",
  "cob",
  "cos",
  "cra",
  "elf",
  "elh",
  "fif",
  "fla",
  "gab",
  "glf",
  "glh",
  "goa",
  "gra",
  "grn",
  "gun",
  "har",
  "haw",
  "hel",
  "hol",
  "kin",
  "koo",
  "ell",
  "fra",
  "isa",
  "jan",
  "lin",
  "lof",
  "lny",
  "lqu",
  "man",
  "mcd",
  "moj",
  "mol",
  "mor",
  "non",
  "old",
  "olc",
  "oll",
  "oto",
  "par",
  "poi",
  "qua",
  "ref",
  "reh",
  "rey",
  "rou",
  "sli",
  "sny",
  "spe",
  "sto",
  "tmc",
  "upk",
  "upn",
  "upc",
  "upt",
  "wat",
];

export interface Country {
  code: string;
  latitude: number;
  longitude: number;
  name: string;
}

export const countries: Country[] = [
  {
    code: "ADA",
    latitude: 48.767730044904148,
    longitude: -114.05223808940278,
    name: "Adair",
  },
  {
    code: "AKO",
    latitude: 48.875387441114711,
    longitude: -114.20006806754552,
    name: "Akokala Lake",
  },
  {
    code: "ARR",
    latitude: 48.703101126509459,
    longitude: -113.88645998968279,
    name: "Arrow Lake",
  },
  {
    code: "ATL",
    latitude: 48.575456144533838,
    longitude: -113.45364675604877,
    name: "Atlantic Creek",
  },
  {
    code: "BEA",
    latitude: 48.484044499190283,
    longitude: -113.57406587206248,
    name: "Beaver Woman Lake",
  },
  {
    code: "BOU",
    latitude: 48.964497425253022,
    longitude: -114.10410135079374,
    name: "Boulder Pass",
  },
  {
    code: "BOW",
    latitude: 48.904327296848372,
    longitude: -114.12068630339417,
    name: "Bowman Lake Head",
  },
  {
    code: "BRO",
    latitude: 48.952847496421775,
    longitude: -114.04189650024355,
    name: "Brown Pass",
  },
  {
    code: "CAM",
    latitude: 48.738267692720527,
    longitude: -113.88310151559891,
    name: "Camas Lake",
  },
  {
    code: "COA",
    latitude: 48.413392696472592,
    longitude: -113.61398200261759,
    name: "Coal Creek",
  },
  {
    code: "COB",
    latitude: 48.435619037343827,
    longitude: -113.42499748272068,
    name: "Cobalt Lake",
  },
  {
    code: "COS",
    latitude: 48.92526015014581,
    longitude: -113.75687716898813,
    name: "Cosley Lake",
  },
  {
    code: "CRA",
    latitude: 48.742185673447302,
    longitude: -113.64298186845178,
    name: "Cracker Lake",
  },
  {
    code: "ELF",
    latitude: 48.891843917022541,
    longitude: -113.72534784254468,
    name: "Elizabeth Lake Foot",
  },
  {
    code: "ELH",
    latitude: 48.872334114359518,
    longitude: -113.72715211128461,
    name: "Elizabeth Lake Head",
  },
  {
    code: "FIF",
    latitude: 48.852509955554439,
    longitude: -113.861503571157,
    name: "Fifty Mountain",
  },
  {
    code: "FLA",
    latitude: 48.786361144432789,
    longitude: -113.84225322372109,
    name: "Flattop",
  },
  {
    code: "GAB",
    latitude: 48.934757951459986,
    longitude: -113.71306959369778,
    name: "Gable Creek",
  },
  {
    code: "GLF",
    latitude: 48.914682497425289,
    longitude: -113.77883304008282,
    name: "Glenns Lake Foot",
  },
  {
    code: "GLH",
    latitude: 48.891010250520168,
    longitude: -113.80813942334882,
    name: "Glenns Lake Head",
  },
  {
    code: "GOA",
    latitude: 48.959364386847511,
    longitude: -113.88819044284067,
    name: "Goat Haunt Shelters",
  },
  {
    code: "GRA",
    latitude: 48.788640745350918,
    longitude: -114.00260565691565,
    name: "Grace Lake",
  },
  {
    code: "GRN",
    latitude: 48.771666413855208,
    longitude: -113.77787890544784,
    name: "Granite Park",
  },
  {
    code: "GUN",
    latitude: 48.62711738256619,
    longitude: -113.70865735431353,
    name: "Gunsight Lake",
  },
  {
    code: "HAR",
    latitude: 48.523425857505885,
    longitude: -113.76478101423984,
    name: "Harrison Lake",
  },
  {
    code: "HAW",
    latitude: 48.945968582520557,
    longitude: -114.01094161162544,
    name: "Hawksbill",
  },
  {
    code: "HEL",
    latitude: 48.840945767371458,
    longitude: -113.74548879097473,
    name: "Helen Lake",
  },
  {
    code: "HOL",
    latitude: 48.965217348884607,
    longitude: -114.06811546953831,
    name: "Hole In The Wall",
  },
  {
    code: "KIN",
    latitude: 48.976045508368884,
    longitude: -114.25263794062522,
    name: "Kintla Lake Head",
  },
  {
    code: "KOO",
    latitude: 48.926319393754298,
    longitude: -113.9020407746272,
    name: "Kootenai Lake",
  },
  {
    code: "ELL",
    latitude: 48.605164628838928,
    longitude: -113.75370567568136,
    name: "Lake Ellen Wilson",
  },
  {
    code: "FRA",
    latitude: 48.940854211011512,
    longitude: -114.00477559368868,
    name: "Lake Frances",
  },
  {
    code: "ISA",
    latitude: 48.424630801281346,
    longitude: -113.49201276154521,
    name: "Lake Isabel",
  },
  {
    code: "JAN",
    latitude: 48.942721603830044,
    longitude: -113.95173777637955,
    name: "Lake Janet",
  },
  {
    code: "LIN",
    latitude: 48.589262241398949,
    longitude: -113.77481243623099,
    name: "Lincoln Lake",
  },
  {
    code: "LOF",
    latitude: 48.743029451319551,
    longitude: -114.12457678810703,
    name: "Logging Lake Foot",
  },
  {
    code: "LNY",
    latitude: 48.481367409031527,
    longitude: -113.71968554864252,
    name: "Lower Nyack",
  },
  {
    code: "LQU",
    latitude: 48.798149097706897,
    longitude: -114.17298042653692,
    name: "Lower Quartz Lake",
  },
  {
    code: "MAN",
    latitude: 48.795959800377055,
    longitude: -113.67590240246437,
    name: "Many Glacier",
  },
  {
    code: "MCD",
    latitude: 48.594342585871296,
    longitude: -113.92604673229472,
    name: "Lake McDonald",
  },
  {
    code: "MOJ",
    latitude: 48.889815665961414,
    longitude: -113.81805578539425,
    name: "Mokowanis Junction",
  },
  {
    code: "MOL",
    latitude: 48.877903286508115,
    longitude: -113.81246639343827,
    name: "Mokowanis Lake",
  },
  {
    code: "MOR",
    latitude: 48.540757916867584,
    longitude: -113.45801149020976,
    name: "Morning Star Lake",
  },
  {
    code: "NON",
    latitude: 48.479865257058748,
    longitude: -113.44921112919515,
    name: "No Name Lake",
  },
  {
    code: "OLD",
    latitude: 48.512093041618741,
    longitude: -113.45644690185354,
    name: "Oldman Lake",
  },
  {
    code: "OLC",
    latitude: 48.308241369355585,
    longitude: -113.48602023100723,
    name: "Ole Creek",
  },
  {
    code: "OLL",
    latitude: 48.382229260448206,
    longitude: -113.38442263631676,
    name: "Ole Lake",
  },
  {
    code: "OTO",
    latitude: 48.718629835938749,
    longitude: -113.59362956595221,
    name: "Otokomi Lake",
  },
  {
    code: "PAR",
    latitude: 48.333985800384262,
    longitude: -113.54754603220051,
    name: "Park Creek",
  },
  {
    code: "POI",
    latitude: 48.850017625492939,
    longitude: -113.6064274463438,
    name: "Poia Lake",
  },
  {
    code: "QUA",
    latitude: 48.82340115728681,
    longitude: -114.13692537312843,
    name: "Quartz Lake",
  },
  {
    code: "REF",
    latitude: 48.654925379823375,
    longitude: -113.5014324534235,
    name: "Red Eagle Lake Foot",
  },
  {
    code: "REH",
    latitude: 48.64591247118814,
    longitude: -113.51021726808125,
    name: "Red Eagle Lake Head",
  },
  {
    code: "REY",
    latitude: 48.666855187009809,
    longitude: -113.63522137572757,
    name: "Reynolds Creek",
  },
  {
    code: "ROU",
    latitude: 48.857736257797484,
    longitude: -114.36640229729336,
    name: "Round Prairie",
  },
  {
    code: "SLI",
    latitude: 48.9055521864884,
    longitude: -113.61648157707003,
    name: "Slide Lake",
  },
  {
    code: "SNY",
    latitude: 48.626078748615654,
    longitude: -113.80455668916836,
    name: "Snyder Lake",
  },
  {
    code: "SPE",
    latitude: 48.602010868940575,
    longitude: -113.78673050923022,
    name: "Sperry",
  },
  {
    code: "STO",
    latitude: 48.887395808639681,
    longitude: -113.86900630683695,
    name: "Stoney Indian Lake",
  },
  {
    code: "TMC",
    latitude: 48.492114976178293,
    longitude: -113.36407116500634,
    name: "Two Medicine",
  },
  {
    code: "UPK",
    latitude: 48.980347102834557,
    longitude: -114.15446388411037,
    name: "Upper Kintla Lake",
  },
  {
    code: "UPN",
    latitude: 48.549908523602021,
    longitude: -113.58617091460691,
    name: "Upper Nyack",
  },
  {
    code: "UPC",
    latitude: 48.415117181497848,
    longitude: -113.45997420900022,
    name: "Upper Park Creek",
  },
  {
    code: "UPT",
    latitude: 48.467760851847714,
    longitude: -113.44713035074079,
    name: "Upper Two Medicine Lake",
  },
  {
    code: "WAT",
    latitude: 48.956461799063938,
    longitude: -113.89765183741157,
    name: "Waterton River",
  },
];

export const countriesWithImage = countries.filter((c) =>
  countryCodesWithImage.includes(c.code.toLowerCase())
);

export function sanitizeCountryName(countryName: string): string {
  return countryName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}

export function getCountryName(country: Country) {
  return country.name;
}

export function matchCountryName(
  currentGuess: string,
  countries: Country[]
): string {
  let cgName = "";

  for (const country of countries) {
    const countryName = sanitizeCountryName(getCountryName(country));
    if (countryName === sanitizeCountryName(currentGuess)) {
      cgName = country.name;
      break;
    }
  }
  return cgName;
}
