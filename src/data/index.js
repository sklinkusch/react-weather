import AntiguaAndBarbuda from "./AntiguaAndBarbuda"
import Bahamas from "./Bahamas"
import Barbados from "./Barbados"
import Belize from "./Belize"
import Canada from "./Canada"
import ChinaPR, { HongKong, Macau } from "./ChinaPR"
import CostaRica from "./CostaRica"
import Cuba from "./Cuba"
import Dominica from "./Dominica"
import DominicanRepublic from "./DominicanRepublic"
import ElSalvador from "./ElSalvador"
import Germany from "./Germany"
import Grenada from "./Grenada"
import Guatemala from "./Guatemala"
import Haiti from "./Haiti"
import Honduras from "./Honduras"
import India from "./India"
import Indonesia from "./Indonesia"
import Jamaica from "./Jamaica"
import Mexico from "./Mexico"
import UnitedStates, { PuertoRico, AmericanVirginIslands } from "./UnitedStates"

const countryObject = {
  AG: AntiguaAndBarbuda,
  BB: Barbados,
  BS: Bahamas,
  BZ: Belize,
  CA: Canada,
  CN: ChinaPR,
  CR: CostaRica,
  CU: Cuba,
  DE: Germany,
  DM: Dominica,
  DO: DominicanRepublic,
  GD: Grenada,
  GT: Guatemala,
  HK: HongKong,
  HN: Honduras,
  HT: Haiti,
  ID: Indonesia,
  IN: India,
  JM: Jamaica,
  MO: Macau,
  MX: Mexico,
  PR: PuertoRico,
  SV: ElSalvador,
  VI: AmericanVirginIslands,
  US: UnitedStates,
}

export const getCountry = countryCode => {
  return countryObject[countryCode].countryName || countryCode
}

export const getAdminDiv = (countryCode, adminCode) => {
  return countryObject[countryCode].adminCodes[adminCode] || adminCode
}