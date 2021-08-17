// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log(this)
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });


chrome.devtools.panels.create(
  "Vue Flash Updates",
  "icon.png",
  "panel.html",
  function (panel) {
    console.log('success', panel);
  }
)
chrome.devtools.inspectedWindow.eval(`alert()`, (result, exception) => {
  console.log('exceptions', exception)
  console.log('result', result);
})

const backgroundPageConnection = chrome.runtime.connect({
  name: "devtools-page"
});

backgroundPageConnection.postMessage({
  tabId: chrome.devtools.inspectedWindow.tabId,
  scriptToInject: "content_script.js"
});
