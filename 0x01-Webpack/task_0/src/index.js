import $ from "jquery";
let paragraphs = ["Holberton Dashboard", "Dashboard data for the students", "Copyright - Holberton School"];

for (let i = 0; i < paragraphs.length; i++) {
    let p = $("p").add(paragraphs[i])
    p.appendTo.$(document.body);
}