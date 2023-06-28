
const fs = require('fs')
const chalk = require('chalk')
const igstalk = require('./basemats/lib/igstalk')
const ffstalk = require('./basemats/lib/ffstalk')
const mlstalk = require('./basemats/lib/mlstalk')
const githubstalk = require('./basemats/lib/githubstalk')
const tiktok = require("./basemats/lib/tiktok")
const facebook = require("./basemats/lib/facebook")
const instagram = require("./basemats/lib/instagram")
const twitter = require("./basemats/lib/twitter")
//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/@zalvaaannn' // ubah aia
global.gr = 'https://wa.me/6285882598647'
global.ig = '@zalvaaannn_' // ubah aja
global.email = 'fzaaal.ivn@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'MATS.TOREE' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6285882598647'] // ubah aja pake nomor lu
global.creator = "6285882598647@s.whatsapp.net"
global.premium = ['6285882598647'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.ownername = 'ZALVAN' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'cupidhouse' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'ZALVAN' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.packname = 'ZALVAN' // ubah aja
global.ownerr = ['ZALVAN'] // ubaha aja
global.author = 'ZALVAN' //ubah aja
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'matstore' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
//Terserah Kalau Paham 
global.thumb = fs.readFileSync("./basemats/image/hw.jpg")
global.log0 = fs.readFileSync("./basemats/image/matstore.jpg")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})