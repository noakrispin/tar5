import {model} from "./model.js"
const $content = document.querySelector(".content"); //$ object of document model

const contentHtml = model.map(b=>b.toHTML()).join("")

/**
 * this function dynamically renders HTML content
 *  based on the data and type specified in the model array 
 * and appends it to the $content element.
 */

$content.insertAdjacentHTML("beforeend", contentHtml);

