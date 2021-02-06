var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// blocks
var Computerblock = createSprite(150,200,20,20);
Computerblock.shapeColor = 'yellow';

var Playerblock = createSprite(250,200,20,20);
Playerblock.shapeColor = 'white';

//gamestate
var Gamestate = 'serve';

//count
var Score = 0;
var Time = 100;

function draw() 
{
  
 //Wall1 
 for (var a = 50; a < 350; a = a + 25) 
 {
  var Wall1 = createSprite(50,a,20,20);
  if (Gamestate == 'serve' || Gamestate == 'win' || Gamestate == 'lose') 
  {
   Wall1.shapeColor = 'black'; 
  }
  if (Gamestate == 'play') 
  {
   Wall1.shapeColor = 'red'; 
  }
 }
 
 //Wall2
 for (var b = 50; b < 375; b = b + 25) 
 {
  var Wall2 = createSprite(b,50,20,20);
     if (Gamestate == 'serve' || Gamestate == 'win' || Gamestate == 'lose') 
     {
   Wall2.shapeColor = 'black'; 
     }
     if (Gamestate == 'play') 
  {
   Wall2.shapeColor = 'red'; 
  }
 }
 
 //Wall3
 for (var c = 50; c < 350; c = c + 25) 
 {
  var Wall3 = createSprite(350,c,20,20);
    if (Gamestate == 'serve' || Gamestate == 'win' || Gamestate == 'lose') 
  {
    Wall3.shapeColor = 'black'; 
  }
  if (Gamestate == 'play') 
  {
    Wall3.shapeColor = 'red';
  }
 }
 
  //Wall4
 for (var d = 50; d < 375; d = d + 25) 
 {
   var Wall4 = createSprite(d,350,20,20);
     if (Gamestate == 'serve' || Gamestate == 'win' || Gamestate == 'lose') 
  {
   Wall4.shapeColor = 'black'; 
  }
  
  if (Gamestate == 'play') 
   {
   Wall4.shapeColor = 'red'; 
  }
 }
 
 //Wall5
 for (var e = 75; e < 350; e = e + 25) 
 {
  var Wall5 = createSprite(75,e,20,20);
    if (Gamestate == 'serve' || Gamestate == 'win' || Gamestate == 'lose') 
    {
   Wall5.shapeColor = 'black'; 
    }
  
  if (Gamestate == 'play') 
  {
   Wall5.shapeColor = 'green'; 
  }
 }
 
 //Wall6
 for (var f = 75; f < 350; f = f + 25) 
 {
  var Wall6 = createSprite(f,75,20,20);
   if (Gamestate == 'serve' || Gamestate == 'win' || Gamestate == 'lose') 
    {
   Wall6.shapeColor = 'black'; 
    }
  
   if (Gamestate == 'play') 
    {
   Wall6.shapeColor = 'green'; 
    }
 }
 
 //Wall7
 for (var g = 75; g < 350; g = g + 25) 
 {
  var Wall7 = createSprite(325,g,20,20);
   if (Gamestate == 'serve' || Gamestate == 'win' || Gamestate == 'lose') 
    {
   Wall7.shapeColor = 'black'; 
    }
   if (Gamestate == 'play') 
   {
   Wall7.shapeColor = 'green'; 
   }
 }
 
 //Wall8
 for (var h = 75; h < 350; h = h + 25) 
 {
  var Wall8 = createSprite(h,325,20,20);
   if (Gamestate == 'serve' || Gamestate == 'win' || Gamestate == 'lose') 
    {
   Wall8.shapeColor = 'black'; 
    }
   if (Gamestate == 'play')
    {
   Wall8.shapeColor = 'green'; 
    }
 }
 
 //Wall9
 for (var i = 100; i < 325; i = i + 25) 
 {
  var Wall9 = createSprite(300,i,20,20);
    if (Gamestate == 'serve' || Gamestate == 'win' || Gamestate == 'lose') 
    {
   Wall9.shapeColor = 'black'; 
    }
  if (Gamestate == 'play') 
    {
   Wall9.shapeColor = 'blue'; 
    }
 }
 
 //Wall10
  for (var j = 100; j < 325; j = j + 25) 
  {
  var Wall10 = createSprite(j,300,20,20);
   if (Gamestate == 'serve' || Gamestate == 'win' || Gamestate == 'lose')
    {
   Wall10.shapeColor = 'black'; 
    }
   if (Gamestate == 'play') 
    {
   Wall10.shapeColor = 'blue';
    } 
  }
 //Wall11
  for (var k = 100; k < 325; k = k + 25) 
  {
  var Wall11 = createSprite(100,k,20,20);
   if (Gamestate == 'serve' || Gamestate == 'win' || Gamestate == 'lose') 
   {
   Wall11.shapeColor = 'black'; 
   }
  if (Gamestate == 'play')
   {
   Wall11.shapeColor = 'blue'; 
   }
 }
 
 //Wall12
   for (var l = 100; l < 325; l = l + 25) 
   {
  var Wall12 = createSprite(l,100,20,20);
      if (Gamestate == 'serve' || Gamestate == 'win' || Gamestate == 'lose') 
  {
   Wall12.shapeColor = 'black'; 
  }
  
  if (Gamestate == 'play') {
   Wall12.shapeColor = 'blue'; 
  }
   }
 
 background("black");
 
 drawSprites();
 
 //if statements
 if (Gamestate == 'serve') 
 {
   textSize(20);
   textFont("Bookman Old Style");
   
   fill("yellow");
   text("World's Hardest Game",100,50);
   
   fill("green");
   text("Can you catch the yellowblock",60,150);
   
   fill("blue");
   text("500 times in 100 seconds",90,250);
   
   fill("red");
   text("Press space to begin",100,350);
 } 

if (keyDown("space")&&Gamestate == 'serve') 
{
  Gamestate = 'play';
}

if (Gamestate == 'play') 
{
  Playerblock.x = World.mouseX;
  Playerblock.y = World.mouseY;
  textSize(16);
  fill("white");
  text("Score = "+Score,100,30);
  text((Math.round(Time)),300,30);
  Time = Time - 0.1;
  text("Time left = ",220,30);
}

if (Playerblock.isTouching(Computerblock)) {
  Score = Score + 1;
  Computerblock.x = randomNumber(120, 280);
  Computerblock.y = randomNumber(120, 280);
}

//result
if (Time == 0&& Gamestate == 'play') 
{
  text("Time up",140,180);
}

if (Score == 500 && Time >= 0 && Gamestate == 'play') 
{
 Gamestate = 'win';
}

if (Score < 500&& Time == 0 && Gamestate == 'play') 
{
  Gamestate = 'lose';
}

if (Gamestate == 'win') {
  fill('red');
  textSize(32);
  textFont("Copperplate Gothic Bold");
  text("Hurrah,you played",60,160);
  text("really like a pro",140,160);
  text("Press 'r' to restart",180,160);
}

if (Gamestate == 'lose') {
  fill('yellow');
  textSize(32);
  textFont("Felix Titling");
  text("Better luck next time",60,160);
  text("Press 'r' to restart",60,240);
}

if (keyDown('r')&& (Gamestate == 'win')||(Gamestate == 'lo')) {
  
}

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
