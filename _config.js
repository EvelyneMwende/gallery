var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://eve:Hellomongo123@cluster0.gtkz0dm.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://eve:Hellomongo123@cluster0.gtkz0dm.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://eve:Hellomongo123@cluster0.gtkz0dm.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;

console.log('Hello')
