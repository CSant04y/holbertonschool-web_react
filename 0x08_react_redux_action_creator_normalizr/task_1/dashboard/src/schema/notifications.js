import notif from "../../notifications.json";
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, {idAttribute: "guid"});
const notification = new schema.Entity("notifications", {author: user,  context: message,});
const NotificaionSchema = [notification];

const normalizedData = normalize(notif, NotificaionSchema);

console.log(normalizedData);
// Function returns list of objects that match based on UserId and AuthorId
const getAllNotificationsByUser = (userId) => {
    let matchingNotif;

    matchingNotif = Object.values(normalizedData).filter((notif) => notif.author === userId).map(x => x.context);

    return matchingNotif;
}

module.exports = {
    getAllNotificationsByUser,
    normalizedData,
}