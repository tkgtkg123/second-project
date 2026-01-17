const makeStory = () => {
    const q1 = document.getElementById("q1").value || "友達";
    const q2 = document.getElementById("q2").value || "青";
    const q3 = document.getElementById("q3").value || "亀";
    const q4 = document.getElementById("q4").value || "ケーキ";
    const q5 = document.getElementById("q5").value || "立って歩け。前へ進め。あんたには立派な足がついてるじゃないか";
    const q6 = document.getElementById("q6").value || "明日やろうは馬鹿野郎";
    const answer = document.getElementsByClassName('bold');
    const q_area = document.getElementById("item1.5");
    const story_area = document.getElementById("item2");

    for (const word of answer) {
        word.textContent = word.textContent
            .replace(/{友達}/g , q1)
            .replace(/{青}/g , q2)
            .replace(/{亀}/g , q3)
            .replace(/{ケーキ}/g , q4)
            .replace(/{立って歩け。前へ進め。あんたには立派な足がついてるじゃないか}/g , q5)
            .replace(/{明日やろうは馬鹿野郎}/g , q4);
    };

    const storyText = `
        <div class="text-area">
            <div class="content" id="p1">
                <p class="text" id="text1"> むかしむかし、浦島太郎という優しい漁師がいました。 </p>
            </div> 
            <div class="content" id="p2">
                <p class="text" id="text2"> ある日、彼は<span class="bold q1-answer">${q1}</span>を守ろうとして、浜辺で足を止めました。 </p>
            </div> 
            <div class="content" id="p3">
                <p class="text" id="text3"> その優しさを見ていた亀が、海の底へ誘いました。 </p>
            </div> 
            <div class="content" id="p4">
                <p class="text" id="text4"> たどり着いた竜宮城の海は、<span class="bold q2-answer">${q2}</span>色に輝いていました。 </p>
            </div> 
            <div class="content" id="p5">
                <p class="text" id="text5"> 乙姫は太郎に<span class="bold q3-answer">${q3}</span>をふるまい、心からの笑顔を見せました。 </p>
            </div> 
            <div class="content" id="p6">
                <p class="text" id="text6"> けれど太郎は、ふと地上を思い出し、玉手箱を手に戻ることにしました。 </p>
            </div> 
            <div class="content" id="p7">
                <p class="text" id="text7"> 浜辺に戻り、そっと箱を開けると――そこには<span class="bold q4-answer">${q4}</span>が入っていました。 </p>
            </div> 
            <div class="content" id="p8">
                <p class="text" id="text8"> その瞬間、太郎の心は軽くなり、静かに笑いました。 </p>
            </div> 
            <div class="content" id="p9">
                <p class="text" id="text9"> すると、遠くから乙姫の声が届きました。 </p>
            </div> 
            <div class="content" id="p10">
                <p class="text" id="text10"> 「<span class="bold q5-answer">${q5}</span>」 </p>
            </div> 
            <div class="content" id="p11">
                <p class="text" id="text11"> 太郎は頷き、海を見つめながら小さくつぶやきました。 </p>
            </div> 
            <div class="content" id="p12">
                <p class="text" id="text12"> 「そうか――<span class="bold q6-answer">${q6}</span>、てことか」 </p
                ></div>
            <div class="content" id="p13"> 
                <p>　</p>
                <p class="text" id="text13">おしまい</p> 
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




