import AntiguaAndBarbuda from "./AntiguaAndBarbuda"
import Bahamas from "./Bahamas"
import Bangladesh from "./Bangladesh"
import Barbados from "./Barbados"
import Belize from "./Belize"
import Brazil from "./Brazil"
import Canada from "./Canada"
import ChinaPR, { HongKong, Macau } from "./ChinaPR"
import CostaRica from "./CostaRica"
import Cuba from "./Cuba"
import Dominica from "./Dominica"
import DominicanRepublic from "./DominicanRepublic"
import ElSalvador from "./ElSalvador"
import Ethiopia from "./Ethiopia"
import Germany from "./Germany"
import Grenada from "./Grenada"
import Guatemala from "./Guatemala"
import Haiti from "./Haiti"
import Honduras from "./Honduras"
import India from "./India"
import Indonesia from "./Indonesia"
import Jamaica from "./Jamaica"
import Japan from "./Japan"
import Mexico from "./Mexico"
import Nigeria from "./Nigeria"
import Pakistan from "./Pakistan"
import Philippines from "./Philippines"
import Russia from "./Russia"
import UnitedKingdom, {IsleOfMan, Guernsey, Jersey, CaymanIslands, Gibraltar} from "./UnitedKingdom"
import UnitedStates, { PuertoRico, AmericanVirginIslands } from "./UnitedStates"

const countryObject = {
  AG: AntiguaAndBarbuda,
  BB: Barbados,
  BD: Bangladesh,
  BR: Brazil,
  BS: Bahamas,
  BZ: Belize,
  CA: Canada,
  CN: ChinaPR,
  CR: CostaRica,
  CU: Cuba,
  DE: Germany,
  DM: Dominica,
  DO: DominicanRepublic,
  ET: Ethiopia,
  GB: UnitedKingdom,
  GD: Grenada,
  GG: Guernsey,
  GI: Gibraltar,
  GT: Guatemala,
  HK: HongKong,
  HN: Honduras,
  HT: Haiti,
  ID: Indonesia,
  IM: IsleOfMan,
  IN: India,
  JE: Jersey,
  JM: Jamaica,
  JP: Japan,
  KY: CaymanIslands,
  MO: Macau,
  MX: Mexico,
  NG: Nigeria,
  PH: Philippines,
  PK: Pakistan,
  PR: PuertoRico,
  RU: Russia,
  SV: ElSalvador,
  US: UnitedStates,
  VI: AmericanVirginIslands,
}

export const getCountry = countryCode => {
  return countryObject[countryCode].countryName || countryCode
}

export const getAdminDiv = (countryCode, adminCode) => {
  const { adminCodes } = countryObject[countryCode]
  if(adminCodes){
    if(typeof adminCodes === "string"){
      return adminCodes
    } else {
      return adminCodes[adminCode]
    }
  } else {
    return adminCode
  }  
}