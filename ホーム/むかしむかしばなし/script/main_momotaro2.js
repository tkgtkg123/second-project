const momotaro_story2 = () => {
    const q1 = document.getElementById("q1").value || "家族";
    const q2 = document.getElementById("q2").value || "ライオン";
    const q3 = document.getElementById("q3").value || "今年はボーナス2倍";
    const q4 = document.getElementById("q4").value || "歯磨き粉とシャンプーを間違えてしまったこと";
    const q5 = document.getElementById("q5").value || "やらない善よりやる偽善！";
    const answer = document.getElementsByClassName('bold');
    const q_area = document.getElementById("item1.5");
    const story_area = document.getElementById("item2");

    for (const word of answer) {
        word.textContent = word.textContent
            .replace(/{家族}/g , q1)
            .replace(/{ライオン}/g , q2)
            .replace(/{今年はボーナス2倍}/g , q3)
            .replace(/{歯磨き粉とシャンプーを間違えてしまったこと}/g , q4)
            .replace(/{やらない善よりやる偽善！}/g , q5);
    };

    q_area.style.display = "none";
    story_area.style.display = "block";
};

const answer_btn = document.getElementById("a-btn");
answer_btn.addEventListener("click", () => {
    momotaro_story2();
});