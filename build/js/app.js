(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function(){
  setInterval(updateTime, 1000);
  function updateTime() {
    $('#time').text(moment().format("h:mm:ss a"));
  };

  $('#alarmForm').submit(function(event){
    event.preventDefault();
    var hour = (moment().format('hh'));
    var minute = (moment().format('mm'));
    var meridian = (moment().format('a'));
    var currentTime = hour + ":" + minute + " " + meridian;

    var alarmHour = $('select#hour').val();
    var alarmMinute = $('select#minute').val();
    var alarmMeridian = $('select#meridian').val();
    var alarm = alarmHour + ":" + alarmMinute + " " + alarmMeridian;

    setInterval(wakeUp, 1000);
    function wakeUp() {
      if (currentTime === alarm) {
        alert("time to wake up!");
      }
      else {
        console.log("keep sleeping zzz");
      }
    };
  });
});



},{}]},{},[1]);
