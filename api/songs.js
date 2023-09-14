const { clientPromise } = require("../lib/mongodb")

export default testAPI = async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("testDB");
 
        const songs = await db
            .collection("songs")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();
 
        res.json(songs);
    } catch (err) {
        console.error(err);
    }
 };