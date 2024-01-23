const f = document.querySelector("#message-content");

// if(f) {
    f.addEventListener('submit', function(e) {
        e.preventDefault();

        const msg = document.querySelector('#msg');
        const popup = document.querySelector('#popup');
        const lastmsg = document.querySelector('.lastmsg');

        if (msg.value === '') {
            popup.classList.add('show');
            setTimeout(function() {
                popup.classList.remove('show');
            }, 4000);
        } else {
            const str = msg.value;
            lastmsg.textContent = str;
            msg.value = "";
        }
    });
// } else {
//     console.error("Form with ID 'message-content' not found.");
// }

