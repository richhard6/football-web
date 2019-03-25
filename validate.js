

function validacion() 
{
  var x = document.getElementById("firstname");

  var y = document.getElementById("lastname");

  var z = document.getElementById("streetadress");

  var a = document.getElementById("city");

  var b = document.getElementById("zipcode");

  var c = document.getElementById("birthdate");

  var d = document.getElementById("parentname");

  var e = document.getElementById("phonenumber");

  var f = document.getElementById("email");

  var g = document.getElementById("sigdate").value;

  var h = document.getElementById("signame");

  var myDate = new Date(g);

  var today = new Date();






  if (x.value == "" || /[^\w\s]/.test(x.value) || /[0-9]+/.test(x.value) || /^\s+$/.test(x.value))
   {
    alert("Name must be filled out properly (no numbers or special chars)");
    return false;
  }

  if (y.value == "" || /[^\w\s]/.test(y.value) || /[0-9]+/.test(y.value) || /^\s+$/.test(y.value))  
  {
   alert("Last name must be filled out properly (no numbers or special chars)");
   return false;
 }

 if (z.value == "" || /[^\w\s]/.test(z.value) || /^\s+$/.test(z.value))  
  {
   alert("Street adress must be filled out");
   return false;
 }

 if (a.value == "" || /[^\w\s]/.test(a.value) || /[0-9]+/.test(a.value) || /^\s+$/.test(a.value))  
  {
   alert("City name must be filled out properly (no numbers or special chars)");
   return false;
  }

 if (b.value == "" || /[^\w\s]/.test(b.value) || /^\s+$/.test(b.value))   
  {
   alert("Zipcode must be filled out");
   return false;
 }

 if (c.value == "" || /^\s+$/.test(c.value))  
 {
  alert("Birthdate must be filled out");
  return false;
}

if (d.value == "" || /^\s+$/.test(d.value))  
 {
  alert("Parent / Guardian name must be filled out");
  return false;
}

if (/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(e.value))  
 {
  alert("Contact phone must be filled out");
  return true;
}

if (f.value == "")  
 {
  alert("Email adress must be filled out");
  return false;
} 

if ( myDate > today ) { 
  alert("You cannot be in the future, please type the current date");
  return false;
}

else if ( myDate < today) {

  alert("You cannot be in the past, please type the current date");
  return false;
}

if (h.value == ""){
alert("You need to fill out the Parent / Guardian name");
return false;

}



return true 

}





// RADIO BUTTOMS CHECKBOX DISABLE
document.getElementById('checkbox').onclick = function() {

  // is hazard checkbox checked?
  var checkbox = this.checked; // true or false

  // get list of radio buttons with name 'ship'
  var radios = document.getElementsByClassName('ropa');

  // loop through list of radio buttons
  for (var i=0, len=radios.length; i<len; i++) {
      var r = radios[i]; // current radio button

      if ( checkbox ) { // hazard checkbox checked

          
              r.disabled = true; // disable
          

      } else { // hazard not checked
          r.disabled = false; // no radios disabled
      }

  }
}











