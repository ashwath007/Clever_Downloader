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
            // console.log(D.filename)
            // console.log(D.filename.slice(22))
            // console.log(D.finalUrl)
            console.log(D.url)
                // console.log(D.finalUrl)


        })

    })
})


chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
    console.log(item.finalUrl)
    chrome.downloads.search({}, (all_d) => {
        all_d.map((D) => {
            if (item.finalUrl == D.url) {
                // suggest({
                //     filename: item.filename,
                //     conflict_action: 'prompt',
                //     conflictAction: 'prompt',

                // });
                console.log('Already there')
            } else {
                console.log('Not there')

            }
        })
    });

});