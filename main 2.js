var w,l,W,L=0;

function janken(hand){
    // 表示する文字列を格納する変数
    let message= '';
    let kekka= '';
    
    var random= Math.floor(Math.random()*100%3);

    // 1:グー,2:チョキ,3:パー
    if(hand ==1){
        if(random==0){
            message='グー あいこ';
        }else if(random==1){
            message='チョキ 勝ち';
            w++;
        }else if(random==2){
            message='パー 負け';
            l++;
        }
    }else if(hand==2){        
        if(random==0){
        message='グー 負け';
        l++;
        }else if(random==1){
        message='チョキ あいこ';
        }else if(random==2){
        message='パー  勝ち';
        w++;
    }
    }else if(hand==3){
        if(random==0){
            message='グー 勝ち';
            w++;
        }else if(random==1){
            message='チョキ 負け';
            l++;
        }else if(random==2){
            message='パー  あいこ';
        }
    }else{
        message='指定されていない引数です';
    }

    // コンソール表示
    console.log(message);

    // 書き換えたいHTMLの要素を取得する
    const p_janken = document.querySelector('#janken');
    // 書き換えたい要素の文字列を書き換える
    p_janken.textContent = message;
    
    console.log(w,l);
    kekka='私は'+w+'回勝ち,CPUは'+l+'回勝った';
    console.log(kekka);

    // 書き換えたいHTMLの要素を取得する
    const p_count = document.querySelector('#count');
    // 書き換えたい要素の文字列を書き換える
    p_count.textContent = kekka;

    if(w == 3 || l == 3){
        if(w == 3){
          kekka += "\n\n あなたの勝ちです!!";
          const p_count = document.querySelector('#count');
          // 書き換えたい要素の文字列を書き換える
          p_count.textContent = kekka;
        } else if(l == 3){
          kekka += "\n\n あなたの負けです"  
          const p_count = document.querySelector('#count');
          // 書き換えたい要素の文字列を書き換える
          p_count.textContent = kekka;
        }
    
        // 各ボタンを非活性化する
        document.getElementById("0").setAttribute("disabled", true);
        document.getElementById("1").setAttribute("disabled", true);
        document.getElementById("2").setAttribute("disabled", true);

}
}