module.exports = user;

function user(app,riderModel,randomString){

  app.get('/',(req,res)=>{
    res.render("asd.html");
  })

  app.get('/page/:riderId',(req,res)=>{
    res.render("page.html");
  });

  app.get('/setDB',(req,res)=>{
      var rdString = randomString.generate(15);
      var saveModel = new riderModel({"id":"root","password":"1234","driverId":rdString});

      saveModel.save((err,model)=>{
        if(err) console.log(err);
        else res.send("Set DB Success");
        console.log(model);
      })
  });

  app.get('/user/token',(req,res)=>{
    riderModel.find({"id":"root"},(err,model)=>{
      if(err) console.error(err);
      else res.send(model[0]["driverId"]);
    });
  });
}