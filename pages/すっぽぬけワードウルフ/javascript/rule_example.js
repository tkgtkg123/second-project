const manual_btns = document.querySelectorAll(".manual_btn, .manual_close_btn"); //ルール説明ボタンと説明閉じる(×)ボタン
const manual = document.querySelector(".manual"); //ルール説明文
const manual_background = document.querySelector(".manual_background"); //ルール説明文の背景ぼかし

// ルール説明文を表示(ルール説明ボタンの動作)
manual_btns.forEach(btn => {
    btn.addEventListener("click", () =>{
        manual_background.classList.toggle("appear_manual_background");
        manual.classList.toggle("appear_manual");
    });
});
