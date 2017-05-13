/**
 * Created by janghunlee on 2017. 5. 13..
 */
module.exports = rider;

function rider(app,riderModel,randomstring){
    app.post('/rider/start',(req,res)=>{
        var address = req.body.address;
        var xLocation = req.body.xLocation;
        var yLocation = req.body.yLocation;
        var riderId = req.body.riderId;


        riderModel.update({"riderId":riderId},{$set:{"driverXLocation":xLocation,"driverYLocation":yLocation,"userLocation":address}},(err,model)=>{
            if(err) console.error(err);
            else{
                var data = new Array();
                data["url"] = "http://gopa.smilu.link/page/"+riderId;
                data["token"] = riderId;

                res.send(data);
            }
        });
    });

    app.get('/rider/:riderId',(req,res)=>{
        var riderId = req.query.riderId;

        riderModel.find({"riderId":riderId},(err,model)=>{
            if(err) console.error(err);
            else{
                var driverX = model[0]["driverXLocation"];
                var driverY = model[0]["driverYLocation"];

                var userX = model[0]["userXLocation"];
                var userY = model[0]["userYLocation"];

                //위도 = x
                //경도 = y

                var data = new Array();

                data["userX"] = userX;
                data["userY"] = userY;

                data["driverX"] = driverX;
                data["driverY"] = driverY;

                res.send(data);
            }
        });
    });
}