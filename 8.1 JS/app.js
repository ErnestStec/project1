function GetValues() {
    Value1 = parseInt(document.getElementById("Value1").value);
    Value2 = parseInt(document.getElementById("Value2").value);
}

function Multiply() {
    GetValues();
    Result = Value1 * Value2;
    SetResult(Result);
}    

function Subtract() {
    GetValues();
    Result = Value1 - Value2;
    SetResult(Result);
}    

function Sum() {
    GetValues();
    Result = Value1 + Value2;
    SetResult(Result);
}    

function Devide() {
    GetValues();
    Result = Value1 . Value2;
    SetResult(Result);
}    

function SetResult(Result) {
    ResultH1.innerHTML = "Result: " + Result;
}