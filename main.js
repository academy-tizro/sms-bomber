function sms(){
  var number = document.getElementById('number').value;
  var speed = document.getElementById('speed').value;
  var link = document.getElementById('link');
  link.innerHTML='<div class="d-grid"><a class="btn btn-success" href="http://sms-bomber20.gigfa.com/Sms.php?phone='+number+'&count='+speed+'">Click to start bomber</a></div>'
}
