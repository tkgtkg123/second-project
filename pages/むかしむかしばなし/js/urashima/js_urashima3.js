const makeStory = () => {
    const q1 = document.getElementById("q1").value || "楽しい";
    const q2 = document.getElementById("q2").value || "ゲーム";
    const q3 = document.getElementById("q3").value || "ゲーム";
    const q4 = document.getElementById("q4").value || "亀";
    const q5 = document.getElementById("q5").value || "歯ブラシ";
    const answer = document.getElementsByClassName('bold');
    const q_area = document.getElementById("item1.5");
    const story_area = document.getElementById("item2");

    for (const word of answer) {
        word.textContent = word.textContent
            .replace(/{楽しい}/g , q1)
            .replace(/{ゲーム}/g , q2)
            .replace(/{ゲーム}/g , q3)
            .replace(/{亀}/g , q4)
            .replace(/{歯ブラシ}/g , q5);
    };

    const storyText = `
        <div class="text-area">
            <div class="content" id="p1">
                <p class="text" id="text1">むかしむかし、海辺の小さな村に、引きこもりの浦島太郎がいました。</p>
            </div>
            <div class="content" id="p2">
                <p class="text" id="text2">太郎は「今日は気分的に<span class="bold q1-answer">${q1}</span>、だから今日は外出無理」と言いながら、一日中<span class="bold q2-answer">${q2}</span>をして過ごしていました。</p>
            </div>
            <div class="content" id="p3">
                <p class="text" id="text3">そのころ浜辺では、子どもたちが亀をいじめていました。</p>
            </div>
            <div class="content" id="p4">
                <p class="text" id="text4">しかし太郎は窓から見てつぶやきました。「うーん…誰か助けてくれるでしょ。」</p>
            </div>
            <div class="content" id="p5">
                <p class="text" id="text5">見かねたおじいさんとおばあさんは、「もう私らが行こうか」と言って亀を助けました。</p>
            </div>
            <div class="content" id="p6">
                <p class="text" id="text6">数日後、助けられた亀が二人の前に現れ、「お礼に竜宮城へどうぞ！」と誘いました。</p>
            </div>
            <div class="content" id="p7">
                <p class="text" id="text7">おじいさんとおばあさんは、「<span class="bold q3-answer">${q3}</span>の予定だったけどまぁいいか」と言いながら乗り込みました。</p>
            </div>
            <div class="content" id="p8">
                <p class="text" id="text8">竜宮城では乙姫が大歓迎！　二人は<span class="bold q4-answer">${q4}</span>のように踊りまくり、宴を楽しみました。</p>
            </div>
            <div class="content" id="p9">
                <p class="text" id="text9">乙姫は別れ際、「これは玉手箱です。決して開けてはいけません」と言って<span class="bold q5-answer">${q5}</span>と一緒に手渡しました。</p>
            </div>
            <div class="content" id="p10">
                <p class="text" id="text10">玉手箱を貰うときに、おじいさんとおばあさんは手が滑って、落としてしまいました。</p>
            </div>
            <div class="content" id="p11">
                <p class="text" id="text11">落とした拍子に玉手箱が開いてしまい、煙の中から太郎が現れ、「ここどこ？Wi-Fiある？」と聞きました。</p>
            </div>
            <div class="content" id="p12">
                <p class="text" id="text12">おじいさんたちは笑って言いました。「まぁ、現実でも竜宮城でも、そうそう人は変わらんのじゃな。」</p>
            </div>
            <div class="content" id="p13">
                <p class="text" id="text13">――めでたし、めでたし。</p>
            </div>
        </div>
    `;
    story_area.innerHTML = storyText;
    changeFontColor();
};

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

const changePage = () => {
    const q_area = document.getElementById("item1.5");
    const story_area = document.getElementById("item2");
    q_area.classList.add("vanish");
    setTimeout(() =>{
        q_area.style.display = "none";
        story_area.style.display = "block";
        story_area.classList.add("appear");
    }, 1000);
}

const LeftImgRotate = () => {
    const LeftImg = document.querySelectorAll(".LeftImg");
    LeftImg.forEach((img, index) => {
        img.removeAttribute("id");
        img.id = `LeftImg${index+1}Move`;
        // console.log(index+1);
    });
}

const RightImgRotate = () => {
    const RightImg = document.querySelectorAll(".RightImg");
    RightImg.forEach((img, index) => {
        img.removeAttribute("id");
        img.id = `RightImg${index+1}Move`;
        // console.log(index+1);
    });
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
    LeftImgRotate();
    RightImgRotate();
    setTimeout(() => {
        changePage();
    }, 3000);
    setTimeout(() => {
        wordColor();
    }, 7000);
    
    console.log("push btn");
});




