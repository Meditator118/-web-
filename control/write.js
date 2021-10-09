function change(obj){

    var src = window.URL.createObjectURL(obj.files[0]);
    document.getElementById('showimg').src=src;

}
function del() {
    document.getElementById('showimg').src="C:/Users/qhsmj/Desktop/Polaris/untitled/backup/imge/7.png";
}
function bold() {
    var content = window.getSelection();
    var conStr = content.toString();
    if (conStr.trim!== "") {
        var rang = content.getRangeAt(0);
        var newsp=document.createElement("span");
        newsp.style.fontWeight=700;
        newsp.textContent = conStr;
        rang.surroundContents(newsp);
    }

}
function incline () {
    var content = window.getSelection();
    var conStr = content.toString();
    if (conStr.trim!== "") {
        var rang = content.getRangeAt(0);
        var newsp=document.createElement("span");
        newsp.style.fontStyle="italic";
        newsp.textContent = conStr;
        rang.surroundContents(newsp);
    }
}

function creatable(){
    turntomain ();
    var rows=document.getElementById('rows').value;
    var cols=document.getElementById('cols').value;

    var table = document.createElement("table");
    table.border=1;
    for(var i=0;i<rows;i++){
        table.insertRow(i);
        for(var j=0;j<cols;j++){
            table.rows[i].insertCell(j);
        }
    }
    document.getElementsByClassName("drift")[0].appendChild(table);
}
function turntomain () {
    document.getElementsByClassName('tabmenu')[0].style.display='none';
    document.getElementById('turnoff').style.display='none';
    document.getElementById('window').style.display='none';
}
function show () {
    document.getElementsByClassName('tabmenu')[0].style.display='block';
    document.getElementById('turnoff').style.display='block';
    document.getElementById('window').style.display='block';
}
window.addEventListener("scroll", tabchange);
var edit=document.getElementsByClassName('edit')[0];
function tabchange() {
    var distance =window.pageYOffset;
    console.log(distance);
    if(distance>=479)
    {
        edit.style.position='fixed';
        edit.style.top='0';

    }
    else{
        edit.style.position='relative';
        edit.style.top='60px';

    }
}