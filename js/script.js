$(document).ready(
  function(){

    // MESSAGGI INVIATI E RICEVUTI//
    $(document).on('click', '#send_button',
      function(){
        // Invio del messaggio
        messageSent();

        // Ricezione del messaggio
        // Setto il timeout di 2 secondi per il messagio da ricevere
        setTimeout(messageReceived, 1000);

      }


    );
    // RICERCA NELLA CHAT
    $('.search input').keyup(
    function(){

      $('.single_chat').each(function(){

        var searchText = $('.search input').val().toLowerCase();

        var searchElement = $(this).find('.contact_name').text().toLowerCase();

        console.log($(this).find('.contact_name'));

        if (searchElement.includes(searchText)) {
          $(this).show();

        } else {
          $(this).hide();
        };
      }
    );




    }
  );

  // COMPARSA E SCOMPARSA DELLA DROPDOWN DELLE OPZIONI DEL MESSAGGIO

  // Comparsa dell'icona freccia all'entrata del messaggio
  $('.message_baloon').mouseenter(
    function (){
      $(this).find('.arrow').show();
    }
  )

  // Scomparsa dell'icona freccia all'entrata del messaggio

  $('.message_baloon').mouseleave(
    function(){
      $(this).find('.arrow').hide();
    }
  )

  // Evento click sull'icona freccia
  $(document).on('click', '.arrow',
  function(){
    // Seleziono la dropdown attuale
    var currentDropdown = $(this).siblings('.dropdown');

    // Nascondo le altre dropdown che non sono le correnti
    $('.dropdown').not(currentDropdown).addClass('hidden');

    // Rendo attiva la dropdown corrente
    currentDropdown.toggleClass('hidden');
;

  });

  $(document).on('click', '#delete',
  function (){
    $(this).parentsUntil('.message_baloon').remove();

  });










    // FUNCTIONS


    // MESSAGGI INVIATI

  function messageSent(){
    // Creo il messagio clone in modo da dupplicarlo e cambiare il testo.
    // Creo le variabili per eseguire l'operazione
    var newMessageSent = $('.message_input input').val();
    var cloneMessageSent = $('.template .sent_message').clone();
    console.log(cloneMessageSent);
    console.log(newMessageSent);
    // Cambio il testo del messaggio con il nuovo messaggio immesso dall'utente
    $(cloneMessageSent).find('span').text(newMessageSent);

    // Agiungo l'ora corrente
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var timeNow = addZeroToHours(hour) +':'+ addZeroToMinutes(minutes);

    $(cloneMessageSent).find('.time').text(timeNow);

    // Appendo il messaggio alla chat
    $('.chat_container').append(cloneMessageSent);

    // Resetto l'input della chat
    var newMessageSent = $('.message_input input').val('');
  }

  // MESSAGGI RICEVUTI
  function messageReceived(){

    // Clono il messaggio da ricevere dal template
    var cloneMessageReceived = $('.template .received_message').clone();

    console.log(cloneMessageReceived);
    //Cambio il testo del messaggio nel testo predefinito
    $(cloneMessageReceived).find('span').text('ciao');

    // Agiungo l'ora corrente
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var timeNow = addZeroToHours(hour) +':'+ addZeroToMinutes(minutes);
    // Aggiungo l'ora al messaggio
    $(cloneMessageReceived).find('.time').text(timeNow);
    // Appendo il messaggio alla chat
    $('.chat_container').append(cloneMessageReceived);

  }

  // Funzione per aggiungere lo '0' all'ora
  function addZeroToHours(hour){
    if (hour <= 9) {
      var hourWithZero = '0' + hour;
      return hourWithZero;

    } else {
      return hour;
    }
  }

  // Funzione per aggiungere lo '0' ai minuti
  function addZeroToMinutes(minutes){
    if (minutes <= 9) {

      var minutesWithZero = '0' + minutes;
      return minutesWithZero;

    } else {
      return minutes;
    }
  }











  }
)
