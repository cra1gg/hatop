const shortid = require('shortid');
class Classroom {
    constructor(_collection) {
        this._collection = _collection;        
    }
    
    handle_PUT(request, response) {
        request.body["joinCode"] = shortid.generate();
        this._collection.insertOne(request.body, (error, result) => {
            if(error) {
                return response.status(500).send(error);
            } 
            response.status(200).send(result.result);
        })
    }
}

module.exports = Classroom;