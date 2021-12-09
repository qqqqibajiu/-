/**
 * Food     食物类
 * @x       食物的坐标x值
 * @y       食物的坐标y值
 * @img_url 图片的路径
 **/
 function Food(x, y, img_url) {
    this.x = x;
    this.y = y;
    // 接收图片路径
    this.img_url = img_url;
}

// 重置食物方法
Food.prototype.resetFood = function(x, y) {
    this.x = x;
    this.y = y;
}