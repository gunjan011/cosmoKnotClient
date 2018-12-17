// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  nasa_api_key: "EvU3DzditQY4ezLs3w0QvGSLXlQOyF5NsKs2tfZM"
};
let cosmoknotURL = '';

switch (window.location.hostname) {
   // this is the local host name of your react app
   case 'localhost' || '127.0.0.1':
       // this is the local host name of your API
       cosmoknotURL = 'http://localhost:4666';
       break;
  //  this is the deployed angular application
   case 'cosmoknot-client.herokuapp.com':
       // this is the full url of your deployed API
cosmoknotURL = 'https://cosmoknotserver.herokuapp.com'
}

export default cosmoknotURL;

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
