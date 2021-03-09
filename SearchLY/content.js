// alert("welcome");
chrome.runtime.onMessage.addListener(function(request, sender, callback){
  if (document.getSelection()!=""){
    // console.log("i am in");
    var word = document.getSelection().toString();
    // console.log("The word is : ", word[0]);
    callback(word);
  }

       // alert(document.getSelection());
  // alert(request);
  // const temp =document.getSelection().toString();
  // console.log("i am in");
  // console.log("this is not me ", temp);
});

// console.log("heloo ");
