var log = Math.log
var exp = Math.exp

function showcoords (e) {
    var pos = $('#graph').position();
    var x = e.pageX - pos.left;
    var y = e.pageY - pos.top;
    $('#coords').text('X='+x+' Y='+y);
}

function addcoords(e) {
    var pos = $('#graph').position();
    var x = e.pageX - pos.left;
    var y = e.pageY - pos.top;
    $('#graph').drawEllipse({
	fillStyle: '#f00',
	x: x,
	y: y,
	width: 5,
	height: 5,
    });
    points.push([x,y]);
    recompute();
}

function float2string(f) {
    if (f%1) {
	return f+'';
    } else {
	return f+'.0';
    }
}

function recompute() {
    if (points.length<2) {
	return;
    }
    var vx0 = parseFloat($('#x0').val());
    var vy0 = parseFloat($('#y0').val());
    var vx1 = parseFloat($('#x1').val());
    var vy1 = parseFloat($('#y1').val());
    var xlog = $('#xlog').prop('checked');
    var ylog = $('#ylog').prop('checked');
    var x0 = points[0][0];
    var y0 = points[0][1];
    var x1 = points[1][0];
    var y1 = points[1][1];
    var div = $('#output');
    div.text('');
    for (var i=2; i<points.length; i++) {
	var x = points[i][0];
	var y = points[i][1];
	if (xlog) {
	    var vx = vx0 * exp(log(x/x0)/log(x1/x0)*log(vx1/vx0));
	} else {
	    var vx = vx0 + (x-x0)/(x1-x0)*(vx1-vx0);
	}
	if (ylog) {
	    var vy = vy0 * exp(log(y/y0)/log(y1/y0)*log(vy1/vy0));
	} else {
	    var vy = vy0 + (y-y0)/(y1-y0)*(vy1-vy0);
	}
	div.append(float2string(vx)+' '+float2string(vy)+'<br/>');
    }
}

function setupcanvas () {
    var imgw = $('#graph').width();
    var imgh = $('#graph').height();
    var imgsrc = $('#graph').attr('src');
    var canvas = $('<canvas>');
    canvas.attr('width',imgw);
    canvas.attr('height',imgh);
    canvas.drawImage({source: imgsrc, fromCenter: false});
    var parent = $('#graph').parent();
    $('#graph').remove();
    parent.append(canvas);
    canvas.attr('id','graph');
    setupmouse();
}

function setupimage () {
    var imgname = $('#file').val();
    var img = $('<img>');
    img.attr('id','graph');
    img.attr('src',imgname);
    $('#graphcontainer').children().remove();
    $('#graphcontainer').append(img);
    setupcanvas();
}

function setupmouse () {
    $('#graph').mousemove(showcoords);
    $('#graph').click(addcoords);
    $('#graph').css('cursor','crosshair');
}

var points = [];
$('#file').change(setupimage);
$('#coords').text('JavaScript loaded.');

