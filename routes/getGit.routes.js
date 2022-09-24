const Router = require("express");
const getGitController = require('../controllers/getGitController')

const router = new Router();

router.post('/', getGitController.getGit)

module.exports = router;