import { Router } from "express";

const router = Router();

import { createPerson, findAllPerson } from "../controllers/person.controllers";

router.get("/", findAllPerson);
router.post("/", createPerson);

export default router;
