const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const bolds = document.querySelectorAll(".bold");
    return `rgb(${r}, ${g}, ${b})`;
}

const changeFontColor = () => {
    const bolds = document.querySelectorAll(".bold");
    bolds.forEach(bold => {
        bold.style.color = randomColor();
    })
}

const makeStory = () => {
    const q1 = document.getElementById("q1").value || "桃色";
    const q2 = document.getElementById("q2").value || "きびだんご";
    const q3 = document.getElementById("q3").value || "鬼に金棒";
    const q4 = document.getElementById("q4").value || "がんばるぞー！";
    const q5 = document.getElementById("q5").value || "どうしたの？だいじょうぶ？";
    const q6 = document.getElementById("q6").value || "熊";
    const q7 = document.getElementById("q7").value || "新潟";
    const q8 = document.getElementById("q8").value || "ピーマン";
    const story_area = document.getElementById("item2");
    const storyText = `
        <div class="text-area">
        <div class="content" id="p1"> 
            <p class="text" id="text1">むかしむかし、川で洗濯をしていたおばあさんの前に、大きな桃が流れてきました。</p> 
        </div>

        <div class="content" id="p2"> 
            <p class="text" id="text2">
                桃を割ると、中から髪が<span class="bold q1-answer">${q1}</span>の赤ん坊が現れました。<br>
                おじいさんとおばあさんは桃から生まれた赤ん坊に桃太郎と名付けました。
            </p> 
        </div>

        <div class="content" id="p3"> 
            <p class="text" id="text3">おじいさんとおばあさんの家の家訓は「<span class="bold q3-answer">${q3}</span>」。</p> 
        </div>

        <div class="content" id="p4"> 
            <p class="text" id="text4">その教えを胸に、桃太郎は<span class="bold q7-answer">${q7}</span>に住む鬼を退治しに出発しました。</p> 
        </div>

        <div class="content" id="p5"> 
            <p class="text" id="text5">道中、仲間にしたのは<span  class="bold q6-answer">${q6}</span>たち。</p> 
        </div>

        <div class="content" id="p6"> 
            <p class="text" id="text6">彼らの掛け声は「<span  class="bold q4-answer">${q4}</span>!!」</p> 
        </div>

        <div class="content" id="p7"> 
            <p class="text" id="text7">鬼ヶ島（<span class="bold q7-answer">${q7}</span>）では、鬼たちが<span class="bold q2-answer">${q2}</span>を食べて宴会中。</p> 
        </div>

        <div class="content" id="p8"> 
            <p class="text" id="text8">桃太郎一行が現れると、鬼たちは「うわぁ〜！それだけはやめてくれ！」と叫びました。</p> 
        </div>

        <div class="content" id="p9"> 
            <p class="text" id="text9">なぜなら鬼の弱点は<span class="bold q8-answer">${q8}</span>であり、桃太郎達は<span class="bold q8-answer">${q8}</span>を身に着けていたのです。</p> 
        </div>

        <div class="content" id="p10"> 
            <p class="text" id="text10">鬼たちは降参し、宝物と残りの<span class="bold q2-answer">${q2}</span>を差し出しました。</p> 
        </div>

        <div class="content" id="p11"> 
            <p class="text" id="text11">桃太郎たちは満腹になりながら言いました。</p> 
        </div>

        <div class="content" id="p12"> 
            <p class="text" id="text12">「<span class="bold q4-answer">${q4}」</span></p> 
        </div>

        <div class="content" id="p13"> 
            <p>　</p>
            <p class="text" id="text13">おしまい</p> 
        </div>
        </div>
    `;
    story_area.innerHTML = storyText;
    changeFontColor();
};


const changePage = () => {
    const q_area = document.getElementById("item1.5");
    const story_area = document.getElementById("item2");
    q_area.classList.add("vanish");
    setTimeout(() =>{
        q_area.style.display = "none";
        story_area.style.display = "block";
        story_area.classList.add("appear");
    }, 2000);
    // setTimeout(() => {
    // },)
}

const slideImg = () => {
    const leftImg = document.getElementById("LeftImg");
    const RightImg = document.getElementById("RightImg");
    const imgs = document.querySelectorAll(".img");
    imgs.forEach(img => {
        img.classList.add("rotate2");
    });
    leftImg.classList.add("slideRight");
    RightImg.classList.add("slideLeft");
    setTimeout(() => {
        imgs.forEach(img => {
            img.classList.remove("rotate2")
        })
    }, 7000);
}

const wordColor = () => {
    const bolds = document.querySelectorAll(".bold");
    bolds.forEach(bold => {
        bold.addEventListener("click",() => {
            changeFontColor();
        } );
    });
};

const answer_btn = document.getElementById("a-btn");
answer_btn.addEventListener("click", () => {
    makeStory();
    changePage();
    slideImg();
    setTimeout(() => {
        wordColor();
    }, 7000);
    
    console.log("push btn");
});

