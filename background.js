let newMyInterval = setInterval(updateCountDown, 1000);

function updateCountDown() {
    let newCountDownDate = chrome.storage.sync.get(['countDownDate']) - new Date().getTime();

    chrome.storage.sync.set({
        countDownDate: newCountDownDate
    })
}
