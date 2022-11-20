document.addEventListener("DOMContentLoaded", () => {});

var tab;
var url;
chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    }, function(tabs) {
        tab = tabs[0];
        url = tab.url;
        console.log(url);
        if (url.includes("youtube") || url.includes("instagram")) {
            document.getElementById("time").innerHTML = "00:01:00";
            alert("Papa Pig says GET BACK TO WORK!")
        }
        else {

    }
});
