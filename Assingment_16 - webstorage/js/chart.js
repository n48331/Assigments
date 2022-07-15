function draw() {
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var n = document.getElementById('num').value;
    // var n = '56,60,45,80,90,100,280';
    var sum = 0;
    var values = n.split(',');
    for (let i = 0; i < values.length; i++) {
        sum+= Number(values[i])        
    }
    ctx.font ='bold 12pt Arial'
    var width = 50;
    var x = 50;//first bar position
    for (var i = 0; i < values.length; i++) {
        var h = (values[i]/sum)*canvas.height ;
        // var grd = ctx.createLinearGradient(x,200,200,550);
        var grd = ctx.createLinearGradient(0,0,0,canvas.height+100);
        grd.addColorStop(0.6,"orange")
        grd.addColorStop(0.5,"red")
        grd.addColorStop(0.85,"palegreen")
        ctx.fillStyle = grd;
        ctx.fillRect(x, canvas.height - h, width, h);
        x = x + width + 50;
        ctx.fillStyle = 'white';
        ctx.fillText(values[i], x - 80, canvas.height - h + 20);
    }

}
