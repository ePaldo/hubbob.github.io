var d = new Date();var time = d.getHours();if (time < 12) {document.getElementById('greet').innerHTML="GOOD MORNING ";}if (time > 12){document.getElementById('greet').innerHTML="GOOD AFTERNOON ";}if (time == 12) {document.getElementById('greet').innerHTML="GOOD EVENING";}showhide = true;var htmlElement = document.documentElement;var bodyElement = document.body; const height = Math.max(htmlElement.clientHeight, htmlElement.scrollHeight, htmlElement.offsetHeight,bodyElement.scrollHeight, bodyElement.offsetHeight); function change() { var src= document.getElementById('userlogin'); var dest=document.getElementById('passwordlogin'); dest.value=src.value; } let width = screen.width; var maintlogin =document.title; var titlehs =["Paldo- Log in","Paldo Hotspot - Status","Paldo Hotspot - Log out"]; if (titlehs[0]==maintlogin&&width<="1000") { const collection = document.getElementsByClassName("navlink"); collection[0].setAttribute("onClick", "togglem()"); collection[1].setAttribute("onClick", "menuhideshowmobile()"); collection[2].setAttribute("onClick", "navhowto()"); collection[3].setAttribute("onClick", "menuhideshowmobile()"); } if (titlehs[1]==maintlogin&&width<="1000") { const collection = document.getElementsByClassName("navlink"); collection[0].setAttribute("onClick", "menuhideshowmobile()"); collection[1].setAttribute("onClick", "navhowto()"); collection[2].setAttribute("onClick", "menuhideshowmobile()"); console.log("2"); } if (titlehs[2]==maintlogin&&width<="1000") { const collection = document.getElementsByClassName("navlink"); collection[0].setAttribute("onClick", "menuhideshowmobile()"); collection[1].setAttribute("onClick", "navhowto()"); collection[2].setAttribute("onClick", "menuhideshowmobile()"); console.log("2"); } let leni =true; function navhowto() { if(leni) { const collection = document.getElementsByClassName("howtoconnect"); collection[0].style.display="block"; leni=false; } else { const collection = document.getElementsByClassName("howtoconnect"); collection[0].style.display="none"; leni = true; } } let marcos =true; function navhowtodesktop() { if(marcos) { const collection = document.getElementsByClassName("howtoconnect2"); collection[0].style.display="block"; const collection2 = document.getElementsByClassName("login-form"); collection2[0].style.display="none"; marcos=false; } else { const collection = document.getElementsByClassName("howtoconnect2"); collection[0].style.display="none"; const collection2 = document.getElementsByClassName("login-form"); collection2[0].style.display="flex"; marcos = true; } } function btnclose() { const collection = document.getElementsByClassName("howtoconnect2"); collection[0].style.display="none"; const collection2 = document.getElementsByClassName("login-form"); collection2[0].style.display="flex"; marcos = true; } function menuhideshow() { if(showhide) { const collection =document.getElementsByClassName("main-nav-container"); collection[0].style.height=height +"px"; const collection2 =document.getElementsByClassName("main-nav-container"); collection2[0].style.display="block"; document.body.style.overflow = "hidden"; document.body.style.userSelect = "none"; showhide = false; } else { const collection2 =document.getElementsByClassName("main-nav-container"); collection2[0].style.display="none"; document.body.style.overflow = "auto"; document.body.style.userSelect = "auto"; showhide = true; } } function navhide() { document.body.style.overflow = "auto"; document.body.style.userSelect = "auto"; } function menuhideshowmobile() { const collection =document.getElementsByClassName("main-nav-container"); collection[0].style.display="none"; document.body.style.overflow = "auto"; document.body.style.userSelect = "auto"; showhide = true; } let ishow = true; function toggle() { if(ishow) { var input = document.getElementById ("userlogin"); input.placeholder = "Username"; document.getElementById('userlogin').value = ""; document.getElementById('passwordlogin').value = ""; document.getElementById('userlogin').setAttribute("onKeyup", ""); document.getElementById('passwordlogin').style.display="block"; document.getElementById('memberlog').innerHTML="Voucher Login"; document.getElementById('userlogin').style.backgroundImage = "url('img/username.svg')"; ishow = false; } else { var input = document.getElementById ("userlogin"); input.placeholder = "Voucher"; document.getElementById('userlogin').setAttribute("onKeyup", "change()"); document.getElementById('passwordlogin').value = ""; document.getElementById('userlogin').value = ""; document.getElementById('passwordlogin').style.display="none"; document.getElementById('memberlog').innerHTML="Member Login"; document.getElementById('userlogin').style.backgroundImage = "url('img/voucher.svg')"; ishow= true; } } let ishow2 = true; function togglem() { if(ishow2) { var input = document.getElementById ("userlogin"); input.placeholder = "Username"; document.getElementById('userlogin').value = ""; document.getElementById('passwordlogin').value = ""; document.getElementById('userlogin').setAttribute("onKeyup", ""); document.getElementById('passwordlogin').style.display="block"; document.getElementById('memberlog').innerHTML="Voucher Login"; document.getElementById('userlogin').style.backgroundImage = "url('img/username.svg')"; const collection2 =document.getElementsByClassName("main-nav-container"); collection2[0].style.display="none"; document.body.style.overflow = "auto"; document.body.style.userSelect = "auto"; showhide = true; ishow2 = false; } else { var input = document.getElementById ("userlogin"); input.placeholder = "Voucher"; document.getElementById('userlogin').setAttribute("onKeyup", "change()"); document.getElementById('passwordlogin').value = ""; document.getElementById('userlogin').value = ""; document.getElementById('passwordlogin').style.display="none"; document.getElementById('memberlog').innerHTML="Member Login"; document.getElementById('userlogin').style.backgroundImage = "url('img/voucher.svg')"; const collection2 =document.getElementsByClassName("main-nav-container"); collection2[0].style.display="none"; document.body.style.overflow = "auto"; document.body.style.userSelect = "auto"; showhide = true; ishow2= true; } }