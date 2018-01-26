var api_host = "http://192.168.30.105/house3d-api/api/v1/house3d-players/scheme";
var dm_host = window.location.origin + "/house3d-player/";
var on_load_scheme_data = function(data){
    console.log("on_load_scheme_data");
    var initvars = {
        // mapurl: "https://720-cdn3.3vjia.com/upfile/c00000186/pmc/designschemehousetype/201712/08460301/7a5b5f6780824f5186cc48c046458287_300w.png",
        mapsize: "㎡",
        edit: true,
        dm_host: dm_host,
        is_planetoid: true,
        PANORAMACDNURL: data.panoramaCdnUrl,
    }
    embedpano(
        {
            xml: data.xmlUrl,
            id: "dm_mnmnh",
            initvars: initvars,
            target: "pano",
            html5: "only",
            mobilescale: 1.0,
            passQueryParameters: true,
            onready: function() {
                setTimeout(() => {
                    features = [];
                    $('div').each((idx, e) => {if($(e).height()==70&&$(e).width()==70)features.push(e)})
                    features.pop();
                    $(features).remove();
                    trash = [];
                    $('div').each((idx, e) => {if($(e).width()==80)trash.push(e)})
                    $(trash).remove();
                }, 1500);
            }
        });
}
$(document).ready(() => {
    // window.console.log = function() {};
    console.log("on ready");
    $('#pano-container').css('height', $(window).height());
    $('#pano-container').css('width', $(window).width());
    $(window).resize(() => {
        $('#pano-container').css('height', $(window).height());
        $('#pano-container').css('width', $(window).width());
    });
    $("body").css('overflow', 'hidden');
    var schemeId = window.location.href.toLowerCase().split('schemeid=').pop().substr(0,8);
    $.get([api_host,schemeId].join('/'), on_load_scheme_data, 'json');
});


