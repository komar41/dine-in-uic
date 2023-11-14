// import axios from 'axios';
const axios = require('axios');
const fs = require('fs-extra');
const https = require("https");

const apiKey = 'FL6qvPGondZFfV4YK7WYzr2RtD44WPPOxRWBuygjHwsJwQAo0G6Am7d6sJeD';
const prompt_preamble = '';
const prompt_ending = ' wide photo, wide shot, long distance photo, unreal engine 5, very realistic, very detailed, realistic photography, 4k, 85 – mm – lens, sharp – focus, intricately – detailed, f/ 8, ISO 100, shutter – speed 1/ 125, diffuse – back – lighting, award – winning photograph, elle, small – catchlight, low – contrast, High – sharpness, depth – of – field, ultra – detailed photography, raytraced, global illumination';
const numberOfPics = '1';
const dir = '../assets/ai-images';

const options = {
    headers: {
        "Content-Type": "application/json",
    },
};

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

async function download(url, filename) {
    try {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      if (fs.existsSync(filename)) {
        return;
      } else {
        let request = https.get(url, function (response) {
          if (response.statusCode === 200) {
            let file = fs.createWriteStream(dir + '/' + filename);
            response.pipe(file);
          }
          request.setTimeout(12000, function () {
            request.abort();
          });
        });
      }
    } catch (err) {
      console.error(err);
    }
  }

async function getData(image, filename) {
    await download(image, filename)
}

async function generateImage(bodyInfo, image_name) {
    const result = await axios.post('https://stablediffusionapi.com/api/v3/dreambooth', bodyInfo, options)
    const picAmount = result.data.output.length
    let i = 0;
    for (i; i < picAmount; i++) {
        let number = i + 1;
        await getData(result.data.output[i], image_name + ".png");
    }
}

async function fetchImage(prompt, image_name){

    if (fs.existsSync(dir+"/"+image_name+".png")) {
        return;
    }

    let bodyInfo = JSON.stringify(
        {
            "key": apiKey,
            "model_id": "midjourney",
            "prompt": prompt_preamble+prompt+prompt_ending,
            "width": "512",
            "height": "512",
            "samples": numberOfPics,
            "num_inference_steps": "30",
            "safety_checker": "no",
            "enhance_prompt": "yes",
            "seed": null,
            "guidance_scale": 7.5,
            "webhook": null,
            "track_id": null
        });

    await generateImage(bodyInfo, image_name)
}

const formatMenu = (menu) => {

    let allDishes = {}; // dict organized by category

    for(let i = 0; i < menu.length; i++){
      if(menu[i].name != undefined && allDishes[menu[i].name] == undefined){
        allDishes[menu[i].name] = [];
      }

      for(let j = 0; j < menu[i].items.length; j++){
        if(menu[i].name != undefined){
          allDishes[menu[i].name].push(menu[i].items[j]);   
        }
      }
    }

    return allDishes;
}

async function fetchImagesForMenu(date){

    let local_menu = await fetchMenu(date, "b");
    let formated_menu = formatMenu(local_menu);

    for(const category of Object.keys(formated_menu)){
        for(const dish of formated_menu[category]){
            await fetchImage(dish.name, dish.id);
        }
    }
}

fetchImagesForMenu("2023-11-8")
