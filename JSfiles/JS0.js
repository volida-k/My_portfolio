/*ロード処理*/
window.onload = function() {
  const loader = document.getElementById('loading-wrapper');
  loader.classList.add('completed');
}

ScrollReveal().reveal('.INbox',{
  delay: 0, // アニメーション開始までの時間
  duration: 1000, // アニメーション完了にかかる時間
  origin: 'left', // 要素がどの方向から来るか
  distance: '50px', // 移動する距離
  reset: true // フレームインの度に動かすか
});
