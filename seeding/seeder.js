require('dotenv').config({path: './env/.env.production'});
const { Seeder } = require('mongo-seeding');

const config = {
  database: process.env.DB_URI_DATA + process.env.DB_NAME,
  dropDatabase: true,
};

const seeder = new Seeder(config);

const collectionReadingOptions = {
    transformers: [
        Seeder.Transformers.replaceDocumentIdWithUnderscoreId,
    ]
}

const path = require('path');
const collections = seeder.readCollectionsFromPath(
    path.resolve("./seeding/datas"),
    collectionReadingOptions
);


seeder.import(collections);
