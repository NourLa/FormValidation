
function validateForm() {
      var a = document.forms["Form"]["formGroupExampleInput"].value;
      var b = document.forms["Form"]["formGroupExampleInput2"].value;
      var c = document.forms["Form"]["exampleFormControlInput1"].value;
      var d = document.forms["Form"]["exampleInputPassword1"].value;
      var e = document.forms["Form"]["exampleFormControlTextarea1"].value;
      if (a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == "", e == null || e == "") {
            alert("One of the inputs is empty! Please Fill All Required Field");
            return false;
      }
}
function verifMail() {

      var email = document.getElementById("exampleFormControlInput1").value;
      var f = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
      if (!f.test(email))
      //   
      {
            $('#exampleFormControlInput1').popover({ content: "Please provide a valid email address !!", placement: "right", trigger: "focus" });
            email.focus;
            document.getElementById("exampleFormControlInput1").style.border = "3px solid red";
            return false;
      }
      else {
            document.getElementById("exampleFormControlInput1").style.borderColor = "#0d244e";
            return true
      }

}
function verifPassword() {
      var passw = document.getElementById("exampleInputPassword1").value;
      var m = new RegExp("(?=.[!@#-_\$%\^&])");
      var h = new RegExp("(?=.*[0-9])");
      var l = new RegExp("(?=.*[A-Z])");
      if (passw.length < 8) {
            $('#exampleInputPassword1').popover({ content: "The password has less than 8 characters !!", placement: "right", trigger: "focus" });
            passw.focus;
            document.getElementById("exampleInputPassword1").style.border = "3px solid red";
            return false;
     if (!m.test(passw)) {
    
            $('#exampleInputPassword1').popover({ content: "Please provide a charatacter", placement: "right", trigger: "click" });
            passw.focus;
            document.getElementById("exampleInputPassword1").style.border = "3px solid red";
            return false;
      }
      else if (!h.test(passw)) {
            $('#exampleInputPassword1').popover({ content: "Please provide a number", placement: "right", trigger: "click" });
            passw.focus;
            document.getElementById("exampleInputPassword1").style.border = "3px solid red";
            return false;
      }
      else if (!l.test(passw)) {
            $('#exampleInputPassword1').popover({ content: "Please provide a valid password with at least a capital letter", placement: "right", trigger: "click" });
            passw.focus;
            document.getElementById("exampleInputPassword1").style.border = "3px solid red";
            return false;
      } }
      else {
            document.getElementById("exampleFormControlInput1").style.borderColor = "#0d244e";
            return true
      }
}
document.getElementById("reset").onclick = function resetcontent() {
      document.getElementById("formGroupExampleInput").value = "";
      document.getElementById("formGroupExampleInput2").value = "";
      document.getElementById("exampleFormControlInput1").value = "";
      document.getElementById("exampleInputPassword1").value = "";
      document.getElementById("exampleFormControlTextarea1").value = "";
}