"use strict";
// orientacion para fotografias
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;
// como java, conjunto de datos predefinidos
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["landscape"] = 0] = "landscape";
    PhotoOrientation[PhotoOrientation["portrait"] = 1] = "portrait";
    PhotoOrientation[PhotoOrientation["square"] = 2] = "square";
    PhotoOrientation[PhotoOrientation["panorama"] = 3] = "panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const landscape = PhotoOrientation.landscape;
console.log('landscape', landscape);
console.log('landscape.toString()', landscape.toString());
console.log('landscape', PhotoOrientation[landscape]);
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
    Country["EEUU"] = "usa";
    Country["Espana"] = "esp";
})(Country || (Country = {}));
const country = Country.Colombia;
console.log('country', country);
