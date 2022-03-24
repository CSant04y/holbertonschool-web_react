import notif from "../../notifications.json";
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, {idAttribute: "guid"});
const notification = new schema.Entity("notifications", {author: user,  context: message,});
const NotificaionSchema = [notification];

const normalizedData = normalize(notif, NotificaionSchema);

const getAllNotificationsByUser = (userId) => {
    let matchingNotif;
    const guid = Object.values(normalizedData.entities.notifications).filter((x) => x.author === userId).map(x => x.context);
    let newArray = [];
    for (const item of guid) {
        console.log(item)
        newArray = newArray.concat(Object.values(normalizedData.entities.messages).filter((x) => x.guid === item));
    }   

    return newArray;
}

module.exports = {
    getAllNotificationsByUser,
    normalizedData,
}