let namoona = ['Vedant', 'Pranay', 'Nilay', 'Rohan'];
let suffix = ['Yeda', 'ghochu', 'idiot', 'ghada'];

let randomIndexForName = Math.floor(Math.random() * namoona.length);

let randomIndexForSuffix = Math.floor(Math.random() * suffix.length);

console.log(namoona[randomIndexForName] + ' ' + suffix[randomIndexForSuffix]);
