
dan = prompt("원하는 단", 2);
confirm("참 거짓을 결정하는 대화");

for (var i = 2; i < 10; i++)
{
	document.write("<br><br>" +i+ "단 <br><br>");
	for (var j = 1; j < 10; j++)
	{
		document.write(i+ "x" +j+ "=" + i*j +"<br>");
	}
	document.wirteln("");
}