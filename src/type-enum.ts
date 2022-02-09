// orientacion para fotografias
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

// como java, conjunto de datos predefinidos

enum PhotoOrientation {
    landscape = 0,
    portrait = 1,
    square = 2,
    panorama = 3
}

const landscape: PhotoOrientation= PhotoOrientation.landscape;
console.log('landscape', landscape);
console.log('landscape.toString()', landscape.toString());
console.log('landscape', PhotoOrientation[landscape]);

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    Espana = 'esp'
}

const country: Country = Country.Colombia;
console.log('country', country);