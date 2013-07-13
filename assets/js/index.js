$("#loginButton").click(function() {
   var username = $("#loginName").val();
   var password = $("#loginPassword").val();
   if (username && password) {
      $.post(
         '/login',
         {username: username, password:password},
         function () {
            window.location = "/chat";
         }
      ).fail(function(res) {
         alert("Error: " + res.getResponseHeader("error"));
      });
      
   } else {
      alert("A username and password is required");
   }
});

$("#signupButton").click(function() {
   var username = $("#signupName").val();
   var password = $("#signupPassword").val();
   var confirmationPassword = $("#signupConfirmPassword").val();
   if (username && password) {
      if(password == confirmationPassword) {
         $.post(
            '/signup',
            {username: username, password:password},
            function () {
               window.location = "/chat";
            }
            ).fail(function(res) {
            alert("Error: " + res.getResponseHeader("error"));
         });
      } else {
         alert("Passwords don't match");
      }
   } else {
      alert("A username and password is required");
   }
});
