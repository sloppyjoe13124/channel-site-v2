const selectedThumbnail = document.getElementById("selected-thumbnail")
const scrollLeftBtn = document.getElementById("scroll-vid-left")
const scrollRightBtn = document.getElementById("scroll-vid-right")
const selectedVidTitle = document.getElementById("selected-vid-title")

//when adding a new video just drop in a new object with the info, don't forget to add the thumbnail to /images.
let videoRoster = [
    {title: "First Gilbert The Yapper Video", thumbnail: "images/First Gilbert The Yapper Video Thumbnail.jpg", vidSource: "https://youtu.be/gCw6UZj7KVw"}, 
    {title: "I'm scared of the future", thumbnail: "images/I'm scared of the future thumbnail.jpg", vidSource: "https://youtu.be/vKB3N2z_3dw"}, 
    {title: "Fictional Role Models", thumbnail: "images/Fictional Role Models thumbnail.jpg", vidSource: "https://youtu.be/Ljq7uCDbmWg"}, 
    {title: "Mixed Assorted Rants", thumbnail: "images/Mixed Assorted Rants thumbnail.jpg", vidSource: "https://youtu.be/PezCmduZ4Co"}, 
    {title: "Respecting Other People in Online Spaces", thumbnail: "images/ROPIOS thumbnail.jpg", vidSource: "https://youtu.be/oVj3u8QlfxQ"}, 
    {title: "Goodbye Cheeseburger", thumbnail: "images/Goodbye Cheeseburger thumbnail.jpg", vidSource: "https://youtu.be/x8Ts9hNsbBA"}, 
    {title: "Career / Future Woes", thumbnail: "images/careerwoesthumbnailneocities.png", vidSource: "https://youtu.be/29T2PuJO7bE"}
]
//if you just so happen to care about some rando's code, I made it this way so I only have to add a new object to the roster instead of
//having to update multiple things if I want to add more videos to it.
let selectedVideoIndex = 1
let selectedVidSource = videoRoster[videoRoster.length - selectedVideoIndex].vidSource

function updateVidScroller() {
    selectedThumbnail.src = videoRoster[videoRoster.length - selectedVideoIndex].thumbnail
    selectedVidTitle.innerText = videoRoster[videoRoster.length - selectedVideoIndex].title
    selectedVidSource = videoRoster[videoRoster.length - selectedVideoIndex].vidSource

    if (selectedVideoIndex === 1) {
        scrollLeftBtn.style.color = "rgb(25, 24, 27)"
        scrollLeftBtn.style.backgroundColor = "rgb(25, 24, 27)"
    } else {
        scrollLeftBtn.style.color = "rgb(234, 234, 234)"
        scrollLeftBtn.style.backgroundColor = "rgb(147, 0, 226)"
    }

    if (selectedVideoIndex === videoRoster.length) {
        scrollRightBtn.style.color = "rgb(25, 24, 27)"
        scrollRightBtn.style.backgroundColor = "rgb(25, 24, 27)"
    } else {
        scrollRightBtn.style.color = "rgb(234, 234, 234)"
        scrollRightBtn.style.backgroundColor = "rgb(147, 0, 226)"
    }
}

function scrollVidLeft() {
    if (selectedVideoIndex > 1) {
        selectedVideoIndex -= 1
        updateVidScroller()
    }
}

function scrollVidRight() {
    if (selectedVideoIndex < videoRoster.length) {
        selectedVideoIndex += 1
        updateVidScroller()
    }
}

selectedThumbnail.addEventListener("click", () => {
    window.open(selectedVidSource, "_blank")
})

scrollLeftBtn.addEventListener("click", scrollVidLeft)
scrollRightBtn.addEventListener("click", scrollVidRight)

updateVidScroller()