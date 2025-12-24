const makeStory = () => {
    const q1 = document.getElementById("q1").value || "カレー";
    const q2 = document.getElementById("q2").value || "赤";
    const q3 = document.getElementById("q3").value || "キング";
    const q4 = document.getElementById("q4").value || "スカイダイビング";
    const q5 = document.getElementById("q5").value || "ハーブティー";
    const q6 = document.getElementById("q6").value || "野球";
    const q7 = document.getElementById("q7").value || "コーラ";
    const q8 = document.getElementById("q8").value || "飲み行こう";
    const q9 = document.getElementById("q9").value || "野球しようぜ！";
    const q10 = document.getElementById("q10").value || "ミッキー";
    const answer = document.getElementsByClassName('bold');
    const q_area = document.getElementById("item1.5");
    const story_area = document.getElementById("item2");
    const storyText = `
        <div class="text-area">
            <div class="content" id="p1"> 
                <p class="text" id="text1">
                    むかしむかし、川で洗濯をしていたおばあさんの前に大きな桃が流れてきました。
                </p> 
            </div>
            <div class="content" id="p2"> 
                <p class="text" id="text2">
                    桃を割ると、中から髪が<span class="bold q2-answer">${q2}</span>の美しい赤ん坊が現れました。
                </p> 
            </div>
            <div class="content" id="p3"> 
                <p class="text" id="text3">
                    驚いたおじいさんとおばあさんは、落ち着こうと<span class="bold q5-answer">${q5}</span>を口にしながら、「これはきっと運命の子だね」と微笑みました。<br>
                    おじいさんとおばあさんは桃から生まれた赤ん坊に桃太郎と名付けました。
                </p> 
            </div>
            <div class="content" id="p4"> 
                <p class="text" id="text4">
                    おじいさんとおばあさんは桃太郎に元気な子に育って欲しいという思いから、毎日<span class="bold q6-answer">${q6}</span>をして大切に育てました。
                </p> 
            </div>
            <div class="content" id="p5"> 
                <p class="text" id="text5">
                    ある日、桃太郎がいつものように<span class="bold q6-answer">${q6}</span>から帰ると、おじいさん、おばあさんが困った顔をしていました。
                </p> 
            </div>
            <div class="content" id="p6"> 
                <p class="text" id="text6">
                    話を聞くと、おじいさんが「鬼ヶ島に住む鬼たちが村に来て<span class="bold q4-answer">${q4}</span>をして困っている」と答えました。
                </p> 
            </div>
            <div class="content" id="p7"> 
                <p class="text" id="text7">
                    桃太郎は「それでは私が行って退治しましょう。おばあさん、<span class="bold q1-answer">${q1}</span>を作ってください」と言いました。
                </p> 
            </div>
            <div class="content" id="p8"> 
                <p class="text" id="text8">
                    次の日、おばあさんから<span class="bold q1-answer">${q1}</span>を受け取り、おじいさんからは<span class="bold q7-answer">${q7}</span>を貰って桃太郎は鬼退治に旅立ちました。
                </p> 
            </div>
            <div class="content" id="p9"> 
                <p class="text" id="text9">
                    道中で出会った動物たちは、桃太郎の穏やかな声に惹かれ仲間になります。
                </p> 
            </div>
            <div class="content" id="p10"> 
                <p class="text" id="text10">
                    彼らは親しみを込めて、桃太郎を<span class="bold q3-answer">${q3}</span>と呼びました。
                </p> 
            </div>
            <div class="content" id="p11"> 
                <p class="text" id="text11">
                    鬼ヶ島への道は過酷な環境でしたが、「<span class="bold q8-answer">${q8}</span>！」と桃太郎が声をかけると、皆の心が一つになり、足取りも軽くなりました。
                </p> 
            </div>
            <div class="content" id="p12"> 
                <p class="text" id="text12">
                    鬼ヶ島に着くと、鬼たちは宴を開いていました。
                </p> 
            </div>
            <div class="content" id="p13"> 
                <p class="text" id="text13">
                    鬼たちの話をきくと、「<span class="bold q4-answer">${q4}</span>をするのは毎日が退屈だから。今日もただ寂しさを紛らわせるために宴をしている」と答えました。
                </p> 
            </div>
            <div class="content" id="p14"> 
                <p class="text" id="text14">
                    桃太郎は鬼たちに<span class="bold q6-answer">${q6}</span>を教えることにしました。
                </p> 
            </div>
            <div class="content" id="p15"> 
                <p class="text" id="text15">
                    鬼たちに教えていると、その中のひとり、瞳が澄んだ若い鬼は、まるで<span class="bold q11-answer">${q10}</span>のような姿をしていました。
                </p> 
            </div>
            <div class="content" id="p16"> 
                <p class="text" id="text16">
                    鬼は涙をこぼしながら言いました。「戦ったり<span class="bold q4-answer">${q4}</span>をするのはもうやめたい…あなたの声を聞いて、心が楽になったんです。」
                </p> 
            </div>
            <div class="content" id="p17"> 
                <p class="text" id="text17">
                    桃太郎がその鬼の名前を聞くと、「<span class="bold q11-answer">${q10}</span>」と答えました。
                </p> 
            </div>
            <div class="content" id="p18"> 
                <p class="text" id="text18">
                    桃太郎は<span class="bold q4-answer">${q4}</span>の手を取り、「<span class="bold q8-answer">${q8}</span>」と静かに告げました。
                </p> 
            </div>
            <div class="content" id="p19"> 
                <p class="text" id="text19">
                    数日後、鬼も村人も仲良くなって一緒に花びらをまきながら、平和の宴を開きました。
                </p> 
            </div>
            <div class="content" id="p20"> 
                <p class="text" id="text20">
                    夜風の中、宴を抜け出した桃太郎と<span class="bold q11-answer">${q10}</span>は、遠く月を見上げながらそっと微笑みました。
                </p> 
            </div>
            <div class="content" id="p21"> 
                <p class="text" id="text21">
                    そして桃太郎は手を取りながら優しく囁きます。「もう、みんなで笑っていられるね。——」
                </p> 
            </div>
            <div class="content" id="p22"> 
                <p class="text" id="text22">
                    秋の夜風が鈴虫の音を運んでいきます——二人を祝福するように——。
                </p> 
            </div>
            <div class="content" id="p23"> 
                <p class="text" id="text23">
                    めでたしめでたし。
                </p> 
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