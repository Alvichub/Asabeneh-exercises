
let age = prompt ("Enter yourAge");
if (age > 18){
    console.log (" You're old enough to drive.");
}else{
    let yearsToWait = (18 < age);
    console.log(` you are ${age}. you'll be allowed to drive after ${yearsToWait} years`)
}
//no,2

let yourAge = prompt ("Enter your Age");
if (30 > yourAge){
    console.log (` I'm ${30} - ${yourAge} older than you`);
}else{
    (myAge < yourAge)
    console.log (`you are ${myAge} -${yourAge} older than me`);

}
//3
  let a = 4;
  let b = 3;
  if (a > b ){
    console.log(`${a} is greater than${b} `);
  }else{
    (a > b)
    console.log (`${a} is less than ${b}`);
  }
  //4
  let num = prompt('Enter an even number');
  
if (num / 2  ) {
  console.log(`${num} is an even number`)

  console.log(`${num} is an odd number`)
} 

//level 2
let studentscore = prompt ('Enter score')
  if (studentscore => 80 && 80 <= 100){
  console.log( `Grade A`);
}
if (studentscore  => 70 || 70 <= 89) {
  console.log ('Grade B');
}
if (studentscore =>60 && 60 <= 69) {
  console.log('Grade C');
}
if (studentscore =>50 && 50 <= 59) {
  console.log('Grade D');
}
if (studentscore =>0 && 0 <= 49) {
  console.log('Grade F');
}
  
//2
let season = prompt('Enter month')  ;
switch (season) {
  case 'september, october, November':
    console.log ('The season is Autumn')
    break;
    case 'December, January, February':
      console.log ('The season is Winter')
      break;
      case 'March, April, May':
      console.log ('The season is Spring')
      break;
      case 'June, July, August':
      console.log ('The season is Spring')
      break;
       default: 
       console.log ('Invalid')
    
}
//3
let weekDays = prompt ('EnterDay');
if (weekDays = 'monday, tuesday, wednesday, thursday, friday') {
  console.log ('It is a working day')
} else { (weekDays = 'sataurday' &&[sunday]);
  console.log ('It is a weekend')
}
// level 3
let month = prompt('Enter Month ')


switch (month) {
  case 'january':
    console.log('January has 31')
    break
  case 'February':
    console.log('February has 28 days, 29 for leap year')
    break
  case 'March':
    console.log('March has 31 Days')
    break
  case 'April':
    console.log('April has 30 Days')
    break
  case 'May':
    console.log('May has 31')
    break
  case 'June':
    console.log('30')
    break
  case 'July':
    console.log('July has 31 Days')
    break
    case 'August':
    console.log('August has 31')
    break
  case 'September':
    console.log('March has 31 Days')
    break
  case 'April':
    console.log('September has 30 Days')
    break
  case 'October':
    console.log('OCtober has 31')
    break
  case 'November':
    console.log(' November has 30 Days')
    break
  case 'December':
    console.log('Decemberhas 31 Days')
    break
  default:
    console.log('Invalid.')
}

