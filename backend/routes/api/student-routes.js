const { handleDeleteStudent } = require('../../controllers/student/deleteController')
const { handleGetStudentById } = require('../../controllers/student/getByIdController')
const { handleGetStudent } = require('../../controllers/student/getController')
const { handlePostStudent } = require('../../controllers/student/postController')
const { handleUpdateStudent } = require('../../controllers/student/updateController')

const router = require('express').Router()

router.get('/',handleGetStudent)
router.get('/:id',handleGetStudentById)
router.post('/',handlePostStudent)
router.put('/:id',handleUpdateStudent)
router.delete('/:id',handleDeleteStudent)

module.exports = router