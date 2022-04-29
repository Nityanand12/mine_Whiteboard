socket.on("onmousedown", function(point) {
  const { x, y } = point;  
  tool.beginPath();
  tool.moveTo(x, y);
  undoStack.push(point);
});
socket.on("onmousemove", function(point) {
  const { x, y } = point;
  tool.lineTo(x,y);
  tool.stroke();
  undoStack.push(point);
});

