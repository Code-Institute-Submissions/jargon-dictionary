function checkDesc(){
    if ($('#description').val() === "") {
        return false;
    } else {
        return true;
    }
}

function checkName() {
    if ($('#name').val() === "") {
        return false;
    } else {
        return true;
    }
}
$(document).ready(function(){
// Event Listeners


    // Checks to see if form has been filled correctly
    $('.name').on("change focusout", () => {
        if (checkName() == true) {
            $('#name').css("border", "2px solid green");
            $('.deck-name-check').html('')
        } else {
            $('#name').css("border", "2px solid red")
            $('.deck-name-check').html('Please enter a deck name')
        }
    });
    
    $('.description').on("change focusout", () => {
        if (checkDesc()) {
            $('#description').css("border", "2px solid green");
            $('.deck-description-check').html('')
        } else {
            $('#description').css("border", "2px solid red");
            $('.deck-description-check').html('Please enter a description');
        }
    })

    
    
});


