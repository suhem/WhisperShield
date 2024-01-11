chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const blurValue = message.isActivated ? 'blur(5px)' : 'none';
    const messages = document.querySelectorAll('._11JPr');

    messages.forEach((message) => {
        message.style.filter = blurValue;
    });
});
