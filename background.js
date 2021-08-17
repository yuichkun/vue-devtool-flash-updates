console.log('background is here')

chrome.runtime.onConnect.addListener((devToolsConnection) => {
    console.log('connection!', devToolsConnection);

    const devToolsListener = (message, sender, sendResponse) => {
      // Inject a content script into the identified tab
      // chrome.scripting.executeScript(message.tabId,
      //   { file: message.scripToInject });
    }
    devToolsConnection.onMessage.addListener(devToolsListener);
    devToolsConnection.onDisconnect.addListener(() => {
        devToolsConnection.onMessage.removeListener(devToolsListener);
    });
});