const connection = require('../config/db');
const dontev = require('dotenv').config();

async function storeTask(request, response) {

    const params =  Array(
        request.body.title,
        request.body.description
    );

    const query = "INSERT INTO tasks(title,description) VALUES(?,?)";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else{
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "Ops, deu problema!",
                    data: err
                })
        }
    })
}

module.exports = {
    storeTask
}
