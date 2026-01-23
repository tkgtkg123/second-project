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
    const q1 = document.getElementById("q1").value || "家";
    const q2 = document.getElementById("q2").value || "温泉に行って露天風呂に入った";
    const q3 = document.getElementById("q3").value || "2度あることは3度ある";
    const q4 = document.getElementById("q4").value || "冬";
    const q5 = document.getElementById("q5").value || "大切な思い出";
    const story_area = document.getElementById("item2");
    const storyText = `

        <div class="text-area">
            <div class="content" id="p1">
                <p class="text" id="text1">むかしむかし、竹取のおじいさんとおばあさんがいました。</p>
            </div>
            <div class="content" id="p2">
                <p class="text" id="text2">ある日、おじいさんが竹を切ると、中から光り輝く竹がありました。</p>
            </div>
            <div class="content" id="p3">
                <p class="text" id="text3">竹の中には、小さな女の子が座っていました。おじいさんは驚きながらも家に連れて帰りました。</p>
            </div>
            <div class="content" id="p4">
                <p class="text" id="text4">おばあさんはその子を大切に育て、ふたりはまるで孫ができたように幸せに暮らしました。</p>
            </div>
            <div class="content" id="p5">
                <p class="text" id="text5">おじいさんは、姫が笑うたびに「<span class="bold q1-answer">${q1}</span>のように心が安らぐ」と感じていました。</p>
            </div>
            <div class="content" id="p6">
                <p class="text" id="text6">やがて少女は美しく成長し、世にも名高い「かぐや姫」と呼ばれるようになりました。</p>
            </div>
            <div class="content" id="p7">
                <p class="text" id="text7">多くの貴族が求婚に訪れましたが、かぐや姫はどの願いにも首を縦に振りませんでした。</p>
            </div>
            <div class="content" id="p8">
                <p class="text" id="text8">「私は、<span class="bold q3-answer">${q3}</span>という言葉を胸に生きているのです。」そう語る姫の瞳は、どこか遠い月を見つめていました。</p>
            </div>
            <div class="content" id="p9">
                <p class="text" id="text9">ある晩、かぐや姫は月を見上げて静かに涙を流しました。「最近、<span class="bold q2-answer">${q2}</span>ことがあって…心が揺れてしまうのです。」</p>
            </div>
            <div class="content" id="p10">
                <p class="text" id="text10">おじいさんとおばあさんはそっと寄り添い、「わしらがそばにおるぞ」と優しく声をかけました。</p>
            </div>
            <div class="content" id="p11">
                <p class="text" id="text11">やがて、月からの使者が迎えに来る夜が訪れました。その夜は、<span class="bold q4-answer">${q4}</span>のような穏やかな光が世界を包んでいました。</p>
            </div>
            <div class="content" id="p12">
                <p class="text" id="text12">かぐや姫は最後に手紙を残しました。「ありがとう。私にとって二人は、まるで<span class="bold q5-answer">${q5}</span>のようでした。どうか、忘れないでください。」</p>
            </div>
            <div class="content" id="p13">
                <p class="text" id="text13">光の中に包まれながら、姫は静かに月へと昇っていきました。</p>
            </div>
            <div class="content" id="p14">
                <p class="text" id="text14">おじいさんとおばあさんは涙をぬぐい、夜空を見上げながらそっとつぶやきました。「あの子の幸せを、ずっと祈っておるよ。」</p>
            </div>
            <div class="content" id="p15">
                <p class="text" id="text15">――月の光が竹林を照らし、風は優しく揺れていました。</p>
            </div>
            <div class="content" id="p16">
                <p class="text" id="text16">――めでたし、めでたし。</p>
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
    const leftImgs = document.querySelectorAll(".LeftImg");
    const RightImgs = document.querySelectorAll(".RightImg");
    const imgs = document.querySelectorAll(".img");
    imgs.forEach(img => {
        img.classList.add("rotate2");
    });
    leftImgs.forEach(l_img => {
        l_img.classList.add("slideRight");
    });
    RightImgs.forEach(r_img => {
        r_img.classList.add("slideLeft");
    })
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

