/**
 * Created by janghunlee on 2017. 5. 13..
 */
module.exports = rider;

function rider(app,riderModel){
    app.get('/rider/start',(req,res)=>{
        var driverId = req.query.driverId;
	
	console.log(driverId)

        var url = "http://gopa.smilu.link/page/"+driverId;
        res.send(url);
    });
}
