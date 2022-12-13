function mphone(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;

}
function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var confirm_message = document.getElementById("confirm_message");
      
    var text;
    if(name.length < 5){
      text = "Por favor coloque o nome";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 5){
      text = "Por favor coloque o assunto";
      error_message.innerHTML = text;
      return false;
    }
    var e = phone.replace(/\D/g, "");
    e = e.replace(/^0/, "");
    if (e.length > 10) {
      e = e.replace(/^(\d\d)(\d{5})(\d{4}).*/, "$1$2$3");
    } else if (e.length > 5) {
      e = e.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "$1$2$3");
    } else if (e.length > 2) {
      e = e.replace(/^(\d\d)(\d{0,5})/, "$1$2");
    } else {
      e = e.replace(/^(\d*)/, "$1");
    }
    if(isNaN(e) || e.length < 9){
      text = "Por favor coloque um telefone válido";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Por favor coloque um e-mail válido";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length < 1){
      text = "Por favor coloque uma mensagem";
      error_message.innerHTML = text;
      return false;
    }
    var f=confirm('Confirme sua mensagem e pressione "Ok"\nCaso queira alterar algo, pressione "Cancelar"');
    if (f==true)
      {
        document.getElementById("wpp").setAttribute("href", `whatsapp://send/?phone=5532999265820&text=Olá, me chamo *${name}* e estou entrando em contato sobre *${subject}*.%0A%0A_${message}_%0A%0ASegue meus dados abaixo:%0ANome: *${name}*%0ATelefone: *${phone}*%0AE-mail: *${email}*`);
        document.getElementById("wpp").setAttribute("target", "_blank")
        var wpp = document.getElementById("wpp").href && document.getElementById("wpp").target
        document.getElementById("e_mail").setAttribute("href", `mailto:pedrotech.jf@gmail.com?subject=${subject}&body=Olá, me chamo ${name} e estou entrando em contato sobre ${subject}.%0A%0A${message}%0A%0ASegue meus dados abaixo:%0ANome: ${name}%0ATelefone: ${phone}%0AE-mail: ${email}`);
        var e_mail = document.getElementById("e_mail").href
        wpp
        e_mail
        error_message.innerHTML = ""
        confirm_message.innerHTML = "Mensagem enviada com sucesso!"
        document.getElementById("social").reset()
        return true
      }
    else
      {
        error_message.innerHTML = "Você cancelou o envio da mensagem!";
        return false;
      }
}
