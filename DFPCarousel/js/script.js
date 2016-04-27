(function() {
    var dfpRequests = function() {
        var googletag = googletag || {};
        googletag.cmd = googletag.cmd || [];
        var dfp = {
            init: function() {
                dfp.loadgpt();
                dfp.loadHeader();
                dfp.displayBody();
            },
            loadgpt: function() {
                var gads = document.createElement('script');
                gads.async = true;
                gads.type = 'text/javascript';
                var useSSL = 'https:' == document.location.protocol;
                gads.src = (useSSL ? 'https:' : 'http:') +
                    '//www.googletagservices.com/tag/js/gpt.js';
                var node = document.getElementsByTagName('script')[0];
                node.parentNode.insertBefore(gads, node);
            },
            loadHeader: function() {
                googletag.cmd.push(function() {
                    googletag.defineSlot('/81214979/Desktop_HP_Carousel ', 'fluid', 'fluid-div-1').addService(googletag.pubads());
                    googletag.pubads().enableSingleRequest();
                    googletag.pubads().collapseEmptyDivs();
                    googletag.enableServices();
                });
            },
            displayBody: function() {
                googletag.cmd.push(function() {
                    googletag.display('fluid-div-1');
                });
            }
        }
        return {
            dfp: dfp
        }
    }();

    dfpRequests.dfp.init();
})();