var age;
var userName;
var toggle;
var empty;
var notInitialize;
var callback;
var anything;
var some;
some = 'Text';
var str;
if (typeof (some) === 'string') {
    str = some;
}
var person;
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
var page = {
    load: Load.READY
};
if (page.load === Load.LOADING) {
    console.log("Сторінка завантажується");
}
if (page.load === Load.READY) {
    console.log("Сторінка завантажилась");
}
var variableWithUnionType;
var variableWithLiteralType;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
