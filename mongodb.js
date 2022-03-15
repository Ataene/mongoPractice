const dbName = "myName";

const { MongoClient } = require("mongodb")

let connectionString = "mongodb://localhost:27017";

const getDb = async function(){

    let connection = await MongoClient.connect(connectionString);
    let db = connection.db(dbName);

    return db;
}

const getCollection  = async (name) => {

    let db = await getDb();

    let collection = db.collection(name);

    return collection;
}

const createDocument = async () => {

    let collection = await getCollection("people");
    collection.insertOne({name: "Emma", age: 33});
    console.log(result);
}