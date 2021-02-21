const Axios = require('axios');
const AxiosService = {
    init() {
        this.axios = Axios.create({
            headers: { 'Content-Type': 'application/json' },
            baseURL: process.env.BASE_URL,
        });

        this.axios.interceptors.response.use(function (response) {
            return {
                error: false,
                response
            };
        }, function (err) {
            return {
                error:true,
                ...err
            }
        });
    },


    async get(path, jwt, additionalHeaders={}) {
        return this.axios.get(path, {
            headers: {
                ...this.authorizationHeader(jwt),
                ...additionalHeaders
            }
        });
    },

    /**
     * Sends a POST request with a json body to the API.
     * @param {String} path A relative path to the ressource.
     * @param {*} body The request's body.
     * @param {*} withAuth True if the auth header should be set.
     */
    async post(path, body = {}, jwt) {
        return this.axios.post(path, body, {
            headers: this.authorizationHeader(jwt),
        });
    },

    async postFile(path, body = {}, jwt,extraHeaders){
        return this.axios.post(path, body, {
            headers: {
                Authorization: 'Bearer ' + jwt,
                'content-type': extraHeaders['content-type']
            },
        });
    },

    /**
     * Sends a PT request with a json body to the API.
     * @param {String} path A relative path to the ressource.
     * @param {*} body The request's body.
     * @param {*} withAuth True if the auth header should be set.
     */
    async put(path, body = {}, jwt) {
        return this.axios.put(path, body, {
            headers: this.authorizationHeader(jwt),
        });
    },

    /**
     * Sends a DELETE request with a json body to the API.
     * @param {String} path A relative path to the ressource.
     * @param {*} withAuth True if the auth header should be set.
     */
    async delete(path, jwt) {
        return this.axios.delete(path, {
            headers: this.authorizationHeader(jwt),
        });
    },

    /**
     * Creates an authorization header if ther is a token.
     * Returns an empty object otherwise.
     */
    authorizationHeader(jwt) {
        return (jwt) ? { Authorization: `Bearer ${jwt}` } : {};
    },
};

module.exports = AxiosService;
