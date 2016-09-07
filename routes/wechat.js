var express = require('express');
var router = express.Router();

var wechat = require('wechat');
var config = require('../config.js');
 console.log(config);


router.use('/', wechat(config, function (req, res, next) {


    console.log("+++++++++wechat call: ", req.weixin);

    // 微信输入信息都在req.weixin上
    var message = req.weixin;// /wechat?signature=08b7a26032f619ae6bd4fd298710cfcbb3e7214d&timestamp=1473204671&nonce=2123075116&openid=oGVeOwI4PPhEM7bsrvmNXJJ5AMwc
    if (message.FromUserName === 'diaosi') {
        // 回复屌丝(普通回复)
        res.reply('hehe');
    } else if (message.FromUserName === 'text') {
        //你也可以这样回复text类型的信息
        res.reply({
            content: 'text object',
            type: 'text'
        });
    } else if (message.FromUserName === 'bochuxt') {
        // 回复一段音乐
        res.reply({
            type: "music",
            content: {
                title: "来段音乐吧",
                description: "一无所有",
                musicUrl: "http://mp3.com/xx.mp3",
                hqMusicUrl: "http://mp3.com/xx.mp3",
                thumbMediaId: "thisThumbMediaId"
            }
        });
    } else {
        // 回复高富帅(图文回复)
        var url='http://203.195.235.76/jssdk/'//http://52.53.226.151:3000/'
        //
        //res.redirect(url);


        res.reply([
            {
                title: '你来我家接我吧',
                description: '这是女神与高富帅之间的对话',
                picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
                url:url// 'http://nodeapi.cloudfoundry.com/'
            }
        ]);
    }
}));


//https://github.com/node-webot/wechat
//
//app.use('/wechat', wechat('some token').text(function (message, req, res, next) {
//    // TODO
//}).image(function (message, req, res, next) {
//    // TODO
//}).voice(function (message, req, res, next) {
//    // TODO
//}).video(function (message, req, res, next) {
//    // TODO
//}).location(function (message, req, res, next) {
//    // TODO
//}).link(function (message, req, res, next) {
//    // TODO
//}).event(function (message, req, res, next) {
//    // TODO
//}).device_text(function (message, req, res, next) {
//    // TODO
//}).device_event(function (message, req, res, next) {
//    // TODO
//}).middlewarify());

module.exports = router;
