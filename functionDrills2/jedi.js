function jediName (fName,lName) {
  return lName.slice(0,3) + fName.slice(0,2)
}

// console.log(jediName('Beyonce','Knowles'));

function beyond(num) { 
  if(!Number.isFinite(num)){
    console.log('And Beyond');
  }
  else if(num > 0){
    console.log('To infinity');
  }
  else if(num < 0){ 
    console.log('To negative infinity');
  }
  else if(num == 0){ 
    console.log('Staying home')
  }
}

// beyond(Infinity);
// beyond(-Infinity);
// beyond(3);
// beyond(-6);
// beyond(0);

function decode(code){
  code = code.split(' ')
  let result = ''
  for(x=0; x<code.length; x++){
    if(code[x][0]=='a'){
      result+= code[x][1]
      }
    else if(code[x][0]=='b'){
      result+=(code[x][2])
      }
    else if(code[x][0]=='c'){
      result+=(code[x][3])
      }
    else if(code[x][0]=='d'){
      result+=(code[x][4])
      }
    else{
      result.concat(' ')
      }
  }
  return result
}

// console.log(decode('craft block argon meter bells brown croon droop'))

function daysInMonth (month,leapyear){
month = month.toLowerCase()
let numDays = 0; 

switch(month){
  case 'january': 
  case 'march': 
  case 'may':
  case 'july': 
  case 'august': 
  case 'october': 
  case 'december': 
    numDays = 31; 
    break;
  case 'february':
    numDays = leapyear ? 29 : 28;
    break;
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    numdays = 30; 
    break; 
  default: 
    return 'Must provide a valid month!'
 }

 return `${month} has ${numDays} days`
}

// console.log(daysInMonth('january',false))
// console.log(daysInMonth('february',true))
// console.log(daysInMonth('February',false))
// console.log(daysInMonth('Februry',true))

function rockPaperScissors(play){
  const computer = Math.floor(Math.random() * 3) + 1;

  let result = '';

  if (play > 3 ||  play < 1){
    result = 'error';
  }
  if (play === computer){
    result = 'tie';
  }
  else if(play === 1 && computer === 2){
    result = "computer wins!"
  }
  else if(play === 2 && computer === 3){
    result = "computer wins!"
  }
  else if(play === 3 && computer === 1){
    result = "computer wins!"
  }
  else if(play === 1 && computer === 3){
    result = "you win!"
  }
  else if(play === 2 && computer === 1){
    result = "you win!"
  }
  else if(play === 3 && computer === 2){
    result = "you win!"
  }

  return result
}

console.log(rockPaperScissors(1))
console.log(rockPaperScissors(2))
console.log(rockPaperScissors(3))
console.log(rockPaperScissors(4))