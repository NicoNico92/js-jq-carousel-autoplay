$(document).ready(function() {



    $('.next').click(function() {

        // immagine corrente
        var img_corrente = $('img.active');
        // pallino corrente
        var pallino_corrente = $('i.active');

        // recupero l'immagine successiva
        var img_successiva = img_corrente.next('img');
        // recupero il pallino successivo
        var pallino_successivo = pallino_corrente.next('i');

        if(img_successiva.length == 0) {
            // se non c'è un img successiva => recupero la prima!
            img_successiva = $('img.first');
            // se non c'è un pallino successivo => recupero il primo!
            pallino_successivo = $('i.first');
        }


        // toglo la classe active all'img corrente => diventa con display none
        img_corrente.removeClass('active');
        // toglo la classe active al pallino corrente => riprende il colore di default
        pallino_corrente.removeClass('active');

        // aggiungo la classe active all'img successiva => viene visualizzata
        img_successiva.addClass('active');
        // aggiungo la classe active al pallino successivo => diventa rosso
        pallino_successivo.addClass('active');

    });

    $('.prev').click(function() {
        // immagine corrente
        var img_corrente = $('img.active');
        // pallino corrente
        var pallino_corrente = $('i.active');

        // recupero l'immagine precedente
        var img_precedente = img_corrente.prev('img');
        // recupero il pallino precedente
        var pallino_precedente = pallino_corrente.prev('i');

        if(img_precedente.length == 0) {
            // se non c'è un img precedente => recupero l'ultima!
            img_precedente = $('img.last');
            // se non c'è un pallino precedente => recupero l'ultimo!
            pallino_precedente = $('i.last');
        }

        // toglo la classe active all'img corrente => diventa con display none
        img_corrente.removeClass('active');
        // toglo la classe active al pallino corrente => ritorna grigio
        pallino_corrente.removeClass('active');

        // aggiungo la classe active all'img precedente => viene visualizzata
        img_precedente.addClass('active');
        // aggiungo la classe active al pallino precedente => diventa rosso
        pallino_precedente.addClass('active');

    });


    var clock = setInterval(function() {
        var img_corrente = $('img.active');
        var pallino_corrente = $('i.active');
        var img_successiva = img_corrente.next('img');
        var pallino_successivo = pallino_corrente.next('i');
        if(img_successiva.length == 0) {
            img_successiva = $('img.first');
            pallino_successivo = $('i.first');
        }
       img_corrente.removeClass('active');
       pallino_corrente.removeClass('active');
       img_successiva.addClass('active');
       pallino_successivo.addClass('active');
    },1000);

    $('img, i').click(function() {
        clearInterval(clock);
    });

    //Bonus: cliccando sul pallino si apre img corrispondente
    $('.fas.fa-circle').click(function(){
        //prendo l'i del pallino
        var indexBullet = $(this).index();
        console.log('hai cliccato sul pallino in posizione: ' + indexBullet);

        var bulletCurrent = $('i.active');
        bulletCurrent.removeClass('active');
        $(this).addClass('active');

        //deve diventare active la img con i uguale a indexBullet
        var fotoCurrent = $('img.active');
        fotoCurrent.removeClass('active');
        var fotoCorrispondente = $('.slides-container img').eq(indexBullet);
        fotoCorrispondente.addClass('active');
    });

});
