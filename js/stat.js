'use strict';

var maxValueArray = function (arr) {
  var max = -1; //почему здесь значение именно -1, а ноль нельзя, в чем разница?
  var maxIndent = -1;
  for (var i = 0; i < arr.length; i++) {
    var time = arr[i];
    if (time > max) {
      max = time;
      maxIndent = i;
    }
  }
  return [max, maxIndent];
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 45);
  ctx.fillText('Список результатов:', 120, 65);

  var elemetValues = maxValueArray(times);
  var histogramHeight = 150;
  var startPoint = 0; // и вот этот ноль зачем не очень поняла
  var step = histogramHeight / (elemetValues[0] - startPoint);

  var indent = 0;
  var pointTop = 250;

  for (var i = 0; i < times.length; i++) {
    ctx.beginPath();
    ctx.lineWidth = 40;
    if (names[i] === 'Вы') {
      ctx.strokeStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.strokeStyle = 'rgba(52, 26, 145 , ' + (Math.random() + 0.2) + ')';
    }
    ctx.moveTo(140 + indent, pointTop);
    ctx.lineTo(140 + indent, pointTop - times[i] * step);
    ctx.stroke();
    ctx.fillText(names[i], 120 + indent, pointTop + 20);
    ctx.fillText(times[i].toFixed(0), 120 + indent, pointTop - 10 - times[i] * step);
    indent += 90;
  }
};
