const makeStory = () => {
    const q1 = document.getElementById("q1").value || "浦島太郎";
    const q2 = document.getElementById("q2").value || "漁師";
    const q3 = document.getElementById("q3").value || "亀";
    const q4 = document.getElementById("q4").value || "竜宮城";
    const q5 = document.getElementById("q5").value || "乙姫";
    const answer = document.getElementsByClassName('bold');
    const q_area = document.getElementById("item1.5");
    const story_area = document.getElementById("item2");

    for (const word of answer) {
        word.textContent = word.textContent
            .replace(/{浦島太郎}/g , q1)
            .replace(/{漁師}/g , q2)
            .replace(/{亀}/g , q3)
            .replace(/{竜宮城}/g , q4)
            .replace(/{乙姫}/g , q5);
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




