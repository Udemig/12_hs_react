/*
 * Abstract Class (Soyut Sınıf)

 * Abstract class'lar sınıflar için birebir şablon görevi görür.
 * Soyut sınıflar sayesinde oluşturucağımız sınıfların ortak özelliklerini ve methodlarını belirleriz.
 
 * Soyut sınıfların doğrudan örnekleri oluşturulamazlar
 * Bundan dolayı soyut sınıflara normal sınıflar için tip tanımı diyebiliriz.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Soyut Sınıf
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
    }
    // method: doğrudan miras alan sınıfa geçer
    TakePhoto.prototype.takePicture = function () {
        console.log("fotoğraf çekiliyor...");
    };
    return TakePhoto;
}());
// Soyut sınıfı miras alan sınıf
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Instagram.prototype.share = function (send) {
        console.log("At\u0131lan hikaye ".concat(send, " ki\u015Fisiyle payla\u015F\u0131l\u0131yor"));
    };
    return Instagram;
}(TakePhoto));
// Soyut sınıfı miras alan sınıf
var Twitter = /** @class */ (function (_super) {
    __extends(Twitter, _super);
    function Twitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Twitter.prototype.share = function (send) {
        console.log("G\u00F6nderilen tweet ".concat(send, " ki\u015Fisiyle payla\u015F\u0131l\u0131yor"));
    };
    return Twitter;
}(TakePhoto));
var tw = new Twitter("arka kamera", "manzara");
tw.takePicture();
tw.share("@ali");
