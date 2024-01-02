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

let q = `INSERT INTO newyear (id,username,email,password) VALUES ?`;
let user=[];

let getRandomUsser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
    
  ];
  

}


for(let i=0;i<100;i++){
  // console.log(getRandomUsser());
  user.push(getRandomUsser());

}

//  let user =[ //[102,"divyasaini007b","divyasaini15@gmailb.com","divya1234b"],
//             // [103,"divyasaini007c","divyasaini15@gmailc.com","divya1234c"]
//             [104,"divyasaini007d","divyasaini15@gmailc.com","divya1234d"]];

try{
    connection.query(q,[user],(err,result)=>{
    if (err) throw err;
    console.log(result);
    
  });
}catch(err){
    console.log(err);

}
connection.end();


 
//   console.log(getRandomUsser());
