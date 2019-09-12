var fs = require('fs');
var Q = require('q');
var obj = {};
var responseData = [];

/**
 * @author Suchheta Shrivastav
 * @description: function to know the thermometer temperature of a one year-time span.
 */

var myModuleJSON = {
    defineRoutes: async function (router, filePath) {
        var deferred = Q.defer();
        obj = {};
        obj = await JSON.parse(fs.readFileSync(filePath, 'utf8'));

        responseData = [];


        var timespan = new Date(obj[0].ts).getFullYear()

        for (var i = 0; i < obj.length; i++) {
            var yearValue = new Date(obj[i].ts).getFullYear()
            if (yearValue == timespan) {

                responseData.push({
                    id: i+1,
                    ts: new Date(obj[i].ts),
                    val: obj[i].val,
                    year: yearValue
                });
            }
        }


        console.log("responseData = ", responseData)
        deferred.resolve(responseData);
        return deferred.promise;
    }

}


// ---------- automate run ends  ----------------

module.exports = myModuleJSON;
