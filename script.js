const markread = document.querySelector('#markread');
const numunread = document.querySelector('.numunread');
const notifs = document.querySelectorAll('.notif');
let count = 0;

notifs.forEach((notif) => {
    const unread = notif.querySelector('span.unread');
    if (unread != null) {
        count++;
    }
    // console.log(unread);
})

numunread.innerHTML = count;
function clearNotifications(event) {
    event.preventDefault();
    notifs.forEach((notif) => {
        const unread = notif.querySelector('span.unread');
        if (unread != null) {
            unread.remove();
            // console.log(unread);
            // unread.style.display = 'none';
        }
    })
    let count = 0;
    notifs.forEach((notif) => {
        const unread = notif.querySelector('span.unread');
        if (unread != null) {
            count++;
        }
    })

    numunread.innerHTML = count;
}