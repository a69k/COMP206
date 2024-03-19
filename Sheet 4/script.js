
checkUser=()=>{
  username=document.getElementById("user").value;
  usernamevalid=false;

if(username.length>=6&&username.length<=12&&username!="")
usernamevalid=true


if(!usernamevalid)
{
uLabel=document.getElementById("uLabel");
uLabel.style.color='red';
}
un.addEventListener("focus",()=>{
uLabel.style.color='black'

})
return usernamevalid
}
function correctpatt(ele)
{
  re=/[a-z]/&&/[A-Z]/
  return re.test(ele)
  
}
checkpasword=()=>
{password=document.getElementById("pass").value
passwordvalid=false
if(password.length>=6&&correctpatt(password))
passwordvalid=true
if(!passwordvalid)
{
pLabel=document.getElementById("pLabel")
pLabel.style.color='red'
}
pass.addEventListener("focus",()=>{
pLabel.style.color='black'

})
return passwordvalid
}
checksemester=()=>{
  semestervalid=false
semesteroptions=document.querySelectorAll("option")
if(semesteroptions[1].selected||semesteroptions[2].selected)
semestervalid=true
if(!semestervalid)
sem.style.color="red"
document.getElementById("sel").addEventListener("focus",()=>{
sem.style.color='black'

})
return semestervalid
}
checkboxes=document.querySelectorAll("input[type=checkbox]")
checkboxes[3].addEventListener("change",()=>{
  if(checkboxes[3].checked)
  window.alert("there may be potential spam")

})

document.forms[0].addEventListener("submit",function (e)
{e.preventDefault()
checkUser();
checkpasword();
checksemester();
checkboxes=document.querySelectorAll("input[type=checkbox]")
if(checkpasword()&&checksemester()&&checkUser())
{
textarea=document.createElement("textarea")
document.forms[0].appendChild(textarea)
textarea.setAttribute("rows","8")
textarea.textContent=`name : ${username} \npassword : ${password}\nsemester: \n`
semesteroptions=document.querySelectorAll("option")
for( i=0;i<semesteroptions.length;i++)
{
if(semesteroptions[i].selected)
textarea.textContent+=`${semesteroptions[i].value}\n`
}
checkboxes=document.querySelectorAll("input[type=checkbox]")
for( i=0;i<checkboxes.length;i++)
{
if(checkboxes[i].checked)
textarea.textContent+=`${checkboxes[i].value}\n`
}

textarea.addEventListener("click",()=>{
  result = confirm("submit??!?!")
  if(result)
  console.log(`!!mogus!!`)
})

textarea.addEventListener("mouseover",()=>{
  result=confirm("submit??!?!")
  if(result)
    console.log(`!!mogus!!`)
})}
})