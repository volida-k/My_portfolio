/*ロード画面*/
/*window.onload = function() {
  const loader = document.getElementById('loading-wrapper');
  loader.classList.add('completed');
}*/
setTimeout(function() {
    $('#loading-wrapper').fadeOut(600);
}, 10000); // 5秒後にfadeOut処理



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

/*ギャラリー*/
// 画像を読み込む
const images = [];
for (let i = 1; i <= 17; i++) {
  const img = new Image();
  img.src = `picture/a/a (${i}).jpg`;
  img.onload = () => {
    images.push(img);
    // すべての画像を読み込んだら、グリッドに表示する
    if (images.length === 17) {
      const grid = document.querySelector(".image-grid");
      images.forEach((image) => {
        grid.appendChild(image);
      });
    }
  };
}
