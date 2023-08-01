const express = require("express");
const app = express();
const port = 3000;
const router = require('./src/student/routes');
const cors = require("cors")
const os = require('os');
const readline = require('readline');

app.use(express.json())

app.use(cors());
app.use('/', router);
app.use('/:id', router);

const operacineSistema = os.platform();
console.log('Operacinė sistema:', operacineSistema);

const procesorius = os.cpus();
console.log('Procesorius:', procesorius);

const laisvaAtmintis = os.freemem();
console.log('Laisva atmintis (bytes):', laisvaAtmintis);

const bendraAtmintis = os.totalmem();
console.log('Bendra atmintis (bytes):', bendraAtmintis);

const tinkloSasajos = os.networkInterfaces();
Object.keys(tinkloSasajos).forEach((sasajosPavadinimas) => {
    const sasaja = tinkloSasajos[sasajosPavadinimas];
    console.log(`Tinklo sąsaja: ${sasajosPavadinimas}`);

    sasaja.forEach((sasajosInfo) => {
        if (sasajosInfo.family === 'IPv4') {
            console.log(`IP adresas: ${sasajosInfo.address}`);
            console.log(`Subnet maska: ${sasajosInfo.netmask}`);
        }
    });
});
const hostPavadinimas = os.hostname();
console.log('Kompiuterio pavadinimas:', hostPavadinimas);

const veikimoLaikas = os.uptime();
console.log('Sistemos veikimo laikas (sekundėmis):', veikimoLaikas);

const naudotojoInfo = os.userInfo();
console.log('Naudotojo informacija:', naudotojoInfo);


const osVersija = os.release();
console.log('Operacinės sistemos versija:', osVersija);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pateikiame klausimą vartotojui ir laukiame jo įvesties
rl.question('Koks jūsų vardas? ', (vardas) => {
    console.log(`Sveiki, ${vardas}!`);
    rl.close(); // Užbaigiame skaitymo interfeisą
});

app.listen(port, () => console.log(`app listening on port ${port}`)) 
