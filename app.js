function openNav1() {
    document.getElementById("mySidebar").style.width = "500px";
    document.getElementById("mySidebar").style.marginRight = "100px";
    document.getElementById("container").style.opacity = "0.19";
    document.getElementById('name').innerText=document.getElementById('name1').innerText
  }
function openNav2() {
    document.getElementById("mySidebar").style.width = "500px";
    document.getElementById("mySidebar").style.marginRight = "100px";
    document.getElementById("container").style.opacity = "0.19";
    document.getElementById('name').innerText=document.getElementById('name2').innerText
  }
function openNav3() {
    document.getElementById("mySidebar").style.width = "500px";
    document.getElementById("mySidebar").style.marginRight = "100px";
    document.getElementById("container").style.opacity = "0.19";
    document.getElementById('name').innerText=document.getElementById('name3').innerText
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("container").style.opacity = "1";
  }

  function openNav() {
    document.getElementById("leftSidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "280px";
    document.getElementById("main1").style.marginLeft = "280px";
    document.getElementById("main2").style.marginLeft = "280px";
    document.getElementById("nav").style.marginLeft = "270px";
  }
  
  function leftcloseNav() {
    document.getElementById("leftSidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("main1").style.marginLeft= "0";
    document.getElementById("main2").style.marginLeft= "0";
    document.getElementById("nav").style.marginLeft= "100px";
  }

