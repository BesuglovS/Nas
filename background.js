(function() {
    chrome.webRequest.onBeforeRequest.addListener(
        function(details)  {
            if (details.url.startsWith('http://wiki.nayanova.edu/api.php') && !details.url.endsWith('&internal=1')) {
                return {
                    redirectUrl: details.url + '&internal=1'
                };
            } 
        }, 
        {
            urls: ['*://wiki.nayanova.edu/*'],
            types: ['xmlhttprequest'],
        },
        ['blocking']
    );    
}());