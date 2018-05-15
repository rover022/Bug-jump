var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var R = /** @class */ (function () {
    function R() {
    }
    R.URL = "resource/";
    R.P_PAIHAI = "my_awesome_leaderboard.";
    R.PREVIDEO_AD = "433380667096621_433969653704389";
    R.PRELOAD_AD = "433380667096621_433969653704389";
    R.dian_start = "Tap To Start!";
    R.game_name = "兔子钻洞";
    return R;
}());
var Boot = /** @class */ (function (_super) {
    __extends(Boot, _super);
    function Boot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Boot.prototype.preload = function () {
        var game = this.game;
        if (!game.device.desktop) { //判断是否是pc
            game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            //game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;
        }
    };
    Boot.prototype.create = function () {
        this.game.state.start('load', true);
        //game.stage.disableVisibilityChange = true 关闭失去焦点 游戏暂停的功能
    };
    return Boot;
}(Phaser.State));
var Preload = /** @class */ (function (_super) {
    __extends(Preload, _super);
    function Preload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Preload.prototype.preload = function () {
        var game = this.game;
        //this.stage.backgroundColor = "#ff0000";
        game.load.image('background', R.URL + 'assets/bg_apple.png');
        game.load.image('bg', R.URL + 'assets/bg_lianxu.png');
        game.load.image('start', R.URL + 'assets/start.png');
        game.load.image('apple_ground', R.URL + 'assets/apple_ground.png');
        game.load.image('applewater_qian', R.URL + 'assets/applewater_qian.png');
        game.load.image('applewater_hou', R.URL + 'assets/applewater_hou.png');
        game.load.image('water1', R.URL + 'assets/water1.png');
        game.load.image('water2', R.URL + 'assets/water2.png');
        game.load.image('orange', R.URL + 'assets/orange.png');
        game.load.image('restart', R.URL + 'assets/restart.png');
        game.load.image('player', R.URL + 'assets/player1.png');
        game.load.image('lemon', R.URL + 'assets/lemon.png');
        game.load.image('orange', R.URL + 'assets/orange.png');
        game.load.image('restart', R.URL + 'assets/restart.png');
    };
    Preload.prototype.create = function () {
        this.game.state.start('start', true);
    };
    return Preload;
}(Phaser.State));
var Start = /** @class */ (function (_super) {
    __extends(Start, _super);
    function Start() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Start.prototype.create = function () {
        //		game.state.start('play', true)
        //		return false
        var game = this.game;
        var background = game.add.sprite(0, 0, 'background'); //背景
        background.scale.set(this.game.width / 512, this.game.height / 1024);
        background.alpha = 1;
        var bg = game.add.sprite(0, this.game.height, 'bg');
        bg.tint = 15000000; //Math.random()*0XFFFFFF
        //console.log(bg.tint) //13743738.656000825 15000000
        bg.scale.set(2, 2);
        //bg.blendMode = 0
        bg.alpha = 1;
        this.bg2 = game.add.tileSprite(0, 0, this.game.width, this.game.height, bg.generateTexture());
        this.player = game.add.sprite(game.width / 2, this.game.height - 236, 'player');
        // game.physics.arcade.enable(this.player, Phaser.Physics.ARCADE);
        game.physics.arcade.enable(this.player);
        this.player.anchor.set(0.5, 0.5);
        this.player.scale.set(0.5, 0.5);
        this.player.body.collideWorldBounds = true;
        this.player.body.immovable = true;
        this.fruitGroup = game.add.group();
        this.fruitGroup.enableBody = true;
        //var size = game.cache.getImage('lemon').width
        this.lemon = this.fruitGroup.create(game.width / 2, 200, 'lemon');
        this.lemon.anchor.set(0.5, 0.5);
        this.lemon.scale.set(0.5, 0.5);
        this.lemon.ff = true;
        var applewater_hou = game.add.tileSprite(0, this.game.height - 140, 1024, 128, 'applewater_hou');
        var applewater_qian = game.add.tileSprite(0, this.game.height - 128, 1024, 128, 'applewater_qian');
        applewater_qian.autoScroll(-80, 0);
        applewater_hou.autoScroll(80, 0);
        applewater_qian.scale.set(2, 2);
        applewater_hou.scale.set(2, 2);
        var water1 = game.add.sprite(0, this.game.height - 180, 'water1');
        var water2 = game.add.sprite(0, this.game.height - 150, 'water2');
        water1.scale.set(0.7, 0.7);
        water2.scale.set(0.7, 0.7);
        var tweenwater1 = game.add.tween(water1).to({ y: this.game.height - 150 }, 2000, "Linear", true, 0, -1);
        tweenwater1.yoyo(true, 0);
        var tweenwater2 = game.add.tween(water2).to({ y: this.game.height - 180 }, 2000, "Linear", true, 0, -1);
        tweenwater2.yoyo(true, 0);
        this.apple_ground = game.add.sprite(0, this.game.height - 236, 'apple_ground');
        this.apple_ground.scale.set(this.game.width / 1024, 0.5);
        var startbutton = game.add.button(game.width / 2, game.height / 2, 'start');
        startbutton.scale.set(0.5, 0.5);
        startbutton.inputEnabled = true;
        startbutton.anchor.setTo(0.5, 0.5); //设置按钮的中心点
        startbutton.events.onInputUp.add(function () {
            game.state.start('play', true);
        }, this);
    };
    return Start;
}(Phaser.State));
var LemonSprite = /** @class */ (function (_super) {
    __extends(LemonSprite, _super);
    function LemonSprite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LemonSprite;
}(Phaser.Sprite));
var Play = /** @class */ (function (_super) {
    __extends(Play, _super);
    function Play() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Play.prototype.create = function () {
        var game = this.game;
        game.physics.startSystem(Phaser.Physics.ARCADE);
        //game.world.setBounds(0, 0,600 ,5000);
        //var add = game.TweenManager(game)
        var background = game.add.sprite(0, 0, 'background'); //背景
        background.scale.set(this.game.width / 512, this.game.height / 1024);
        background.alpha = 1;
        var bg = game.add.sprite(0, this.game.height, 'bg');
        bg.tint = 15000000; //Math.random()*0XFFFFFF
        //console.log(bg.tint) //13743738.656000825 15000000
        bg.scale.set(2, 2);
        //bg.blendMode = 0
        bg.alpha = 1;
        this.bg2 = game.add.tileSprite(0, 0, this.game.width, this.game.height, bg.generateTexture());
        this.player = game.add.sprite(game.width / 2, this.game.height - 236, 'player');
        // game.physics.arcade.enable(this.player, Phaser.Physics.ARCADE)
        game.physics.arcade.enable(this.player);
        this.player.anchor.set(0.5, 0.5);
        this.player.scale.set(0.5, 0.5);
        this.player.body.collideWorldBounds = true;
        this.player.body.immovable = true;
        this.fruitGroup = game.add.group();
        this.fruitGroup.enableBody = true;
        //var size = game.cache.getImage('lemon').width
        this.lemon = this.fruitGroup.create(game.width / 2, 350, 'lemon');
        this.lemon.anchor.set(0.5, 0.5);
        this.lemon.scale.set(0.5, 0.5);
        game.physics.arcade.enable(this.lemon);
        // game.physics.arcade.enable(this.lemon, Phaser.Physics.ARCADE)
        this.lemon.ff = true;
        var applewater_hou = game.add.tileSprite(0, this.game.height - 140, 1024, 128, 'applewater_hou');
        var applewater_qian = game.add.tileSprite(0, this.game.height - 128, 1024, 128, 'applewater_qian');
        applewater_qian.autoScroll(-80, 0);
        applewater_hou.autoScroll(80, 0);
        applewater_qian.scale.set(2, 2);
        applewater_hou.scale.set(2, 2);
        var water1 = game.add.sprite(0, this.game.height - 180, 'water1');
        var water2 = game.add.sprite(0, this.game.height - 150, 'water2');
        water1.scale.set(0.7, 0.7);
        water2.scale.set(0.7, 0.7);
        var tweenwater1 = game.add.tween(water1).to({ y: this.game.height - 150 }, 2000, "Linear", true, 0, -1);
        tweenwater1.yoyo(true, 0);
        var tweenwater2 = game.add.tween(water2).to({ y: this.game.height - 180 }, 2000, "Linear", true, 0, -1);
        tweenwater2.yoyo(true, 0);
        this.apple_ground = game.add.sprite(0, this.game.height - 236, 'apple_ground');
        this.apple_ground.scale.set(this.game.width / 1024, 0.5);
        // game.physics.arcade.enable(this.apple_ground, Phaser.Physics.ARCADE)
        game.physics.arcade.enable(this.apple_ground);
        game.input.onTap.add(this.downEvents, this);
        this.tcenterX = this.lemon;
        this.tcenterY = null;
        this.target = null;
        this.angle = 3;
        this.lemonspeed = 0;
        this.playerspeed = 0;
        this.playerTime = 0;
        this.overlapFlag = false;
        this.tapupFlag = false;
        this.tapdownFlag = false;
        this.lastBulletTime = 0;
        this.lemonF = false;
        this.firstFlag = 1;
        this.tleft = null;
        this.tright = null;
        this.fruitAngle = true;
    };
    Play.prototype.downEvents = function (a, b) {
        if (this.tapdownFlag)
            return false;
        var Xvector = (this.player.x - this.tcenterX.x) * 4;
        var Yvector = (this.player.y - this.tcenterX.y) * 4;
        this.lemonF = false;
        this.tapdownFlag = true;
        this.overlapFlag = true;
        this.bg2.autoScroll(0, 300);
        this.apple_ground.body.velocity.setTo(0, 300);
        if (this.firstFlag == 1) {
            this.player.body.velocity.setTo(0, -1000);
            this.firstFlag = 2;
        }
        else {
            this.player.body.velocity.setTo(Xvector, Yvector);
        }
    };
    Play.prototype.update = function () {
        var game = this.game;
        if (this.player.body.blocked.left || this.player.body.blocked.down || this.player.body.blocked.right || this.player.body.blocked.up) {
            this.lemonF = false;
            this.overlapFlag = false;
            this.bg2.autoScroll(0, 0);
            this.player.body.velocity.setTo(0, 0);
            this.fruitGroup.setAll('body.velocity.y', 0);
            this.game.tweens.pauseAll();
            this.fruitGroup.setAll('rotation', 0);
            this.fruitAngle = false;
            var restart = this.game.add.button(this.game.width / 2, this.game.height - 300, 'restart', this.actionOnClick, this);
            restart.anchor.set(0.5, 0.5);
            restart.scale.set(0.5, 0.5);
        }
        if (this.fruitAngle) {
            this.lemonspeed += Math.PI / 180 * this.angle;
            //this.lemon.rotation = this.lemonspeed;
            this.fruitGroup.setAll('rotation', this.lemonspeed);
        }
        if (this.lemonF) {
            this.creatFruit();
            this.playerspeed += Math.PI / 180 * this.angle;
            this.player.x = this.tcenterX.x + Math.sin(-this.playerspeed) * 160;
            this.player.y = this.tcenterY.y + Math.cos(-this.playerspeed) * 160;
            this.player.rotation = -Math.PI / 2 + game.physics.arcade.angleBetween(this.player, this.target);
        }
        if (this.overlapFlag) {
            game.physics.arcade.overlap(this.player, this.fruitGroup, this.rotationEvents, null, this);
        }
    };
    //	getAngel:function (obj,target){
    //      return Math.atan2(obj.y - target.y, obj.x - target.x)*180/Math.PI;
    // },
    Play.prototype.rotationEvents = function (player, lemon) {
        var game = this.game;
        if (lemon.ff) {
            player.body.velocity.setTo(0, 0);
            var overangle = game.physics.arcade.angleBetween(player, lemon) + Math.PI / 2;
            this.playerspeed = overangle;
            this.lemonF = true;
            this.tapFlag = true;
            this.overlapFlag = false;
            this.tapdownFlag = false;
            this.tapupFlag = false;
            lemon.ff = false;
            this.tcenterX = lemon;
            this.tcenterY = lemon;
            this.target = lemon;
        }
    };
    Play.prototype.creatFruit = function () {
        var game = this.game;
        var now = game.time.now;
        if (now - this.lastBulletTime > 1500) {
            var size = game.cache.getImage('lemon').width;
            var x = game.rnd.integerInRange(size / 4, game.width - size / 4);
            var y = 0;
            var fruit = this.fruitGroup.getFirstExists(false, true, x, -size / 4, 'lemon');
            fruit.anchor.set(0.5, 0.5);
            fruit.scale.set(0.5, 0.5);
            fruit.body.setSize(size, size);
            fruit.checkWorldBounds = true; //边界判定 写法不同和上面我方飞机子弹原理相同
            fruit.outOfBoundsKill = true; //回收
            fruit.ff = true;
            if (fruit.x > size / 4 && fruit.x < this.game.width / 2) {
                this.tleft = game.add.tween(fruit).to({
                    x: this.game.width - size / 4
                }, 5000, Phaser.Easing.Linear.None, true);
            }
            else {
                this.tright = game.add.tween(fruit).to({
                    x: size / 4
                }, 5000, Phaser.Easing.Linear.None, true);
            }
            this.lastBulletTime = now;
        }
        this.fruitGroup.setAll('body.velocity.y', 300);
    };
    Play.prototype.actionOnClick = function () {
        this.game.state.start('play', true);
    };
    return Play;
}(Phaser.State));
//# sourceMappingURL=Boot.js.map