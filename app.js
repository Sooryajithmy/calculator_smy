function display(val){
    document.getElementById('display').value += val
    return val
}

function solve(){
    let i = document.getElementById('display').value
    let o = eval(i);
    document.getElementById('display').value = o
    return o
}

function clearScreen(){
    document.getElementById('display').value = ''
}
