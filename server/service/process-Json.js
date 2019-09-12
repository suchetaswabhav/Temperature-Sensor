var fs = require('fs');
var Q = require('q');
var obj = {};
var responseData = [];

var myModuleJSON = {
    defineRoutes: async function (router, filePath) {
        var deferred = Q.defer();
        obj = {};
        obj = await JSON.parse(fs.readFileSync(filePath, 'utf8'));

        responseData = [];

        const map = new Map();
        for (const item of obj) {
            var year = new Date(item.ts).getFullYear()
            if (!map.has(year)) {
                map.set(year, true);    // set any value to Map
                responseData.push({
                    ts: item.ts,
                    val: item.val,
                    year: year
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
