const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'redhat',
    database:'sql_app'
  });
//Inserting new(single data) data 
// let q = "INSERT INTO data (id,username,email,psw) VALUES (?,?,?,?)";
// let user = [101,"divyasaini007","divyasaini15@gmail.com","divya1234"];

let q = "INSERT INTO data (id,username,email,psw) VALUES ?";
let user =[ [102,"divyasaini007b","divyasaini15@gmailb.com","divya1234b"],
            [103,"divyasaini007c","divyasaini15@gmailc.com","divya1234c"]];

try{
    connection.query(q,[user],(err,result)=>{
    if (err) throw err;
    console.log(result);
    
  });
}catch(err){
    console.log(err);

}
connection.end();


 let getRandomUsser =   () => {
    return {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      
    };
    

  }

//   console.log(getRandomUsser());
