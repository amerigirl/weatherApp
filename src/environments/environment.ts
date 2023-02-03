
export const environment = {
  production: false,
  weatherBaseUrl: 'https://open-weather13.p.rapidapi.com/city/Kansas%20City', //url from rapidapi

  /*directly copied key and host from API; renamed
    these will be used to set the weather in service.ts*/

  XRapidAPIAppHostHeaderName: 'RapidAPIApp-Host',
  XRapidAPIAppHostHeaderValue: 'open-weather13.p.rapidapi.com',

  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue: 'e952d3f72cmsh1213a3cd880ec81p18b15ejsn7b65d6199e1e'

};
