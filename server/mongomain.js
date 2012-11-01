/**
 * Created by JetBrains PhpStorm.
 * User: gtarcisius
 * Date: 11/1/12
 * Time: 2:54 PM
 * To change this template use File | Settings | File Templates.
 */

var mongo = require('mongodb'),
    Server = mongo.Server,
    Db = mongo.Db;

var server = new Server('localhost', 27017, {auto_reconnect: true});
var db = new Db('exampleDb', server);

db.open(function(err, db) {
    if(!err) {
        console.log("We are connected");
    }
});