const AxiosService = require("./service/axios.service");
const dotenv = require('dotenv');
dotenv.config();
AxiosService.init();

module.exports = {
    default: `--format-options '{"snippetInterface": "synchronous"}' --publish-quiet`
}

