import { Request, Response } from 'express';
import { CreateJobService } from '../../services/jobs/create-job.service';

class CreateJobController {

    async handle(req: Request, res: Response) {

        const { title, address, zipCode, description, openPosition } = req.body;

        const createJobService = new CreateJobService();
        const job = await createJobService.execute({ title, address, zipCode, description, openPosition });

        return res.json(job);

    }

}

export { CreateJobController };