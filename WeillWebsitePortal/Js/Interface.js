function opennn(){
    window.open("https://redcap.ctsc.weill.cornell.edu/redcap_protocols/surveys/?s=K7FCANHJRN")
  }
  function Start(){
  var code = document.getElementById('Code').value;
  var MusicCode = "MM"
  var WritingCode = "NW"
  var mor = code[0]+code[1]
  if(MusicCode == mor.toUpperCase()){
  window.open("../html/VEL-Music.html")
  }
  else{
  if(WritingCode == mor.toUpperCase()){
  window.open("../html/VEL-Writing.html")
  }
  else{
  if("TS" == mor.toUpperCase)
  {
      window.open("https://redcap.ctsc.weill.cornell.edu/redcap_protocols/surveys/?s=MX8NPWMDHT")

  }else{
    alert("Invalid code")
  }
  }
  }
  }
  function LaunchAbout(){
    alert("launch about page")
  }
  function OpenTab(functionName) {
if(functionName == 1){
location.replace("../html/VEL-About.html")
}
if (functionName == 2){
  location.replace(href = "../html/VEL-Email.html")
}
if (functionName == 3){
  location.replace("../html/VEL-Main.html")
}
if (functionName == 4){
  location.replace("../html/VEL-Phase-Two-Main.html")
}

  }
