

function serch() {
    var search = document.getElementById("serch").value.toLowerCase();
    if (search == "fan's" || search == "fan" || search == "cooling fan's" || search == "cooling fan")
	{window.location.href = "Fan.html";}
	if (search == "graphic card's" || search == "graphic card")
	{window.location.href = "graphic card.html";}
	if (search == "mother bord's" || search == "mother bord" || search == "motherbord's" || search == "motherbord")
	{window.location.href = "motherbord.html";}
	if (search == "processer's" || search == "processer")
	{window.location.href = "Processer.html";}
	if (search == "ram's" || search == "ram")
	{window.location.href = "RAM.html";}
	if (search == "smps's" || search == "smps" || search == "psu" || search == "power supply" || search == "power supply's" || search == "powersupply" || search == "powersupply's")
	{window.location.href = "smps.html";}
	if (search == "ssd's" || search == "ssd")
	{window.location.href = "SSD.html";}
	else
	{alert("!!INVLID INPUT!!");}
}

function buy()
{
	if(document.cookie=="")
	{alert("!!Cart is empty!!");}
	else
	{window.location.href="script/bill.html";}
}

function clrcart()
{var output=""
	if (output=="")
	{
		document.cookie=output;
		alert("Cart Cleared Successfully");
	}
}

function cart()
{
	if(document.cookie=="")
	{
		alert("!!Cart is empty!!");
	}
	else
	{
		alert(document.cookie);
	}
}