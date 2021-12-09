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

    // 执行初始化方法
    this.init();
}

// 定义初始化方法
Game.prototype.init = function() {
    // 渲染地图
    this.renderMap();
    // 渲染食物
    this.renderFood();
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

