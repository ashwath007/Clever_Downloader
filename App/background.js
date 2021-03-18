// chrome.tabs.onActivated.addListener(tab => {
//         console.log(tab)
//         chrome.tabs.get(tab.tabId, current_tab => {
//             console.log(current_tab.url)
//         })
//     })
// chrome.tabs.executeScript(null, { file: './foreground.js' }, () => {
//     console.log('Injected')
//     chrome.downloads.search({}, (all_d) => {
//         all_d.map((D) => {
//             // console.log(D.filename)
//             // console.log(D.filename.slice(22))
//             // console.log(D.finalUrl)
//             console.log(D)
//                 // console.log(D.finalUrl)


//         })

//     })
// })


// chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
//     console.log(item.finalUrl)
//     chrome.downloads.search({}, (all_d) => {
//         all_d.map((D) => {
//             if (item.finalUrl == D.url) {
//                 // suggest({
//                 //     filename: item.filename,
//                 //     conflict_action: 'prompt',
//                 //     conflictAction: 'prompt',

//                 // });
//                 console.log('Already there')
//             } else {
//                 console.log('Not there')

//             }
//         })
//     });

// });

chrome.runtime.onInstalled.addListener(function() {

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                // Comment below line so that PageStateMatcher match any pages
                // pageUrl: {hostEquals: 'developer.chrome.com'},
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});


chrome.downloads.onChanged.addListener(function(item, suggest) {
    console.log(item.filename.current)
    chrome.downloads.search({}, (all_d) => {


        for (i = 0; i < all_d.length; i++) {
            if (item.filename.current === all_d[i].filename) {
                console.log('file already exist')
                chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
                    // suggest({
                    //     filename: item.filename,
                    //     conflict_action: 'prompt',
                    //     conflictAction: 'prompt',

                    // });
                    window.open("popup.html", "extension_popup", "width=300,height=400,status=no,scrollbars=yes,resizable=no");
                });
                break

            }

        }
    });

});