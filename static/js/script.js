// Checks to see if description is empty yes return false else true
function checkDesc() {
    if ($('#description').val() === "") {
        return false;
    } else {
        return true;
    }
}
// Checks to see if name is empty yes return false else true
function checkName() {
    if ($('#name').val() === "") {
        return false;
    } else {
        return true;
    }
}

// Checks to see if word is empty yes return false else true
function checkWord() {
    if ($('#word').val() === "") {
        return false;
    } else {
        return true;
    }
}

// Checks to see if definition is empty yes return false else true
function checkDefinition() {
    if ($('#definition').val() === "") {
        return false;
    } else {
        return true;
    }
}
$(document).ready(function () {
    // Event Listeners


    // Checks to see if name is empty. 
    $('.name').on("change focusout", () => {
        if (checkName() == true) {
            $('#name').css("border", "2px solid green");
            $('.deck-name-check').html('')
        } else {
            $('#name').css("border", "2px solid red")
            $('.deck-name-check').html('Please enter a deck name')
        }
    });

    //Checks to see if description is empty. 
    $('.description').on("change focusout", () => {
        if (checkDesc()) {
            $('#description').css("border", "2px solid green");
            $('.deck-description-check').html('')
        } else {
            $('#description').css("border", "2px solid red");
            $('.deck-description-check').html('Please enter a description');
        }
    })


    //Checks to see if description is empty. 
    $('.word').on("change focusout", () => {
        if (checkWord()) {
            $('#word').css("border", "2px solid green");
            $('.word-check').html('')
        } else {
            $('#word').css("border", "2px solid red");
            $('.word-check').html('Please enter a word');
        }
    })

    //Checks to see if description is empty. 
    $('.definition').on("change focusout", () => {
        if (checkDefinition()) {
            $('#definition').css("border", "2px solid green");
            $('.definition-check').html('')
        } else {
            $('#definition').css("border", "2px solid red");
            $('.definition-check').html('Please enter a word');
        }
    })





});