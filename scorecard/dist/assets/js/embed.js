if (document.location.hostname == "localhost") {
    var baseurl = "";
} else {
    var baseurl = "https://static.code4sa.org/Valentines-Day-2016/scorecard/dist/";
}
document.write('<div id="code4sa-valentines-index"></div>');
document.write('<script type="text/javascript" src="' + baseurl + 'assets/js/lib/pym.min.js"></script>');
document.write("<script>var pymParent = new pym.Parent('code4sa-valentines-index', '" + baseurl + "index.html', {});</script>");
