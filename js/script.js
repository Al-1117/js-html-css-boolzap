$(document).ready(
  function(){


    $(document).on('click', '#send_button',
      function(){
        // Core il messagio clone in modo da dupplicarlo e cambiare il testo.
        // Creo le variabili per eseguire l'operazione
        var newMessage = $('.message_input input').val();
        var cloneMessage = $('.template .sent_message').clone();

      console.log(cloneMessage);
      console.log(newMessage);
      // Cambio il testo del messaggio con il nuovo messaggio immesso dall'utente
      $(cloneMessage).find('span').text(newMessage);
      // Appendo il messaggio alla chat
      $('.chat_container').append(cloneMessage);




    }
    )














  }
)
