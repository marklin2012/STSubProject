const { libTest } = require('./sub/libb/test')

function getContent () {
<<<<<<< HEAD
    return 'test liba from sub'
=======
    return `test liba from self >> ${libTest()}`
>>>>>>> c5e5ac14a72b6182bb51e95c8e93f8c0ef8c9366
}

module.exports = {
    getContent,
}