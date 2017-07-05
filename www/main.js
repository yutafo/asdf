var game = null;
var char1 = null;

enchant();

window.onload = function() {
    var game = new Game(window.innerWidth, window.innerHeight);
    game.preload('img/chara1.png');
    game.fps = 10;
    
    game.onload = function() {
        var char1 = new Sprite(32, 32);
        char1.image = game.assets['img/chara1.png'];
        char1.frame = [0, 1, 0, 2];
        char1.x = 50;
        char1.y = 50;
        
        char1.addEventListener(enchant.Event.ENTER_FRAME, function() {
            char1.moveBy(1, 0);
            if (char1.x > game.width) {
                char1.x = -32;
            }
        });
        game.rootScene.backgroundColor = '#eeeeff';
        game.rootScene.addChild(char1);
        
        char1.tl.moveBy(50, 50, 50);
        char1.tl.moveBy(50, -50, 50);
        char1.tl.removeFromScene();
    };
    
    game.rootScene.addEventListener(enchant.Event.TOUCH_START,
        function(event) {
            char1.tl.clear();
            char1.tl.moveTo(event.x - 16, event.y - 16, 50);
        });
    
    game.start();
};