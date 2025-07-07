 
let express = require("express")
let mongodbClient = require("mongodb").MongoClient;

let connectionString = "mongodb://127.0.0.1:27017"

mongodbClient.connect(connectionString,function(err,clientObj){
      if(!err){
        let dbo = clientObj.db('database')
        dbo.collection("productsAll").find({id:1}).toArray(function(err,documents){
          if(!err){
            console.log(documents)
          }else{
            console.log(err)
          }
        })
        console.log('server started')

      }else{
        console.log(err.massage)
      }
})