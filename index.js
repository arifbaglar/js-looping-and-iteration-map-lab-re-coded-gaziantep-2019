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
  const newdrivers=map(function(num){
    const element=name.num
    const element2=hometown.num
    return element+'is from'+element2
  })
}





 const drivers = [
        { name: 'Bobby', hometown: 'Pittsburgh' },
        { name: 'Sammy', hometown: 'New York' },
        { name: 'Sally', hometown: 'Cleveland' },
        { name: 'Annette', hometown: 'Los Angeles' },
        { name: 'Bobby', hometown: 'Tampa Bay' }
      ];