const $navBar = $('#navBar');
const $navBarDiv = $('#navBarDiv');
const $navBarButton = $('#navBarButton');
const $navBarSpan = $('#navBar span');

$navBarDiv.click(() => {
    if($navBar.width() < 100){
        $navBar.css("min-width", "200px")
        $navBarSpan.css("display", "flex")
        .css("transition", "all 1s")
        $navBarButton.css("transform", "rotate(180deg)")
    } else{
        $navBar.css("min-width", "60px")
        $navBarSpan.css("display", "none")
        $navBarButton.css("transform", "rotate(0deg)")
    }
});

const $heart = $('#heart');

$heart.click(() => {
    $heart.css("color", "red")
});

const $states = $('.States');
const $china = $('.China');
const $kingdom = $('.Kingdom');

const $select = $('.timeline-select2');


$select.change(()=>{
    let choice = $select.val();
    if(choice == "timeline1"){
        $states.css("fill", "#fbcf71");
        $china.css("fill", "#818181");
        $kingdom.css("fill", "#818181");
    } else if(choice == "timeline2"){
        $states.css("fill", "#818181");
        $china.css("fill", "#00acac");
        $kingdom.css("fill", "#818181");
    } else {
        $states.css("fill", "#818181");
        $china.css("fill", "#818181");
        $kingdom.css("fill", "#1f7bb6");
    }
})