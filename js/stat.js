'use strict';

var getMaxValueArray = function (array) {
  var max = -1;
  var time;
  var arrayLength;
  var i;
  for (i = 0, arrayLength = array.length; i < arrayLength; i++) {
    time = array[i];
    if (time > max) {
      max = time;
    }
  }
  return max;
};
var drawRectangle = function (context, color, points){
  context.fillStyle = color;
  context.fillRect(points[0], points[1], points[2], points[3]);
};
var writeText = function(context, color, font, points){
  var arrayLength;
  var i;
  context.fillStyle = color;
  context.font = font;
  for (i = 0, arrayLength = points.length; i < arrayLength; i++) {
    context.fillText(points[i].text, points[i].coordX, points[i].coordY);
  }
};
var getColor = function (name, context) {
  var color = (name === 'Вы') ? context.strokeStyle = 'rgba(255, 0, 0, 1)' : context.strokeStyle = 'rgba(52, 26, 145 , ' + (Math.random() + 0.2) + ')';
  return color;
}
window.renderStatistics = function (ctx, names, times) {
  var texts = [
    {'text': 'Ура вы победили!', 'coordX': 120, 'coordY': 45},
    {'text': 'Список результатов:', 'coordX': 120, 'coordY': 65}
  ];
  var elemetValues = getMaxValueArray(times);
  var histogramHeight = 150;
  var startPoint = 0;
  var step = histogramHeight / (elemetValues - startPoint);
  var indent = 0;
  var pointTop = 250;
  drawRectangle(ctx, '0, 0, 0, 0.7', [110, 20, 420, 270]);
  drawRectangle(ctx, 'rgba(255, 255, 255, 1)', [100, 10, 420, 270]);
  writeText(ctx, 'rgba(0, 0, 0, 1)', '16px PT Mono', texts);
  for (var i = 0; i < times.length; i++) {
    ctx.beginPath();
    ctx.lineWidth = 40;
    getColor(names[i], ctx);
    ctx.moveTo(140 + indent, pointTop);
    ctx.lineTo(140 + indent, pointTop - times[i] * step);
    ctx.stroke();
    ctx.fillText(names[i], 120 + indent, pointTop + 20);
    ctx.fillText(times[i].toFixed(0), 120 + indent, pointTop - 10 - times[i] * step);
    indent += 90;
  }
};
