function telephoneCheck(str) {
    const validPatterns = [
      // 555-555-5555
      /^\d{3}-\d{3}-\d{4}$/,
  
      // 1 555-555-5555
      /^1 \d{3}-\d{3}-\d{4}$/,
  
      // 1 (555) 555-5555
      /^1 \(\d{3}\) \d{3}-\d{4}$/,
  
      // 5555555555
      /^\d{10}$/,
  
      // (555)555-5555
      /^\(\d{3}\)\d{3}-\d{4}$/,
  
      // 1 555 555 5555
      /^1 \d{3} \d{3} \d{4}$/,
  
      // 1(555)555-5555
      /1\(\d{3}\)\d{3}-\d{4}/
    ];
  
    return validPatterns.some((pattern) => pattern.test(str));
  }
  
function teleChecker(){
  let input = document.getElementById("inputTele");
  let valinput = input.value;
  let check = telephoneCheck(valinput);
  let result = document.getElementById("result");
  if(check) result.innerText = "Esta bien escrito";
  else result.innerText = "Esta mal";
}
