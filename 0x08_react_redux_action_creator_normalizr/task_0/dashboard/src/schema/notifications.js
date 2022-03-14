import notif from "../../notifications.json";

// Function returns list of objects that match based on UserId and AuthorId
const getAllNotificationsByUser = (userId) => {
    let matchingNotif;

    matchingNotif = notif.filter((notif) => notif.author.id === userId).map(x => x.context);

    return matchingNotif;
}

module.exports = {
    getAllNotificationsByUser,
}