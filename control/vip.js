window.onload = function(){
    var box=this.document.getElementsByClassName("imgdisplay")[0];
    var elist=box.getElementsByTagName("li");
    function changeimg(i,j){
        elist[i].style.opacity=1;
        elist[j].style.opacity=0;
        elist[i+5].style.backgroundColor="#ffffff";
        elist[j+5].style.backgroundColor="darkgrey"
    }

    function autodisplay(){
        i++;
        if(i>=5){
            i=0;
            changeimg(0,4);
        }
        else changeimg(i,i-1);
    }
    var j =0;
    for(;j<5;j++){
        elist[j+5].index=j;
        elist[j+5].onclick=function(){
            changeimg(this.index,i);
            i=this.index;
            clearInterval(cutime);
        }
    }



    changeimg(0,1);
    var i =0;

    var cutime = this.setInterval(autodisplay, 3000);
    box.onmouseover = function () {
        clearInterval(cutime);
        switchbut.style.display="block";
    };
    box.onmouseout = function () {
        cutime = setInterval(autodisplay, 3000);
        switchbut.style.display="none";
    };
    right.onclick=function () {
        if(i===4){
            i=0;
            changeimg(0,4);
        }
        else {
            changeimg(i+1,i);
            i++;
        }

    };
    left.onclick=function () {
        if(i===0){
            i=4;
            changeimg(4,0);
        }else {
            changeimg(i-1,i);
            i--;
        }
    }

}
