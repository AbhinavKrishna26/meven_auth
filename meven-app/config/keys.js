
if(Process.env.NODE_ENV === 'production'){
    module.exports = { mongoURI: "mongodb://localhost:27017/meven_auth",
        secret: 'yoursecret'
    };
    
}else {
    module.exports = {
        mongoURI: "mongodb://localhost:27017/meven_auth",
        secret: 'yoursecret'
    };
    
}