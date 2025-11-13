import { Router } from "express";
import { TestController } from "../controllers/test.controller";

const router = Router();

router.get("/test", new TestController().handle);

export { router };