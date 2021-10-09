var taboption = document.querySelector('.taboption');
var lis = taboption.querySelectorAll('li');
var items = document.querySelectorAll('.item');
for(var i = 0; i < lis.length; i++){
    lis[i].setAttribute('index', i);

    lis[i].onclick = function() {

        for(var i = 0; i < lis.length; i++){
            lis[i].className = '';
        }

        this.className = 'play';
        var m = this.getAttribute('index');
        for(var i = 0; i < items.length; i++){
            items[i].style.display = 'none';
        }

        items[m].style.display = 'block';

    }
}
function saveinfo(){
    var name=document.getElementById("pe").value;
    var password=document.getElementById("pa").value;
    localStorage.setItem("name",name);
    localStorage.setItem("password",password);
    window.open("zhihu.html");

}
