import { Router } from "express";
import { TestController } from "../controllers/test.controller";
import { CreateJobController } from "../controllers/jobs/create-job.controller";
import { UpdateJobController } from "../controllers/jobs/update-job.controller";

const router = Router();

router.get("/test", new TestController().handle);

router.post("/job", new CreateJobController().handle);

router.put("/job/update", new UpdateJobController().handle);
router.patch("/job/update", new UpdateJobController().handle);

export { router };