var list = [];

function addWordToDictionary() {
  var addWord = document.getElementById("inputAddWord").value;
  list.push(addWord); //adaugam cuvantul la sf. listei
}

function searchWordInDictionary() {
  var searchWord = document.getElementById("inputSearchWord").value;
  for (var i = 0; i < list.length; ++i) {
    if (list[i] == searchWord) {
      document.getElementById("messageOnPage").innerHTML= "The word searched exists in the dictionary";
      break; //oprim cautarile
    } else if (list[i] != searchWord && i == list.length - 1) { //dam verdictul doar dupa parcurgerea intregului dictionar
      document.getElementById("messageOnPage").innerHTML= "The word doesn't exist in the dictionary";
    }
  }
}