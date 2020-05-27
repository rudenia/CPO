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
    }

   /* document.querySelector('.articles-box__show')//.classList.add('opened')
    document.querySelectorAll('.articles-box__show').forEach(function (section) {
        section.addEventListener('click',function (e) {
            document.querySelectorAll('.articles-box__show').forEach(function (section) {
                section.querySelector('.articles-box__descriptionMore').style.maxheight = '0px'
                //.classList.remove('opened')
            })
            var InsideElHeight =  e.target.closest('.articles-box__show').querySelector('.articles-box__descriptionMore > *').clientHeight;

            e.target.closest('.articles-box__show').querySelector('.articles-box__descriptionMore').style.maxheight = InsideElHeight + 'px'
            //.classList.add('opened')
        })
    })*/


    let acc = document.getElementsByClassName("articles-box__more");
    let i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            this.classList.toggle("active");

            this.nextElementSibling.classList.toggle("show");
        }
    }


    
});


