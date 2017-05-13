/**
 * Created by janghunlee on 2017. 5. 13..
 */
module.exports = rider;

function rider(app,riderModel){
    app.post('/rider/start',(req,res)=>{
        var driverId = req.body.driverId;


        var url = "http://gopa.smilu.link/page/"+riderId;
        res.send(url);
    });
}