var h_item_t = _.template("<a href='#' data-xml-link='<%-xml_link %>' data-id='<%- id %>' class='h3d-btn-image'><img src='<%- thumbnail %>' alt='house image' class='img-thumbnail'></a>");
var h_pano_t = _.template('<div id="pano" style="width:100%;height:100%;"><noscript><table style="width:100%;height:100%;"><tr style="vertical-align:middle;"><td><div style="text-align:center;">错误:<br /><br />Javascript没有开启<br /><br /></div></td></tr></table></noscript> </div>');
$.get('http://localhost/house3d-api/testdata/scheme720.php',{page: 1},
    (data) => {
        arr_apis = [];
        data.split("\n").forEach((curValue) => {
                if(curValue.indexOf('/3vj-scheme.3vjia.com//') > -1)
                    arr_apis.push({thumbnail: curValue, id: "#", xml_link: '#'});
                if(curValue.indexOf('.xml') > -1) {
                    last_element = curValue.split('/').pop();
                    arr_apis[arr_apis.length-1].id = last_element.split('_')[0];
                    arr_apis[arr_apis.length-1].xml_link = curValue;
                }
            }
        );
        console.log(arr_apis);
        arr_apis.forEach((curValue) => $('#house-list').append(h_item_t(curValue)));
        $(".h3d-btn-image").click((e) => {
           removepano("pano");
           $('#pano-container').append(h_pano_t());
           embedpano(
               {
                   xml: $(e.currentTarget).data('xml-link'),
                   id: "dm_mnmnh", initvars:
                   initvars,
                   target: "pano",
                   html5: "only",
                   mobilescale: 1.0,
                   passQueryParameters: true
               });
        });
    },
    'text'
);

