const $ = require("jquery");
const Mustache = require("mustache");
import reportData from "./dataset";

function reportsWidget() {
  const template = $("#annual-reports").html();
  let text = Mustache.render(template, reportData);
  $("#reports").html(text);
}

reportsWidget();
