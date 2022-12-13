function verify(){
  const terms = window.localStorage.getItem("termsandpolicy");

  if (terms == "yes"){
    document.getElementById("ter").setAttribute("style","display:none;");
    document.getElementById("ok").innerHTML = "Você já aceitou os Termos e Condições e a Política de Privacidade, se quiser rejeitá-los basta clicar no botão ao lado.";
    document.getElementById("del").setAttribute("style","display:block;");
  }
}

function terms(){
  window.localStorage.setItem('termsandpolicy', 'yes');
}

function del(){
  window.localStorage.clear('termsandpolicy');
    
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
    if(name.length < 1){
      text = "Por favor coloque o seu nome";
      error_message.innerHTML = text;
      document.getElementById("name").setAttribute("style", "border: 1px solid red");
      document.getElementById("subject").setAttribute("style", "border: 1px solid #e0e0e0");
      document.getElementById("phone").setAttribute("style", "border: 1px solid #e0e0e0");
      document.getElementById("email").setAttribute("style", "border: 1px solid #e0e0e0");
      document.getElementById("message").setAttribute("style", "border: 1px solid #e0e0e0");
      return false;
    }
    if(subject.length < 1){
      text = "Por favor descreva brevemente qual o motivo do contato";
      error_message.innerHTML = text;
      document.getElementById("name").setAttribute("style", "border: 1px solid #e0e0e0");
      document.getElementById("subject").setAttribute("style", "border: 1px solid red");
      document.getElementById("phone").setAttribute("style", "border: 1px solid #e0e0e0");
      document.getElementById("email").setAttribute("style", "border: 1px solid #e0e0e0");
      document.getElementById("message").setAttribute("style", "border: 1px solid #e0e0e0");
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
      document.getElementById("name").setAttribute("style", "border: 1px solid #e0e0e0");
      document.getElementById("subject").setAttribute("style", "border: 1px solid #e0e0e0");
      document.getElementById("phone").setAttribute("style", "border: 1px solid red");
      document.getElementById("email").setAttribute("style", "border: 1px solid #e0e0e0");
      document.getElementById("message").setAttribute("style", "border: 1px solid #e0e0e0");
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Por favor coloque um e-mail válido";
      error_message.innerHTML = text;
      document.getElementById("name").setAttribute("style", "border: 1px solid #e0e0e0");
      document.getElementById("subject").setAttribute("style", "border: 1px solid #e0e0e0");
      document.getElementById("phone").setAttribute("style", "border: 1px solid #e0e0e0");
      document.getElementById("email").setAttribute("style", "border: 1px solid red");
      document.getElementById("message").setAttribute("style", "border: 1px solid #e0e0e0");
      return false;
    }
    if(message.length < 1){
      text = "Por favor descreva o motivo do contato";
      error_message.innerHTML = text;
      document.getElementById("name").setAttribute("style", "border: 1px solid #e0e0e0");
      document.getElementById("subject").setAttribute("style", "border: 1px solid #e0e0e0");
      document.getElementById("phone").setAttribute("style", "border: 1px solid #e0e0e0");
      document.getElementById("email").setAttribute("style", "border: 1px solid #e0e0e0");
      document.getElementById("message").setAttribute("style", "border: 1px solid red");
      setTimeout(function(){
        document.getElementById("message").setAttribute("style", "border: 1px solid #e0e0e0");
      },10000);
      return false;
    }
    var f=confirm('Confirme sua mensagem e pressione "Ok"\nCaso queira alterar algo, pressione "Cancelar"');
    if (f==true)
      {
        setTimeout(function(){
          document.getElementById("name").setAttribute("style", "border: 1px solid #e0e0e0");
          document.getElementById("subject").setAttribute("style", "border: 1px solid #e0e0e0");
          document.getElementById("phone").setAttribute("style", "border: 1px solid #e0e0e0");
          document.getElementById("email").setAttribute("style", "border: 1px solid #e0e0e0");
          document.getElementById("message").setAttribute("style", "border: 1px solid #e0e0e0");
        },1000);
        document.getElementById("wpp").setAttribute("href", `whatsapp://send/?phone=5532999265820&text=Olá, me chamo *${name.replace(/^\s+|\s+$/g,'')}* e estou entrando em contato sobre *${subject.replace(/^\s+|\s+$/g,'')}*.%0A%0A_${message.replace(/^\s+|\s+$/g,'')}_%0A%0ASegue meus dados abaixo:%0ANome: *${name.replace(/^\s+|\s+$/g,'')}*%0ATelefone: *${phone.replace(/^\s+|\s+$/g,'')}*%0AE-mail: *${email.replace(/^\s+|\s+$/g,'')}*`);
        document.getElementById("wpp").setAttribute("target", "_blank")
        var wpp = document.getElementById("wpp").href && document.getElementById("wpp").target
        document.getElementById("e_mail").setAttribute("href", `mailto:pedrotech.jf@gmail.com?subject=${subject.replace(/^\s+|\s+$/g,'')}&body=Olá, me chamo ${name.replace(/^\s+|\s+$/g,'')} e estou entrando em contato sobre ${subject.replace(/^\s+|\s+$/g,'')}.%0A%0A${message.replace(/^\s+|\s+$/g,'')}%0A%0ASegue meus dados abaixo:%0ANome: ${name.replace(/^\s+|\s+$/g,'')}%0ATelefone: ${phone.replace(/^\s+|\s+$/g,'')}%0AE-mail: ${email.replace(/^\s+|\s+$/g,'')}`);
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
        setTimeout(function(){
          document.getElementById("name").setAttribute("style", "border: 1px solid #e0e0e0");
          document.getElementById("subject").setAttribute("style", "border: 1px solid #e0e0e0");
          document.getElementById("phone").setAttribute("style", "border: 1px solid #e0e0e0");
          document.getElementById("email").setAttribute("style", "border: 1px solid #e0e0e0");
          document.getElementById("message").setAttribute("style", "border: 1px solid #e0e0e0");
        },1000);
        return false;
      }
}
function rating(){
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var data = document.getElementById("data");
  var message = document.getElementById("message");
  var rating = document.getElementById("rating");
  var pontos = document.getElementById("pontos");
  var rate = document.getElementById("rate");
  var error_message = document.getElementById("error_message");
  var confirm_message = document.getElementById("confirm_message");

  var text;
  if(name.value.length < 1){
    text = "Por favor coloque o seu nome";
    error_message.innerHTML = text;
    name.setAttribute("style", "border: 1px solid red");
    email.setAttribute("style", "border: 1px solid #e0e0e0");
    data.setAttribute("style", "border: 1px solid #e0e0e0");
    message.setAttribute("style", "border: 1px solid #e0e0e0");
    setTimeout(function(){
      name.setAttribute("style", "border: 1px solid #e0e0e0");
    },5000);
    return false;
  }
  if(email.value.indexOf("@") == -1 || email.value.length < 6){
    text = "Por favor coloque um e-mail válido";
    error_message.innerHTML = text;
    name.setAttribute("style", "border: 1px solid #e0e0e0");
    email.setAttribute("style", "border: 1px solid red");
    data.setAttribute("style", "border: 1px solid #e0e0e0");
    message.setAttribute("style", "border: 1px solid #e0e0e0");
    setTimeout(function(){
      email.setAttribute("style", "border: 1px solid #e0e0e0");
    },5000);
    return false;
  }
  if(data.value.length < 8){
    text = "Por favor coloque uma data válida";
    error_message.innerHTML = text;
    name.setAttribute("style", "border: 1px solid #e0e0e0");
    email.setAttribute("style", "border: 1px solid #e0e0e0");
    data.setAttribute("style", "border: 1px solid red");
    message.setAttribute("style", "border: 1px solid #e0e0e0");
    setTimeout(function(){
      data.setAttribute("style", "border: 1px solid #e0e0e0");
    },5000);
    return false;
  }
  if(message.value.length < 1){
    text = "Por favor descreva o motivo do contato";
    error_message.innerHTML = text;
    name.setAttribute("style", "border: 1px solid #e0e0e0");
    email.setAttribute("style", "border: 1px solid #e0e0e0");
    data.setAttribute("style", "border: 1px solid #e0e0e0");
    message.setAttribute("style", "border: 1px solid red");
    setTimeout(function(){
      message.setAttribute("style", "border: 1px solid #e0e0e0");
    },5000);
    return false;
  }
  if(pontos.value == 0){
    text = "Por favor dê sua nota usando as estrelas";
    error_message.innerHTML = text;
    name.setAttribute("style", "border: 1px solid #e0e0e0");
    email.setAttribute("style", "border: 1px solid #e0e0e0");
    data.setAttribute("style", "border: 1px solid #e0e0e0");
    message.setAttribute("style", "border: 1px solid #e0e0e0");
    rate.setAttribute("style", "border: 1px solid red; border-radius: 10px;");
    return false;
  }
  var f=confirm('Confirme sua avaliação e pressione "Ok"\nCaso queira alterar algo, pressione "Cancelar"');
  if (f==true)
    {
      rating.method = "post";
      name.setAttribute("style", "border: 1px solid #e0e0e0");
      email.setAttribute("style", "border: 1px solid #e0e0e0");
      data.setAttribute("style", "border: 1px solid #e0e0e0");
      message.setAttribute("style", "border: 1px solid #e0e0e0");
      rate.setAttribute("style", "border: 1px solid transparent");
      error_message.innerHTML = "";
      confirm_message.innerHTML = "Avaliação enviada com sucesso!";
      setTimeout(function(){
        rating.reset();
      },100);
    }
  else
    {
      error_message.innerHTML = "Você cancelou o envio da sua avaliação!";
      setTimeout(function(){
        name.setAttribute("style", "border: 1px solid #e0e0e0");
        email.setAttribute("style", "border: 1px solid #e0e0e0");
        data.setAttribute("style", "border: 1px solid #e0e0e0");
        message.setAttribute("style", "border: 1px solid #e0e0e0");
        rate.setAttribute("style", "border: 1px solid transparent");
      },1);
      return false;
    }
}
function handleFiles(files) {
  window.URL = window.URL || window.webkitURL;

  var fileSelect = document.getElementById("l");
    fileElem = document.getElementById("file");
    fileList = document.getElementById("imagem");
    field = document.getElementById("i");

  fileSelect.addEventListener("click", function (e) {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault();
  }, false);
  if (files.length > 3 || document.getElementById("new") != null && document.getElementById("new").childElementCount == 3){
    alert("Você só pode enviar 3 imagens!");
    exit();
  }
  if (files.length > 1 && files.length <= 3  && document.getElementsByTagName("label").length < 8 && document.getElementsByClassName("labels").length === 1 ){
    document.getElementById("l").setAttribute("style", "padding: 6px 9px;")
    var input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("id", "file2");
    input.setAttribute("class", "inputs");
    input.setAttribute("accept", "image/*");
    input.setAttribute("multiple", "multiple");
    input.setAttribute("onchange", "handleFiles(this.files)");
    input.setAttribute("onclick", 'document.getElementById("file2").setAttribute("name", "uploadfile[]")');
    fileList.appendChild(input);
    var label = document.createElement("label");
    label.setAttribute("id", "l2");
    label.setAttribute("for", "file2");
    label.classList.add("labels");
    label.innerHTML = "Envie fotos (Opcional)";
    fileList.appendChild(label);
    var input2 = document.createElement("input");
    input2.setAttribute("type", "file");
    input2.setAttribute("id", "file3");
    input2.setAttribute("class", "inputs");
    input2.setAttribute("accept", "image/*");
    input2.setAttribute("multiple", "multiple");
    input2.setAttribute("onchange", "handleFiles(this.files)");
    input2.setAttribute("onclick", 'document.getElementById("file3").setAttribute("name", "uploadfile[]")');
    fileList.appendChild(input2);
    var label2 = document.createElement("label");
    label2.setAttribute("id", "l3");
    label2.setAttribute("for", "file3");
    label2.classList.add("labels");
    label2.innerHTML = "Envie fotos (Opcional)";
    fileList.appendChild(label2);
    document.getElementById("l2").setAttribute("style", "padding: 6px 9px;");
    document.getElementById("l3").setAttribute("style", "padding: 6px 9px;");
  } else if (files.length === 2 && document.getElementsByTagName("label").length < 8 && document.getElementsByClassName("labels").length === 2){
    document.getElementById("l").setAttribute("style", "padding: 6px 9px;")
    var input2 = document.createElement("input");
    input2.setAttribute("type", "file");
    input2.setAttribute("id", "file3");
    input2.setAttribute("class", "inputs");
    input2.setAttribute("accept", "image/*");
    input2.setAttribute("multiple", "multiple");
    input2.setAttribute("onchange", "handleFiles(this.files)");
    input2.setAttribute("onclick", 'document.getElementById("file3").setAttribute("name", "uploadfile[]")');
    fileList.appendChild(input2);
    var label2 = document.createElement("label");
    label2.setAttribute("id", "l3");
    label2.setAttribute("for", "file3");
    label2.classList.add("labels");
    label2.innerHTML = "Envie fotos (Opcional)";
    fileList.appendChild(label2);
    document.getElementById("l2").setAttribute("style", "padding: 6px 9px;");
    document.getElementById("l3").setAttribute("style", "padding: 6px 9px;");
  } else if (files.length === 1 && document.getElementsByTagName("label").length < 7){
    document.getElementById("l").setAttribute("style", "padding: 6px 39px;");
    var input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("id", "file2");
    input.setAttribute("class", "inputs");
    input.setAttribute("accept", "image/*");
    input.setAttribute("multiple", "multiple");
    input.setAttribute("onchange", "handleFiles(this.files)");
    input.setAttribute("onclick", 'document.getElementById("file2").setAttribute("name", "uploadfile[]")');
    fileList.appendChild(input);
    var label = document.createElement("label");
    label.setAttribute("id", "l2");
    label.setAttribute("for", "file2");
    label.classList.add("labels");
    label.innerHTML = "Envie fotos (Opcional)";
    fileList.appendChild(label);
    document.getElementById("l2").setAttribute("style", "padding: 6px 24px;");
  } else if (files.length === 1 && document.getElementsByTagName("label").length < 8){
    document.getElementById("l").setAttribute("style", "padding: 6px 9px;");
    document.getElementById("l2").setAttribute("style", "padding: 6px 9px;");
    var input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("id", "file3");
    input.setAttribute("class", "inputs");
    input.setAttribute("accept", "image/*");
    input.setAttribute("multiple", "multiple");
    input.setAttribute("onchange", "handleFiles(this.files)");
    input.setAttribute("onclick", 'document.getElementById("file3").setAttribute("name", "uploadfile[]")');
    fileList.appendChild(input);
    var label = document.createElement("label");
    label.setAttribute("id", "l3");
    label.setAttribute("for", "file3");
    label.classList.add("labels");
    label.innerHTML = "Envie fotos (Opcional)";
    fileList.appendChild(label);
    document.getElementById("l3").setAttribute("style", "padding: 6px 9px;");
  }
  if (document.getElementById("new") != null) {
    var list = document.getElementById("new");
    
    for (var i = 0; i < files.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("id", "newd");

        var img = document.createElement("img");
        img.classList.add("img_preview");
        img.src = window.URL.createObjectURL(files[i]);
        img.style.display = "none";
        fileList.appendChild(img)
    }
    var nfile = document.getElementById("new");
    nfile.setAttribute("style", "display: flex;flex-direction: row;align-items: center;justify-content: space-evenly;");
  } else {
    var list = document.createElement("div");
    list.setAttribute("id","new")
    for (var i = 0; i < files.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("id","newd")

        var img = document.createElement("img");
        img.classList.add("img_preview");
        img.src = window.URL.createObjectURL(files[i]);
        img.style.display = "none";
        fileList.appendChild(img)
    }
  }
    var labels = document.getElementsByClassName("labels");
    var pimg = document.getElementsByClassName("img_preview");
    var imgn = document.getElementById("imgn");
    if (labels.length == 2){
      labels[0].innerHTML = `Imagem 1 <div id="new" style="display: flex;flex-direction: row;align-items: center;justify-content: space-around;"><div id="newd"><img class="img_preview" src="${pimg[0].src}"></div></div>`;
      imgn.innerHTML = labels.length - 1 + "/3";
    } else if (labels.length == 3 && files.length === 2 && document.getElementsByTagName("label").length < 9){
      imgn.innerHTML = labels.length - 1 + "/3"
      var x = window.matchMedia("(max-width: 800px)")
      if (x.matches) {
        labels[0].setAttribute("style", "padding: 6px 9px");
        labels[1].setAttribute("style", "padding: 6px 9px");
        labels[2].setAttribute("style", "padding: 6px 9px");
      };
      var label3 = document.createElement("label");
      label3.classList.add("labels");
      fileList.appendChild(label3);
      labels[0].innerHTML = `Imagem 1 <div id="new" style="display: flex;flex-direction: row;align-items: center;justify-content: space-around;"><div id="newd"><img class="img_preview" src="${pimg[0].src}"></div></div>`;
      labels[1].innerHTML = `Imagem 2 <div id="new" style="display: flex;flex-direction: row;align-items: center;justify-content: space-around;"><div id="newd"><img class="img_preview" src="${pimg[2].src}"></div></div>`;
      labels[2].innerHTML = `Imagem 3 <div id="new" style="display: flex;flex-direction: row;align-items: center;justify-content: space-around;"><div id="newd"><img class="img_preview" src="${pimg[4].src}"></div></div>`;
      imgn.innerHTML = labels.length - 1 + "/3"
      } else if (labels.length == 3 && files.length === 3 && document.getElementsByTagName("label").length < 9){
        labels[0].setAttribute("style", "padding: 6px 9px");
        labels[1].setAttribute("style", "padding: 6px 9px");
        labels[2].setAttribute("style", "padding: 6px 9px");
        var label3 = document.createElement("label");
        label3.classList.add("labels");
        fileList.appendChild(label3);
        labels[0].innerHTML = `Imagem 1 <div id="new" style="display: flex;flex-direction: row;align-items: center;justify-content: space-around;"><div id="newd"><img class="img_preview" src="${pimg[0].src}"></div></div>`;
        labels[1].innerHTML = `Imagem 2 <div id="new" style="display: flex;flex-direction: row;align-items: center;justify-content: space-around;"><div id="newd"><img class="img_preview" src="${pimg[2].src}"></div></div>`;
        labels[2].innerHTML = `Imagem 3 <div id="new" style="display: flex;flex-direction: row;align-items: center;justify-content: space-around;"><div id="newd"><img class="img_preview" src="${pimg[4].src}"></div></div>`;   
        imgn.innerHTML = labels.length - 1 + "/3";
        } else if (labels.length == 3){
          labels[1].setAttribute("style", "padding: 6px 9px");
        var label3 = document.createElement("label");
        label3.classList.add("labels");
        fileList.appendChild(label3);
        labels[1].innerHTML = `Imagem 2 <div id="new" style="display: flex;flex-direction: row;align-items: center;justify-content: space-around;"><div id="newd"><img class="img_preview" src="${pimg[2].src}"></div></div>`;
        imgn.innerHTML = labels.length - 2 + "/3";
        } else if (labels.length == 4){
          labels[2].setAttribute("style", "padding: 6px 9px")
            labels[2].innerHTML = `Imagem 3 <div id="new" style="display: flex;flex-direction: row;align-items: center;justify-content: space-around;"><div id="newd"><img class="img_preview" src="${pimg[4].src}"></div></div>`;
            imgn.innerHTML = labels.length - 1 + "/3";
            }
}
function size(){
  var l = document.getElementById("l");
  var rates = document.getElementById("rates");
  l.setAttribute("style", "padding: 6px 114px 10px;")
  var x = window.matchMedia("(max-width: 800px)")
  if (x.matches) {
    l.setAttribute("style", "padding: 6px 89px 10px;");
    rates.setAttribute("style", "width: 135px;");
  }
}
