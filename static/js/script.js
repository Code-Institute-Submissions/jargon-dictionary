$('.hidden').hide() //Hides submit button on add pages

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

// Checks too see if form can be submitted if so shows submit button
function addDeckFormSubmit(){
    if(checkName() && checkDesc()){
        $('.hidden').show()
        return true;
       
    }else{
        $('.hidden').hide()
        return false
    }
}

function addDefintionFormSubmit(){
    if(checkDefinition() && checkWord()){
        $('.hidden').show()
        return true;
       
    }else{
        $('.hidden').hide()
        return false
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
            addDeckFormSubmit()
        } else {
            $('#name').css("border", "2px solid red")
            $('.deck-name-check').html('Please enter a deck name')
            addDeckFormSubmit()
        }
    });

    //Checks to see if description is empty. 
    $('.description').on("change focusout", () => {
        if (checkDesc()) {
            $('#description').css("border", "2px solid green");
            $('.deck-description-check').html('')
            addDeckFormSubmit()
        } else {
            $('#description').css("border", "2px solid red");
            $('.deck-description-check').html('Please enter a description');
            addDeckFormSubmit()
        }
    })


    //Checks to see if description is empty. 
    $('.word').on("change focusout", () => {
        if (checkWord()) {
            $('#word').css("border", "2px solid green");
            $('.word-check').html('')
            addDefintionFormSubmit()
        } else {
            $('#word').css("border", "2px solid red");
            $('.word-check').html('Please enter a word');
            addDefintionFormSubmit()
        }
    })

    //Checks to see if description is empty. 
    $('.definition').on("change focusout", () => {
        if (checkDefinition()) {
            $('#definition').css("border", "2px solid green");
            $('.definition-check').html('')
            addDefintionFormSubmit()
        } else {
            $('#definition').css("border", "2px solid red");
            $('.definition-check').html('Please enter a word');
            addDefintionFormSubmit()
        }
    })





});