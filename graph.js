let leftcount = 0;
let rightcount = 0;

let left_bt = document.getElementById("left_img");
left_bt.addEventListener('click', function(){
    leftcount += 1;
    result_view();
    delete_draw();
    draw();
});
    

let right_bt = document.getElementById("right_img");
right_bt.addEventListener('click', function(){
    rightcount += 1;
    result_view();
    delete_draw();
    draw();
});

//퍼센트로 바꾸기 위한 부분
let sum = 0; //총합
let left_per = 0; //왼쪽
let right_per = 0; //오른쪽

function result_view(){
    result_per();
    document.getElementById("result").innerHTML="짬뽕 "+ left_per +"% : 짜장 " + right_per + "%";
}

function result_per(){
    sum = leftcount + rightcount;
    left_per = leftcount/sum * 100;
    left_per=left_per.toFixed();
    right_per = rightcount/sum *100;
    right_per = right_per.toFixed();  
}

// 그림 그려지는 위치 x 좌표
x_ptr = 25;
// 그림 그리는 부분
function draw() {

    var canvas = document.getElementById('canvas');
    
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.fillRect(25, 25, left_per, 30);
      ctx.strokeRect(left_per+x_ptr, 25, right_per, 30);
    }
}

function delete_draw() {
    var canvas2 = document.getElementById('canvas');
    
    canvas2.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
}