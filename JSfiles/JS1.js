/*ロード画面
window.onload = function() {
  const loader = document.getElementById('loading-wrapper');
  loader.classList.add('completed');
}

setTimeout(function() {
    $('#loading-wrapper').fadeOut(600);
}, 40); // 5秒後にfadeOut処理
*/


/*ヘッダーjs*/
function init() {
    // 変化させる位置
    var px_change = 200;
    window.addEventListener('scroll', function(e){
      var win_s = $(window).scrollTop();
        // 高さによってヘッダーを変化させる
        if ( $(window).scrollTop() > px_change ) {
          $('header').addClass('small');
        }else{
          $('header').removeClass('small');
        }
    });
}
window.onload = init();
