//同じ日付で2回目以降ならローディング画面非表示の設定

var splash_text = $.cookie('accessdate'); //キーが入っていれば年月日を取得
var myD = new Date();//日付データを取得
var myYear = String(myD.getFullYear());//年
var myMonth = String(myD.getMonth() + 1);//月
var myDate = String(myD.getDate());//日
    
if (splash_text != myYear + myMonth + myDate) {//cookieデータとアクセスした日付を比較↓
        $("#splash").css("display", "block");//１回目はローディングを表示
        setTimeout(function () {
            $("#splash_logo").fadeIn(1000, function () {//1000ミリ秒（1秒）かけてロゴがフェードイン
                setTimeout(function () {
            $("#splash_logo").fadeOut(1000);//1000ミリ秒（1秒）かけてロゴがフェードアウト
                }, 1000);//1000ミリ秒（1秒）後に処理を実行
        setTimeout(function () {
            $("#splash").fadeOut(1000, function () {//1000ミリ秒（1秒）かけて画面がフェードアウト
            var myD = new Date();
            var myYear = String(myD.getFullYear());
            var myMonth = String(myD.getMonth() + 1);
            var myDate = String(myD.getDate());
            $.cookie('accessdate', myYear + myMonth + myDate); //accessdateキーで年月日を記録
        });
        }, 1700);//1700ミリ秒（1.7秒）後に処理を実行
    });
}, 1000);//1000ミリ秒（1秒）後に処理を実行
}else {
    $("#splash").css("display", "none");//同日2回目のアクセスでローディング画面非表示
}  



// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

    // ふわっ
    $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top-150;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
      }else{
      $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
      }
      });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
  
  