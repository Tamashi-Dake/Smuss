const { MongoClient } = require('mongodb');

// const path = require('path')
const uri = "mongodb+srv://dake148:Zq3JmZMIk1wfwjk6@cluster0.1vd3wy7.mongodb.net/Cluster0";
const options = {};
// console.log(uri)
if (!uri) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}


let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  let globalWithMongo = global;
  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

module.exports = clientPromise;