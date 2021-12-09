/**
 * Snake     蛇类
 **/
 function Snake() {
    // 数组属性 拥有盛放蛇的每一节身体   
    this.arr = [
        { x: 4, y: 4 },
        { x: 4, y: 5 },
        { x: 4, y: 6 },
        { x: 4, y: 7 },
        { x: 4, y: 8 }
    ];
    // 方向属性
    this.direction = 39; //  37 表示向左  38 表示向上  39 表示向右  40表示向下
}

// 蛇移动的方法
Snake.prototype.move = function() {
    // 根据老的头部创建新的头部
    var newHead = {
        x: this.arr[this.arr.length - 1].x,
        y: this.arr[this.arr.length - 1].y
    }

    // 判断蛇的方向
    // if (this.direction === 37) {
    //     // 此时x值不变 y值--
    //     newHead.y--;
    // } else if (this.direction === 38) {

    // }

    // 当值匹配的比较多的时候可以使用switch语句
    switch (this.direction) {
        case 37: 
            // 此时x值不变 y值--
            newHead.y--;
            break;
        case 38:
            // 此时y值不变 x值--
            newHead.x--;
            break;
        case 39:
            // 此时x值不变 y值++
            newHead.y++;
            break;
        case 40:
            // 此时y值不变 x值++
            newHead.x++;
            break;
    }

    // 将新的头部放入到数组中
    this.arr.push(newHead);

    // 删除尾部
    this.arr.shift();
}