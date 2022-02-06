function getHistory(){
    return document.getElementById("history-here").innerText;
}

function printHistory(num){
    document.getElementById("history-here").innerText=num;
}

function getOutput(){
    return document.getElementById("output-here").innerText;
}

function printOutput(num){
    if(num == ""){
        document.getElementById("output-here").innerText=num;
    }else{
        document.getElementById("output-here").innerText=getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
    if(num == "-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumber(num){
    return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
    for(var i = 0; i < operator.length; i++){
        operator[i].addEventListener('click', function(){
            if(this.id=="clear"){
                printHistory("");
                printOutput("");
            }
            else if(this.id=="backspace"){
                var output = reverseNumber(getOutput()).toString();
                if(output){
                    output = output.substr(0, output.length-1);
                    printOutput(output);
                }
            }else{
                    var output = getOutput();
                    var history = getHistory();
                    if(output != ""){
                        output = reverseNumber(output);
                        history=history+output;
                        if(this.id == "="){
                            var result = eval(history);
                            printOutput(result);
                            printHistory("");
                        }else{
                            history = history+this.id;
                            printHistory(history);
                            printOutput("");
                        }
                    }
                }
        });
    }

var number = document.getElementsByClassName("number");
    for(var i = 0; i < number.length; i++){
        number[i].addEventListener('click', function(){
            var output = reverseNumber(getOutput());
            if(output != NaN){
                output = output + this.id;
                printOutput(output);
            }
        });
    }


