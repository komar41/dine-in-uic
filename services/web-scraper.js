import axios from 'axios';

/**
 * 
 * @param {string} date yyyy-mm-dd 
 * @param {string} meal b (breakfast), l (lunch) or d (dinner) 
 * @return 
 */
async function fetchMenu(date, meal){
    // https://api.dineoncampus.com/v1/location/5b3662e274cebf0a8bea6863/periods?platform=0&date=2023-11-1 (November 1 - Breakfast)
    // https://api.dineoncampus.com/v1/location/5b3662e274cebf0a8bea6863/periods/64ed07b1351d5307f28fec0e?platform=0&date=2023-11-1 (United table - November 1 - Lunch)
    // https://api.dineoncampus.com/v1/location/5b3662e274cebf0a8bea6863/periods/64ed07b1351d5307f28fec1f?platform=0&date=2023-11-1 (United table - November 1 - Dinner)

    let url = "https://api.dineoncampus.com/v1/location/5b3662e274cebf0a8bea6863/periods"

    if(meal == 'b'){
        url += "?platform=0";
    }

    if(meal == 'l'){
        url += "/64ed07b1351d5307f28fec0e?platform=0";
    }

    if(meal == 'd'){
        url += "/64ed07b1351d5307f28fec1f?platform=0";
    }

    let res = await axios.get(url+"&date="+date);

    if(res && res.data != undefined && res.data.menu != undefined && res.data.menu.periods != undefined){
        if(res.data.menu.periods.name != undefined && res.data.menu.periods.name[0].toLowerCase() == meal){
            if(res.data.menu.periods.categories != undefined){
                return res.data.menu.periods.categories
            }else{
                return []
            }
        }
    }

    return [];
}

export default fetchMenu;
  