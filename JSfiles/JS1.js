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
function loadImages(path, num, gridClass) {
  const images = [];
  for (let i = 1; i <= num; i++) {
    const img = new Image();
    img.src = `${path} (${i}).jpg`;
    img.onload = () => {
      images.push(img);
      // すべての画像を読み込んだら、グリッドに表示する
      if (images.length === num) {
        const grid = document.querySelector(gridClass);
        images.forEach((image) => {
          grid.appendChild(image);
        });
      }
    };
  }
}
// 画像の読み込みとグリッドへの表示を行う
loadImages("picture/a/a", 22, ".image-grid-a");
loadImages("picture/b/b", 22, ".image-grid-b");
loadImages("picture/c/c", 13, ".image-grid-c");



//プライベートページ
function checkPassword() {
  var password = document.getElementById("password-input").value;

  if (password === "game-wasd") {
    document.getElementById("wrong-password").innerHTML = "";
    document.getElementById("password-input").value = "";
    document.getElementById("content").style.display = "block";
  } else {
    document.getElementById("wrong-password").innerHTML = "パスワードが違います。";
  }
}
