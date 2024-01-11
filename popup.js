let isActivated = false;

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabId = tabs[0].id;

    chrome.tabs.sendMessage(tabId, { isActivated });

    document.getElementById('toggleButton').addEventListener('click', () => {
        isActivated = !isActivated;
        const buttonText = isActivated ? 'Deactivate' : 'Activate';
        chrome.tabs.sendMessage(tabId, { isActivated });
        document.getElementById('toggleButton').innerText = buttonText;
    });
});
