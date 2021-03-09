chrome.tabs.onActivated.addListener(tab => {
    console.log(tab)
    chrome.tabs.get(tab.tabId, current_tab => {
        console.log(current_tab.url)
    })
})
chrome.tabs.executeScript(null, { file: './foreground.js' }, () => {
    console.log('Injected')
    chrome.downloads.search({}, (all_d) => {
        all_d.map((D) => {
            console.log(D.filename)
            console.log(D.filename)
            console.log(D.finalUrl)
        })

    })
})