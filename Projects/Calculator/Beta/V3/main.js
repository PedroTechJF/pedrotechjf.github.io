function loader_calc(){
    var load;
    load = setTimeout(showPage, 1500);
    function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("calc").style.display = "block";
    document.getElementById("info").style.display = "block";
    document.getElementById("config_buttons").style.display = "flex";
    document.getElementById("extra_buttons").setAttribute("style","display:flex; flex-direction: column-reverse;");
    document.getElementById("last_buttons").style.display = "flex";
    document.getElementById("img").style.display = "block";

    let theme = window.localStorage.getItem("theme");
    let color_theme = window.localStorage.getItem("color_theme");
    if(theme != null){
        document.getElementById("img").src = theme;
        if (theme == ""){
            document.getElementById("actual").innerHTML = "Nenhum";
        } else if (theme.includes("background-1.png")){
            document.getElementById("actual").innerHTML = "Ondas 1";
        } else if (theme.includes("background-2.png")){
            document.getElementById("actual").innerHTML = "Ondas 2";
        } else if (theme.includes("background-3.png")){
            document.getElementById("actual").innerHTML = "Ondas 3";
        } else if (theme.includes("background-4.png")){
            document.getElementById("actual").innerHTML = "Ondas 4";
        } else if (theme.includes("background-5.png")){
            document.getElementById("actual").innerHTML = "Ondas 5";
        } else if (theme.includes("background-6.png")){
            document.getElementById("actual").innerHTML = "Ondas 6";
        } else if (theme.includes("background-7.png")){
            document.getElementById("actual").innerHTML = "Ondas 7";
        } else if (theme.includes("background-8.png")){
            document.getElementById("actual").innerHTML = "Ondas 8";
        }
    } else {
        document.getElementById("img").src = "";
        document.getElementById("actual").innerHTML = "Nenhum";
    }
    if(color_theme != null){
        let options = document.getElementsByClassName("option");
        for(i= 0; i < options.length; i++){
            options[i].setAttribute("style", `color: ${color_theme};`);
            options[9].setAttribute("style", `background-color: ${color_theme}`);
        }
        if (color_theme.includes("--theme1")){
            document.getElementById("actual_theme").innerHTML = "Azul-Claro";
        } else if (color_theme.includes("--theme2")){
            document.getElementById("actual_theme").innerHTML = "Laranja";
        } else if (color_theme.includes("--theme3")){
            document.getElementById("actual_theme").innerHTML = "Amarelo";
        } else if (color_theme.includes("--theme4")){
            document.getElementById("actual_theme").innerHTML = "Azul-Escuro";
        } else if (color_theme.includes("--theme5")){
            document.getElementById("actual_theme").innerHTML = "Verde";
        } else if (color_theme.includes("--theme6")){
            document.getElementById("actual_theme").innerHTML = "Vermelho";
        } else if (color_theme.includes("--theme7")){
            document.getElementById("actual_theme").innerHTML = "Roxo";
        }
    } else {
        let options = document.getElementsByClassName("option");
        for(i= 0; i < options.length; i++){
            options[i].setAttribute("style", `color: var(--theme1);`);
            options[9].setAttribute("style", `background-color: var(--theme1);`);
        }
        document.getElementById("actual_theme").innerHTML = "Azul-Claro";
    }
    if(navigator.userAgent.indexOf("Android") != -1){
        document.getElementById("android").setAttribute("style", "display: flex; top: 55px; position: absolute; z-index: 0");
        
    }
    document.getElementById('calcs').focus();
    var x = window.matchMedia("(max-width: 800px)");
    if (x.matches) {
        document.getElementById('calcs').setAttribute("onclick", "blur();");
        document.getElementById('calcs').setAttribute("readonly", "");
    };
    }
}
function loader_about(){
    var load;
    load = setTimeout(showPage, 1500);
    function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("about").style.display = "flex";
    document.getElementById("config_buttons").style.display = "flex";
    document.getElementById("extra_buttons").setAttribute("style","display:flex; flex-direction: column-reverse;");
    document.getElementById("last_buttons").style.display = "flex";
    document.getElementById("img").style.display = "block";

    let theme = window.localStorage.getItem("theme");
    let color_theme = window.localStorage.getItem("color_theme");
    if(theme != null){
        document.getElementById("img").src = theme;
        if (theme == ""){
            document.getElementById("actual").innerHTML = "Nenhum";
        } else if (theme.includes("background-1.png")){
            document.getElementById("actual").innerHTML = "Ondas 1";
        } else if (theme.includes("background-2.png")){
            document.getElementById("actual").innerHTML = "Ondas 2";
        } else if (theme.includes("background-3.png")){
            document.getElementById("actual").innerHTML = "Ondas 3";
        } else if (theme.includes("background-4.png")){
            document.getElementById("actual").innerHTML = "Ondas 4";
        } else if (theme.includes("background-5.png")){
            document.getElementById("actual").innerHTML = "Ondas 5";
        } else if (theme.includes("background-6.png")){
            document.getElementById("actual").innerHTML = "Ondas 6";
        } else if (theme.includes("background-7.png")){
            document.getElementById("actual").innerHTML = "Ondas 7";
        } else if (theme.includes("background-8.png")){
            document.getElementById("actual").innerHTML = "Ondas 8";
        }
    } else {
        document.getElementById("img").src = "";
        document.getElementById("actual").innerHTML = "Nenhum";
    }
    if(color_theme != null){
        let options = document.getElementsByClassName("option");
        for(i= 0; i < options.length; i++){
            options[i].setAttribute("style", `color: ${color_theme};`);
            options[9].setAttribute("style", `background-color: ${color_theme}`);
        }
        if (color_theme.includes("--theme1")){
            document.getElementById("actual_theme").innerHTML = "Azul-Claro";
        } else if (color_theme.includes("--theme2")){
            document.getElementById("actual_theme").innerHTML = "Laranja";
        } else if (color_theme.includes("--theme3")){
            document.getElementById("actual_theme").innerHTML = "Amarelo";
        } else if (color_theme.includes("--theme4")){
            document.getElementById("actual_theme").innerHTML = "Azul-Escuro";
        } else if (color_theme.includes("--theme5")){
            document.getElementById("actual_theme").innerHTML = "Verde";
        } else if (color_theme.includes("--theme6")){
            document.getElementById("actual_theme").innerHTML = "Vermelho";
        } else if (color_theme.includes("--theme7")){
            document.getElementById("actual_theme").innerHTML = "Roxo";
        }
    } else {
        let options = document.getElementsByClassName("option");
        for(i= 0; i < options.length; i++){
            options[i].setAttribute("style", `color: var(--theme1);`);
            options[9].setAttribute("style", `background-color: var(--theme1);`);
        }
        document.getElementById("actual_theme").innerHTML = "Azul-Claro";
    }
    if(navigator.userAgent.indexOf("Android") != -1){
        document.getElementById("android").setAttribute("style", "display: flex; top: 55px; position: absolute; z-index: 0");
        
    }
    }
}
function loader_versions(){
    var load;
    load = setTimeout(showPage, 1500);
    function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("versions").style.display = "flow-root";
    document.getElementById("config_buttons").style.display = "flex";
    document.getElementById("extra_buttons").setAttribute("style","display:flex; flex-direction: column-reverse;");
    document.getElementById("last_buttons").style.display = "flex";
    document.getElementById("version_buttons").style.display = "flex";
    document.getElementById("img").style.display = "block";

    let theme = window.localStorage.getItem("theme");
    let color_theme = window.localStorage.getItem("color_theme");
    if(theme != null){
        document.getElementById("img").src = theme;
        if (theme == ""){
            document.getElementById("actual").innerHTML = "Nenhum";
        } else if (theme.includes("background-1.png")){
            document.getElementById("actual").innerHTML = "Ondas 1";
        } else if (theme.includes("background-2.png")){
            document.getElementById("actual").innerHTML = "Ondas 2";
        } else if (theme.includes("background-3.png")){
            document.getElementById("actual").innerHTML = "Ondas 3";
        } else if (theme.includes("background-4.png")){
            document.getElementById("actual").innerHTML = "Ondas 4";
        } else if (theme.includes("background-5.png")){
            document.getElementById("actual").innerHTML = "Ondas 5";
        } else if (theme.includes("background-6.png")){
            document.getElementById("actual").innerHTML = "Ondas 6";
        } else if (theme.includes("background-7.png")){
            document.getElementById("actual").innerHTML = "Ondas 7";
        } else if (theme.includes("background-8.png")){
            document.getElementById("actual").innerHTML = "Ondas 8";
        }
    } else {
        document.getElementById("img").src = "";
        document.getElementById("actual").innerHTML = "Nenhum";
    }
    if(color_theme != null){
        let options = document.getElementsByClassName("option");
        for(i= 0; i < options.length; i++){
            options[i].setAttribute("style", `color: ${color_theme};`);
            options[9].setAttribute("style", `background-color: ${color_theme}`);
        }
        if (color_theme.includes("--theme1")){
            document.getElementById("actual_theme").innerHTML = "Azul-Claro";
        } else if (color_theme.includes("--theme2")){
            document.getElementById("actual_theme").innerHTML = "Laranja";
        } else if (color_theme.includes("--theme3")){
            document.getElementById("actual_theme").innerHTML = "Amarelo";
        } else if (color_theme.includes("--theme4")){
            document.getElementById("actual_theme").innerHTML = "Azul-Escuro";
        } else if (color_theme.includes("--theme5")){
            document.getElementById("actual_theme").innerHTML = "Verde";
        } else if (color_theme.includes("--theme6")){
            document.getElementById("actual_theme").innerHTML = "Vermelho";
        } else if (color_theme.includes("--theme7")){
            document.getElementById("actual_theme").innerHTML = "Roxo";
        }
    } else {
        let options = document.getElementsByClassName("option");
        for(i= 0; i < options.length; i++){
            options[i].setAttribute("style", `color: var(--theme1);`);
            options[9].setAttribute("style", `background-color: var(--theme1);`);
        }
        document.getElementById("actual_theme").innerHTML = "Azul-Claro";
    }
    if(navigator.userAgent.indexOf("Android") != -1){
        document.getElementById("android").setAttribute("style", "display: flex; top: 55px; position: absolute; z-index: 0");
        
    }
    }
}
function addN(button_id) {
    let input = document.getElementById("calcs");
    var x = window.matchMedia("(max-width: 800px)");
    if (x.matches) {
        document.getElementById(button_id).setAttribute("style", `background-color: rgba(209, 209, 209, 0.15); transform: scale(1.05);`);
        setTimeout(function(){
            document.getElementById(button_id).setAttribute("style", `background-color: rgba(0, 0, 0, 0); transform: scale(1.0);`);
        },250);
    }
    input.value = input.value + button_id;
    check();
}
function addO(button_id) {
    let input = document.getElementById("calcs");
    var x = window.matchMedia("(max-width: 800px)");
    if (x.matches) {
        let color_theme = window.localStorage.getItem("color_theme");
        document.getElementById(button_id).setAttribute("style", `background-color: rgba(209, 209, 209, 0.15); transform: scale(1.05); color: ${color_theme};`);
        setTimeout(function(){
            document.getElementById(button_id).setAttribute("style", `background-color: rgba(0, 0, 0, 0); transform: scale(1.0); color: ${color_theme};`);
        },250);
    }
    input.value = input.value + button_id;
    check();
}
function C(){
    document.getElementById("calcs").value = "";
    document.getElementById("res").innerHTML = "";
    res.setAttribute("style", "display: none;");
    res.innerHTML = "=";
    document.getElementById('calcs').focus();
    var x = window.matchMedia("(max-width: 800px)");
    let color_theme = window.localStorage.getItem("color_theme");
    if (x.matches) {
        document.getElementById('calcs').setAttribute("onclick", "blur();");
        document.getElementById('calcs').setAttribute("readonly", "");
        document.getElementById("C").setAttribute("style", `background-color: rgba(209, 209, 209, 0.15); transform: scale(1.05); color: ${color_theme};`);
        setTimeout(function(){
            document.getElementById("C").setAttribute("style", `background-color: rgba(0, 0, 0, 0); transform: scale(1.0); color: ${color_theme};`);
        },250);
    }
}
function backspace(){
    let calcs = document.getElementById("calcs");
    calcs.value = calcs.value.slice(0, calcs.value.length -1);
    var x = window.matchMedia("(max-width: 800px)");
    let color_theme = window.localStorage.getItem("color_theme");
    if (x.matches) {
        document.getElementById("⬅").setAttribute("style", `background-color: rgba(209, 209, 209, 0.15); transform: scale(1.05); color: ${color_theme};`);
        setTimeout(function(){
            document.getElementById("⬅").setAttribute("style", `background-color: rgba(0, 0, 0, 0); transform: scale(1.0); color: ${color_theme};`);
        },250);
    }
}
function keyboardInput(){
    let calcs = document.getElementById("calcs");
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 8) {
            calcs.focus();
            calcs.value = calcs.value.slice(0, calcs.value.length);
        }
    });
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 13) {
            equal();
        }
    });
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 27) {
            C();
        }
    });
    calcs.focus();
    var x = window.matchMedia("(max-width: 800px)")
    if (x.matches) {
        calcs.setAttribute("onclick", "blur();");
        calcs.setAttribute("readonly", "");
    }
}
function disable(){
 document.onkeydown = function (e) 
 {
  return false;
 }
}
function check(){
    let calcs = document.getElementById("calcs");
    let operators = calcs.value.split(/[^√%/÷*x+-]/).filter(Boolean);
    let numbers = calcs.value.split(/[^.0-9]/).filter(Boolean).map(Number);
    let letters = calcs.value.split(/([^0-9.√/%÷*x+-])/);
    let res = document.getElementById("res");

    if (calcs.value.includes(letters) == false){
        calcs.value = calcs.value.slice(0, calcs.value.length - 1);
    } else if( (calcs.value == "" && res.innerHTML == "=")){
        alert("Você precisa digitar alguns números...");
        calcs.focus();
        if (x.matches) {
            calcs.setAttribute("onclick", "blur();");
            calcs.setAttribute("readonly", "");
        }
    } else if(operators[0].length > 1 && numbers.length == 0){
        calcs.value = calcs.value.slice(0, calcs.value.length - 1);
    } else if (calcs.value.charAt(0) != "-" && calcs.value.charAt(0) == operators && numbers.length > 1){
        calcs.value = calcs.value.slice(0, calcs.value.length - 1);
    } else if(res.innerHTML == "=" && (calcs.value.charAt(0) == "-" || calcs.value.charAt(0) == "√") && operators[1].length > 0){
        equal();
        calcs.value = operators[1];
    } else if(res.innerHTML == "=" && operators[0].length > 0 && operators[0] == "√"){
        equal();
        calcs.value = "";
    } else if(res.innerHTML == "=" && operators[0].length > 0 && numbers.length > 0){
        equal();
        calcs.value = operators[0];
    } else if(res.innerHTML != "=" && operators[1].length > 0 && operators[1] == "%"){
        equal();
        calcs.value = "";
    } else if(res.innerHTML != "=" && operators[1].length > 0){
        equal();
        calcs.value = operators[1];
    }
    
}
function equal(){
    let calcs = document.getElementById("calcs");
    let res = document.getElementById("res");
    let operators = calcs.value.split(/[^√%/÷*x+-]/).filter(Boolean);
    let numbers = calcs.value.split(/[^.0-9]/).filter(Boolean).map(Number);
    let result = res.innerHTML.split(/[^.0-9]/).filter(Boolean).map(Number);
    var x = window.matchMedia("(max-width: 800px)");

    if(numbers.length == 0){
        return
    } else if(res.innerHTML == "=" && operators[0] == "-"){
        r = -numbers[0];
        res.innerHTML = '=' + r;
    } else if(res.innerHTML != "=" && res.innerHTML.includes("-")){
        if (operators[0] == "-" && operators[1] == "%"){
            res.innerHTML = '=' + `${-result[0] * -numbers[0] / 100 - result[0]}`;
        } else if (operators[0] != "-" && operators[1] == "%"){
            res.innerHTML = '=' + `${-result[0] * numbers[0] / 100 - result[0]}`;
        } else if (operators[0] == "x"){
            r = (-result[0]) + "*" + numbers[0];
            res.innerHTML = '=' + eval(r);
        } else if (operators[0] == "÷"){
            r = (-result[0]) + "/" + numbers[0];
            res.innerHTML = '=' + eval(r);
        } else {
            r = (-result[0]) + operators[0] + numbers[0];
            res.innerHTML = '=' + eval(r);
        }
    } else if(res.innerHTML == "="){
        if (operators[0] == "√"){
            res.innerHTML = '=' + `${Math.sqrt(numbers[0])}`;
        } else {
            r = numbers[0];
            res.innerHTML = '=' + r;
        }
    } else if(res.innerHTML != "="){
        if (operators[0] == "-" && operators[1] == "%"){
            res.innerHTML = '=' + `${result[0] * -numbers[0] / 100 + result[0]}`;
        } else if (operators[0] != "-" && operators[1] == "%"){
            res.innerHTML = '=' + `${result[0] * numbers[0] / 100 + result[0]}`;
        } else if (operators[0] == "√"){
            res.innerHTML = '=' + `${Math.sqrt(result[0])}`;
        } else if (operators[0] == "x"){
            r = result[0] + "*" + numbers[0];
            res.innerHTML = '=' + eval(r);
        } else if (operators[0] == "÷"){
            r = result[0] + "/" + numbers[0];
            res.innerHTML = '=' + eval(r);
        } else {
            r = result[0] + operators[0] + numbers[0];
            res.innerHTML = '=' + eval(r);
        }
    }
    res.setAttribute("style", "display: block;");
    calcs.value = "";
    calcs.focus();
    var x = window.matchMedia("(max-width: 800px)")
    if (x.matches) {
        calcs.setAttribute("onclick", "blur();");
        calcs.setAttribute("readonly", "");
    }
    
}
function theme(){
    let img = document.getElementById("img");
    let themes = document.getElementById("themes");
    img.style.display = "none";

    var x = window.matchMedia("(max-width: 800px)");
    if(x.matches){
        if(themes.value == "none"){
            img.src = "";
            setTimeout(function(){
                img.style.display = "block";
            },100);
            document.getElementById("actual").innerHTML = "Nenhum";
            window.localStorage.setItem('theme', '');
        } else if (themes.value == "bkg1"){
            img.src = "./backgrounds/Mobile/background-1.png";
            setTimeout(function(){
                img.style.display = "block";
            },100);
            document.getElementById("actual").innerHTML = "Ondas 1";
            window.localStorage.setItem('theme', './backgrounds/Mobile/background-1.png');
        } else if (themes.value == "bkg2"){
            img.src = "./backgrounds/Mobile/background-2.png";
            setTimeout(function(){
                img.style.display = "block";
            },100);
            document.getElementById("actual").innerHTML = "Ondas 2";
            window.localStorage.setItem('theme', './backgrounds/Mobile/background-2.png');
        } else if (themes.value == "bkg3"){
            img.src = "./backgrounds/Mobile/background-3.png";
            setTimeout(function(){
                img.style.display = "block";
            },100);
            document.getElementById("actual").innerHTML = "Ondas 3";
            window.localStorage.setItem('theme', './backgrounds/Mobile/background-3.png');
        } else if (themes.value == "bkg4"){
            img.src = "./backgrounds/Mobile/background-4.png";
            setTimeout(function(){
                img.style.display = "block";
            },100);
            document.getElementById("actual").innerHTML = "Ondas 4";
            window.localStorage.setItem('theme', './backgrounds/Mobile/background-4.png');
        } else if (themes.value == "bkg5"){
            img.src = "./backgrounds/Mobile/background-5.png";
            setTimeout(function(){
                img.style.display = "block";
            },100);
            document.getElementById("actual").innerHTML = "Ondas 5";
            window.localStorage.setItem('theme', './backgrounds/Mobile/background-5.png');
        } else if (themes.value == "bkg6"){
            img.src = "./backgrounds/Mobile/background-6.png";
            setTimeout(function(){
                img.style.display = "block";
            },100);
            document.getElementById("actual").innerHTML = "Ondas 6";
            window.localStorage.setItem('theme', './backgrounds/Mobile/background-6.png');
        } else if (themes.value == "bkg7"){
            img.src = "./backgrounds/Mobile/background-7.png";
            setTimeout(function(){
                img.style.display = "block";
            },100);
            document.getElementById("actual").innerHTML = "Ondas 7";
            window.localStorage.setItem('theme', './backgrounds/Mobile/background-7.png');
        } else if (themes.value == "bkg7"){
            img.src = "./backgrounds/Mobile/background-8.png";
            setTimeout(function(){
                img.style.display = "block";
            },100);
            document.getElementById("actual").innerHTML = "Ondas 8";
            window.localStorage.setItem('theme', './backgrounds/Mobile/background-8.png');
        }
    } else {
        if(themes.value == "none"){
            img.src = "";
            setTimeout(function(){
                img.style.display = "block";
            },100);
            document.getElementById("actual").innerHTML = "Nenhum";
            window.localStorage.setItem('theme', '');
        } else if (themes.value == "bkg1"){
            img.src = "./backgrounds/Desktop/background-1.png";
            setTimeout(function(){
                img.style.display = "block";
            },100);
            document.getElementById("actual").innerHTML = "Ondas 1";
            window.localStorage.setItem('theme', './backgrounds/Desktop/background-1.png');
        } else if (themes.value == "bkg2"){
            img.src = "./backgrounds/Desktop/background-2.png";
            setTimeout(function(){
                img.style.display = "block";
            },100);
            document.getElementById("actual").innerHTML = "Ondas 2";
            window.localStorage.setItem('theme', './backgrounds/Desktop/background-2.png');
        } else if (themes.value == "bkg3"){
            img.src = "./backgrounds/Desktop/background-3.png";
            setTimeout(function(){
                img.style.display = "block";
            },100);
            document.getElementById("actual").innerHTML = "Ondas 3";
            window.localStorage.setItem('theme', './backgrounds/Desktop/background-3.png');
        } else if (themes.value == "bkg4"){
            img.src = "./backgrounds/Desktop/background-4.png";
            setTimeout(function(){
                img.style.display = "block";
            },100);
            document.getElementById("actual").innerHTML = "Ondas 4";
            window.localStorage.setItem('theme', './backgrounds/Desktop/background-4.png');
        } else if (themes.value == "bkg5"){
            img.src = "./backgrounds/Desktop/background-5.png";
            setTimeout(function(){
                img.style.display = "block";
            },100);
            document.getElementById("actual").innerHTML = "Ondas 5";
            window.localStorage.setItem('theme', './backgrounds/Desktop/background-5.png');
        } else if (themes.value == "bkg6"){
            img.src = "./backgrounds/Desktop/background-6.png";
            setTimeout(function(){
                img.style.display = "block";
            },100);
            document.getElementById("actual").innerHTML = "Ondas 6";
            window.localStorage.setItem('theme', './backgrounds/Desktop/background-6.png');
        } else if (themes.value == "bkg7"){
            img.src = "./backgrounds/Desktop/background-7.png";
            setTimeout(function(){
                img.style.display = "block";
            },100);
            document.getElementById("actual").innerHTML = "Ondas 7";
            window.localStorage.setItem('theme', './backgrounds/Desktop/background-7.png');
        } else if (themes.value == "bkg7"){
            img.src = "./backgrounds/Desktop/background-8.png";
            setTimeout(function(){
                img.style.display = "block";
            },100);
            document.getElementById("actual").innerHTML = "Ondas 8";
            window.localStorage.setItem('theme', './backgrounds/Desktop/background-8.png');
        }
    }
}
function theme_calc(){
    let options = document.getElementsByClassName("option");
    let themes = document.getElementById("color_themes");
    for(i= 0; i < options.length; i++){
        if(themes.value == "color1"){
            options[i].setAttribute("style", "color: var(--theme1);");
            options[9].setAttribute("style", "background-color: var(--theme1);");
            document.getElementById("actual_theme").innerHTML = "Azul-Claro";
            window.localStorage.setItem('color_theme', 'var(--theme1)');
        } else if (themes.value == "color2"){
            options[i].setAttribute("style", "color: var(--theme2);")
            options[9].setAttribute("style", "background-color: var(--theme2);");
            document.getElementById("actual_theme").innerHTML = "Laranja";
            window.localStorage.setItem('color_theme', 'var(--theme2)');
        } else if (themes.value == "color3"){
            options[i].setAttribute("style", "color: var(--theme3);")
            options[9].setAttribute("style", "background-color: var(--theme3);");
            document.getElementById("actual_theme").innerHTML = "Amarelo";
            window.localStorage.setItem('color_theme', 'var(--theme3)');
        } else if (themes.value == "color4"){
            options[i].setAttribute("style", "color: var(--theme4);")
            options[9].setAttribute("style", "background-color: var(--theme4);");
            document.getElementById("actual_theme").innerHTML = "Azul-Escuro";
            window.localStorage.setItem('color_theme', 'var(--theme4)');
        } else if (themes.value == "color5"){
            options[i].setAttribute("style", "color: var(--theme5);")
            options[9].setAttribute("style", "background-color: var(--theme5);");
            document.getElementById("actual_theme").innerHTML = "Verde";
            window.localStorage.setItem('color_theme', 'var(--theme5)');
        } else if (themes.value == "color6"){
            options[i].setAttribute("style", "color: var(--theme6);")
            options[9].setAttribute("style", "background-color: var(--theme6);");
            document.getElementById("actual_theme").innerHTML = "Vermelho";
            window.localStorage.setItem('color_theme', 'var(--theme6)');
        } else if (themes.value == "color7"){
            options[i].setAttribute("style", "color: var(--theme7);")
            options[9].setAttribute("style", "background-color: var(--theme7);");
            document.getElementById("actual_theme").innerHTML = "Roxo";
            window.localStorage.setItem('color_theme', 'var(--theme7)');
        }
    }

}

