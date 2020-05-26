$(function () {
        //E-mail Ajax Send
    $("#form__popup").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $.magnificPopup.close(); /*-close form after */
            $('#form__popup').trigger( 'reset' );
            setTimeout(function () {

                // Done Functions
            }, 2000);
        });
        return false;
    });



    $(".service__popup").magnificPopup();


    /*Add Section*/
    let btn = document.querySelector ('.service__more ');
    btn.onclick = function(e) {
        let element = document.querySelector (".articles");
        if(element.classList.contains("show-articles")) {
            element.classList.remove("show-articles");
        } else {
            element.classList.add("show-articles");
        }
        $(".service__popup").magnificPopup();
    }
});




