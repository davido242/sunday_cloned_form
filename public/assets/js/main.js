var customerName = prompt("Please enter your name", "");

if (customerName!= null){
  document.getElementById("give").innerHTML =
  "Hello " + customerName +  "! How are you today?";
}

// var r = confirm("Are you sure you want to send a Payment?");
// if(r == true){
//   x = "Payment Sent";
// } else{
//   x = "payment Cancelled!";
// }
// alert(x);