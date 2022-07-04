
 const  img1 = document.getElementById("i1");
 const  img2 = document.getElementById("i2");
 const  img3 = document.getElementById("i3");

 
 const fbut = document.getElementById("f1");
 const sbut = document.getElementById("f2");
 const tbut = document.getElementById("f3");

 let act = document.querySelector(".active")




 var getStyle = function(e, styleName) {
    var styleValue = "";
    if (document.defaultView && document.defaultView.getComputedStyle) {
      styleValue = document.defaultView.getComputedStyle(e, "").getPropertyValue(styleName);
    } else if (e.currentStyle) {
      styleName = styleName.replace(/\-(\w)/g, function(strMatch, p1) {
        return p1.toUpperCase();
      });
      styleValue = e.currentStyle[styleName];
    }
    return styleValue;
  }



  function sep(st) {
    var str = st;
    var matches = str.match(/(\d+)/);
      
    return matches[0];
}


var count =['f','s','t'];


console.log(count)

var s1 = count[0];
var s2;
var s3;



if(fbut){
fbut.addEventListener('click',()=>{

   
    console.log(s1)

    let img2height = getStyle(img2,'height')
    let img1height = getStyle(img1,'height')

    console.log(img1height)
    console.log(img2height)
    img1.style.zIndex =1;
    img2.style.zIndex = 0;

    // img1.style.height = sep(img1height) + "px";
    // img2.style.height = sep(img2height) + "px";

    img1.style.height = "350px"
    img2.style.height =  "310px"
 s1 = count[0]

 
    
})
}


if(sbut && s1=='f')
sbut.addEventListener('click',()=>{

   


    let img1property = img1.getBoundingClientRect(); //gives the margin,top,left,width,height of the div
    let img2property = img2.getBoundingClientRect();
    
    img2.style.zIndex =1;

    //height
    //Get height of the divs
    let img1height = img1property.height;
    let img2height = img2property.height;
    console.log(img1height)

    //swap the values

    // img1.style.height = img2height + "px";
    // img2.style.height =img1height + "px";


      // img2.classList.add("i2ani")

    //top 

    // let img1top = img1property.top;
    // let img2top = img2property.top;
    

    // img1.style.top = img2top + "px";
    // img2.style.top = img1top + "px";


    //margin

    



    
    // let img2mtop = getStyle(img2,'margin-top');

    
    
    // img2.style.marginTop =-(sep(img2mtop)) + "px";
    // console.log(img2mtop)
    // let n1 = sep(img2mtop);
    

    // console.log(img2.style.marginTop)


    img1.style.height = "310px"
    img2.style.height =  "350px"
    img2.style.marginTop = "-20px"

    s2 = count[1]

    fbut.classList.remove("act")
    console.log(fbut)
    sbut.classList.add("act")
})




if(tbut && s1=='f'|| s2 =='s' ){
tbut.addEventListener('click',()=>{
    const  im1 = document.getElementById("i1");
    const  im2 = document.getElementById("i2");
    const  im3 = document.getElementById("i3");
    
    let img1height = getStyle(im1,'height')
    let img2height = getStyle(im2,'height')
    let img3height = getStyle(im3,'height')
    console.log(img1height)

    img1.style.zIndex =-1;
    img2.style.zIndex = 0;
    img3.style.zIndex = 1;

    // im1.style.height = sep(img3height) + "px";
    // im2.style.height = sep(img2height) + "px";
    // im3.style.height = sep(img1height) + "px";

    
    img1.style.height = "260px"
    img2.style.height =  "310px"
    img3.style.height = "350px"
    img3.style.marginTop = "0px"


    s3 = count[2]

})
}