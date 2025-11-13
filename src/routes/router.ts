import { Router } from "express";
import { TestController } from "../controllers/test.controller";
import { CreateJobController } from "../controllers/jobs/create-job.controller";
import { UpdateJobController } from "../controllers/jobs/update-job.controller";

const router = Router();

const JOB = "job";
const UPDATE = "update";

router.get("/test", new TestController().handle);

router.post(`/${JOB}`, new CreateJobController().handle);

router.put(`/${JOB}/${UPDATE}`, new UpdateJobController().handle);
router.patch(`/${JOB}/${UPDATE}`, new UpdateJobController().handle);

export { router };