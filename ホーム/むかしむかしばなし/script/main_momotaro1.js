const momotaro_story1 = () => {
    const q1 = document.getElementById("q1").value || "桃色";
    const q2 = document.getElementById("q2").value || "きびだんご";
    const q3 = document.getElementById("q3").value || "鬼に金棒";
    const q4 = document.getElementById("q4").value || "がんばるぞー！";
    const q5 = document.getElementById("q5").value || "どうしたの？だいじょうぶ？";
    const q6 = document.getElementById("q6").value || "熊";
    const q7 = document.getElementById("q7").value || "新潟";
    const q8 = document.getElementById("q8").value || "ピーマン";

    const q_area = document.getElementById("item1.5");

    const story_area = document.getElementById("item2");

    const make_story = `
        <div class="text-area">
        <div class="content" id="p1"> 
            <p class="text" id="text1">むかしむかし、川で洗濯をしていたおばあさんの前に、大きな桃が流れてきました。</p> 
        </div>

        <div class="content" id="p2"> 
            <p class="text" id="text2">
                桃を割ると、中から髪が<strong>${q1}</strong>の赤ん坊が現れました。<br>
                おじいさんとおばあさんは桃から生まれた赤ん坊に桃太郎と名付けました。
            </p> 
        </div>

        <div class="content" id="p3"> 
            <p class="text" id="text3">おじいさんとおばあさんの家の家訓は「<strong>${q3}</strong>」。</p> 
        </div>

        <div class="content" id="p4"> 
            <p class="text" id="text4">その教えを胸に、桃太郎は<strong>${q7}</strong>に住む鬼を退治しに出発しました。</p> 
        </div>

        <div class="content" id="p5"> 
            <p class="text" id="text5">道中、仲間にしたのは<strong>${q6}</strong>たち。</p> 
        </div>

        <div class="content" id="p6"> 
            <p class="text" id="text6">彼らの掛け声は「<strong>${q4}</strong>!!」</p> 
        </div>

        <div class="content" id="p7"> 
            <p class="text" id="text7">鬼ヶ島（<strong>${q7}</strong>）では、鬼たちが<strong>${q2}</strong>を食べて宴会中。</p> 
        </div>

        <div class="content" id="p8"> 
            <p class="text" id="text8">桃太郎一行が現れると、鬼たちは「うわぁ〜！それだけはやめてくれ！」と叫びました。</p> 
        </div>

        <div class="content" id="p9"> 
            <p class="text" id="text9">なぜなら鬼の弱点は<strong>${q8}</strong>であり、桃太郎達は<strong>${q8}</strong>を身に着けていたのです。</p> 
        </div>

        <div class="content" id="p10"> 
            <p class="text" id="text10">鬼たちは降参し、宝物と残りの<strong>${q2}</strong>を差し出しました。</p> 
        </div>

        <div class="content" id="p11"> 
            <p class="text" id="text11">桃太郎たちは満腹になりながら言いました。</p> 
        </div>

        <div class="content" id="p12"> 
            <p class="text" id="text12">「<strong>${q4}」</strong></p> 
        </div>

        <div class="content" id="p13"> 
            <p>　</p>
            <p class="text" id="text13">おしまい</strong></p> 
        </div>
        </div>
    `;

    q_area.style.display = "none";

    story_area.innerHTML = make_story;
    story_area.style.display = "block";
    
};

const answer_btn = document.getElementById("a-btn");
answer_btn.addEventListener("click", () => {
    momotaro_story1();
});