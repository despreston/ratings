var fs=require('fs');
var csv=require('fast-csv');
var Q = require('q');

module.exports = {
    getMembers : getMembers
};

function getMembers(){
    console.log('Loading CSV File');
    var deferred = Q.defer();
    var stream = fs.createReadStream("Membership.csv");
    var csvData=[];
    var csvStream = csv
        .parse({headers: true})
        .on("data", function(data){
            csvData.push(data);
        })
        .on("end", function(){
            deferred.resolve(csvData);
        });

    stream.pipe(csvStream);
    return deferred.promise;
}



