import axios from "axios";
import {Quran } from "islam.js"
import { prayingTiming, Azkar } from "../Middleware/prayingTime.js";
export const Timing = async (req, res, next) => {
  const { country, city } = req.query;
  prayingTiming(country, city).then((result) => {
    res.json(result).status(200);
  });
};

export const getAzkar = async (req, res, next) => {
  const { typeOfAzkar } = req.query;
  Azkar(typeOfAzkar).then((result) => {
    res.json(result).status(200);
  });
};

export const getQuran = async (req, res, next) => {
  const quran = new Quran();
  const chapter = quran.getRandomVerseWithTranslation();
  res.json({Chapter : chapter }).status(200)

}; 
