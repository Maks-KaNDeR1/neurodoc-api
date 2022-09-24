const axios = require('axios');

class GetGitController {
    async getGit(req, res) {

        const { username, password } = req.body

        try {
            const data = await axios.post('http://neurodoc.online/api/api/authenticate', {
                "username": username,
                "password": password
            })
            let returnedData = data.data;

            return res.json({
                returnedData
            });
        }
        catch (e) {
            res.send(e.response.data)
        }
    }
}

module.exports = new GetGitController()

