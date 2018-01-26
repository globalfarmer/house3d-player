<?php

/* @var $this yii\web\View */
use yii\helpers\Url;  // this is for Class URL ******
use yii\web\View;
$this->registerJsFile(
    '@web/js/underscore.js/1.8.3/underscore-min.js',
    [View::POS_READY, 'depends' => [\yii\web\JqueryAsset::className()]],
    'underscore'
);
$this->registerJsFile(
    '@web/js/house_list.js',
    [View::POS_READY, 'depends' => ['underscore']],
    'house-list'
);
$this->registerJsFile(
    '@web/js/3vjia.js',
    [View::POS_READY, 'depends' => [\yii\web\JqueryAsset::className()]],
    '3vjia'
);
$this->title = 'House 3D';
?>
<div class="site-index">
    <div id='house-list-container' class="style-1 pre-scrollable" style="position: fixed;top: 0;left: 0;width: 200px;z-index: 1;padding: none;">
        <div id="house-list" style="list-style-type: none;">
        </div>
    </div>

    <div id='pano-container' class="body-content" style="padding: none;z-index: -1">
<!--        <div id="Loadingbar" style="background:#3399cc; z-index:999; width:100%; height:100%; position:absolute; display:none">-->
<!--            <div id="Loadingbar2" style="background:-webkit-gradient(radial,100 100,0,100 100,100,from(#3399cc),to(#3399cc)); z-index:1; width:200px; height:200px; position:absolute; left:50%; top:40%; margin-left:-100px; margin-top:-100px; vertical-align:middle; text-align:center;">-->
<!--                <img id="Loadingbar3" src="https://720-cdn3.3vjia.com/UpFile//C00000022/Admin/LoginSetting_360LoadingLogo/201612/LoginSetting/7a658dcf8db74bc98f33cadff62837f7.png" style="width:200px; position: relative; top:50px" />-->
<!--                <img id="Loadingbar4" src="https://720-cdn3.3vjia.com/UpFile//C00000022/Admin/LoginSetting_360LoadingBar/201610/LoginSetting/65b6dcf264764000a96a5e067b91c043.gif" style="width:200px; position: relative; top:80px" />-->
<!--            </div>-->
<!--            <div style="position:absolute; font-family: 宋体; font-size: 12px;  color: #FFF;opacity:0.4; top:100%;  left:50%; width:350px; margin-left:-140px; margin-top:-30px;">Copyright, All Rights Reserved</div>-->
<!--        </div>-->
<!--        <div id="Moldel" style="background-image:url(https://720-cdn3.3vjia.com/Panorama/public/background.jpg);z-index:999;display:none">-->
<!--            <div class="vr_header">-->
<!--                <div class="vr_glasses"><img src="https://720-cdn3.3vjia.com/Panorama/public/vr.png" alt="" /></div>-->
<!--                <div class="vr_meet"><img src="https://720-cdn3.3vjia.com/Panorama/public/meet.png" alt="" /></div>-->
<!--            </div>-->
<!--            <div class="vr_footer">-->
<!--                <div class="vr_loading"><img src="https://720-cdn3.3vjia.com/Panorama/public/loading.gif" alt="" /></div>-->
<!--                <div class="vr_logo"><img src="https://720-cdn3.3vjia.com/UpFile//C00000022/Admin/LoginSetting_360ModelLoadingLogo/201612/LoginSetting/ad849f8e43304cf499bada980e576e34.png" alt="" /></div>-->
<!--                <p>Copyright 2018 3vjia Inc, All Rights Reserved.</p>-->
<!--            </div>-->
<!--        </div>-->

    </div>
</div>
<script>
    var initvars = {
        // sayInterface: "https://720.3vjia.com/WeChatAuth/Auth",
        // InterfaceUrl: "https://720api.3vjia.com/",
        // wxinof: "https://720.3vjia.com/WeChatAuth/redirectOAuth?w=1",
        // wxinofpc: "https://720.3vjia.com/WeChatAuth/redirectOAuthOfPC?w=1",
        // connection_hub_url: "https://ssl-s.3vjia.com/signalr",
        // qrcodeurl: "https://720api.3vjia.com/",
        // showthumb: "True",
        // showmap: "True",
        // say_visible: "true",
        // structure: "structure",
        // portraitUrl: "https://720-cdn3.3vjia.com/UpFile//C00000022/ADMIN/UserSetting/1000079958/88683e7029c6468fb7e69b2674436e4d_90x90.jpg",
        // DesignerName: "Designer's Name",
        // Advert: "Advert",
        // te: "telephone",
        // company: "company",
        // logoopen: "http://www.3vjia.com",
        // mapurl: "https://720-cdn3.3vjia.com/upfile/c00000186/pmc/designschemehousetype/201712/08460301/7a5b5f6780824f5186cc48c046458287_300w.png",
        mapsize: "㎡",
        // logourl: "https://720-cdn3.3vjia.com/Panorama/public/image3.5/logo2.png",
        // PreAbout: "http://www.3vjia.com/pmc/apply/index?OrganId=C00000022&amp;DeptId=7CCCCEEI&amp;Author=8DCCCCJLLH&amp;returnUrl=https://720.3vjia.com/S08460301",
        // PreAbout2: "http://www.3vjia.com/pmc/apply/index?OrganId=C00000022&amp;DeptId=7CCCCEEI&amp;Author=8DCCCCJLLH&amp;returnUrl=https://720.3vjia.com/S08460301",
        // shopinfo: {name:'shop name',address:'shop address',tel:'020-38844660',point:''},
        edit: true,
        statistics: '21543',
        dm_host: window.location.origin + '/house3d-player',
        is_planetoid: true,
        PANORAMACDNURL: window.location.origin + "/house3d-api/web/Resource/get/3vj-render.3vjia.com",
        // CDNPARAM: "https://720-cdn3.3vjia.com",
        // MediaHost: 'https://720-cdn3.3vjia.com',
        extend_xml:''
    }

    var hasPanorama = "True";
    if (hasPanorama == "False") {
        alert("The program did not render the panorama or set the space name for the panorama!");
    }
    if ("True" == "True") {
        $("#Loadingbar").show();
    } else {
        $("#Moldel").show();
    }

</script>
