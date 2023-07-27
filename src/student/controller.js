const client = require('../../db')
const queries = require('./queries')

client.connect()
    .then(() => {
        console.log('Prisijungta prie duomenų bazės!');
    })
    .catch(err => {
        console.error('Klaida prisijungiant prie duomenų bazės:', err);
    });

const getData = (req, res) => {
    client.query(queries.getData, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}
const getDataById = (req, res) => {
    const id = parseInt(req.params.id)
    client.query(queries.getDataById, [id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}
const addData = (req, res) => {
    const { name, email, age, dob } = req.body
    client.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists")
        } else {
            client.query(queries.addData, [name, email, age, dob], (error, results) => {
                if (error) throw error
                res.status(201).send("Created Successfully :)")
            })
        }
    })
}
const delData = (req, res) => {
    const id = parseInt(req.params.id)
    client.query(queries.getDataById, [id], (error, results) => {
        if (results.rowCount === 0) {
            res.send("Data not found")
        } else {
            client.query(queries.delData, [id], (error, results) => {
                if (error) throw error
                res.status(200).send("Deleted Successfully :)")
            })
        }

    })
}
const updateData = (req, res) => {
    const id = parseInt(req.params.id)
    const { name, email, age, dob } = req.body
    client.query(queries.updateData, [name, email, age, dob, id], (error, results) => {
        if (results.rowCount === 0) {
            res.send("Data not found")
        } else {
            if (error) throw error
            // res.status(200).json(results.rows[0])
            res.status(200).send("Updated Successfully :)")
        }
    })
}

module.exports = {
    getData,
    getDataById,
    addData,
    delData,
    updateData
}