'use strict';
const wolf_pulldown = document.querySelector(".wolf_pulldown");
const time_pulldown = document.querySelector(".time_pulldown");
const item_themas = document.querySelectorAll(".item_thema");
const item_rules = document.querySelectorAll(".item_rule");
const thema_clear_btn = document.querySelector(".thema_clear");
const rule_clear_btn = document.querySelector(".rule_clear");
const rule_example_btn = document.querySelector("rule_example_btn");

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


