"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.charsetMinHeight = exports.controlsMinHeight = exports.impreciseHighlight = exports.Values = exports.charset = exports.showGrid = exports.offsetY = exports.offsetX = exports.clipCells = exports.smooth = exports.scale = exports.fontSize = exports.cellHeight = exports.cellWidth = exports.cellsColumn = exports.cellsRow = exports.bitmapHeight = exports.bitmapWidth = exports.fontFile = exports.fontName = exports.tabFontFile = exports.tabFontName = exports.complexInputs = exports.canvas = exports.footer = exports.charsets = exports.controls = exports.preview = exports.header = exports.body = void 0;
//CONTAINERS
exports.body = document.querySelector("body");
exports.header = document.querySelector(".header");
exports.preview = document.querySelector(".preview");
exports.controls = document.querySelector(".controls");
exports.charsets = document.querySelector(".charset");
exports.footer = document.querySelector(".footer");
//CANVAS
exports.canvas = document.querySelector("canvas");
//COMPLEX INPUTS HIGHLIGHTING
exports.complexInputs = document.querySelectorAll(".input-number, .input-textarea");
//INPUTS
exports.tabFontName = document.querySelector("#tabFontName");
exports.tabFontFile = document.querySelector("#tabFontFile");
exports.fontName = document.querySelector("#fontName");
exports.fontFile = document.querySelector("#fontFile");
exports.bitmapWidth = document.querySelector("#bitmapWidth");
exports.bitmapHeight = document.querySelector("#bitmapHeight");
exports.cellsRow = document.querySelector("#cellsRow");
exports.cellsColumn = document.querySelector("#cellsColumn");
exports.cellWidth = document.querySelector("#cellWidth");
exports.cellHeight = document.querySelector("#cellHeight");
exports.fontSize = document.querySelector("#fontSize");
exports.scale = document.querySelector("#scale");
exports.smooth = document.querySelector("#smooth");
exports.clipCells = document.querySelector("#clipCells");
exports.offsetX = document.querySelector("#offsetX");
exports.offsetY = document.querySelector("#offsetY");
exports.showGrid = document.querySelector("#showGrid");
exports.charset = document.querySelector("#charset");
//PRIVATE
const controlsFiller = document.querySelector(".controls .filler");
const charsetFiller = document.querySelector(".charset .filler");
var Values;
(function (Values) {
    Values.controlsMinWidth = parseInt(getComputedStyle(exports.body)
        .getPropertyValue("--controls-min-width")
        .replace("px", ""));
    Values.previewPadding = parseInt(getComputedStyle(exports.canvas.parentElement)
        .padding
        .replace("px", ""));
    Values.controlsMinContent = exports.controls.scrollHeight;
})(Values = exports.Values || (exports.Values = {}));
function numberContainer(complexInput) {
    return (complexInput.parentElement);
}
function impreciseHighlight(complexInput, remainder) {
    if (remainder) {
        numberContainer(complexInput).classList.add("input-imprecise");
    }
    else {
        numberContainer(complexInput).classList.remove("input-imprecise");
    }
}
exports.impreciseHighlight = impreciseHighlight;
function controlsMinHeight() {
    return exports.controls.scrollHeight - controlsFiller.offsetHeight;
}
exports.controlsMinHeight = controlsMinHeight;
function charsetMinHeight() {
    return exports.charsets.scrollHeight - charsetFiller.offsetHeight;
}
exports.charsetMinHeight = charsetMinHeight;