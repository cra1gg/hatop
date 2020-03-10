const shortid = require('shortid');

/*TODO: Idk if we really need a class */
class Classroom {

    handle_GET(req, res, next) {
        res.status(200).json({
            message: "GET: /classroom"
        });
    }  
    handle_PUT(req, res, next) {
        res.status(200).json({
            message: "in classroom"
        });
        // TODO: Convert to mongoose in different subtask
        /*request.body["joinCode"] = shortid.generate();
        this._collection.insertOne(request.body, (error, result) => {
            if(error) {
                return response.status(500).send(error);
            } 
            response.status(200).send(result.result);
        })*/
    }
}

module.exports = Classroom;