// console = chrome.extension.getBackgroundPage().console;
// $("div").html("hi guys");
// alert("vivek");
$(".lds-ring").hide();
$("#definitionCard").hide();
$("#exampleCard").hide();
$("#errorCard").hide();

const API_callback = (word)=>{
  $(".lds-ring").show();
  $("#definitionCard").hide();
  $("#exampleCard").hide();
  $("#errorCard").hide();

  // alert(word);
  console.log(typeof word);

  if(typeof word!="undefined"){
    word=word.trim().split(" ")[0];
    $.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,function(data ,status){
  		if(status == "success"){
  			// console.log(data[0].meanings[0].definitions[0].definition);
  			// console.log(data[0].meanings[0].definitions[0].example);

        let flag=0;

        if(data[0].meanings[0].definitions[0].definition){
          $("#search-word").html(word);
          $("#definition").html(data[0].meanings[0].definitions[0].definition);
          $(".lds-ring").hide();
          $("#definitionCard").show();
          flag=1;
        }
        if(data[0].meanings[0].definitions[0].example){
          $("#search-word").html(word);
          $("#example").html(data[0].meanings[0].definitions[0].example);
          $(".lds-ring").hide();
          $("#exampleCard").show();
          flag=1;
        }

        if(flag==0){
          $(".lds-ring").hide();
          $("#errorCard").show();
        }
      }

    }).fail((err)=>{
      // console.log("some shit error vivek");
      $(".lds-ring").hide();
      $("#errorCard").show();
    });
  }

  if(typeof word =="undefined"){
    $(".lds-ring").hide();
    // alert("undefined");
  }


};

chrome.tabs.query({currentWindow: true, active: true},
function(tabs){
  // alert(tabs[0].id);
  chrome.tabs.sendMessage(tabs[0].id,"this",null, API_callback);
})
// console.log("weeeel");



//test script
let word = "van man";

// API_callback(word);


$("button").click(function() {
   API_callback($("#exampleInput").val());
});
