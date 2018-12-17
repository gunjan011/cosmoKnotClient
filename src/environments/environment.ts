// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment1 = {
  production: false,
  nasa_api_key1: "EvU3DzditQY4ezLs3w0QvGSLXlQOyF5NsKs2tfZM"
};

export const environment2 = {
  production : false, 
  nasa_api_key2 : 'XJtEhwjDtqK3p6oWeN3p8BGqgsPGS66ecVao5mzy'
} ;

let cosmoknotURL = '';
switch (window.location.hostname) {
   case 'localhost' || '127.0.0.1':
       cosmoknotURL = 'http://localhost:4666';
       break;
   case 'cosmoknot-client.herokuapp.com':
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
