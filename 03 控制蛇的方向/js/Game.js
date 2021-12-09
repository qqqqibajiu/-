/**
 * Game类 整个游戏类
 * @map    地图的实例
 * @snake  蛇的实例
 * @food   食物的实例
 * @block  障碍物实例
 **/
function Game(map, snake, food, block) {
    // 接收数据
    this.map = map;
    this.snake = snake;
    this.food = food;
    this.block = block;
    // 定义定时器的句柄
    this.timer = null;

    // 执行初始化方法
    this.init();
}

// 定义初始化方法
Game.prototype.init = function() {
    // 渲染地图
    this.renderMap();
    // 渲染食物
    this.renderFood();
    // 渲染蛇
    this.renderSnake();
    // 开始游戏
    this.statr();
    // 执行绑定事件的方法
    this.bindEvent();
}

// 渲染地图
Game.prototype.renderMap = function() {
    // 在一个类的原型方法中的this指向该类的实例化对象
    // 调用map原型中的fill方法
    this.map.fill();
}

// 渲染食物
Game.prototype.renderFood = function() {
    // console.log(this.map.arr);
    // 渲染食物就是在地图中找到食物的坐标系并渲染背景颜色
    // this.map.dom.children[this.food.x].children[this.food.y].style.backgroundColor = 'red';

    // 获取食物的坐标
    var x = this.food.x;
    var y = this.food.y;

    // 通过数组映射dom
    this.map.arr[x][y].style.backgroundColor = 'red';
}

// 渲染蛇
Game.prototype.renderSnake = function() {
    // 遍历蛇类中数组渲染
    for (var i = 0; i < this.snake.arr.length; i++) {
        // 获取一节身体
        var x = this.snake.arr[i].x;
        var y = this.snake.arr[i].y

        // 在地图中找到对应的元素并渲染背景颜色
        this.map.arr[x][y].style.backgroundColor = 'green';
    }
}

// 开始游戏
Game.prototype.statr = function() {
    // 缓存this
    var me = this;

    // 赋值定时器
    this.timer = setInterval(function() {
        // 清屏
        me.map.clear();
        // 移动
        me.snake.move();
        // 渲染食物
        me.renderFood();
        // 渲染蛇
        me.renderSnake();
    }, 200)
}


// 绑定事件
Game.prototype.bindEvent = function() {
    // 缓存this
    var me = this;
    // 直接为document绑定键盘事件
    document.onkeydown = function(e) {
        // 获取对应的编码
        var code = e.keyCode;

        // 判断code的值是否是合法值
        if (code === 37 || code === 38 || code === 39 || code === 40) {
            // 调用蛇转向的方法
            me.snake.change(code);
        }

    }
}

