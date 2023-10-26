$(function () {
  const sound = new Audio('sound.mp3');
  sound.volume = 0.8;


  window.addEventListener('message', function (event) {
    const type = event.data.type;
    const msg = event.data.text;
    const time = event.data.time;
    const position = event.data.position
   
    const notification = $('<div class="notification">')
      .addClass(type)
      .appendTo('#notifications');

    // Add border class based on the notification type
    switch (type) {
      case 'success':
        notification.addClass('success-border');
        sound.play();
        break;
      case 'info':
        notification.addClass('info-border');
        sound.play();
        break;
      case 'error':
        notification.addClass('error-border');
        sound.play();
        break;
      case 'warning':
        notification.addClass('warning-border');
        sound.play();
        break;
      default:
        break;
    }

    // Add type label
    $('<div class="notification-type">')
      .text(type)
      .prependTo(notification);

    // Add message text
    $('<div class="notification-text">')
      .text(msg)
      .appendTo(notification);

    // Animation
    notification.css({ top: '-100%', right: '0' });
    notification.animate({ top: '0' }, 500);
    
    notification.css({ top: '', right: '', bottom: '', left: '' });

switch (position) {
    case 'top-right':
        notification.css({ top: '0px', right: '-102rem'});
        break;
    case 'center-right':
        notification.css({ bottom: '0px', left: '102rem', 'margin-top': '30rem' });
        break;
    case 'bottom-right':
      notification.css({ bottom: '0px', left: '102rem', 'margin-top': '60rem' });
        break;
    case 'frombelow-right':
          notification.css({bottom: '0px', left: '102rem', 'margin-top': '60rem'})
          break;
    case 'top-left':
      notification.css({bottom: '0px', left: '0px'});
        break;
    case 'left-center':
      notification.css({bottom: '0px', left: '0px', 'margin-top': '30rem'});
        break;
        case 'frombelow-left':
      notification.css({bottom: '0px', left: '0px', 'margin-top': '60rem'});
        break;
    // Add other possible values ​​according to your needs
    // ...
    default:
        let message = 'You have not set a value so it will automatically set a value top-right changing it'
        console.log(message)
        notification.css({ top: '0px', right: '-102rem' });
        break;
  }



    // Remove notification after time
    setTimeout(() => {
      notification.animate({ top: '-100%'}, 500, function () {
        $(this).remove();
      });
    }, time || 4500);
  }, false);
});
