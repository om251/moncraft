var canvas=new fabric.Canvas('myCanvas');
pl_x=10;
pl_y=10;

block_img_width=30;
block_img_height=30;

var pl_object="";

var block_img_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        pl_object=Img;
        pl_object.scaleToWidth(150);
        pl_object.scaleToHeight(140);
        pl_object.set({
            top:pl_y,
            left:pl_x
        });
        canvas.add(pl_object);
    });
}

function new_image(get_img){
    fabric.Image.fromURL(get_img, function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:pl_y,
            left:pl_x
        });
        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(e.shiftKey==true && keypressed=='80')
    {
        console.log("p & shift pressed");
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(e.shiftKey==true && keypressed=='77')
    {
        console.log("m & shift pressed");
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(keypressed=='38'){
        up();
        console.log("up");
    }
    if(keypressed=='40'){
        down();
        console.log("down");
    }
    if(keypressed=='37'){
        left();
        console.log("left");
    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }
    if(keypressed=='87'){
        new_image('wall.jpg');
        console.log("w");
    }
    if(keypressed=='71'){
        new_image('ground.png');
        console.log("g");
    }
    if(keypressed=='76'){
        new_image('light_green.png');
        console.log("l");
    }
    if(keypressed=='84'){
        new_image('trunk.jpg');
        console.log("t");
    }
    if(keypressed=='82'){
        new_image('roof.jpg');
        console.log("r");
    }
    if(keypressed=='89'){
        new_image('yellow_wall.png');
        console.log("y");
    }
    if(keypressed=='68'){
        new_image('dark_green.png');
        console.log("d");
    }
    if(keypressed=='85'){
        new_image('unique.png');
        console.log("u");
    }
    if(keypressed=='67'){
        new_image('cloud.jpg');
        console.log("c");
    }
}
function down(){
    if (pl_y <= 450){
        pl_y = pl_y + block_img_height;
        console.log("blockheight = " + block_img_height);
        console.log("when down arrow is pressed x ="+pl_x+"y="+pl_y);
        canvas.remove(pl_object);
        player_update();
    }
}

function up(){
    if (pl_y >= 0){
        pl_y = pl_y - block_img_height;
        console.log("blockheight = " + block_img_height);
        console.log("when up arrow is pressed x ="+pl_x+"y="+pl_y);
        canvas.remove(pl_object);
        player_update();
    }
}

function right(){
    if (pl_x <= 850){
        pl_x = pl_x + block_img_width;
        console.log("block width = " + block_img_width);
        console.log("when right arrow is pressed y ="+pl_y+"x="+pl_x);
        canvas.remove(pl_object);
        player_update();
    }
}

function left(){
    if (pl_x >= 0){
        pl_x = pl_x - block_img_width;
        console.log("block width = " + block_img_width);
        console.log("when left arrow is pressed x ="+pl_x+"y="+pl_y);
        canvas.remove(pl_object);
        player_update();
    }
}
