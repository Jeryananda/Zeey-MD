global.owner = ['6285848709044']  
global.mods = ['6285848709044'] 
global.prems = ['6285848709044']
global.nameowner = 'Zeey'
global.numberowner = '6285848709044' 
global.mail = 'support@tioprm.eu.org' 
global.gc = 'https://chat.whatsapp.com/IBBE8ZnLHKC2GMxcdZWkAJ'
global.instagram = 'https://www.instagram.com/zeey_ganz83?igsh=ejMxbXJmN2VsdHd6'
global.wm = '© Zeey'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'YOUR_APIKEY_HERE' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'YOUR_APIKEY_HERE'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'APIKEY' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
