const getData = "SELECT * FROM students"
const getDataById = "SELECT * FROM students WHERE id = $1"
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1"
const addData = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)"
const delData = "DELETE FROM students WHERE id = $1"
const updateData = "UPDATE students SET name = $1, email = $2, age = $3, dob = $4 WHERE id = $5 RETURNING *";

module.exports = {
    getData,
    getDataById,
    checkEmailExists,
    addData,
    delData,
    updateData
}
