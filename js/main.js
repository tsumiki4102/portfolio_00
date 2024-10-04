'use strict';

{
//戻るバーの表示、非表示
const scrollNavi = function() {
  const mainNavi = document.getElementById('bar');
  const headerTop = document.getElementById('top');
  const y = window.scrollY;
  const headerTopClientRect = headerTop.getBoundingClientRect();
  const triggerY = y + headerTopClientRect.top+60
;
  if(y > triggerY) {
    mainNavi.classList.add('active');
  } else {
    mainNavi.classList.remove('active');
  }
};
window.addEventListener('scroll', scrollNavi);

//アローナビ表示、非表示
const scrollArrow = function() {
  const mainNavi = document.getElementById('arrow');
  const headerTop = document.getElementById('top');
  const y = window.scrollY;
  const headerTopClientRect = headerTop.getBoundingClientRect();
  const triggerY = y + headerTopClientRect.top+500
;
  if(y > triggerY) {
    mainNavi.classList.add('arrow_active');
  } else {
    mainNavi.classList.remove('arrow_active');
  }
};
window.addEventListener('scroll', scrollArrow);


  //スクロール時のコンテンツ表示
    const scrollAnimationEle = document.querySelectorAll('.fade');
    const scrollAnimationFunc = function() {
      for(let i = 0; i < scrollAnimationEle.length; i++) {
        const triggerMargin = 200;
        if (window.innerHeight > scrollAnimationEle[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationEle[i].classList.add('show');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);

  //クラス名が「scroll-in」の要素を取得
  const objects = document.querySelectorAll('.scroll-in');
  
  //スクロール感知で実行
  const cb = function(entries, observer) {
      entries.forEach(entry => {
          if(entry.isIntersecting) {
              entry.target.classList.add('displayed');//スクロール感知で「displayed」のクラ ス名を付与
              observer.unobserve(entry.target); //監視の終了
          }
      });
  }
  // オプション
  const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0
  }
  
  // IntersectionObserverインスタンス化
  const io = new IntersectionObserver(cb, options);
  
  // 監視を開始
  objects.forEach(object => {
      io.observe(object);
  });
}