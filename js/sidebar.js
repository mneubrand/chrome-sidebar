function toggleSideBar(url) {
    console.log("Icon clicked");
    url = url || localStorage["homePage"];
    if(url == null || url == '') {
        if(confirm("You haven't configured a URL to load yet. Do you want to configure one in the options now?")) {
            chrome.tabs.create( { url: chrome.extension.getURL('options.html') });
        }
        return;
    }

    var scripts = [ "js/jquery-1.9.0.js", "js/jquery-ui-1.10.0.custom.js", "js/toggle.js" ];

    var curr = 0;
    function executeScripts() {
        if(curr < scripts.length) {
            console.log("Loading script " + scripts[curr]);
            chrome.tabs.executeScript(null, { file: scripts[curr++] }, executeScripts);
        }
    }

    console.log("Start executing scripts");
    chrome.tabs.executeScript(null, {code: "var url = '" + url + "';"}, executeScripts());
}

// React when a browser action's icon is clicked.
chrome.browserAction.onClicked.addListener(function(tab) {
    toggleSideBar();
});