function show_config(){
    let config = document.getElementById("config");
    let options = document.getElementById("options_menu");
    let contain = document.getElementById("contain");
    let button = document.getElementById("gear");
    let show = document.getElementById("show");
    if(config.style.display == "none"){
        options.setAttribute("style","-webkit-animation-name: show; animation-name: show");
        button.setAttribute("style","transform: rotate(60deg); transition: 1s;");
        show.style.zIndex = 2;
        setTimeout(function(){
            config.style.display = "block";
            contain.setAttribute("style","transform: none");
        },100);
    } else {
        options.setAttribute("style","-webkit-animation-name: ocult; animation-name: ocult");
        button.setAttribute("style","transform: rotate(-60deg); transition: 1s;");
        show.style.zIndex = 0;
        setTimeout(function(){
            config.style.display = "none";
            contain.setAttribute("style","transform: translate(100%, 0);");
        },100);
        
    }   
}
function show_button(button_id){
    let button = button_id;
    if(button.style.display == "none"){
        button.setAttribute("style","-webkit-animation-name: show; animation-name: show;");
        document.getElementsByTagName("body")[0].setAttribute("style", "margin:0; overflow-y: hidden");
        if(button == feedback_menu){
            document.getElementById("feedback").style.zIndex = 2;
        } else if(button == coffee_menu){
            document.getElementById("coffee").style.zIndex = 2;
        }
        setTimeout(function(){
            button.style.display = "flex";
        },900);
    } else {
        button.setAttribute("style","-webkit-animation-name: ocult; animation-name: ocult;");
        document.getElementsByTagName("body")[0].setAttribute("style", "margin:0");
        if(button == feedback_menu){
            document.getElementById("feedback").style.zIndex = 0;
        } else if(button == coffee_menu){
            document.getElementById("coffee").style.zIndex = 0;
        }
        setTimeout(function(){
            document.getElementById("form_name").setAttribute("style", "border: 1px solid #e0e0e0");
            document.getElementById("form_email").setAttribute("style", "border: 1px solid #e0e0e0");
            document.getElementById("form_message").setAttribute("style", "border: 1px solid #e0e0e0");
            document.getElementById("error_message").innerHTML = ""
            button.style.display = "none";
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
      
    var text;
    if(name.value.length < 1){
      text = "Por favor coloque o seu nome";
      error_message.innerHTML = text;
      name.setAttribute("style", "border: 1px solid red");
      email.setAttribute("style", "border: 1px solid #e0e0e0");
      message.setAttribute("style", "border: 1px solid #e0e0e0");
      return false;
    }
    if(email.value.indexOf("@") == -1 || email.value.length < 6){
      text = "Por favor coloque um e-mail válido";
      error_message.innerHTML = text;
      name.setAttribute("style", "border: 1px solid #e0e0e0");
      email.setAttribute("style", "border: 1px solid red");
      message.setAttribute("style", "border: 1px solid #e0e0e0");
      return false;
    }
    if(message.value.length < 1){
      text = "Por favor coloque o seu comentário";
      error_message.innerHTML = text;
      name.setAttribute("style", "border: 1px solid #e0e0e0");
      email.setAttribute("style", "border: 1px solid #e0e0e0");
      message.setAttribute("style", "border: 1px solid red");
      setTimeout(function(){
        message.setAttribute("style", "border: 1px solid #e0e0e0");
      },10000);
      return false;
    }
    var f=confirm('Confirme sua mensagem e pressione "Ok"\nCaso queira alterar algo, pressione "Cancelar"');
    if (f==true){
        setTimeout(function(){
          name.setAttribute("style", "border: 1px solid #e0e0e0");
          email.setAttribute("style", "border: 1px solid #e0e0e0");
          message.setAttribute("style", "border: 1px solid #e0e0e0");
        },1000);
        document.getElementById("e_mail").setAttribute("href", `mailto:pedrotech.jf@gmail.com?subject=Feedback - Calculadora&body=Olá, me chamo ${name.value.replace(/^\s+|\s+$/g,'')} e estou entrando em contato para lhe dar um feedback sobre sua calculadora.%0A%0A${message.value.replace(/^\s+|\s+$/g,'')}%0A%0ASegue meus dados abaixo:%0ANome: ${name.value.replace(/^\s+|\s+$/g,'')}%0AE-mail: ${email.value.replace(/^\s+|\s+$/g,'')}`);
        var e_mail = document.getElementById("e_mail").href;
        e_mail;
        error_message.innerHTML = "";
        confirm_message.innerHTML = "O seu feedback foi enviado com sucesso!";
        setTimeout(function(){
            show_button(feedback_menu);
        },3000)
        document.getElementById("form_social").reset();
        return true;
      }
    else
      {
        error_message.innerHTML = "Você cancelou o envio do seu feedback!";
        setTimeout(function(){
          name.setAttribute("style", "border: 1px solid #e0e0e0");
          email.setAttribute("style", "border: 1px solid #e0e0e0");
          message.setAttribute("style", "border: 1px solid #e0e0e0");
        },1000);
        return false;
      }
}