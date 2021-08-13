const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(process.argv[2], 'ascii');
const bandNames = file.split('\r\n');

console.log(`Imported ${bandNames.length} band names, creating JSON`);

fs.writeFileSync(path.resolve(__dirname, '../src/band-names.json'), JSON.stringify(bandNames));

console.log('Wrote band names to src/band-names.json')
