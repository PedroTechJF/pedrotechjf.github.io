function loader_calc(){
    var load;
    load = setTimeout(showPage, 1500);
    function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("calc").style.display = "block";
    document.getElementById("info").style.display = "block";
    document.getElementById("button").style.display = "flex";
    document.getElementById('calcs').focus();
    var x = window.matchMedia("(max-width: 800px)");
    if (x.matches) {
        document.getElementById('calcs').setAttribute("onclick", "blur();");
        document.getElementById('calcs').setAttribute("readonly", "");
    };
    keyboardInput();
    }
}
function loader_about(){
    var load;
    load = setTimeout(showPage, 1500);
    function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("about").style.display = "flex";
    document.getElementById("button").style.display = "flex";
    }
}
function loader_versions(){
    var load;
    load = setTimeout(showPage, 1500);
    function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("versions").style.display = "flex";
    document.getElementById("button").style.display = "flex";
    document.getElementById("buttons").style.display = "flex";
    }
}
function C(){
    document.getElementById("calcs").value = "";
    document.getElementById("res").innerHTML = "";
    res.setAttribute("style", "display: none;");
    res.innerHTML = "=";
    document.getElementById('calcs').focus();
    var x = window.matchMedia("(max-width: 800px)");
    if (x.matches) {
        document.getElementById('calcs').setAttribute("onclick", "blur();");
        document.getElementById('calcs').setAttribute("readonly", "");
    }
}
function backspace(){
    let calcs = document.getElementById("calcs");
    calcs.value = calcs.value.slice(0, calcs.value.length -1);
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
        if(calcs.value.charAt(0) == "-" && (event.keyCode == 187 || event.keyCode == 107 || event.keyCode == 189 || event.keyCode == 109 || event.keyCode == 88 || event.keyCode == 106 || event.keyCode == 111)) {
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

    if (calcs.value.includes(letters) == false){
        calcs.value = calcs.value.slice(0, calcs.value.length - 1);
    }

    if ((numbers.length > 2 || operators[0].length > 1) && (operators[0].includes(operators)) && (operators[0].includes("*-") == false && operators[0].includes("x-") == false && operators[0].includes("/-") == false && operators[0].includes("÷-") == false)) {
        calcs.value = calcs.value.slice(0, calcs.value.length -1);
        console.clear();
    } else if( (numbers.length > 2 || operators[0].length > 2) && (operators[0].includes("x-") == false || operators[0].includes("*-") == false) ){
        calcs.value = calcs.value.slice(0, calcs.value.length -1);
        console.clear();
    } else if( (numbers.length > 2 || operators[0].length > 2) && (operators[0].includes("/-") == false || operators[0].includes("÷-") == false) ){
        calcs.value = calcs.value.slice(0, calcs.value.length -1);
        console.clear();
    } else if( (numbers.length > 2 || operators[1].length > 0) && (operators[1].includes("%") == false)){
        calcs.value = calcs.value.slice(0, calcs.value.length -1);
        console.clear();
    } else if( (numbers.length > 2 || operators[1].length > 1) && (operators[1].includes("%"))){
        calcs.value = calcs.value.slice(0, calcs.value.length -1);
        console.clear();
    }
    

    if (calcs.value.includes("√") == true && numbers.length > 1){
        calcs.value = calcs.value.slice(0, calcs.value.length - 1);
    }
}
function equal(){
    let calcs = document.getElementById("calcs").value;
    let res = document.getElementById("res");
    var x = window.matchMedia("(max-width: 800px)");
    let operators = calcs.split(/[^√%/÷*x+-]/).filter(Boolean);
    let numbers = calcs.split(/[^.0-9]/).filter(Boolean).map(Number);

    if(calcs == ""){
        return
    } else if( (calcs.includes(operators) && numbers.length == 0) && (calcs.includes("√") == false && res.innerHTML == "=")){
        alert("Você precisa digitar alguns números...");
        document.getElementById('calcs').focus();
        if (x.matches) {
            document.getElementById('calcs').setAttribute("onclick", "blur();");
            document.getElementById('calcs').setAttribute("readonly", "");
        }
        return
    }
    if(calcs.includes(operators[0]) == false && res.innerHTML == "="){
        res.innerHTML = "=" + calcs.split(/[^.0-9-]/).filter(Boolean).map(Number);
        res.setAttribute("style", "display: block;");
        document.getElementById("calcs").value = "";
        document.getElementById('calcs').focus();
        if (x.matches) {
            document.getElementById('calcs').setAttribute("onclick", "blur();");
            document.getElementById('calcs').setAttribute("readonly", "");
        }
        return
    }

    if (calcs.includes("+") == true) {
        result = res.innerHTML.split(/[^.0-9-]/).filter(Boolean).map(Number);
        sum = calcs.split(/[^.0-9]/).filter(Boolean).map(Number);
        if(sum.length == 1 && operators.length == 1 && result.length == 0){
                res.innerHTML = '=' + `${Number(sum[0])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else if(sum.length == 2) {
                res.innerHTML = '=' + `${Number(sum[0]) + Number(sum[1])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else {
                res.innerHTML = '=' + `${Number(result[0]) + Number(sum[0])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } 
            document.getElementById('calcs').focus();
            if (x.matches) {
                document.getElementById('calcs').setAttribute("onclick", "blur();");
                document.getElementById('calcs').setAttribute("readonly", "");
            }
    }
    if (calcs.includes("-") == true) {
        result = res.innerHTML.split(/[^.0-9-]/).filter(Boolean).map(Number);
        min = calcs.split(/[^.0-9]/).filter(Boolean).map(Number);
        if(calcs.charAt(0) == "-" && res.innerHTML.includes("-") == false){
            if(min.length == 1 && operators.length == 1 && result.length == 0){
                res.innerHTML = '=' + `${-Number(min[0])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else if (min.length == 2) {
                res.innerHTML = '=' + `${-Number(min[0]) - Number(min[1])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else {
                res.innerHTML = '=' + `${Number(result[0]) - Number(min[0])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            }
        } else {
            if(min.length == 1 && operators.length == 1 && result.length == 0){
                res.innerHTML = '=' + `${Number(min[0])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else if (min.length == 2) {
                res.innerHTML = '=' + `${Number(min[0]) - Number(min[1])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else {
                res.innerHTML = '=' + `${Number(result[0]) - Number(min[0])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            }
        }
        document.getElementById('calcs').focus();
        if (x.matches) {
            document.getElementById('calcs').setAttribute("onclick", "blur();");
            document.getElementById('calcs').setAttribute("readonly", "");
        }
    }
    if (calcs.includes("x") == true || calcs.includes("*") == true) {
        result = res.innerHTML.split(/[^.0-9-]/).filter(Boolean).map(Number);
        mul = calcs.split(/[^.0-9]/).filter(Boolean).map(Number);
        if(calcs.includes("-")){
            if(mul.length == 1 && operators.length == 1 && result.length == 0){
                res.innerHTML = '=' + `${-Number(mul[0])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else if (mul.length == 2) {
                res.innerHTML = '=' + `${Number(mul[0]) * -Number(mul[1])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else if ((calcs.charAt(0) == "*" || calcs.charAt(0) == "x") && (res.innerHTML == "="+mul[0])){
                res.innerHTML = '=' + `${(Number(mul[0])) * 0}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else {
                res.innerHTML = '=' + `${(Number(result[0]) + Number(mul[0])) * -Number(mul[0])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            }
            document.getElementById('calcs').focus();
            if (x.matches) {
                document.getElementById('calcs').setAttribute("onclick", "blur();");
                document.getElementById('calcs').setAttribute("readonly", "");
            }
        } else {
            if(mul.length == 1 && operators.length == 1 && result.length == 0){
                res.innerHTML = '=' + `${Number(mul[0])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else if (mul.length == 2) {
                res.innerHTML = '=' + `${Number(mul[0]) * Number(mul[1])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else {
                res.innerHTML = '=' + `${Number(result[0]) * Number(mul[0])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            }
            document.getElementById('calcs').focus();
            if (x.matches) {
                document.getElementById('calcs').setAttribute("onclick", "blur();");
                document.getElementById('calcs').setAttribute("readonly", "");
            }
        }
    }
    if (calcs.includes("÷") == true || calcs.includes("/") == true) {
        result = res.innerHTML.split(/[^.0-9-]/).filter(Boolean).map(Number);
        div = calcs.split(/[^.0-9]/).filter(Boolean).map(Number);
        if(calcs.includes("-")){
            if(div.length == 1 && operators.length == 1 && result.length == 0){
                res.innerHTML = '=' + `${-Number(div[0])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else if (div.length == 2){
                res.innerHTML = '=' + `${Number(div[0]) / -Number(div[1])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else if ((calcs.charAt(0) == "*" || calcs.charAt(0) == "x") && (res.innerHTML == "="+div[0])){
                res.innerHTML = '=' + `${(Number(div[0])) * 0}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else {
                res.innerHTML = '=' + `${(Number(result[0]) + Number(div[0])) / -Number(div[0])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            }
            document.getElementById('calcs').focus();
            if (x.matches) {
                document.getElementById('calcs').setAttribute("onclick", "blur();");
                document.getElementById('calcs').setAttribute("readonly", "");
            }
        } else {
            if(div.length == 1 && operators.length == 1 && result.length == 0){
                res.innerHTML = '=' + `${Number(div[0])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else if (div.length == 2){
                res.innerHTML = '=' + `${Number(div[0]) / Number(div[1])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else {
                res.innerHTML = '=' + `${Number(result[0]) / Number(div[0])}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            }
            document.getElementById('calcs').focus();
            if (x.matches) {
                document.getElementById('calcs').setAttribute("onclick", "blur();");
                document.getElementById('calcs').setAttribute("readonly", "");
            }
        }
    }
    if (calcs.includes("%") == true) {
        per = calcs.split(/[^.0-9]/).filter(Boolean).map(Number);
        result = res.innerHTML.split(/[^.0-9-]/).filter(Boolean).map(Number);
        if (calcs.includes("+")){
            if(per.length == 1 && operators.length > 1 < 3 && result.length == 0){
                res.innerHTML = '=' + 0;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else if (per.length == 2) {
                res.innerHTML = '=' + `${Number(per[0]) * Number(per[1]) / 100 + per[0]}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else if (calcs.charAt(0) == "-"){
                let r = result[0] + per[0];
                console.log(r);
                console.log(result[0]);
                console.log(per[0]);
                res.innerHTML = '=' + `${-Number(per[0]) * Number(r) / 100 + r}`;
                console.log(res.innerHTML);
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else {
                let r = result[0] - per[0];
                res.innerHTML = '=' + `${Number(per[0]) * Number(r) / 100 + r}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            }
        } else if (calcs.includes("-")){
            if(per.length == 1 && operators.length > 1 < 3 && result.length == 0){
                res.innerHTML = '=' + 0;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else if (per.length == 2) {
                res.innerHTML = '=' + `${-Number(per[0]) * Number(per[1]) / 100 + per[0]}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else if (calcs.charAt(0) == "-"){
                let r = result[0] + per[0];
                console.log(r);
                console.log(result[0]);
                console.log(per[0]);
                res.innerHTML = '=' + `${-Number(per[0]) * Number(r) / 100 + r}`;
                console.log(res.innerHTML);
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            } else {
                let r = result[0] - per[0];
                res.innerHTML = '=' + `${-Number(per[0]) * Number(r) / 100 + r}`;
                res.setAttribute("style", "display: block;");
                document.getElementById("calcs").value = "";
            }
        }
    
        document.getElementById('calcs').focus();
        if (x.matches) {
            document.getElementById('calcs').setAttribute("onclick", "blur();");
            document.getElementById('calcs').setAttribute("readonly", "");
        }
    }
    if (calcs.includes("√") == true) {
        result = res.innerHTML.split(/[^.0-9-]/).filter(Boolean).map(Number);
        raiz = calcs.split(/[^.0-9]/).filter(Boolean).map(Number);
        if (raiz.length == 1){
            res.innerHTML = '=' + `${Math.sqrt(Number(raiz))}`;
            res.setAttribute("style", "display: block;");
            document.getElementById("calcs").value = "";
        } else {
            res.innerHTML = '=' + `${Math.sqrt(Number(result))}`;
            res.setAttribute("style", "display: block;");
            document.getElementById("calcs").value = "";
        }
        document.getElementById('calcs').focus();
        if (x.matches) {
            document.getElementById('calcs').setAttribute("onclick", "blur();");
            document.getElementById('calcs').setAttribute("readonly", "");
        }
    }

}