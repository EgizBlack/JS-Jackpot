let numbers = [];

function generateNumber (){
  for (i = 0; i <5; i++){
    numbers[i] = Math.floor(Math.random() * 98) + 1;
  }
  for (i = 5; i <7; i++){
    numbers[i] = Math.floor(Math.random() * 9) + 1;
  }
  document.getElementById('output').innerHTML = numbers[0] + ' , ' + numbers[1] + ' , ' + numbers[2] + ' , ' + numbers[3] + ' , ' + numbers[4] +
  ' , ' + '<span class="lastTwo">' + numbers[5] + '</span>'+' , ' + '<span class = "lastTwo">'+ numbers[6] + '<span>';
}
