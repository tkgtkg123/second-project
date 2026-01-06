const makeStory = () => {
    const q1 = document.getElementById("q1").value || "桃";
    const q2 = document.getElementById("q2").value || "ぼくドラえもんー！";
    const q3 = document.getElementById("q3").value;
    const q4 = document.getElementById("q4").value || "将来の夢はユーチューバーになって芸能人と結婚して新婚旅行はガンダムに乗って宇宙に行きたい！";
    const q4_word1 = document.getElementById("q4_word1");
    const q4_word2 = document.getElementById("q4_word2");
    const answer = document.getElementsByClassName('bold');
    const q_area = document.getElementById("item1.5");
    const story_area = document.getElementById("item2");
    const storyText = `
       <div class="text-area">
            <div class="content" id="p1"> 
                <p class="text" id="text1"> むかしむかし、あるところに、おじいさんとおばあさんがいました。 </p> 
            </div>
            <div class="content" id="p2"> 
                <p class="text" id="text2"> おじいさんは山へ芝刈りに、おばあさんは川へ洗濯に行きました。 </p> 
            </div>
            <div class="content" id="p3"> 
                <p class="text" id="text3"> すると、大きな<span class="bold q1-answer">${q1}</span>がどんぶらこ、どんぶらこと流れてきました。 </p> 
            </div>
            <div class="content" id="p4"> 
                <p class="text" id="text4"> おばあさんが持ち帰って割ると、中から元気な赤ん坊が！ </p> 
            </div>
            <div class="content" id="p5"> 
                <p class="text" id="text5"> 赤ん坊は生まれてすぐに「<span class="bold q1-answer">${q2}</span>！」と泣きました。<br>
                    「まぁまぁ立派な子だこと！」と喜び、<span class="q3-answer">${q3}</span>から<span class="q1-answer">${q1}</span>太郎と名づけました。
                </p> 
            </div>
            <div class="content" id="p6"> 
                <p class="text" id="text6"> <span class="q1-answer">${q1}</span>太郎はすくすく育ちましたが、ちょっとマイペース。 </p> 
            </div>
            <div class="content" id="p7"> 
                <p class="text" id="text7"> 「鬼退治？うーん、明日でいいかな」と言いながら昼寝ばかり。<br>
                さらには、「そういえば昨日思いついたんだけど、俺、、、 <span class="bold q4-answer">${q4}</span>」と言っていたりもしました。 </p> 
            </div>
            <div class="content" id="p8"> 
                <p class="text" id="text8"> 見かねたおじいさんとおばあさんは、顔を見合わせて言いました。 </p> 
            </div>
            <div class="content" id="p9"> 
                <p class="text" id="text9"> 「世も末じゃな……もう、わしらが行くか。」 </p> 
            </div>
            <div class="content" id="p10"> 
                <p class="text" id="text10"> 翌朝、きびだんごをリュックに詰め、おばあさんは洗濯板を武器に、 </p> 
            </div>
            <div class="content" id="p11"> 
                <p class="text" id="text11"> おじいさんは芝刈り鎌を片手に出発！ </p> 
            </div>
            <div class="content" id="p12"> 
                <p class="text" id="text12"> 途中で犬・猿・キジが現れましたが、みんな<span class="q1-answer">${q1}</span>太郎目当て。 </p> 
            </div>
            <div class="content" id="p13"> 
                <p class="text" id="text13"> 「え、本人いないの！？」と驚くも、 </p> 
            </div>
            <div class="content" id="p14"> 
                <p class="text" id="text14"> おばあさんの手料理のきびだんごの美味しさに心を撃ち抜かれ、あっさり同行。 </p> 
            </div>
            <div class="content" id="p15"> 
                <p class="text" id="text15"> 鬼ヶ島に着くと、鬼たちは酒盛りの真っ最中。 </p> 
            </div>
            <div class="content" id="p16"> 
                <p class="text" id="text16"> おじいさんは鎌で草を刈るようにスパッ、 </p> 
            </div>
            <div class="content" id="p17"> 
                <p class="text" id="text17"> おばあさんは洗濯板でペシーン！と鬼を成敗！ </p> 
            </div>
            <div class="content" id="p18"> 
                <p class="text" id="text18"> 「ひぃー！すみません！」と鬼たちは土下座し、宝を差し出しました。 </p> 
            </div>
            <div class="content" id="p19"> 
                <p class="text" id="text19"> 村に帰ると、桃太郎は昼寝の途中で目をこすりながら一言。 </p> 
            </div>
            <div class="content" id="p20"> 
                <p class="text" id="text20"> 「え、もう終わったの？」 </p> 
            </div>
            <div class="content" id="p21"> 
                <p class="text" id="text21"> おばあさんは笑って答えました。 </p> 
            </div>
            <div class="content" id="p22"> 
                <p class="text" id="text22"> 「そうよ。親の背中って、こういうことなの。」 </p> 
            </div>
            <div class="content" id="p23"> 
                <p class="text" id="text23"> ――めでたし、めでたし。 </p> 
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
    }, 2000);
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