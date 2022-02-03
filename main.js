var img = ["pa.jpg", "mot.jpg","bro.jpg"];
var names = [ "Rajneesh Rai","Rita Rai", "Rudraksha Rai"];
var i = 0;
function next()
{ i++;
  if (i == 3)
  {
   i = 0; 
  }
  var updatedImage = img [i];
  var updatedName = names [i] ;
 document.getElementById("member_iamge").src = updatedImage;
 document.getElementById("member_name").innerHTML = updatedName;
 
}
