// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log(this)
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });


chrome.devtools.panels.create(
  "Yogo Panel",
  "icon.png",
  "panel.html",
  function (panel) {
    console.log('success', panel);
  }
)