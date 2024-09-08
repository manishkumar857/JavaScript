//dates

let mydate = new Date
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString())
console.log(typeof mydate);

//let mycreateddate = new Date(2023,0,15)//month start from 0 in js
//console.log(mycreateddate);

//let mycreateddate = new Date(2023,0,15,5,3)
//console.log(mycreateddate);

//let myCreatedDate = new Date("2023-01-14")
//console.log(myCreatedDate.toLocaleString());


//let mytimestamp = Date.now()
//console.log(mytimestamp); // time in milliseconds
//console.log(myCreatedDate.getTime());

//console.log(Math.floor(Date.now()/1000)) // to convert it from milliseconds

let newDate = new Date(2023,0,12)
console.log(newDate.getMonth()+1); // +1 As month starts from zero in js
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{weekday:"long"}))






