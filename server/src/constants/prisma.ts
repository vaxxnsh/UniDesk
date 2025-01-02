import { PrismaClient } from '@prisma/client';

class DB {
    private static client : PrismaClient;

    static getClient() : PrismaClient  {
        if (!DB.client) {
            DB.client = new PrismaClient();
        }

        return DB.client;
    }
}

export default DB.getClient();