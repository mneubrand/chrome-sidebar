// React when a browser action's icon is clicked.
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("Icon clicked");

  var scripts = [ "js/jquery-1.9.0.js", "js/jquery-ui-1.10.0.custom.js", "js/toggle.js" ];

  var curr = 0;
  function loadScripts() {
      if(curr < scripts.length) {
          console.log("Loading script " + scripts[curr]);
          chrome.tabs.executeScript(null, { file: scripts[curr++] }, loadScripts);
      }
  }

  console.log("Start loading scripts");
  loadScripts();
});