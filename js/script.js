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



        // SCROLL DEI NUOVI MESSAGGI IN AUTOMATICO

        $('.chat_container').scrollTop($('.chat_container').prop('scrollHeight'));

      }
    );


    // INVIO DEI MESSAGGI TRAMITE L'APPOSITO TASTO

    $('.message_input input').keyup(
      function(){
        // Se il trasto premuto corrisponde all'invio trovandosi nell'input
      if (event.wich == 13  || event.keyCode == 13) {
        messageSent();
      }

    })

    // RICERCA NELLA CHAT
    // Evento Premendo qualsiasi tasto
    $('.search input').keyup(
    function(){
      // Ricerca nella chat
      $('.single_chat').each(function(){
        // Prendo il valore del testo immesso dall'utente e lo standarizzo
        var searchText = $('.search input').val().toLowerCase();
        // Prendo il valore del nome del contatto e lo standarizzo
        var searchElement = $(this).find('.contact_name').text().toLowerCase();

        console.log($(this).find('.contact_name'));
        // Confronto se nome del contatto cercato è incluso nel testo della ricerca
        if (searchElement.includes(searchText)) {
          // Se sì, lo mostro
          $(this).show();
          // Altrimenti lo bascondo
        } else {
          $(this).hide();
        };
      }
    );






    }
  );

  // COMPARSA E SCOMPARSA DELLA DROPDOWN DELLE OPZIONI DEL MESSAGGIO

  // Comparsa dell'icona freccia all'entrata del messaggio
  $(document).on('mouseenter', '.message_baloon',
    function(){

      $(this).find('.arrow').show();

    }
  );

  // Scomparsa dell'icona freccia all'entrata del messaggio

  $(document).on('mouseleave', '.message_baloon',
    function(){
      $(this).find('.arrow').hide();
    }

  );


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
  // Eliminazione dei messaggi cliccando sul tasto elimina
  $(document).on('click', '#delete',
  function (){
    $(this).parentsUntil('.message_baloon').remove();

  });

  //Associazione dei contatti con le relative chat

  $(document).on('click', '.single_chat',
  function (){
    // Seleziono l'elemento della lista contatti tramite l'attributo
    var singleConversation = $(this).attr('chat_contact');

    // Rimuovo la classe active alle chat
    $('.chat_history').removeClass('active');

    // Seleziono la chat corrente
    var currentChat = $('.chat_history[chat_history="'+ singleConversation +'"]');

    // Aggiungo la classe active alla chat corrente
    currentChat.addClass('active');

  }
);


    // ****************** FUNCTIONS **************************//

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
    var timeNow = addZeroBefore(hour) +':'+ addZeroBefore(minutes);

    $(cloneMessageSent).find('.time').text(timeNow);

    // Appendo il messaggio alla chat
    $('.chat_history.active').append(cloneMessageSent);

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
    var timeNow = addZeroBefore(hour) +':'+ addZeroBefore(minutes);
    // Aggiungo l'ora al messaggio
    $(cloneMessageReceived).find('.time').text(timeNow);
    // Appendo il messaggio alla chat
    $('.chat_history.active').append(cloneMessageReceived);

  }

  // Funzione per aggiungere lo '0' prima dell'ora / minuto
  function addZeroBefore(number){
    if (number <= 9) {
      var numberWithZero = '0' + number;
      return numberWithZero;

    } else {
      return number;
    }
  }



  }
)
