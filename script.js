const button = document.querySelector("#check-btn");
const text = document.querySelector("#text-input").value;
const result = document.querySelector("#result")
function click(){
  const text = document.querySelector("#text-input").value;
  document.querySelector("#text-input").value = "";
  result.innerText ="";
  let start = 0;
  let end = text.length-1;
  if(text === ""){
      alert("Please input a value.");
    }
  else{
    while(start<end){
      if((text[start].toLowerCase()<'a'||
      text[start].toLowerCase()>'z')&&
      (text[start].toLowerCase()<'0'||
      text[start].toLowerCase()>'9')){
        start++;
        continue;
      }
      if((text[end].toLowerCase()<'a'||
      text[end].toLowerCase()>'z')&&
      (text[end].toLowerCase()<'0'||
      text[end].toLowerCase()>'9')){
        end--;
        continue;

      }
      if(text[start].toLowerCase() !== 
      text[end].toLowerCase()){
        result.style.color = "#ff0000";
        result.innerText = text+" is not a palindrome";
        return;
      }
      start++;
      end--;

    }
    result.style.color = "#00e676";
    result.innerText = text+" is a palindrome";
  }
}

button.onclick = click;