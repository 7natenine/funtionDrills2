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

6