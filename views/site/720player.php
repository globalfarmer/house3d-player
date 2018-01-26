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
    '@web/js/720player.js',
    [View::POS_READY, 'depends' => ['underscore']],
    '720player'
);
$this->registerJsFile(
    '@web/js/3vjia.js',
    [View::POS_READY, 'depends' => [\yii\web\JqueryAsset::className()]],
    '3vjia'
);
$this->title = 'House3D';
?>
<div class="site-index">
    <div id='pano-container' class="body-content" style="padding: none;z-index: -1">
        <div id="pano" style="width:100%;height:100%;"><noscript><table style="width:100%;height:100%;"><tr style="vertical-align:middle;"><td><div style="text-align:center;">Error:<br /><br />Javascript is not open<br /><br /></div></td></tr></table></noscript></div>
    </div>
</div>
