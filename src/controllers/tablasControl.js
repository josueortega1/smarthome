const db = require('./database');
const tablasControl = {};

tablasControl.getClima = (req,res)=>{
    db.query("SELECT * FROM smarthome.Clima",(err,result)=>{
        if(err) throw err
        res.json(result)

    })
}

module.exports = tablasControl;
