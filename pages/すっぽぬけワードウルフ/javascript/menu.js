'use strict';
const wolf_pulldown = document.querySelector(".wolf_pulldown"); //ウルフ人数設定
const time_pulldown = document.querySelector(".time_pulldown"); //トーク時間設定
const item_themas = document.querySelectorAll(".item_thema"); //トークテーマ設定
const item_rules = document.querySelectorAll(".item_rule"); //追加ルール設定
const thema_clear_btn = document.querySelector(".thema_clear"); //トークテーマのクリアボタン
const rule_clear_btn = document.querySelector(".rule_clear"); //追加ルールのクリアボタン
const manual_btns = document.querySelectorAll(".manual_btn, .manual_close_btn"); //ルール説明ボタンと説明閉じる(×)ボタン
const manual = document.querySelector(".manual"); //ルール説明文
const manual_background = document.querySelector(".manual_background"); //ルール説明文の背景ぼかし

// ウルフ人数の選択肢を作成
for(let i =1; i<=5; i++){
    const option = document.createElement("option");
    option.value = i;
    option.textContent =i;
    wolf_pulldown.appendChild(option);
};
// 時間設定の選択肢を作成
for(let i =1; i<=10; i++){
    const option = document.createElement("option");
    option.value = i;
    option.textContent =i;
    time_pulldown.appendChild(option);
};
// 選択したボタンの色変化を設定（トークテーマ）
item_themas.forEach(thema => {
    thema.addEventListener("click", () =>{
        thema.classList.toggle("selected_thema");
    });
});

// 選択したボタンの色変化を設定（追加ルール）
item_rules.forEach(rule => {
    rule.addEventListener("click", () =>{
        rule.classList.toggle("selected_rule");
    });
});
// クリアボタンの機能を設定（トークテーマ）
thema_clear_btn.addEventListener("click", () =>{
    item_themas.forEach (thema => {
        if (thema.classList.contains("selected_thema")){
            thema.classList.remove("selected_thema");
        };
    });
});
// クリアボタンの機能を設定（追加ルール）
rule_clear_btn.addEventListener("click", () =>{
    item_rules.forEach (rule => {
        if (rule.classList.contains("selected_rule")){
            rule.classList.remove("selected_rule");
        };
    });
});

manual_btns.forEach(btn => {
    btn.addEventListener("click", () =>{
        manual_background.classList.toggle("appear_manual_background");
        manual.classList.toggle("appear_manual");
    });
});


