// Code your solution in this file.
function lowerCaseDrivers(array){
  
  const newdrivers=array.map(function(num){
    return num.toLowerCase();
  });
  return newdrivers;
}

function nameToAttributes(array){
  const newdrivers=array.map(function(num){
    const first=num.split(" ")[0];
    const last=num.split(" ")[1];
    return {firstName: first, lastName: last};
  });
  return newdrivers;
}

function attributesToPhrase(array){
  
}