function onBandClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
  console.log("**************")

  var name = JSON.stringify(info.selectionText);
  name = name.substring(1, name.length-1) + ' band';

  var encodedName = encodeURI(name);

  console.log("encodedName: " + encodedName);
  console.log("band: " + name);

  var newURL = "https://www.google.com/search?q=" + encodedName;
  chrome.tabs.create({ url: newURL });
}

// Create one test item for each context type.
var context = "link";
var title = "Find the band";
var id = chrome.contextMenus.create({
  "title": title,
  "contexts":[context],
  "onclick": onBandClick
});
