//让图片 居中显示
window.onresize = function(){
    var wrapper = document.querySelector('.wrapper');
    let H = window.innerHeight;
    let W = window.innerWidth;
    let Y = (H - 1080) / 2 + 550 +'px';
    let x = (W - 1960) / 2 +'px';
    wrapper.style.top = Y;
    wrapper.style.left = x;
}

window.onload = function(){
    window.onresize();
    //
    $.fn.scrollPath("getPath")
        .moveTo(1000, 0, {name: "home"}) //moveTo:移动到1000 ,0 这个位置
        .lineTo(1000, 2250, {name: "about"}) //lineTo:划直线到1000 ,2250,这个位置
        .lineTo(1000, 3250)
        .arc(1550, 3250, 550, -Math.PI, Math.PI/2, true) //arc:画曲线到这个位置
        .lineTo(2500, 3800, {name: "culture", rotate: -Math.PI/2}) //-Math.PI/2对应的是90度;
        .arc(3550, 3800, 900, -Math.PI, Math.PI/2, true)
        .lineTo(4500, 4700, {name: "joinus"})
        .arc(4500, 3800, 900, Math.PI/2, 0, true)
        .lineTo(5400, 1350, {name: "map", rotate: Math.PI/2})
        .arc(5400, -50, 1350, Math.PI/2, Math.PI*1.5, true, {name: "galerie", rotate: 0})
        .lineTo(2400, -1400, {name: "kontakty"})
        .arc(2400, 0, 1400, Math.PI*1.5, Math.PI, true)
        .lineTo(2800, 1200, {name: "guanggao"})
        .arc(2800, 0, 1200, Math.PI/2,  Math.PI*1.5, true);


    $(".wrapper").scrollPath({drawPath: false, wrapAround: true});
}

window.onhashchange = function(){
    //console.log(location.hash);
    //通过hash值来确定怎么滚动;
    let hash = location.hash;
    hash=hash.substr(1);
    $.fn.scrollPath("scrollTo", hash, 2000, function(t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    });

}