const jwt = require('jsonwebtoken');

function aut (req,res,next){
    const token = req.header('auth-token');
    if(!token)
        return status(401).send('Access Denied');

    try{ 
        const veirfied = jwt.verify(token, process.env.TOKEN_SECRET );
        req.user = veirfied;
        next();

    }catch(err){
        res.status(400).send('Invalid token');
    }
}