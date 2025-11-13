import prismaClient from "../../prisma";

interface JobRequest {
    title: string;
    address: string;
    zipCode: string;
    description: string;
    openPosition: number;
}

class CreateJobService {

    async execute({title, address, zipCode, description, openPosition}: JobRequest) {

        const job = await prismaClient.job.create({
            data: {
                title: title,
                address: address,
                zipCode: zipCode,
                description: description,
                openPosition: openPosition
            }
        });

        return job;

    }

}

export { CreateJobService };