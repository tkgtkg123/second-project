function makeStory() {
    const q1 = document.getElementById("q1").value || "いじめられていた亀";
    const q2 = document.getElementById("q2").value || "青い";
    const q3 = document.getElementById("q3").value || "海鮮料理";
    const q4 = document.getElementById("q4").value || "白い煙";
    const q5 = document.getElementById("q5").value || "あなたは優しいままでいて";

    const storyHTML = `
    <div class="content" id="p1"><p class="text" id="text1">むかしむかし、浦島太郎という心優しい漁師がいました。</p></div>
    <div class="content" id="p2"><p class="text" id="text2">ある日、彼は「${q1}」を助けたのです。</p></div>
    <div class="content" id="p3"><p class="text" id="text3">その優しさを見ていた亀が現れ、海の底の竜宮城へ案内しました。</p></div>
    <div class="content" id="p4"><p class="text" id="text4">そこは「${q2}」に輝く、美しい世界でした。</p></div>
    <div class="content" id="p5"><p class="text" id="text5">乙姫は太郎に「${q3}」をごちそうし、心から笑いました。</p></div>
    <div class="content" id="p6"><p class="text" id="text6">けれど太郎は、地上を思い出し帰ることにしました。</p></div>
    <div class="content" id="p7"><p class="text" id="text7">浜辺に戻り、玉手箱を開けると「${q4}」が溢れ出しました。</p></div>
    <div class="content" id="p8"><p class="text" id="text8">その瞬間、太郎は時の流れとともに涙をこぼしました。</p></div>
    <div class="content" id="p9"><p class="text" id="text9">遠くから、乙姫の声が静かに届きました。</p></div>
    <div class="content" id="p10"><p class="text" id="text10">「${q5}」</p></div>
    <div class="content" id="p11"><p class="text" id="text11">太郎は微笑み、海を見つめながら小さくつぶやきました。</p></div>
    <div class="content" id="p12"><p class="text" id="text12">「この旅は、心の深海を覗く旅だったのかもしれない」</p></div>
    `;

    document.getElementById("story").innerHTML = storyHTML;
    document.getElementById("story").style.display = "block";
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}