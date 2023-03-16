import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb+srv://XXX:YYY@ZZZ.mongodb.net');

export const mongo = {
  db: client.db('mydb'),
};
