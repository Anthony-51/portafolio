// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    var doc = {
      name: String,
      phone: Number,
      email: String,
      message: String
    };
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            

            event.preventDefault();
            event.stopPropagation();
          }
          if(form.checkValidity()){
            doc.name = document.getElementById("name").value;
            doc.phone = document.getElementById("phone").value;
            doc.email = document.getElementById("email").value;
            doc.message = document.getElementById("message").value;
            console.log(doc)
            event.preventDefault();
            var xhttp = new XMLHttpRequest();
            
            xhttp.onreadystatechange = function(){
              if(this.readyState == 4 && this.status == 200){
                console.log(this.response);
              }
            };
            
            xhttp.open("POST",'http://localhost:3800/form/sendMessage',true);
            xhttp.setRequestHeader('Content-type','application/json');
            xhttp.send(JSON.stringify(doc));
          }
          form.classList.add('was-validated')
        }, false)
      })
  })()