var i = prompt("원하는 단", 0);

	document.write(+i+ "단 <br><br>");
	for (var j = 1; j < 10; j++)
	{
		document.write(i+ "x" +j+ "=" + i*j +"<br>");
	}