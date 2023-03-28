var imagesArray=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"]
var i=0;
function header()
{
    if(i>=7)
    {
        i=0;
        document.getElementById("header").style.backgroundImage=`url(../Assert/Image/${imagesArray[i]})`
    }
    else{
        document.getElementById("header").style.backgroundImage=`url(../Assert/Image/${imagesArray[i]})` 
    }
    i++;
    var time=setTimeout(header,200000);
}
function right()
{
    i++;
    if(i>imagesArray.length-1)
    {
        i=0;
        document.getElementById("header").style.backgroundImage=`url(../Assert/Image/${imagesArray[i]})`
    }
    else{

        document.getElementById("header").style.backgroundImage=`url(../Assert/Image/${imagesArray[i]})`
    }
}
function  left()
{
    i--;
    if(i<0)
    {
        i=imagesArray.length-1;
        document.getElementById("header").style.backgroundImage=`url(../Assert/Image/${imagesArray[i]})`
    }
    else{
        document.getElementById("header").style.backgroundImage=`url(../Assert/Image/${imagesArray[i]})`
    }
}
// This is gallary code
var img=document.getElementsByClassName("images");
console.log(img)
for(i=0;i<=img.length;i++)
{
    img[i].src=`../Assert/Image/${i}.jpg`
}

function closeTheImage()
{
    document.getElementById("bigImage").setAttribute("style","display:none")
}
function openTheImage(img)
{
    console.log(img)
    document.getElementById("bigimg").setAttribute("src",`../Assert/Image/${img}.jpg`)
    document.getElementById("bigImage").removeAttribute("style");
}
function logout()
{
    window.location.assign("./index.html")
}