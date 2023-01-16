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

    let history_menu = document.getElementById("history_menu");
    let history_menu_save = window.localStorage.getItem("results");
    let res = document.getElementById("res");
    let res_save = window.localStorage.getItem("res");
    let calcs = document.getElementById("calcs");
    let calcs_save = window.localStorage.getItem("calcs");
    let C = document.getElementById("C");
    let CE = document.getElementById("CE");
    if(history_menu_save != null){
        history_menu.innerHTML = history_menu_save;
    }
    if (res_save != null){
        res.innerHTML = res_save;
        res.style.display = "block";
        calcs.placeholder = calcs_save;
    }

    let img = document.getElementById("img");
    let actual_theme = document.getElementById("actual_theme");
    let actual_background = document.getElementById("actual_background");
    let actual_color = document.getElementById("actual_color");
    let options = document.getElementsByClassName("option");
    let theme = window.localStorage.getItem("theme");
    let themes = document.getElementById("themes");
    let color_themes = document.getElementById("color_themes");
    let color_theme = window.localStorage.getItem("color_theme");

    var theme_number;
    var color_number;
    if(theme != null){theme_number = theme.split(/[^0-9]/).filter(Boolean).map(Number)};
    if(color_theme != null){color_number = color_theme.split(/[^0-9]/).filter(Boolean).map(Number)};
    if(theme == '' || theme == null){
        img.src = "";
        actual_theme.innerHTML = "Nenhum";
        actual_background.innerHTML = "Nenhum";
        themes.value = "actual";
        background_themes.value = "actual";
    } else if(theme_number[0] != color_number[0]){
        img.src = theme;
        actual_theme.innerHTML = "Personalizado";
        actual_background.innerHTML = `Ondas ${theme_number}`;
        themes.value = "actual";
        background_themes.value = "actual";
    } else {
        img.src = theme;
        actual_background.innerHTML = `Ondas ${theme_number}`;
        actual_theme.innerHTML = `Tema ${theme_number}`;
        themes.value = "actual";
        background_themes.value = "actual";
    }
    for(i= 0; i < options.length; i++){
        if(color_theme != null && color_theme != "var(--theme8)"){
            options[i].setAttribute("style", `color: ${color_theme};`);
            options[10].setAttribute("style", `background-color: ${color_theme};`);
        } else if(color_theme == "var(--theme8)"){
            options[i].setAttribute("style", `color: ${color_theme};`);
            options[10].setAttribute("style", `background-color: ${color_theme}; color: #000000;`);
        } else {
            options[i].setAttribute("style", `color: var(--theme1);`);
            options[10].setAttribute("style", `background-color: var(--theme1);`);
        }
    }
    if(color_theme != null){
        if(color_theme.includes("1")){
            actual_color.innerHTML = "Azul-Claro";
        } else if (color_theme.includes("2")){
            actual_color.innerHTML = "Laranja";
        } else if (color_theme.includes("3")){
            actual_color.innerHTML = "Amarelo";
        } else if (color_theme.includes("4")){
            actual_color.innerHTML = "Azul-Escuro";
        } else if (color_theme.includes("5")){
            actual_color.innerHTML = "Verde";
        } else if (color_theme.includes("6")){
            actual_color.innerHTML = "Vermelho";
        } else if (color_theme.includes("7")){
            actual_color.innerHTML = "Roxo";
        } else if (color_theme.includes("8")){
            actual_color.innerHTML = "Branco";
        }
        color_themes.value = "actual";
    } else {
        actual_color.innerHTML = "Azul-Claro";
        color_themes.value = "actual";
    }
    if(res_save != null){
        C.style.display = "block";
        CE.style.display = "none";
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
    document.getElementById("info").style.display = "block";
    document.getElementById("extra_buttons").setAttribute("style","display:flex; flex-direction: column-reverse;");
    document.getElementById("last_buttons").style.display = "flex";
    document.getElementById("img").style.display = "block";

    let img = document.getElementById("img");
    let actual_theme = document.getElementById("actual_theme");
    let actual_background = document.getElementById("actual_background");
    let actual_color = document.getElementById("actual_color");
    let options = document.getElementsByClassName("option");
    let theme = window.localStorage.getItem("theme");
    let themes = document.getElementById("themes");
    let color_themes = document.getElementById("color_themes");
    let color_theme = window.localStorage.getItem("color_theme");

    if(theme != null){
        let theme_number = theme.split(/[^0-9]/).filter(Boolean).map(Number);
        img.src = theme;
        actual_background.innerHTML = `Ondas ${theme_number}`;
        actual_theme.innerHTML = `Tema ${theme_number}`;
        themes.value = "actual";
        background_themes.value = "actual";
    } else {
        img.src = "";
        actual_theme.innerHTML = "Nenhum";
        actual_background.innerHTML = "Nenhum";
        themes.value = "actual";
        background_themes.value = "actual";
    }
    for(i= 0; i < options.length; i++){
        if(color_theme != null && color_theme != "var(--theme8)"){
            options[i].setAttribute("style", `color: ${color_theme};`);
            options[10].setAttribute("style", `background-color: ${color_theme};`);
        } else if(color_theme == "var(--theme8)"){
            options[i].setAttribute("style", `color: ${color_theme};`);
            options[10].setAttribute("style", `background-color: ${color_theme}; color: #000000;`);
        } else {
            options[i].setAttribute("style", `color: var(--theme1);`);
            options[10].setAttribute("style", `background-color: var(--theme1);`);
        }
        
    }
    if(color_theme != null){
        if(color_theme.includes("1")){
            actual_color.innerHTML = "Azul-Claro";
        } else if (color_theme.includes("2")){
            actual_color.innerHTML = "Laranja";
        } else if (color_theme.includes("3")){
            actual_color.innerHTML = "Amarelo";
        } else if (color_theme.includes("4")){
            actual_color.innerHTML = "Azul-Escuro";
        } else if (color_theme.includes("5")){
            actual_color.innerHTML = "Verde";
        } else if (color_theme.includes("6")){
            actual_color.innerHTML = "Vermelho";
        } else if (color_theme.includes("7")){
            actual_color.innerHTML = "Roxo";
        } else if (color_theme.includes("8")){
            actual_color.innerHTML = "Branco";
        }
        color_themes.value = "actual";
    } else {
        actual_color.innerHTML = "Azul-Claro";
        color_themes.value = "actual";
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
    document.getElementById("info").style.display = "block";
    document.getElementById("extra_buttons").setAttribute("style","display:flex; flex-direction: column-reverse;");
    document.getElementById("last_buttons").style.display = "flex";
    document.getElementById("version_buttons").style.display = "flex";
    document.getElementById("img").style.display = "block";

    let img = document.getElementById("img");
    let actual_theme = document.getElementById("actual_theme");
    let actual_background = document.getElementById("actual_background");
    let actual_color = document.getElementById("actual_color");
    let options = document.getElementsByClassName("option");
    let theme = window.localStorage.getItem("theme");
    let themes = document.getElementById("themes");
    let color_themes = document.getElementById("color_themes");
    let color_theme = window.localStorage.getItem("color_theme");

    if(theme != null){
        let theme_number = theme.split(/[^0-9]/).filter(Boolean).map(Number);
        img.src = theme;
        actual_background.innerHTML = `Ondas ${theme_number}`;
        actual_theme.innerHTML = `Tema ${theme_number}`;
        themes.value = "actual";
        background_themes.value = "actual";
    } else {
        img.src = "";
        actual_theme.innerHTML = "Nenhum";
        actual_background.innerHTML = "Nenhum";
        themes.value = "actual";
        background_themes.value = "actual";
    }
    for(i= 0; i < options.length; i++){
        if(color_theme != null && color_theme != "var(--theme8)"){
            options[i].setAttribute("style", `color: ${color_theme};`);
            options[10].setAttribute("style", `background-color: ${color_theme};`);
        } else if(color_theme == "var(--theme8)"){
            options[i].setAttribute("style", `color: ${color_theme};`);
            options[10].setAttribute("style", `background-color: ${color_theme}; color: #000000;`);
        } else {
            options[i].setAttribute("style", `color: var(--theme1);`);
            options[10].setAttribute("style", `background-color: var(--theme1);`);
        }
        
    }
    if(color_theme != null){
        if(color_theme.includes("1")){
            actual_color.innerHTML = "Azul-Claro";
        } else if (color_theme.includes("2")){
            actual_color.innerHTML = "Laranja";
        } else if (color_theme.includes("3")){
            actual_color.innerHTML = "Amarelo";
        } else if (color_theme.includes("4")){
            actual_color.innerHTML = "Azul-Escuro";
        } else if (color_theme.includes("5")){
            actual_color.innerHTML = "Verde";
        } else if (color_theme.includes("6")){
            actual_color.innerHTML = "Vermelho";
        } else if (color_theme.includes("7")){
            actual_color.innerHTML = "Roxo";
        } else if (color_theme.includes("8")){
            actual_color.innerHTML = "Branco";
        }
        color_themes.value = "actual";
    } else {
        actual_color.innerHTML = "Azul-Claro";
        color_themes.value = "actual";
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
    let res = document.getElementById("res");
    let calcs = document.getElementById("calcs");
    let C = document.getElementById("C");
    let CE = document.getElementById("CE");
    let color_theme = window.localStorage.getItem("color_theme");

    calcs.value = "";
    calcs.placeholder = "0";
    res.innerHTML = "=";
    res.setAttribute("style", "display: none;");
    C.style.display = "none";
    CE.style.display = "flex";

    calcs.focus();
    notification(document.getElementById("clear_recent"));
    var x = window.matchMedia("(max-width: 800px)");
    if (x.matches) {
        calcs.setAttribute("onclick", "blur();");
        calcs.setAttribute("readonly", "");
        C.setAttribute("style", `background-color: rgba(209, 209, 209, 0.15); transform: scale(1.05); color: ${color_theme};`);
        setTimeout(function(){
            C.setAttribute("style", `background-color: rgba(0, 0, 0, 0); transform: scale(1.0); color: ${color_theme}; display: none;`);
        },250);
    }
}
function CE(){
    let calcs = document.getElementById("calcs");
    let CE = document.getElementById("CE");
    let history_menu = document.getElementById("history_menu");
    let color_theme = window.localStorage.getItem("color_theme");

    if (history_menu.innerHTML == ""){
        notification(document.getElementById("clear_history_e"));
    } else {
        history_menu.innerHTML = "";
        window.localStorage.removeItem("results");
        window.localStorage.removeItem("res");
        window.localStorage.removeItem("calcs");
    
        calcs.focus();
        notification(document.getElementById("clear_history"));
        var x = window.matchMedia("(max-width: 800px)");
        if (x.matches) {
            calcs.setAttribute("onclick", "blur();");
            calcs.setAttribute("readonly", "");
            CE.setAttribute("style", `background-color: rgba(209, 209, 209, 0.15); transform: scale(1.05); color: ${color_theme};`);
            setTimeout(function(){
                CE.setAttribute("style", `background-color: rgba(0, 0, 0, 0); transform: scale(1.0); color: ${color_theme};`);
            },250);
        }
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
    window.addEventListener('keydown', (event) => {
        if (event.defaultPrevented) {
            return;
        }
        switch (event.key) {
            case "Backspace":
                calcs.focus();
                calcs.value = calcs.value.slice(0, calcs.value.length -1);
                break;
            case "Enter":
                equal();
                break;
            case "Esc":
            case "Escape":
                if(document.getElementById("CE").style.display == "none"){
                    C();
                } else if(document.getElementById("C").style.display == "none"){
                    CE();
                }
                break;
            default:
                return;
            }
        event.preventDefault();
    }, true);
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
    let numbers = calcs.value.split(/[^0-9]/).filter(Boolean).map(Number);
    let point = calcs.value.split(/[^.]/).filter(Boolean);
    let letters = calcs.value.split(/([^0-9.√/%÷*x+-])/);
    let res = document.getElementById("res");
    let C = document.getElementById("C");
    let CE = document.getElementById("CE");

    if (calcs.value.length < 1 && res.innerHTML == "="){
        C.style.display = "none";
        CE.style.display = "flex";
    } else if(calcs.value.length > 1 || res.innerHTML != "="){
        C.style.display = "block";
        CE.style.display = "none";
    }
    if (calcs.value.includes(letters) == false){
        calcs.value = calcs.value.slice(0, calcs.value.length - 1);
    } else if((operators[0] != "*-" && operators[0] != "/-" && operators[0] !== "x-" && operators[0] != "÷-") && res.innerHTML != "=" && operators[0].length > 1){
        calcs.value = calcs.value.slice(0, calcs.value.length - 1);
    } else if((res.innerHTML != "=" && operators[0].length > 1 && operators[1].length > 0) && (operators[0] == "x-" || operators[0] == "*-" || operators[0] == "/-" || operators[0] == "÷-")){
        equal();
        calcs.value = "";
    } else if(numbers.length == 0 && point.length > 0){
        calcs.value = calcs.value.slice(0, calcs.value.length - 1);
    } else if(point[0] != undefined && point[0].length > 1 || point.length > 1){
        calcs.value = calcs.value.slice(0, calcs.value.length - 1);
    } else if(operators[0].length > 1 && numbers.length == 0){
        calcs.value = calcs.value.slice(0, calcs.value.length - 1);
    } else if (res.innerHTML == "=" && calcs.value.charAt(0) != "-" && calcs.value.charAt(0) == operators){
        calcs.value = calcs.value.slice(0, calcs.value.length - 1);
    } else if(res.innerHTML == "=" && (calcs.value.charAt(0) == "-" || calcs.value.charAt(0) == "√") && operators[1].length > 0){
        equal();
        calcs.value = operators[1];
    } else if(res.innerHTML == "=" && operators[0].length > 0 && (operators[0] == "√" || operators[0] == "%")){
        equal();
        calcs.value = "";
    } else if(res.innerHTML != "=" && operators[0].length > 0 && (operators[0] == "√" || operators[0] == "%")){
        equal();
        calcs.value = "";
    } else if(res.innerHTML == "=" && operators[0].length > 0 && numbers.length > 0){
        equal();
        calcs.value = operators[0];
    } else if(res.innerHTML != "=" && operators[1].length > 0 && operators[1] == "%"){
        equal();
        calcs.value = "";
    } else if(res.innerHTML != "=" && operators[1].length > 0 && operators[1] == "√"){
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
    let history_menu = document.getElementById("history_menu");
    var x = window.matchMedia("(max-width: 800px)");

    if(calcs.value == ""){
        return
    } else if( (calcs.value.includes(operators) && numbers.length == 0) && (calcs.value.includes("√") == false && res.innerHTML == "=")){
        alert("Você precisa digitar alguns números...");
        return
    }
    if(calcs.value.includes(operators[0]) == false && res.innerHTML == "="){
        res.innerHTML = "=" + numbers[0];
        res.setAttribute("style", "display: block;");
        calcs.value = "";
    } else if(calcs.value.charAt(0) == "-" && numbers[0] == undefined && res.innerHTML != "="){
        res.innerHTML = res.innerHTML;
        res.setAttribute("style", "display: block;");
        calcs.value = "-";
    } else if(calcs.value.includes(operators[0]) == false && res.innerHTML != "="){
        res.innerHTML = res.innerHTML;
        res.setAttribute("style", "display: block;");
        calcs.value = "";
    } else if(res.innerHTML == "=" && calcs.value.charAt(0) == "-"){
        r = -numbers[0];
        res.innerHTML = '=' + r;
        res.setAttribute("style", "display: block;");
    } else if(res.innerHTML != "=" && res.innerHTML.includes("-")){
        if (operators[0] == "-" && operators[1] == "%"){
            res.innerHTML = '=' + `${-result[0] * -numbers[0] / 100 - result[0]}`;
        } else if (operators[0] != "-" && operators[1] == "%"){
            res.innerHTML = '=' + `${-result[0] * numbers[0] / 100 - result[0]}`;
        } else if (operators[0] == "x-"){
            r = (-result[0]) + "*" + -numbers[0];
            res.innerHTML = '=' + eval(r);
        } else if (operators[0] == "÷-"){
            r = (-result[0]) + "/" + -numbers[0];
            res.innerHTML = '=' + eval(r);
        } else if (operators[0] == "x"){
            r = (-result[0]) + "*" + numbers[0];
            res.innerHTML = '=' + eval(r);
        } else if (operators[0] == "÷"){
            r = (-result[0]) + "/" + numbers[0];
            res.innerHTML = '=' + eval(r);
        } else if (operators[1] == "√"){
            r = (-result[0]) + "-" + Math.sqrt(numbers[0]);
            res.innerHTML = '=' + eval(r);
        } else {
            r = (-result[0]) + operators[0] + numbers[0];
            res.innerHTML = '=' + eval(r);
        }
        res.setAttribute("style", "display: block;");
    } else if(res.innerHTML != "="){
        if (operators[0] == "-" && operators[1] == "%"){
            res.innerHTML = '=' + `${result[0] * -numbers[0] / 100 + result[0]}`;
        } else if (operators[0] != "-" && operators[1] == "%"){
            res.innerHTML = '=' + `${result[0] * numbers[0] / 100 + result[0]}`;
        } else if (operators[0] == "%"){
            res.innerHTML = '=' + 0;    
        } else if (operators[0] == "√"){
            res.innerHTML = '=' + `${Math.sqrt(result[0])}`;
        } else if (operators[1] == "√"){
            r = result[0] + operators[0] + Math.sqrt(numbers[0]);
            res.innerHTML = '=' + eval(r);
        } else if (operators[0] == "x-"){
            r = result[0] + "*" + -numbers[0];
            res.innerHTML = '=' + eval(r);
        } else if (operators[0] == "÷-"){
            r = result[0] + "/" + -numbers[0];
            res.innerHTML = '=' + eval(r);
        } else if (operators[0] == "x"){
            r = result[0] + "*" + numbers[0];
            res.innerHTML = '=' + eval(r);
        } else if (operators[0] == "÷"){
            r = result[0] + "/" + numbers[0];
            res.innerHTML = '=' + eval(r);
        } else if (numbers[0] == undefined){    
            res.innerHTML = '=' + result[0];
        } else {
            r = result[0] + operators[0] + numbers[0];
            res.innerHTML = '=' + eval(r);
        }
        res.setAttribute("style", "display: block;");
    } else if(res.innerHTML == "="){ 
        if(operators[0] == "√"){
            res.innerHTML = '=' + `${Math.sqrt(numbers[0])}`;
        } else if(operators[0] == "%"){
            res.innerHTML = '=' + 0;
            calcs.value = "";
        } else {
            res.innerHTML = '=' + `${numbers[0]}`;
        }
        res.setAttribute("style", "display: block;");
    }
    function createElement(){
        var n;
        var negative;
        var element = document.getElementsByClassName("results")[0];
            if(element != undefined){
                negative = element.innerHTML;
            };
        if (res.innerHTML.includes(".")){
            n = res.innerHTML.split(".");
            if (n[1].length > 8){
                n[1] = n[1].slice(0, 8);
            }
            res.innerHTML = n[0] + "." + n[1];
        }
        if(operators[0] == "*"){
            operators[0] = "x";
        } else if(operators[0] == "/"){
            operators[0] = "÷";
        } else if(operators[0] == "*-" || operators[0] == "x-"){
            operators[0] = "x";
            numbers[0] = "(-" + numbers[0] + ")" ;
        } else if(operators[0] == "/-" || operators[0] == "÷-"){
            operators[0] = "÷";
            numbers[0] = "(-" + numbers[0] + ")" ;
        }
        const c_r = document.createElement("div");
            c_r.className = "c&r";
        const h2_2 = document.createElement("h2");
            h2_2.className = "results";
            h2_2.id = "ress";
            h2_2.innerHTML = res.innerHTML;
        const h2_1 = document.createElement("h2");
            h2_1.className = "calcs";
            h2_1.id = "ress";
            if(history_menu.childElementCount == 0){
                if(operators[0] == "-"){
                    h2_1.innerHTML = operators[0] + numbers[0];
                } else if (operators[0] == "√") {
                    h2_1.innerHTML = operators[0] + numbers[0];
                } else if (operators[0] == "%"){
                    h2_1.innerHTML = "0+" + numbers[0] + operators[0];
                } else {
                    h2_1.innerHTML = numbers[0];
                }
            } else if((numbers[0] == undefined || operators[0] == undefined) && res.innerHTML != "="){
                h2_1.innerHTML = h2_1.lastElementChild.innerHTML;
            } else if (operators[0] != undefined && operators[0] == "√" && res.innerHTML != "=") {
                h2_1.innerHTML = operators[0] + numbers[0];
            } else if (result[0] != undefined && negative.includes("-") && operators[1] != undefined && operators[1] == "%") {
                h2_1.innerHTML = "(" + -result[0] + ")" + operators[0] + numbers[0] + operators[1];
            } else if (result[0] != undefined && negative.includes("-") && operators[1] != undefined && operators[1] == "√") {
                h2_1.innerHTML = "(" + -result[0] + ")" + operators[0] + operators[1] + numbers[0];
            } else if (result[0] != undefined && negative.includes("-")) {
                h2_1.innerHTML = "(" + -result[0] + ")" + operators[0] + numbers[0];
            } else if (operators[1] != undefined && operators[1] == "√" || operators[1] == "%") {
                h2_1.innerHTML = result[0] + operators[0] + operators[1] + numbers[0];
            } else if(result[0] != undefined){
                h2_1.innerHTML = result[0] + operators[0] + numbers[0];
            } else if(operators[0] != undefined) {
                h2_1.innerHTML = operators[0] + numbers[0];
            } else {
                h2_1.innerHTML = numbers[0];
            }
        c_r.appendChild(h2_1);
        c_r.appendChild(h2_2);
        history_menu.appendChild(c_r);
        const h_f= history_menu.lastElementChild;
            h_f.firstElementChild.style.color = "white";
            h_f.lastElementChild.style.color = "white";
        const h_l= history_menu.firstElementChild;
            h_l.firstElementChild.style.color = "#c9c9c9";
            h_l.lastElementChild.style.color = "#c9c9c9";
        history_menu.insertBefore(history_menu.lastElementChild, history_menu.children[0]);
        window.localStorage.setItem("results", history_menu.innerHTML);
        window.localStorage.setItem("res", h_f.lastElementChild.innerHTML);
        window.localStorage.setItem("calcs", h_f.firstElementChild.innerHTML);
        calcs.placeholder = h_f.firstElementChild.innerHTML;
    };
    createElement();
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
    let background_themes = document.getElementById("background_themes");
    let color_themes = document.getElementById("color_themes");
    let actual_theme = document.getElementById("actual_theme");
    let actual_background = document.getElementById("actual_background");
    let actual_color = document.getElementById("actual_color");
    let options = document.getElementsByClassName("option");

    img.style.display = "none";
    for(i = 0; i < themes.length; i++){
        var x = window.matchMedia("(max-width: 800px)");
        var device;
        var n;
        if(x.matches){
            device = "Mobile"
        } else{
            device = "Desktop"
        }
        if(themes.value == "none"){
            img.src = "";
            setTimeout(function(){
                img.style.display = "none";
            },100);
            actual_theme.innerHTML = "Nenhum";
            themes.value = "actual";
            actual_background.innerHTML = "Nenhum";
            background_themes.value = "actual";
            window.localStorage.setItem('theme', '');
        } else if (themes.value == `bkg${i}`){
            img.src = `./backgrounds/${device}/background-${i}.png`;
            img.addEventListener('load', (event) => {
                img.style.display = "block";
            });
            actual_theme.innerHTML = `${themes[i+1].innerHTML}`;
            themes.value = "actual";
            actual_background.innerHTML = `${background_themes[i+1].innerHTML}`;
            background_themes.value = "actual";
            window.localStorage.setItem('theme', `./backgrounds/${device}/background-${i}.png`);
            n = i;
        }
    }
    for(i= 0; i < options.length; i++){
        if(actual_theme.innerHTML == "Nenhum"){ 
            options[i].setAttribute("style", "color: var(--theme1);");
            options[10].setAttribute("style", "background-color: var(--theme1);");
            actual_color.innerHTML = "Azul-Claro";
            window.localStorage.setItem('color_theme', 'var(--theme1)');
        } else if (n == 8){
            options[i].setAttribute(`style`, `color: var(--theme${n});`);
            options[10].setAttribute(`style`, `background-color: var(--theme${n}); color: #000000;`);
            actual_color.innerHTML = `${color_themes[n].innerHTML}`;
            color_themes.value = `actual`;
            window.localStorage.setItem(`color_theme`, `var(--theme${n})`);
        } else {
            options[i].setAttribute(`style`, `color: var(--theme${n});`);
            options[10].setAttribute(`style`, `background-color: var(--theme${n});`);
            actual_color.innerHTML = `${color_themes[n].innerHTML}`;
            color_themes.value = `actual`;
            window.localStorage.setItem(`color_theme`, `var(--theme${n})`);
        }
    }
    notification(document.getElementById("theme"));
    check();
}
function theme_background(){
    let img = document.getElementById("img");
    let themes = document.getElementById("themes");
    let background_themes = document.getElementById("background_themes");
    let actual_theme = document.getElementById("actual_theme");
    let actual_background = document.getElementById("actual_background");
    
    img.style.display = "none";
    for(i = 1; i < background_themes.length; i++){
        var x = window.matchMedia("(max-width: 800px)");
        var device;
        if(x.matches){
            device = "Mobile"
        } else{
            device = "Desktop"
        }
        if(background_themes.value == "none"){
            img.src = "";
            setTimeout(function(){
                img.style.display = "none";
            },100);
            actual_background.innerHTML = "Nenhum";
            background_themes.value = "actual";
            actual_theme.innerHTML = "Personalizado";
            themes.value = "actual";
            window.localStorage.setItem('theme', '');
        } else if (background_themes.value == `bkg${i}`){
            img.src = `./backgrounds/${device}/background-${i}.png`;
            img.addEventListener('load', (event) => {
                img.style.display = "block";
            });
            actual_background.innerHTML = `${background_themes[i+1].innerHTML}`;
            background_themes.value = "actual";
            actual_theme.innerHTML = "Personalizado";
            themes.value = "actual";
            window.localStorage.setItem('theme', `./backgrounds/${device}/background-${i}.png`);
        }
    }
    notification(document.getElementById("theme_bkg"));
}
function theme_calc(){
    let options = document.getElementsByClassName("option");
    let actual_color = document.getElementById("actual_color");
    let themes = document.getElementById("themes");
    let color_themes = document.getElementById("color_themes");
    let actual_theme = document.getElementById("actual_theme");

    for(i= 0; i < options.length; i++){
        if(color_themes.value == "color1"){
            options[i].setAttribute("style", "color: var(--theme1);");
            options[10].setAttribute("style", "background-color: var(--theme1);");
            actual_color.innerHTML = "Azul-Claro";
            color_themes.value = "actual";
            window.localStorage.setItem('color_theme', 'var(--theme1)');
        } else if (color_themes.value == "color2"){
            options[i].setAttribute("style", "color: var(--theme2);")
            options[10].setAttribute("style", "background-color: var(--theme2);");
            actual_color.innerHTML = "Laranja";
            window.localStorage.setItem('color_theme', 'var(--theme2)');
        } else if (color_themes.value == "color3"){
            options[i].setAttribute("style", "color: var(--theme3);")
            options[10].setAttribute("style", "background-color: var(--theme3);");
            actual_color.innerHTML = "Amarelo";
            window.localStorage.setItem('color_theme', 'var(--theme3)');
        } else if (color_themes.value == "color4"){
            options[i].setAttribute("style", "color: var(--theme4);")
            options[10].setAttribute("style", "background-color: var(--theme4);");
            actual_color.innerHTML = "Azul-Escuro";
            window.localStorage.setItem('color_theme', 'var(--theme4)');
        } else if (color_themes.value == "color5"){
            options[i].setAttribute("style", "color: var(--theme5);")
            options[10].setAttribute("style", "background-color: var(--theme5);");
            actual_color.innerHTML = "Verde";
            window.localStorage.setItem('color_theme', 'var(--theme5)');
        } else if (color_themes.value == "color6"){
            options[i].setAttribute("style", "color: var(--theme6);")
            options[10].setAttribute("style", "background-color: var(--theme6);");
            actual_color.innerHTML = "Vermelho";
            window.localStorage.setItem('color_theme', 'var(--theme6)');
        } else if (color_themes.value == "color7"){
            options[i].setAttribute("style", "color: var(--theme7);")
            options[10].setAttribute("style", "background-color: var(--theme7);");
            actual_color.innerHTML = "Roxo";
            window.localStorage.setItem('color_theme', 'var(--theme7)');
        } else if (color_themes.value == "color8"){
            options[i].setAttribute("style", "color: var(--theme8);")
            options[10].setAttribute("style", "background-color: var(--theme8); color: #000000;");
            actual_color.innerHTML = "Branco";
            window.localStorage.setItem('color_theme', 'var(--theme8)');
        }
    }
    color_themes.value = "actual";
    actual_theme.innerHTML = "Personalizado";
    themes.value = "actual";
    notification(document.getElementById("theme_color"));
    check();

}
function show_config(){
    let config = document.getElementById("config");
    let options = document.getElementById("options_menu");
    let contain = document.getElementById("contain");
    let button = document.getElementById("gear");
    let show = document.getElementById("show");
    let personalize = document.getElementById("contain-hidden")
    let button_personalize = document.getElementById("personalizar");
    
    if(config.style.display == "none"){
        options.setAttribute("style","-webkit-animation-name: show; animation-name: show;");
        button.setAttribute("style","transform: rotate(60deg); transition: 1s;");
        show.style.zIndex = 2;
        setTimeout(function(){
            config.style.display = "block";
            contain.setAttribute("style","transform: none");
        },100);
    } else {
        options.setAttribute("style","-webkit-animation-name: ocult; animation-name: ocult;");
        button.setAttribute("style","transform: rotate(-60deg); transition: 1s;");
        show.style.zIndex = 0;
        setTimeout(function(){
            config.style.display = "none";
            contain.setAttribute("style","transform: translate(100%, 0);");
            if(personalize.style.display == "block"){
                personalize.style.display = "none";
                button_personalize.value = "Personalizar";
            }
        },100);
        
    }   
}
function show_personalize(){
    let button = document.getElementById("contain-hidden");
    let button_id = document.getElementById("personalizar");
    if(button.style.display == "none"){
        button.setAttribute("style","-webkit-animation-name: show; animation-name: show;");
        button_id.value = "Fechar Menu";
        setTimeout(function(){
            button.style.display = "block";
        },300);
    } else {
        button.setAttribute("style","-webkit-animation-name: ocult; animation-name: ocult;");
        setTimeout(function(){
            button.style.display = "none";
            button_id.value = "Personalizar";
        },300);
    }   
}
function show_button(button_id){
    let button = button_id;
    let config = document.getElementById("config");
    var x = window.matchMedia("(max-width: 800px)");

    if(button.style.display == "none"){
        if(config != null && config.style.display != "none"){
            show_config();
        };
        button.setAttribute("style","-webkit-animation-name: show; animation-name: show;");
        document.getElementsByTagName("body")[0].setAttribute("style", "margin:0; overflow-y: hidden");
        if(button == feedback_menu){
            document.getElementById("feedback").style.zIndex = 2;
        } else if(button == coffee_menu){
            document.getElementById("coffee").style.zIndex = 2;
        } else if(button == history_containner){
            document.getElementById("history").style.zIndex = 2;
            document.getElementById("history").style.color = "white";
        }
        setTimeout(function(){
            button.style.display = "flex";
        },900);
    } else {
        button.setAttribute("style","-webkit-animation-name: ocult; animation-name: ocult;");
        document.getElementsByTagName("body")[0].setAttribute("style", "margin:0");
        if(button == feedback_menu){
            document.getElementById("feedback").style.zIndex = 0;
            if(x.matches){
                extra_buttons.insertBefore(extra_buttons.children[0], extra_buttons.children[6]);
            };
            setTimeout(function(){
                document.getElementById("form_name").setAttribute("style", "border: 1px solid #e0e0e0");
                document.getElementById("form_email").setAttribute("style", "border: 1px solid #e0e0e0");
                document.getElementById("form_message").setAttribute("style", "border: 1px solid #e0e0e0");
                document.getElementById("error_message").innerHTML = "";
                document.getElementById("form_social").reset();
            },900);
        } else if(button == coffee_menu){
            document.getElementById("coffee").style.zIndex = 0;
        } else if(button == history_containner){
            document.getElementById("history").style.zIndex = 0;
            document.getElementById("history").style.color = "black";
        }
        setTimeout(function(){
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
            document.getElementById("e_mail").setAttribute("href", `mailto:pedrotech.jf@gmail.com?subject=Feedback - Calculadora&body=Olá, me chamo ${name.value.replace(/^\s+|\s+$/g,'')} e estou entrando em contato para lhe dar um feedback sobre sua calculadora.%0A%0A${message.value.replace(/^\s+|\s+$/g,'')}%0A%0ASegue meus dados abaixo:%0ANome: ${name.value.replace(/^\s+|\s+$/g,'')}%0AE-mail: ${email.value.replace(/^\s+|\s+$/g,'')}`);
            var e_mail = document.getElementById("e_mail").href;
            e_mail;
            error_message.innerHTML = "";
            confirm_message.innerHTML = "O seu feedback foi enviado com sucesso!";
            notification(document.getElementById("send_feedback"));
            document.getElementById("progress").style.backgroundColor = "green";
            setTimeout(function(){
                show_button(feedback_menu);
                document.getElementById("form_social").reset();
                confirm_message.innerHTML = "";
            },3000)
            document.getElementById("form_social").reset();
            return true;
          }
        else
          {
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
    let color_theme = window.localStorage.getItem("color_theme");
    let active = document.getElementById("active");

    if(color_theme == null){
        color_theme = "var(--theme1)";
    }

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
        progress.style.backgroundColor = color_theme;
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
            notifications.setAttribute("style", "display:block; -webkit-animation-name: animatebottom-ocult; nimation-name: animatebottom-ocult;");
        }, 1700);
        setTimeout(() => {
            notifications.style.display = "none";
            notification_id.style.display = "none";
            active.innerHTML = "0";
        }, 2000);
    }

}
