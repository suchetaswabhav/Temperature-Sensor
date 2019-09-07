var fs = require('fs');
var Q = require ('q');
var obj = {};
var tsValue ;
var responseData = [];

var myModuleJSON = {
	defineRoutes: async function (router, filePath) {
        var deferred = Q.defer();
        // var obj = JSON.parse(fs.readFileSync('file', 'utf8')); //original
obj = {};
         obj =await  JSON.parse(fs.readFileSync(filePath, 'utf8'));

        console.log("JSON Object = ", obj)
        responseData = [];

        tsValue = obj[0].ts
        for (var i=0; i <obj.length ; i++){
          if(obj[i].ts == tsValue){
              responseData.push({ts:obj[i].ts , val: obj[i].val, year: 1920})
          }
        }
        console.log("responseData = ", responseData)
        deferred.resolve(responseData);
        return deferred.promise;
    }

    
}


    // ---------- automate run ends  ----------------
    
    module.exports = myModuleJSON;
    