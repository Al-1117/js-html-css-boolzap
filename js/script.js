$(document).ready(
  function(){
    // Core il messagio clone in modo da dupplicarlo e cambiare il testo.
    var cloneMessage = $('.template .sent_message').clone();
    console.log();
    var newMessage = $(cloneMessage).find('span').text('Ciao');
    $('.chat_container').append(newMessage);














  }
)
