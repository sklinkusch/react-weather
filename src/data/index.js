import AntiguaAndBarbuda from "./AntiguaAndBarbuda"
import Austria from "./Austria"
import Bahamas from "./Bahamas"
import Bangladesh from "./Bangladesh"
import Barbados from "./Barbados"
import Belgium from "./Belgium"
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
import France, { FrenchGuiana, Guadeloupe, Martinique, Mayotte, Reunion } from "./France"
import Germany from "./Germany"
import Grenada from "./Grenada"
import Guatemala from "./Guatemala"
import Haiti from "./Haiti"
import Honduras from "./Honduras"
import India from "./India"
import Indonesia from "./Indonesia"
import Jamaica from "./Jamaica"
import Japan from "./Japan"
import Luxembourg from "./Luxembourg"
import Mexico from "./Mexico"
import Nigeria from "./Nigeria"
import Pakistan from "./Pakistan"
import Philippines from "./Philippines"
import Russia from "./Russia"
import Switzerland from "./Switzerland"
import UnitedKingdom, {IsleOfMan, Guernsey, Jersey, CaymanIslands, Gibraltar} from "./UnitedKingdom"
import UnitedStates, { PuertoRico, AmericanVirginIslands } from "./UnitedStates"

const countryObject = {
  AG: AntiguaAndBarbuda,
  AT: Austria,
  BB: Barbados,
  BD: Bangladesh,
  BE: Belgium,
  BR: Brazil,
  BS: Bahamas,
  BZ: Belize,
  CA: Canada,
  CH: Switzerland,
  CN: ChinaPR,
  CR: CostaRica,
  CU: Cuba,
  DE: Germany,
  DM: Dominica,
  DO: DominicanRepublic,
  ET: Ethiopia,
  FR: France,
  GB: UnitedKingdom,
  GD: Grenada,
  GF: FrenchGuiana,
  GG: Guernsey,
  GI: Gibraltar,
  GP: Guadeloupe,
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
  LU: Luxembourg,
  MO: Macau,
  MQ: Martinique,
  MX: Mexico,
  NG: Nigeria,
  PH: Philippines,
  PK: Pakistan,
  PR: PuertoRico,
  RE: Reunion,
  RU: Russia,
  SV: ElSalvador,
  US: UnitedStates,
  VI: AmericanVirginIslands,
  YT: Mayotte,
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