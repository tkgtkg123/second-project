const makeStory = () => {
    const q1 = document.getElementById("q1").value || "犬";
    const q2 = document.getElementById("q2").value || "ライオン";
    const q3 = document.getElementById("q3").value || "今年はボーナス2倍";
    const q4 = document.getElementById("q4").value || "歯磨き粉とシャンプーを間違えてしまったこと";
    const q5 = document.getElementById("q5").value || "やらない善よりやる偽善！";
    const answer = document.getElementsByClassName('bold');
    const q_area = document.getElementById("item1.5");
    const story_area = document.getElementById("item2");

    for (const word of answer) {
        word.textContent = word.textContent
            .replace(/{犬}/g , q1)
            .replace(/{ライオン}/g , q2)
            .replace(/{今年はボーナス2倍}/g , q3)
            .replace(/{歯磨き粉とシャンプーを間違えてしまったこと}/g , q4)
            .replace(/{やらない善よりやる偽善！}/g , q5);
    };

    const storyText = `
        <div class="text-area">
            <div class="content" id="p1"> 
                <p class="text" id="text1"> むかしむかし、<span class="bold q1-answer">${q1}</span>という心優しい<span class="bold q2-answer">${q2}</span>がいました。 </p> 
            </div>
            <div class="content" id="p2"> 
                <p class="text" id="text2"> ある日、海辺で子どもたちが<span class="bold q3-answer">${q3}</span>をいじめているのを見かけました。 </p> 
            </div>
            <div class="content" id="p3"> 
                <p class="text" id="text3"> <span class="bold q1-answer">${q1}</span>はすぐに<span class="bold q3-answer">${q3}</span>を助け、海に帰してあげました。 </p> 
            </div>
            <div class="content" id="p4"> 
                <p class="text" id="text4"> 数日後、<span class="bold q1-answer">${q1}</span>が釣りをしていると、先日助けた<span class="bold q3-answer">${q3}</span>が現れました。 </p> 
            </div>
            <div class="content" id="p5"> 
                <p class="text" id="text5"> <span class="bold q3-answer">${q3}</span>は「お礼に<span class="bold q4-answer">${q4}</span>へお連れします」と言い、<span class="bold q1-answer">${q1}</span>を背中に乗せて<span class="bold q1-answer">${q4}</span>の底へ運びました。 </p> 
            </div>
            <div class="content" id="p6"> 
                <p class="text" id="text6"> <span class="bold q4-answer">${q4}</span>では<span class="bold q5-answer">${q5}</span>が<span class="bold q1-answer">${q1}</span>を歓迎し、美しい宴や舞踏で楽しませました。 </p> 
            </div>
            <div class="content" id="p7"> 
                <p class="text" id="text7"> <span class="bold q1-answer">${q1}</span>は何日も楽しく過ごしましたが、やがて「家族の元に帰りたい」と思うようになります。 </p> 
            </div>
            <div class="content" id="p8"> 
                <p class="text" id="text8"> それを聞いた<span class="bold q5-answer">${q5}</span>は名残惜しそうに箱を<span class="bold q1-answer">${q1}</span>に手渡しました。<br>そして「決して開けてはいけません」と告げます。 </p> 
            </div>
            <div class="content" id="p9"> 
                <p class="text" id="text9"> <span class="bold q1-answer">${q1}</span>が<span class="bold q4-answer">${q4}</span>を後にして浜辺に戻ると、なんと数百年が過ぎていました。 </p> 
            </div>
            <div class="content" id="p10"> 
                <p class="text" id="text10"> 驚きながらも<span class="bold q1-answer">${q1}</span>は<span class="bold q5-answer">${q5}</span>からもらった玉手箱をそっと開けました。 </p> 
            </div>
            <div class="content" id="p11"> 
                <p class="text" id="text11"> すると、一瞬で<span class="bold q1-answer">${q1}</span>は老人になり、過ぎ去った時の儚さを感じるのでした。 </p> 
            </div>
            <div class="content" id="p12"> 
                <p>　</p>
                <p class="text" id="text12">おしまい</p> 
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

const makeStory = () => {
    const q1 = document.getElementById("q1").value || "家族";
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
            <p class="text" id="text1">
                むかしむかし、川で洗濯していたおばあさんの前に大きな桃が流れてきました。
            </p>
        </div>
        <div class="content" id="p2">
            <p class="text" id="text2">
                桃を割ると、中から赤ん坊が現れました。<br>
                おじいさんとおばあさんは桃から生まれた赤ん坊に桃太郎と名付けました。
            </p>
        </div>
        <div class="content" id="p3">
            <p class="text" id="text3">
                おじいさんとおばあさんの家の教えは「大切なものは<span class="bold q1-answer">${q1}{家族}</span>」。
            </p>
        </div>
        <div class="content" id="p4">
            <p class="text" id="text4">
                その教えを胸に、桃太郎は鬼ヶ島へ向かいます。
            </p>
        </div>
        <div class="content" id="p5">
            <p class="text" id="text5">
                道中、仲間にしたのは<span class="bold q1-answer">${q2}{ライオン}</span>の群れ。
            </p>
        </div>
        <div class="content" id="p6">
            <p class="text" id="text6">
                鬼が島を目の前にして怯える<span class="bold q1-answer">${q2}{ライオン}</span>の群れに、桃太郎は「<span class="bold q1-answer">${q3}{今年はボーナス2倍}</span>」と声をかけ、皆で力を合わせて鬼が島へ向かいました。
            </p>
        </div>
        <div class="content" id="p7">
            <p class="text" id="text7">
                鬼ヶ島では鬼たちが悪事を働いていましたが、桃太郎は静かに説得。
            </p>
        </div>
        <div class="content" id="p8">
            <p class="text" id="text8">
                鬼は過去に犯した過ちである<span class="bold q1-answer">${q4}{歯磨き粉とシャンプーを間違えてしまったこと}</span>を思い出し、深く反省しました。
            </p>
        </div>
        <div class="content" id="p9">
            <p class="text" id="text9">
                反省した鬼は宝物を返し、感謝の気持ちを込めて桃太郎にこの言葉を送りました。「<span class="bold q1-answer">${q5}{やらない善よりやる偽善！}</span>」と。
            </p>
        </div>
        <div class="content" id="p10">
            <p class="text" id="text10">
                村人も鬼も、涙と笑顔の中で仲直りをして平和に暮らしました。
            </p>
        </div>

        <div class="content" id="p11"> 
            <p class="text" id="text11">　</p> 
            <p class="text" id="text12">めでたしめでたし</p> 
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


const wordColor = () => {
    const bolds = document.querySelectorAll(".bold");
    bolds.forEach(bold => {
        bold.addEventListener("click",() => {
            changeFontColor();
        } );
    });
};


