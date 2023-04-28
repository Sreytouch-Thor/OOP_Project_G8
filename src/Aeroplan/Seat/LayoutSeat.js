"use strict";
exports.__esModule = true;
exports.Layout = void 0;
var Layout = /** @class */ (function () {
    function Layout(row, column) {
        this.seat = [];
        this.row = row;
        this.coloumn = column;
    }
    Layout.prototype.getSeat = function (seat) {
        this.seat.push(seat);
    };
    return Layout;
}());
exports.Layout = Layout;
