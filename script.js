/* James Bester */

/* here i have made a function that returns an array of char's based on char key codes. n being the num of the range and k being the key code to start at*/
const Lists = (n, k) => {
  let alpha = Array.from(Array(n)).map((e, i) => i + k);
  let beta = alpha.map((x) => String.fromCharCode(x));
  return (beta);
}

/* 
  to simplify my functions i have split the code across two functions:
  the password function is what get's called with an onclick and determines whether the criteria has been met,
  if so passwordGenerator is called. in which it takes the length of the desired password, i use the length in a for loop to create a completely random array of lowercase letters,
  then i check whether the user has requested other criteria, if user has requested other requirements i remove the first item of the array and add a random char from the requested field.
*/
const passwordGenerator = (length) => {
  var password = [];
  let numbers = Lists(10, 48);
  let chars = Lists(26, 65);
  let specials = Lists(15, 33);
  for (let i = 0; i < length; i++){
    password.push(chars[Math.floor(Math.random() * chars.length)].toLowerCase());
  }
  if(document.getElementById('special').checked == true){
    password.shift();
    password.push(specials[Math.floor(Math.random() * specials.length)]);
  }
  if(document.getElementById('number').checked == true){
    password.shift();
    password.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }
  if(document.getElementById('upper').checked == true){
    password.splice(0, 1, chars[Math.floor(Math.random() * chars.length)].toUpperCase());
  }
  return password.join("");
}

function password(){
  let length = document.getElementById("length").value;
  if (length < 8 || length > 128){
    alert("please select a length range between 8 and 256");
  }else if(length >= 8 && length <= 128){
    passwordGenerator(length, );
    document.getElementById('password').value = passwordGenerator(length);
  }else{
    alert("an error has occured, please try reloading the page.")
  }
}
