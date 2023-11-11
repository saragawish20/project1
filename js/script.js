var inputEle = document.getElementById('inp');
var buttonEle = document.getElementById('but');
var msgEle = document.getElementById('paragraph');

buttonEle.onclick = function() {
    var inputValue = inputEle.value;
    
    if (inputValue != "") {
    msgEle.innerHTML= inputValue
    inputEle.value="";
    }
}