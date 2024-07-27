

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
	{erpopup("!!INVLID INPUT!!");}
}

function buy()
{
	if(document.cookie=="")
	{erpopup("!!Cart is empty!!");}
	else
	{window.location.href="script/bill.html";}
}

function clrcart()
{var output=""
	if (output=="")
	{
		document.cookie=output;
		popup("Cart Cleared Successfully");
	}
}

function cart()
{
	if(document.cookie=="")
	{
		erpopup("!!Cart is empty!!");
	}
	else
	{
		popup(document.cookie);
	}
}


function popup(message, popupIconUrl, name= 'E-Shop') {
    // Create blurred background
    var blurredBackground = document.createElement('div');
    blurredBackground.className = 'blurred-background';
    document.body.appendChild(blurredBackground);
    
    // Create popup box
    var popupBox = document.createElement('div');
    popupBox.className = 'custom-popup';
    
    // Create popup header
    var popupHeader = document.createElement('div');
    popupHeader.className = 'custom-popup-header';
    var img = document.createElement('img');
    img.src = "shop.ico"; // Use the correct URL
    var span = document.createElement('span');
    span.textContent = "E-Shop";
    popupHeader.appendChild(img);
    popupHeader.appendChild(span);
    
    // Create popup body
    var popupBody = document.createElement('div');
    popupBody.className = 'custom-popup-body';
    popupBody.textContent = message;
    
    // Create popup footer
    var popupFooter = document.createElement('div');
    popupFooter.className = 'custom-popup-footer';
    var button = document.createElement('button');
    button.textContent = 'OK';
    button.onclick = function() {
        document.body.removeChild(popupBox);
        document.body.removeChild(blurredBackground);
    };
    popupFooter.appendChild(button);
    
    // Append elements to popup box
    popupBox.appendChild(popupHeader);
    popupBox.appendChild(popupBody);
    popupBox.appendChild(popupFooter);
    
    // Append popup box to body
    document.body.appendChild(popupBox);
    
    // Display popup and blurred background
    popupBox.style.display = 'block';
    blurredBackground.style.display = 'block';
}

function erpopup(message, popupIconUrl, name= 'E-Shop') {
    // Create blurred background
    var blurredBackground = document.createElement('div');
    blurredBackground.className = 'blurred-background';
    document.body.appendChild(blurredBackground);
    
    // Create popup box
    var popupBox = document.createElement('div');
    popupBox.className = 'ercustom-popup';
    
    // Create popup header
    var popupHeader = document.createElement('div');
    popupHeader.className = 'ercustom-popup-header';
    var img = document.createElement('img');
    img.src = "shop.ico"; // Use the correct URL
    var span = document.createElement('span');
    span.textContent = "E-Shop";
    popupHeader.appendChild(img);
    popupHeader.appendChild(span);
    
    // Create popup body
    var popupBody = document.createElement('div');
    popupBody.className = 'custom-popup-body';
    popupBody.textContent = message;
    
    // Create popup footer
    var popupFooter = document.createElement('div');
    popupFooter.className = 'ercustom-popup-footer';
    var button = document.createElement('button');
    button.textContent = 'OK';
    button.onclick = function() {
        document.body.removeChild(popupBox);
        document.body.removeChild(blurredBackground);
    };
    popupFooter.appendChild(button);
    
    // Append elements to popup box
    popupBox.appendChild(popupHeader);
    popupBox.appendChild(popupBody);
    popupBox.appendChild(popupFooter);
    
    // Append popup box to body
    document.body.appendChild(popupBox);
    
    // Display popup and blurred background
    popupBox.style.display = 'block';
    blurredBackground.style.display = 'block';
}