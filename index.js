let imageNames = ["ant", "bird", "bunny", "camel", "cat", "cheepmunk"];

// "cheetah",
// "chicken",
// "crab",
// "crocodile",
// "elephant",
// "fish",
// "flamingo",
// "fox",
// "frog",
// "gorilla",
// "horse",
// "hyena",
// "penguin",
// "pig",
// "polar_bear",
// "rooster",
// "seal",
// "snake",
// "turtle"

let currentIndex = 0;

function handleRightArrowClick() {
    console.log("currentIndex before incrementing: " + currentIndex);

    //find which slide should be to the left, center and right and assign references to variables
    if (currentIndex == 0) {
        leftSlide = $(`.slideImgWrapper[data-index=${imageNames.length - 1}]`);
        currentSlide = $(`.slideImgWrapper[data-index=${currentIndex}]`);
        rightSlide = $(`.slideImgWrapper[data-index=${currentIndex + 1}]`);
    } else {
        leftSlide = $(`.slideImgWrapper[data-index=${currentIndex - 1}]`);
        currentSlide = $(`.slideImgWrapper[data-index=${currentIndex}]`);
        rightSlide = $(`.slideImgWrapper[data-index=${currentIndex + 1}]`);
    }

    console.log(leftSlide.attr("data-index"));
    console.log(currentSlide.attr("data-index"));
    console.log(rightSlide.attr("data-index"));

    //move current and right slide left, but left slide to the rightImg
    //in order to prepare it for next iteration
    $(currentSlide).css("left", "-1200px");
    $(rightSlide).css("left", "0");
    $(leftSlide).css("left", "1200px");

    //increment currentIndex and change data-index for next iteration
    if (currentIndex < 4) {
        currentIndex++;
        $(leftSlide).attr("data-index", currentIndex + 1);
    } else {
        currentIndex = 0;
        $(leftSlide).attr("data-index", 1);
        $(currentSlide).attr("data-index", "0");
        //$(rightSlide).attr("data-index", "1");
    }

    //change the src of left image since it's moved to the right to be shown next
    let leftSlideDataIndex = $(leftSlide).attr("data-index");
    console.log("leftSlideDataIndex" + leftSlideDataIndex);
    $(leftSlide)
        .find(".slide_img")
        .attr("src", `./img/${imageNames[leftSlideDataIndex]}.jpg`);
}
