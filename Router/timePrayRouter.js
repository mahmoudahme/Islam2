import express from "express";

import { Timing , getAzkar , getQuran} from "../Controller/prayTimecontroller.js";

const router = express.Router();

router.get("/timing", Timing);
router.get("/azkar", getAzkar);
router.get("/quran", getQuran);
export default router;
