import $ from 'jquery';
// Grab keys from API & apply to headers for collection
const APP_ID = 'GIsxsPDh2WD7JkvpiiCCnjYZslw7tSCB8UKCaiK4';
const API_KEY = 'W5xEIV2rfAfshMRZ4J0YsdTYSjQhzbCpGuEWfk80';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }

});