var h_item_t = _.template("<a href='/house3d-player/index.php?xml_name=<%-xml_name %>' data-id='<%- id %>' class='h3d-btn-image'><img src='<%- thumbnail %>' alt='house image' class='img-thumbnail'></a>");
$.get('http://localhost/house3d-api/testdata/scheme720.php',{page: 1},
    (data) => {
        arr_apis = [];
        data.split("\n").forEach((curValue) => {
                if(curValue.indexOf('/img3.admin.mnmnh.com') > -1)
                    arr_apis.push({thumbnail: curValue, id: "#", xml_name: "#"});
                if(curValue.indexOf('.xml') > -1) {
                    curValue = curValue.split('/').pop();
                    arr_apis[arr_apis.length-1].id = curValue.split('_')[0];
                    arr_apis[arr_apis.length-1].xml_name = curValue.split('.')[0];
                }
            }
        );
        console.log(arr_apis);
        arr_apis.forEach((curValue) => $('#house-list').append(h_item_t(curValue)));
    },
    'text'
);

