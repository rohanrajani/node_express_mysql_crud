var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nem_db'
});

connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
})

var addWeapon = async(req,res) => {
    var data = req.body 
    connection.query('INSERT INTO weapon SET ?', data, function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
}

var getAllWeapon = async(req,res) => {
    connection.query('SELECT * FROM weapon', null, function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
}

var getWeaponByID = async(req,res) => {
    var id= req.params.id
    connection.query('SELECT * FROM weapon WHERE `id`=?', [id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
}

var updateWeapon = async(req,res) => {
    var id= req.params.id
    connection.query('UPDATE weapon SET `weapon_name`=?, `weapon_type`=?, `weapon_range`=?  WHERE `id`=?', [req.body.weapon_name,req.body.weapon_type,req.body.weapon_range,id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
}

var deleteWeapon = async(req,res) => {
    var id= req.params.id
    connection.query('DELETE FROM weapon WHERE `id`=?', [id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
}

module.exports = {
    addWeapon,
    getAllWeapon,
    getWeaponByID,
    updateWeapon,
    deleteWeapon
}
