# guessor-game
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="guessor.css" />
    <title>Document</title>
  </head>
  <body>
    <section class="s1">
      <button class="s1box1">Again!</button>
      <p class="s1box2">Between 1 and 10</p>
    </section>
    <section class="s2">
      <h1 class="s2box1">GUESS MY NUMBER!</h1>
    </section>
    <section class="s3">
      <div class="s3box1"></div>
      <div class="s3box2">?</div>
    </section>
    <section class="s4">
      <section class="s4left">
        <input type="number" class="s4left1" />
        <button class="s4left2">Check!</button>
      </section>
      <section class="s4right">
        <p class="s4right1">🚀 Start guessing...</p>
        <p class="s4right2">💯 Score : <span class="score">0</span></p>
        <p class="s4right3">🥇 Highscore :<span class="highscore">0</span></p>
      </section>
    </section>
    <script src="guessor.js"></script>
  </body>
</html>
