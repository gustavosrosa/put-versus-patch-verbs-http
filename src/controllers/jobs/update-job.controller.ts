import { Request, Response } from 'express';
import { UpdateJobService } from '../../services/jobs/update-job.service';

class UpdateJobController {

    async handle(req: Request, res: Response) {

        const id = req.query.id as string;
        const { availablePosition } = req.body;

        const updateJobService = new UpdateJobService();
        const job = updateJobService.execute({ id, availablePosition });

        return res.json(job);

    }

}

export { UpdateJobController };