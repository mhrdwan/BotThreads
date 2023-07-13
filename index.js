require('dotenv').config();
const { default: axios } = require('axios');
const { ThreadsAPI } = require('threads-api');

let lokasi = "ciracas"
const Api = async () => {
    const api = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.APIKEY}&q=${lokasi}&aqi=yes`)
    // console.log(api.data);
    const IsiChat = (`˜”*°•.˜”*°• Update Cuaca Ciracas •°*”˜.•°*”˜\nLokasi : ${api.data.location.name}\nNegara : ${api.data.location.country}\nSuhu : ${api.data.current.feelslike_c}°C\nTerakhir Update : ${api.data.current.last_updated}\n\n\nUpdate Bot Per 1 Jam\nᴮʸ ᴿⁱᵈʷᵃⁿ`)
    console.log(`˜”*°•.˜”*°• Update Cuaca Ciracas •°*”˜.•°*”˜\nLokasi : ${api.data.location.name}\nNegara : ${api.data.location.country}\nSuhu : ${api.data.current.feelslike_c}°C\nTerakhir Update : ${api.data.current.last_updated}\n\n\nUpdate Bot Per 1 Jam\nᴮʸ ᴿⁱᵈʷᵃⁿ`);
    return IsiChat
}


const main = async () => {
    const threadsAPI = new ThreadsAPI({
        username: process.env.UNAME,
        password: process.env.PASSW,
    });

    await threadsAPI.publish({
        text: await Api(),
    });
    console.log("Sukses");
};

const Kumpul = async () => {
    setInterval(async() => {
        await Api()
        await main();
        
    }, 3600000);
}
Kumpul()