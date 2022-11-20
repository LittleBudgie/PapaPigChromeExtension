chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      console.log("made it here");
        if (request.url) {
          const url = request.url;
          if (url.includes("google")) {
            console.log("You've reached google... starting a timer");
          }
        }
        sendResponse(() => {
            return false
        });
    }
)
