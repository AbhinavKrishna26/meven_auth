
if(Process.env.NODE_ENV === 'production'){
    module.exports = {
        mongoURI: "mongodb+srv://aks123:abc123@cluster0-eivnf.mongodb.net/test?retryWrites=true&w=majority",
        secret: 'yoursecret'
    };
    
}else {
    module.exports = {
        mongoURI: "mongodb://localhost:27017/meven_auth",
        secret: 'yoursecret'
    };
    
}