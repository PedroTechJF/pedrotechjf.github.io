function loader(){
    function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("container").style.display = "block";
        let number = window.localStorage.getItem("number");
        let color = window.localStorage.getItem("color");
        let color_text = window.localStorage.getItem("color_text");
        let color_shadow = window.localStorage.getItem("shadow");
        if(number != null || number != undefined){
            document.getElementById("number").innerHTML = number;
            showOptions();
        };
        if(color != null || color != undefined){
            document.getElementsByTagName("html")[0].style.backgroundColor = color;
            document.getElementsByTagName("body")[0].style.backgroundColor = color;
            document.getElementById("color9").value = color;
        }
        if(color_text != null || color_text != undefined){
            document.getElementsByTagName("html")[0].style.color = color_text;
            document.getElementsByTagName("body")[0].style.color = color_text;
            document.getElementsByTagName("html")[0].style.borderColor = color_text;
            document.getElementsByTagName("body")[0].style.borderColor = color_text;
        }
        if(color_shadow != null || color_shadow != undefined){
            document.getElementById("wrapper").style.color = color_shadow;
            document.getElementById("notifications").style.color = color_shadow;
        }
        if(navigator.userAgent.indexOf("Android") != -1){
            document.getElementById("android").setAttribute("style", "display: flex;");
        }
    }
    document.getElementById("body").addEventListener('loadeddata', showPage());
}
function contador(id){
    var number = document.getElementById("number");
    var n = number.innerHTML.split(/[^.0-9]/).filter(Boolean).map(Number);
    if(number.innerHTML < 0){
        number.innerHTML = 0;
    } else if(id == "+"){
        number.innerHTML = n[0]+1;
    } else if(id == "-") {
        if(n[0] == 0){
            return
        }
        number.innerHTML = n[0]-1;
    } else if(id == "reset"){
        number.innerHTML = 0;
    }
    showOptions();
    window.localStorage.setItem("number", number.innerHTML);
}
function showOptions(){
    var number = document.getElementById("number");
    var options = document.getElementsByClassName("options");
    if(number.innerHTML > 0){
        options[0].setAttribute("style", "display: flex; -webkit-animation-name: show; animation-name: show;");
        options[2].setAttribute("style", "display: flex; -webkit-animation-name: show; animation-name: show;");
    } else {
        options[0].setAttribute("style", "-webkit-animation-name: ocult; animation-name: ocult;");
        options[2].setAttribute("style", "-webkit-animation-name: ocult; animation-name: ocult;");
        setTimeout(function(){
            options[0].style.display = "none";
            options[2].style.display = "none";
        },1000);
    }
}
function showMenu(id){
    let menu = document.getElementById(id + "_menu");
    let button = document.getElementById(id);

    if(button == closeo){
        button.style.zIndex = 0;
        menu = document.getElementById("coffee_menu");
        menu.setAttribute("style","-webkit-animation-name: ocult; animation-name: ocult;");
        document.getElementsByTagName("body")[0].style.margin = "0";
        setTimeout(function(){
            menu.style.display = "none";
        },900);
    } else  if(button == closef){
        button.style.zIndex = 0;
        menu = document.getElementById("feedback_menu");
        menu.setAttribute("style","-webkit-animation-name: ocult; animation-name: ocult;");
        document.getElementsByTagName("body")[0].style.margin = "0";
        setTimeout(function(){
            menu.style.display = "none";
        },900);
    }

    if(menu.style.display == "none"){
        menu.setAttribute("style","-webkit-animation-name: show; animation-name: show;");
        document.getElementsByTagName("body")[0].style.margin = "0";
        document.getElementsByTagName("body")[0].style.overflowY= "hidden";
        if(menu == coffee_menu){
            document.getElementById("inf").click();
        } else if(menu == inf_menu){
            button.style.zIndex = 2;
        } else if(menu == config_menu){
            button.setAttribute("style","transform: rotate(60deg); transition: 1s;");
            button.style.zIndex = 2;
        }
        setTimeout(function(){
            menu.style.display = "flex";
        },900);
    } else {
        menu.setAttribute("style","-webkit-animation-name: ocult; animation-name: ocult;");
        document.getElementsByTagName("body")[0].style.margin = "0";
        if(menu == feedback_menu){
            setTimeout(function(){
                document.getElementById("form_name").setAttribute("style", "border: 1px solid #e0e0e0");
                document.getElementById("form_email").setAttribute("style", "border: 1px solid #e0e0e0");
                document.getElementById("form_message").setAttribute("style", "border: 1px solid #e0e0e0");
                document.getElementById("error_message").innerHTML = "";
                document.getElementById("form_social").reset();
            },900);
        } else if(menu == coffee_menu){
            button.style.zIndex = 0;
        } else if(menu == inf_menu){
            button.style.zIndex = 0;
        } else if(menu == config_menu){
            button.setAttribute("style","transform: rotate(-60deg); transition: 1s;");
            button.style.zIndex = 0;
        }
        setTimeout(function(){
            menu.style.display = "none";
        },900);
        
    }
}
function copy_text(){
    let button = document.getElementById("pix_code");
    button.innerHTML = 'Copiado<i style="margin-left: 10px;" class="fa-solid fa-circle-check"></i>';
    setTimeout(function(){
        button.innerHTML = 'Copiar Código</br>QR Code<i style="margin-left: 10px;" class="fa-regular fa-copy"></i>'
    },2000)
    var input = document.createElement('textarea');
    input.innerHTML = "00020126580014BR.GOV.BCB.PIX0136ffb532ec-0f35-40f4-9c01-047e328d771e5204000053039865802BR5923Pedro Lucas de Oliveira6009SAO PAULO61080540900062070503***6304E91D";
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
}
function validate(){
    var name = document.getElementById("form_name");
    var email = document.getElementById("form_email");
    var message = document.getElementById("form_message");
    var error_message = document.getElementById("error_message");
    var confirm_message = document.getElementById("confirm_message");

    var e;
    var e2;
    if(email.value.length > 0){
        e = email.value.split("@");
        e2 = e[1].split(".");
    };
      
    var text;
    if(name.value.length < 1){
      text = "Por favor coloque o seu nome";
      error_message.innerHTML = text;
      confirm_message.innerHTML = "";
      name.setAttribute("style", "border: 1px solid red");
      email.setAttribute("style", "border: 1px solid #e0e0e0");
      message.setAttribute("style", "border: 1px solid #e0e0e0");
    } else if(email.value.indexOf("@") == -1 || email.value.length < 1 || e[1].length < 1 || e[1].includes(".") == false || e2[1].length < 1){
      text = "Por favor coloque um e-mail válido";
      error_message.innerHTML = text;
      confirm_message.innerHTML = "";
      name.setAttribute("style", "border: 1px solid #e0e0e0");
      email.setAttribute("style", "border: 1px solid red");
      message.setAttribute("style", "border: 1px solid #e0e0e0");
    } else if(message.value.length < 1){
      text = "Por favor coloque o seu comentário";
      error_message.innerHTML = text;
      confirm_message.innerHTML = "";
      name.setAttribute("style", "border: 1px solid #e0e0e0");
      email.setAttribute("style", "border: 1px solid #e0e0e0");
      message.setAttribute("style", "border: 1px solid red");
      setTimeout(function(){
        message.setAttribute("style", "border: 1px solid #e0e0e0");
      },10000);
    } else {
        text = "Sua mensagem está pronta para ser enviada!";
        error_message.innerHTML = "";
        confirm_message.innerHTML = text;
        name.setAttribute("style", "border: 1px solid #e0e0e0");
        email.setAttribute("style", "border: 1px solid #e0e0e0");
        message.setAttribute("style", "border: 1px solid #e0e0e0");
    }
}
function send(){
    var name = document.getElementById("form_name");
    var email = document.getElementById("form_email");
    var message = document.getElementById("form_message");
    var error_message = document.getElementById("error_message");
    var confirm_message = document.getElementById("confirm_message");

    if(confirm_message.innerHTML != "Sua mensagem está pronta para ser enviada!"){
        alert("Você precisar preencher todos os campos do formulário!");
        return false;
    } else {
        var f=confirm('Confirme sua mensagem e pressione "Ok"\nCaso queira alterar algo, pressione "Cancelar"');
        if (f==true){
            setTimeout(function(){
              name.setAttribute("style", "border: 1px solid #e0e0e0");
              email.setAttribute("style", "border: 1px solid #e0e0e0");
              message.setAttribute("style", "border: 1px solid #e0e0e0");
            },1000);
            document.getElementById("e_mail").setAttribute("href", `mailto:pedrotech.jf@gmail.com?subject=Feedback - Contador&body=Olá, me chamo ${name.value.replace(/^\s+|\s+$/g,'')} e estou entrando em contato para lhe dar um feedback sobre seu Contador.%0A%0A${message.value.replace(/^\s+|\s+$/g,'')}%0A%0ASegue meus dados abaixo:%0ANome: ${name.value.replace(/^\s+|\s+$/g,'')}%0AE-mail: ${email.value.replace(/^\s+|\s+$/g,'')}`);
            var e_mail = document.getElementById("e_mail").href;
            e_mail;
            error_message.innerHTML = "";
            confirm_message.innerHTML = "O seu feedback foi enviado com sucesso!";
            notification(document.getElementById("send_feedback"));
            document.getElementById("progress").style.backgroundColor = "green";
            setTimeout(function(){
                showMenu("feedback");
                document.getElementById("form_social").reset();
                confirm_message.innerHTML = "";
            },2000)
            document.getElementById("form_social").reset();
            return true;
          } else {
            error_message.innerHTML = "";
            confirm_message.innerHTML = "Sua mensagem está pronta para ser enviada!";
            notification(document.getElementById("fail_feedback"));
            document.getElementById("progress").style.backgroundColor = "red";
            setTimeout(function(){
              name.setAttribute("style", "border: 1px solid #e0e0e0");
              email.setAttribute("style", "border: 1px solid #e0e0e0");
              message.setAttribute("style", "border: 1px solid #e0e0e0");
            },1000);
            return false;
          }
    }
}
function notification(notification_id){
    let notifications = document.getElementById("notifications");
    let progress = document.getElementById("progress");
    let active = document.getElementById("active");

    if(active.innerHTML == "1"){
        var observer = new MutationObserver(function(){
            if(active.innerHTML == "0"){
                send_n();
                observer.disconnect();
            }
        });
        observer.observe(active, { attributes: true, childList: true });
    } else {
        send_n();
    }
    function send_n(){
        notifications.setAttribute("style", "-webkit-animation-name: animatebottom; nimation-name: animatebottom;");
        notifications.style.display = "block";
        notification_id.style.display = "block";
        active.innerHTML = "1";
        progress.style.backgroundColor = "#FFF";
        var width = 1;
        var id = setInterval(frame, 17);
        function frame() {
            if (width >= 100) {
            clearInterval(id);
            } else {
            width++; 
            progress.style.width = width + '%'; 
            }
        }
        setTimeout(() => {
            notifications.setAttribute("style", "display:block; -webkit-animation-name: ocult; animation-name: ocult;");
        }, 1700);
        setTimeout(() => {
            notifications.style.display = "none";
            notification_id.style.display = "none";
            active.innerHTML = "0";
        }, 2000);
    }
}
function setColor(id){
    let color_option = document.getElementById(id);
    let color = color_option.style.backgroundColor;
    let html = document.getElementsByTagName("html")[0];
    let body = document.getElementsByTagName("body")[0];
    let wrapper = document.getElementById("wrapper");
    let notifications = document.getElementById("notifications");
    let black = "var(--color0)";
    let white = "var(--color8)";
    let shadowBlack = "rgba(0 0 0 / 30%)";
    let shadowWhite = "rgba(161 161 161 / 30%)"

    if(id.includes("colorb")){
        html.style.color = color;
        body.style.color = color;
        html.style.borderColor = color;
        body.style.borderColor = color;
        window.localStorage.setItem("color_text", color);
        return;
    } else if(color_option == color9){
        color = color_option.value;
        html.style.backgroundColor = color;
        body.style.backgroundColor = color;
        wrapper.style.backgroundColor = shadowWhite;
        notifications.style.backgroundColor = shadowWhite;
        window.localStorage.setItem("shadow", shadowWhite);
    } else if(color == white){
        html.style.backgroundColor = color;
        body.style.backgroundColor = color;
        html.style.color = black;
        body.style.color = black;
        html.style.borderColor = black;
        body.style.borderColor = black;
        wrapper.style.backgroundColor = shadowBlack;
        notifications.style.backgroundColor = shadowBlack;
        window.localStorage.setItem("shadow", shadowBlack);
        window.localStorage.setItem("color_text", black);
    } else if(color == black){
        html.style.backgroundColor = color;
        body.style.backgroundColor = color;
        html.style.color = white;
        body.style.color = white;
        html.style.borderColor = white;
        body.style.borderColor = white;
        wrapper.style.backgroundColor = shadowWhite;
        notifications.style.backgroundColor = shadowWhite;
        window.localStorage.setItem("shadow", shadowWhite);
        window.localStorage.setItem("color_text", white);
    } else {
        html.style.backgroundColor = color;
        body.style.backgroundColor = color;
        wrapper.style.backgroundColor = shadowWhite;
        notifications.style.backgroundColor = shadowWhite;
        window.localStorage.setItem("shadow", shadowWhite);
    }
    window.localStorage.setItem("color", color);
}
