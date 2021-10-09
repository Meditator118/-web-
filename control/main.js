var taboption = document.querySelector('.taboption');
var lis = taboption.querySelectorAll('li');
var items = document.querySelectorAll('.item');
for(var i = 0; i < lis.length; i++){
    lis[i].setAttribute('index', i);

    lis[i].onclick = function() {

        for(var i = 0; i < lis.length; i++){
            lis[i].className = '';
        }
        this.className='play';
        var j = this.getAttribute('index');
        for(var i = 0; i < items.length; i++){
            items[i].style.display = 'none';
        }

        items[j].style.display = 'block';

    }
}
var nav2list = document.querySelector('#nav2');
var list = nav2list.querySelectorAll('li');
for(var i = 1; i <= 4; i++) {
    list[i].setAttribute('index', i);

    list[i].onclick = function () {

        for (var i = 1; i <= 4; i++) {
            list[i].className = '';
        }

        this.className = 'play';
        var j = this.getAttribute('index');
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
        }

        items[j - 1].style.display = 'block';

    }
}

var nav1=document.getElementById('nav1');
var nav2=document.getElementById('nav2');
window.addEventListener("scroll", tabchange);
function tabchange() {
    var distance =window.pageYOffset;
    console.log(distance);
    if(distance>=70)
    {
        nav1.style.top='-60px';
        nav2.style.top='0';

    }
    else{
        nav1.style.top='0';
        nav2.style.top='60px';
    }
}
function change(obj)
{
    var list=obj.getElementsByTagName("span");
    obj.style.background='dodgerblue';
    if(obj.className==='like'){
        list[1].innerText='已赞同';
    }
    obj.style.color="white";
}
function docollect (obj) {
    obj.style.background='dodgerblue';
    obj.innerText='已收藏';
    obj.style.color="white";
}
function turntocollect () {
    document.getElementById('collectmenu').style.display='block';
    document.getElementById('turnoff').style.display='block';
    document.getElementById('window').style.display='block';


}
function turntomain () {
    document.getElementById('collectmenu').style.display='none';
    document.getElementById('turnoff').style.display='none';
    document.getElementById('window').style.display='none';
}

var boxs1 = document.querySelectorAll('.othertop div');
var boxs2 = document.querySelectorAll('.cutop div');
var cutop = document.querySelector('.cutop');
var othertop = document.querySelector('.othertop');

var temp = null;
for (var i = 0; i < boxs1.length; i++) {
    boxs1[i].ondragstart = function () {
        temp = this;
    };
    boxs1[i].ondragend = function () {
        temp = null;
    }
}
for (var i = 1; i < boxs2.length; i++) {//全站块不允许拖动
    boxs2[i].ondragstart = function () {
        temp = this;
    };

    boxs2[i].ondragend = function () {
        temp = null;
    }
}
cutop.ondragover = function (e) {
    e.preventDefault();
};
cutop.ondrop = function () {
    this.appendChild(temp);
};
othertop.ondragover = function (e) {
    e.preventDefault();
};
othertop.ondrop = function () {
    this.appendChild(temp);
}