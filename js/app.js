document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var fullname = document.getElementById("fullname").value.trim();
    var email = document.getElementById("email").value.trim();
    var github = document.getElementById("github").value.trim();
    var avatar = document.getElementById("avatar").files.length;

    if (fullname !== "" && email !== "" && github !== "" && avatar > 0) {
      alert("C'est envoyé !");
    } else {
      alert("Impossible d'envoyer !");
    }
  });
});