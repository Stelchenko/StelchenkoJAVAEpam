var Calc = document.calc;
var Result = 0;
var isNewNum = true;
var curentOperation = '';
function NumFunc(number) {
    if (isNewNum){
        document.calc.Edit.value = number;
        isNewNum = false;
    }
    else {
        document.calc.Edit.value += number;
    }
}

function ClearEntryFunc() {
    document.calc.Edit.value = '0';
    isNewNum = true;
}

function ClearFunc() {
    curentOperation = '';
    Result = 0;
    ClearEntryFunc();
}

function OperationFunc(operation) {
    var Value = document.calc.Edit.value;
    if (isNewNum && curentOperation != '=') {
        document.calc.Edit.value = Result;
    }
    else {
        isNewNum = true;
        if (curentOperation == '+')
            Result += parseFloat(Value);
        else if (curentOperation == '*')
            Result *= parseFloat(Value);
        else if (curentOperation == '/')
            Result /= parseFloat(Value);
        else if (curentOperation == '-')
            Result -= parseFloat(Value);
        else
            Result = parseFloat(Value)
        document.calc.Edit.value = Result;
        curentOperation = operation;
    }
}