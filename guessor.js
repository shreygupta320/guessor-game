"use strict";
let winNum = Math.trunc(Math.random() * 10) + 1;
let score = 10;
let highscore = 0;
document.querySelector(".s4left2").addEventListener("click", function () {
  const guessNum = Number(document.querySelector(".s4left1").value);
  if (!Number) {
    document.querySelector(".s4right1").innerHTML = "⛔ Not valid";
  } else if (score == 1) {
    document.querySelector(".s4right1").textContent = "❌Game lost🛑";
    document.querySelector("body").style.backgroundColor = "#E50914";
    let all = document.getElementsByTagName("*");

    for (let i = 0; i < all.length; i++) {
      all[i].style.color = "black";
    }
  } else if (score > 0) {
    if (guessNum === winNum) {
      document.querySelector("body").style.backgroundColor = "#4CBB17";
      document.querySelector(".s4right1").textContent = "🎉 Correct Number";
      if (highscore < score) {
        highscore = score;
      }
      document.querySelector(".highscore").textContent = highscore;
    } else if (guessNum > winNum) {
      document.querySelector(".s4right1").textContent = "⬆️ Too high";
      score--;
    } else {
      document.querySelector(".s4right1").textContent = "⬇️ Too low";
      score--;
    }
    document.querySelector(".score").textContent = score;
    highscore = score;
  }
});
document.querySelector(".s1box1").addEventListener("click", function () {
  winNum = Math.trunc(Math.random() * 10) + 1;
  score = 10;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".score").textContent = score;
  let all = document.getElementsByTagName("*");
  for (let i = 0; i < all.length; i++) {
    all[i].style.color = "rgb(200, 191, 191";
  }
  document.querySelector("button").style.color = "black";
  document.querySelector(".s3box2").style.color = "black";
});
