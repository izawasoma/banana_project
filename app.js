const button_a = document.getElementById("button_a")
const input_a = document.getElementById("input_a")
const button_b = document.getElementById("button_b")
const input_b = document.getElementById("input_b")
const button_c = document.getElementById("button_c")
const input_c = document.getElementById("input_c")
const button_d = document.getElementById("button_d")
const input_d = document.getElementById("input_d")
const button_e = document.getElementById("button_e")
const input_e = document.getElementById("input_e")
const button_f = document.getElementById("button_f")
const input_f = document.getElementById("input_f")
const button_g = document.getElementById("button_g")
const input_g = document.getElementById("input_g")
const button_h = document.getElementById("button_h")
const input_h = document.getElementById("input_h")
const button_semi = document.getElementById("button_semi")
const input_semi = document.getElementById("input_semi")
const button_final = document.getElementById("button_final")
const input_final = document.getElementById("input_final")

const answers = {
    "a": "はつがつお",
    "b": "じょうけん",
    "c": "あぶらむし",
    "d": "へんしたい",
    "e": "ゆでたまご",
    "f": "ひとりじめ",
    "g": "すずめばち",
    "h": "ふろあがり",
    "semi": "かぎ",
    "final": "なつのうたげ",
}

const katakanaToHiragana = (str) => {
    return str.replace(/[\u30A1-\u30FA]/g, function(match) {
        return String.fromCharCode(match.charCodeAt(0) - 0x60);
    });
}

const showBlock = (idName) => {
    const block = document.getElementById(idName)
    console.log(block)
    block.style.display = "block"
}

const checkAnswer = (answerKey, answer) => {
    const convertedAnswer = katakanaToHiragana(answer)
    const correctAnswer = answers[answerKey]
    if(correctAnswer != undefined && convertedAnswer == convertedAnswer){
        return true
    }
    return false
}

button_a.addEventListener("click", () => {
    const answer = input_a.value
    const isCorrect = checkAnswer("a", answer)
    if(isCorrect){
        showBlock("block_b")
    }
})

button_b.addEventListener("click", () => {
    const answer = input_b.value
    const isCorrect = checkAnswer("b", answer)
    if(isCorrect){
        showBlock("block_c")
    }
})

button_c.addEventListener("click", () => {
    const answer = input_b.value
    const isCorrect = checkAnswer("c", answer)
    if(isCorrect){
        showBlock("block_d")
    }
})

button_d.addEventListener("click", () => {
    const answer = input_d.value
    const isCorrect = checkAnswer("d", answer)
    if(isCorrect){
        showBlock("block_e")
    }
})

button_e.addEventListener("click", () => {
    const answer = input_e.value
    const isCorrect = checkAnswer("e", answer)
    if(isCorrect){
        showBlock("block_f")
    }
})

button_f.addEventListener("click", () => {
    const answer = input_f.value
    const isCorrect = checkAnswer("f", answer)
    if(isCorrect){
        showBlock("block_g")
    }
})

button_g.addEventListener("click", () => {
    const answer = input_g.value
    const isCorrect = checkAnswer("g", answer)
    if(isCorrect){
        showBlock("block_h")
    }
})

button_h.addEventListener("click", () => {
    const answer = input_h.value
    const isCorrect = checkAnswer("h", answer)
    if(isCorrect){
        showBlock("block_semi")
    }
})

button_semi.addEventListener("click", () => {
    const answer = input_semi.value
    const isCorrect = checkAnswer("semi", answer)
    if(isCorrect){
        showBlock("block_final")
    }
})

button_final.addEventListener("click", () => {
    const answer = input_semi.value
    const isCorrect = checkAnswer("final", answer)
    if(isCorrect){
        showBlock("block_clear")
    }
})