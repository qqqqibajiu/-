/**
 * Food    食物类
 * @x      食物的坐标x值
 * @y      食物的坐标y值
 **/
 function Food(x, y) {
    this.x = x;
    this.y = y;
}

// 重置食物方法
Food.prototype.resetFood = function(x, y) {
    this.x = x;
    this.y = y;
}