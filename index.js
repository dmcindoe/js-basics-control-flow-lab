function scuberGreetingForFeet(ridelength){ 

  if (ridelength <= 400){
    return 'This one is on me!';
}
  if (ridelength > 2000 && ridelength <= 2500){
  return 'I will gladly take your thirty bucks.';
}
  if (ridelength > 2500)
  return 'No can do.';
}


 function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";

    }
 
 function switchOnCharmFromTip(tip){
  switch (tip) {

    case "generous":
    return "Thank you so much.";
    break

    case "not as generous":
    return "Thank you.";
    break
    default: 
      return "Bye.";
    
}
// => true
 }

// This Area is more or less area for testing functions above
scuberGreetingForFeet()
