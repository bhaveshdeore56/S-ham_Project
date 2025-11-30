import dotenv from 'dotenv';
dotenv.config();

/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: "postgresql://neondb_owner:npg_utH38LGWKxBD@ep-summer-mouse-adwj629l-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
    }
};
