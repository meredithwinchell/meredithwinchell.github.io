var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
                { "type": "asteroid", "x": 100, "y": 200}
            ]
            
            
            
            
            
           
            
        };
        
        
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
            
      
            
            function createSawBlade(x, y) {
                var hitZoneSize = 25;
                var damageFromObstacle = 10;
                var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            
                 sawBladeHitZone.x = x;
                sawBladeHitZone.y = y;
                game.addGameItem(sawBladeHitZone);
         
                var obstacleImage = draw.bitmap('img/sawblade.png');
                sawBladeHitZone.addChild(obstacleImage);
            
                obstacleImage.x = -25;
                obstacleImage.y = -25;
                
                
            }
            
            // createSawBlade(200, 400)
            
            for (var i = 0; i < levelData.gameItems.length; i++){
                var eachElement = levelData.gameItems[i];
                
                createSawBlade(eachElement.x, eachElement.y);
                
            }
            
            function createMyObstacle(x,y) {
               var hitZoneSize = 50;
               var damageFromObstacle = 10;
               var MyObstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            
                MyObstacleHitZone.x = x;
                MyObstacleHitZone.y = y;
                game.addGameItem(MyObstacleHitZone);
         
                var obstacleImage = draw.bitmap('img/asteroid.png');
                MyObstacleHitZone.addChild(obstacleImage);
            
                obstacleImage.x = -80;
                obstacleImage.y = -80;
                
                
                
            }
            
            createMyObstacle(400,350);
            createMyObstacle(700,350);
            createMyObstacle(1000,350);
            createMyObstacle(1300,350);
            
            
         
             
            function createAlien(x, y){
              var enemy =  game.createObstacle(50, 100);
                var redSquare = draw.bitmap('img/alien.png');
                redSquare.scaleX = 0.2;
                redSquare.scaleY = 0.2;
                redSquare.x = -25;
                redSquare.y = -60;
                enemy.addChild(redSquare);
                enemy.x = x;
                enemy.y = y;
                enemy.velocityX = -3;
                enemy.onProjectileCollision = function(){
                
                    game.increaseScore(100);
                    enemy.fadeOut();
                }
                enemy.onPlayerCollision = function(){
                    
                    game.changeIntegrity(-10);
                }
                game.addGameItem(enemy);
                
                }
                createAlien(600,groundY);
                createAlien(1000,groundY);
                createAlien(1600,groundY);
                
                ///
                
                function createReward(x, y){
                var hitZoneSize = 25;
                var damageFromObstacle = -10;
                var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
                            sawBladeHitZone.x = x;
                            sawBladeHitZone.y = y;
                            game.addGameItem(sawBladeHitZone);
                            var either = Math.floor(Math.random() * 2);
                        
                            var obstacleImage = draw.bitmap('img/diamond.png');
                            if (either >= 1){
                                obstacleImage.scaleX = 0.06;
                                obstacleImage.scaleY = 0.06;
                            }
                            else{
                            obstacleImage.scaleY = 0.4;
                            obstacleImage.scaleX = 0.4;
                            }
                          sawBladeHitZone.addChild(obstacleImage);
                        obstacleImage.x = -25;
                        obstacleImage.y = -75;
                        sawBladeHitZone.onPlayerCollision = function(){
                            game.increaseScore(1000);
                        }
                };
                createReward(300,groundY);
                createReward(600,groundY);
                createReward(1000,groundY);
                createReward(1700, groundY);
                
           
                    

            
        
        
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
