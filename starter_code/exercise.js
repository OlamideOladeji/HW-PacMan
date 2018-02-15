/*
Problem Set 1 PacMan  - Bounce off Walls 
1)	Bounce off Walls -  Given the code below and the 4 images  
PacMan1.png etc make the PacMan bounce off the boundary at x=600px 
so that it reverses its direction of motion and uses the last 2 images.
Then make it bounce off the boundary at x = 0px.  
You will need to take into account the size of the image.

*/
var exercise = {};
exercise.flag = 0; // 0 = mouth open  1 = mouth shut
exercise.increment = 20; // pixels to move either + or -
exercise.run = function() {
    exercise.img1 = document.getElementById('PacMan');
    exercise.updatePosition();
    exercise.checkWallCollision();
    exercise.chooseImage();
};
exercise.updatePosition = function() {
    // increment exercise.pos.x by increment 
    // now set image position using img1.style.left 
    // remember images positions are "xxx.px"
    exercise.imgPath = exercise.img1.src;
    exercise.imgPath = exercise.imgPath.replace(/^.*[\\\/]/, '');
    //console.log(exercise.pos.x)
    //console.log(exercise.img1.getAttribute("src") === ("/images/PacMan1.png"))
    //console.log(exercise.img1.src === "PacMan2.png")
    //console.log(exercise.img1.src === "PacMan3.png")
    //console.log(exercise.img1.src === "PacMan4.png")
    //console.log(exercise.img1.src)
    if (exercise.imgPath === ("PacMan1.png")) {
        exercise.pos.x = exercise.pos.x + exercise.increment;
    }
    else if (exercise.imgPath === ("PacMan2.png")) {
        exercise.pos.x += exercise.increment;
    }
    else if (exercise.imgPath=== ("PacMan3.png")) {
        //exercise.increment = -exercise.increment;
        exercise.pos.x += exercise.increment;
    }
    else if (exercise.imgPath === ("PacMan4.png")) {
        //exercise.increment = -exercise.increment;
        exercise.pos.x += exercise.increment;
    }

    exercise.img1.style.left= exercise.pos.x + 'px';
    console.log(exercise.img1.style.right)
};
exercise.chooseImage = function() {
    // choose between all 4 images
    if (exercise.increment > 0) {
        if (exercise.flag === 1) {  //if mouth is shut.
         // set to mouth open image
          exercise.img1.src = 'PacMan1.png'
          exercise.flag = 0;
        } else {
            exercise.img1.src = 'PacMan2.png'
            exercise.flag = 1;
        }
    } else if (exercise.increment < 0) {
        if (exercise.flag === 1) {
            exercise.img1.src = 'PacMan3.png'
            exercise.flag = 0;

        } else {
            exercise.img1.src = 'PacMan4.png'
            exercise.flag = 1;

        }
    }
};
exercise.checkWallCollision = function() {
    // reset the direction of motion if wall is hit
    // you need to take into account image width
    exercise.wall = window.outerWidth
    console.log(exercise.wall)
   //console.log(exercise.img1.style.right)
    //console.log(exercise.wall)
     //console.log(exercise.img1.width)
     //console.log(exercise.pos.x)
     console.log((exercise.pos.x + exercise.img1.width) >= exercise.wall);
    if ((exercise.pos.x + exercise.img1.width) >= exercise.wall) {
        exercise.img1.src = 'PacMan3.png';
        exercise.flag = 0;
        exercise.increment = -exercise.increment
    }
    else if (exercise.pos.x <= 0) {
        exercise.img1.src = 'PacMan1.png';
        exercise.flag = 0;
        exercise.increment = -exercise.increment
    }

};