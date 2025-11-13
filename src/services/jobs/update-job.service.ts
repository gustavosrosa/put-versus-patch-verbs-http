import prismaClient from "../../prisma";

interface JobRequest {
    id: string;
    availablePosition: boolean
}

class UpdateJobService {

    async execute({id, availablePosition}: JobRequest) {

        const job = await prismaClient.job.update({
            where: {
                id: id
            },
            data: {
                availablePosition: availablePosition
            }
        });

        return job;

    }

}

export { UpdateJobService };