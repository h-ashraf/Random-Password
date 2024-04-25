$(document).ready(function() {
    $("#lengthRange").on("input", function() {
      $("#lengthValue").text($(this).val());
    });
  
    $("#passwordForm").submit(function(e) {
      e.preventDefault();
      let length = $("#lengthRange").val();
      let capital = $("#capitalCheck").is(":checked");
      let lowercase = $("#lowercaseCheck").is(":checked");
      let number = $("#numberCheck").is(":checked");
      let special = $("#specialCheck").is(":checked");
      
      let password = generatePassword(length, capital, lowercase, number, special);
      $("#passwordDisplay").val(password); // Display password in the text box
    });
  
    function generatePassword(length, capital, lowercase, number, special) {
      let charset = "";
      if (capital) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
      if (number) charset += "0123456789";
      if (special) charset += "!@#$%^&*()_+[]{}|;:,.<>?";
      
      let password = "";
      for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return password;
    }
  });