$(function() {
    console.log('aaa');
    window_load();

    //ウィンドウサイズ変更時に更新
    window.onresize = window_load;

    //サイズの表示
    function window_load() {
        var sW, sH, s;
        sW = window.innerWidth;
        sH = window.innerHeight;
        sWH = (sH * 0.5) - ((sW * 0.55 * 0.56) / 2);
        h = '<style> .video{top:' + sWH + 'px;}</style>';
        $('body').append(h);
        console.log('h' + sH + 'w' + sW);
    }



})