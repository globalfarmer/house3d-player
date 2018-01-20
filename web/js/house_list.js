var h_item_t = _.template("<img src='<%- thumbnail %>' data-xml-link='<%-xml_link %>' data-mapurl='<%- mapurl %>' data-id='<%- id %>' alt='house image' class='img-thumbnail h3d-btn-image'>");
var h_pano_t = _.template('<div id="pano" style="width:100%;height:100%;"><noscript><table style="width:100%;height:100%;"><tr style="vertical-align:middle;"><td><div style="text-align:center;">Error:<br /><br />Javascript is not open<br /><br /></div></td></tr></table></noscript> </div>');
var active_item = undefined;
var current_page = 1;
var load_page = function(_page) {
    $.get('http://localhost/house3d-api/testdata/scheme720.php',{page: _page},
        (data) => {
            arr_apis = [];
            data.split("\n").forEach((curValue) => {
                if(curValue.indexOf('/3vj-scheme.3vjia.com//') > -1)
                arr_apis.push({thumbnail: curValue, id: "#", mapurl: '#'});
                if(curValue.indexOf('.xml') > -1) {
                    last_element = curValue.split('/').pop();
                    arr_apis[arr_apis.length-1].id = last_element.split('_')[0];
                    arr_apis[arr_apis.length-1].xml_link = curValue;
                }
                if(curValue.indexOf('http://localhost/house3d-api/web/Resource/get/720-cdn3.3vjia.com/upfile')>-1) {
                    arr_apis[arr_apis.length-1].mapurl = curValue;
                }
            }
        );
        console.log(arr_apis);
        arr_apis.forEach((curValue) => { if(curValue.hasOwnProperty('xml_link')) $('#house-list').append(h_item_t(curValue))});

        $(".h3d-btn-image").click((e) => {
            window.event = e;
        removepano("pano");
        $('#pano-container').append(h_pano_t());
        initvars.mapurl = "#";
        $(e.currentTarget).addClass('active');
        if(active_item !== undefined)active_item.removeClass('active');
        active_item=$(e.currentTarget);
        embedpano(
            {
                xml: $(e.currentTarget).data('xml-link'),
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
                        $('div').each((idx, e) => {if($(e).height()==27.7778&&$(e).width()==80)trash.push(e)})
                        $(trash).remove();
                    }, 1500);

                }
            });

        });
    }, 'text'
);
}
load_page(current_page);
var init = function() {
    $('#pano-container').css('height', $(window).height());
    $('#pano-container').css('width', $(window).width());
    $('#house-list-container').css('max-height', $(window).height());
    $('#house-list-container').scroll(() => {
       if($('#house-list-container').height() + $('#house-list-container').scrollTop() + 1 > $('#house-list').height() ) {
           current_page++;
           load_page(current_page);
           console.log('loading page ' + current_page + '....');
       }
    });
    $(window).resize(() => {
        $('#pano-container').css('height', $(window).height());
        $('#pano-container').css('width', $(window).width());
        $('#house-list-container').css('max-height', $(window).height());
    });
    $("body").css('overflow', 'hidden');
    window.console.log = function() {};
}
init();



