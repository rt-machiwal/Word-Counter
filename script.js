function clearText() {
    document.getElementById("userText").value = "";
    updateStats();
}

function copyText() {
    const userText = document.getElementById("userText");
    userText.select();
    document.execCommand("copy");
    alert("your data is copied");
}

function changeCase(type) {
    const userText = document.getElementById("userText");
    if (type === "uppercase") {
        userText.value = userText.value.toUpperCase();
    } else if (type === "lowercase") {
        userText.value = userText.value.toLowerCase();
    }
    updateStats();
}

function updateStats() {
    const userText = document.getElementById("userText").value;
    const noOfWord = document.getElementById("noOfWord");
    const noOfChar = document.getElementById("noOfChar");
    const noOfPara = document.getElementById("noOfPara");
    const noOfSen = document.getElementById("noOfSen");
    const readingTime = document.getElementById("readingTime");
    const whiteSpaces = document.getElementById("whiteSpaces");

    // Word count
    const words = userText.split(/\s+/).filter(word => word !== '');
    noOfWord.textContent = words.length;

    // Character count
    noOfChar.textContent = userText.length;

    // Paragraph count
    const paragraphs = userText.split(/\n\n+/).filter(para => para !== '');
    noOfPara.textContent = paragraphs.length;

    // Sentence count
    const sentences = userText.split(/[.!?]+/).filter(sentence => sentence.trim() !== '');
    noOfSen.textContent = sentences.length;

    // Reading time
    const wordsPerMinute = 200; // Average reading speed
    const timeInMinutes = words.length / wordsPerMinute;
    readingTime.textContent = timeInMinutes.toFixed(2);

    // White spaces count
    const whiteSpaceCount = userText.split(" ").length - 1;
    whiteSpaces.textContent = whiteSpaceCount;
}

document.addEventListener('DOMContentLoaded', function () {
    const userText = document.getElementById("userText");
    userText.addEventListener("input", updateStats);
});