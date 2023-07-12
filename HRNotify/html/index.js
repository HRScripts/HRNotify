$(function () {
  const sound = new Audio('sound.mp3');
  sound.volume = 0.8;

  window.addEventListener('message', function (event) {
    const type = event.data.type;
    const msg = event.data.text;
    const time = event.data.time;

    const notification = $('<div class="notification">')
      .addClass(type)
      .text(msg)
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

    // Animation
    notification.css({ top: '-100%', right: '0' });
    notification.animate({ top: '0' }, 500, function () {
      setTimeout(() => {
        notification.animate({ top: '-100%', right: '-100%' }, 500, function () {
          $(this).remove();
        });
      }, time || 4500);
    });
  }, false);
});
