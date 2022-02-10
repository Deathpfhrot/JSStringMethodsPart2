
console.log("%c -------------lev1_4: slice -------------", "color: blue;");

document.getElementById('headline1').innerHTML = "lev1_4: slice"

//lev1_4: slice

const A = 'Susi is going to codingschool';

document.write(A.slice(0, 4) + "<br>")
document.write(A.slice(5,7) + "<br>")

const B = A.replace("codingschool", "school")

document.write(B.slice(6, 23)+ "<br>")
document.write(B.slice(17, 23)  + "<br>")
document.write(B.slice(0, 8) + B.slice(17,23) + "<br>")



console.log("%c -------------lev1_5: substring -------------", "color: green;");
document.getElementById('headline2').innerHTML = "lev1_5: substring"

const text = 'Susi is back from codingschool';
document.write(text.substring(0, 4) + "<br>");
document.write(text.substring(5, 7) + "<br>");

const text1 = text.replace("codingschool", "school")

document.write(text1.substring(17, 24) + "<br>")
document.write(text1.substring(0, 8) + text1.substring(18,30) + "<br>")



console.log("%c -------------lev1_9: concat -------------", "color: orange;");
document.getElementById('headline3').innerHTML = "lev1_9: concat "

const txt1 = "Sam is going to codingschool";
const txt2 = "Susi"
const txt3 = "programming bike"
const txt4 = " and "

const txt1New = txt1.replace("codingschool", "school")

document.getElementById('input').innerHTML = txt1New.concat(txt4, " to the movie theater") + "<br>";
document.write(txt1.slice(0, 15).concat(" movie theater")+ "</br>");
document.write(txt2 + txt4 + txt1.slice(0,3).concat(" are going to school") + "<br>")

document.write(txt2 + txt4 + txt1.substring(0,3).concat(" are going to gym and to the movie theater")+ "<br>")

document.write(txt2 + txt1New.slice(3, 25) + txt4.concat("to the movie theater"))

