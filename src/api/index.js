import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';
const dailyUrl = 'https://covid19.mathdro.id/api/daily'
const country = "https://covid19.mathdro.id/api/countries"
export const fetchData = async (country) => {
    let changeableUrl = url;
    if(country){
        changeableUrl = `https://covid19.mathdro.id/api/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, lastUpdate, deaths } } = await axios.get(changeableUrl)
        const modifiedData = { confirmed, recovered, lastUpdate, deaths, }

        return modifiedData
    } catch (e) {

    }
}
// /confirmed recovered lastUpdate deaths

export const getDailyData = async () => {

    try {
        const {data} = await axios.get(dailyUrl);
        const modified = data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total, 
            deaths:dailyData.deaths.total, 
            date:dailyData.reportDate


        }));
        return modified
    } catch (error) {

    }

}

export const countryselector = async()=>{
try {
    const {data:{countries}} = await axios.get(country);
    return countries.map((country) => country.name)
  
} catch (error) {
    
}
}