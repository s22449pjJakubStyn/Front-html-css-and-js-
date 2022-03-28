const newdiv = () => {
    let element = document.createElement('div');
    element.className = 'box';
    element.innerHTML ="Added div <br />";
    document.querySelector('#container').append(element);
}

    const deletediv = () =>{
    let element = document.querySelectorAll('.box')[0];
    element.remove();

}
    const changeColor = () => {
    let element = document.querySelectorAll('.box')[2];
    element.style ="background-color: red";
}
    const newtext = () => {
    let element = document.querySelectorAll('.box').forEach((e) => e.innerHTML += "  cos tam");

}

document.querySelector('d1').addEventListener('click', newdiv);
    document.querySelector('d2').addEventListener('click',deletediv);
    document.querySelector('d3').addEventListener('click',changeColor);
    document.querySelector('d4').addEventListener('click',newtext);