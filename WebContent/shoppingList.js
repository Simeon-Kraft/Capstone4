var item1 = { name: "apple", price: 1.75 };
var item2 = { name: "banana", price: 1.50 };
var item3 = { name: "carrot", price: 1.25 };
var item4 = { name: "dragonfruit", price: 2 };
var item5 = { name: "eggplant", price: 3.25 };
var item6 = { name: "fish", price: 5.99 };

var food = [item1, item2, item3, item4];  // food array
var cart = []; // shopping cart
var price = document.getElementById("price");

function getTotal(){
	var total = 0;

	for (var i = 0; i < cart.length; i++){
		total = total + cart[i].price;
	}
	return total;
}

var button1 = document.getElementById("add1");
var qt1 = document.getElementById("qt1");
add1.onclick = function(){
	if (qt1.textContent == 0){
		alert("Out of stock! Sorry!")
		return;
	}
	cart.push(item1);
	qt1.textContent = qt1.textContent - 1;
	price.textContent = getTotal().toFixed(2);
}

var button2 = document.getElementById("add2");
var qt2 = document.getElementById("qt2");
add2.onclick = function(){
	if (qt2.textContent == 0){
		alert("Out of stock! Sorry!")
		return;
	}
	cart.push(item2);
	qt2.textContent = qt2.textContent - 1;
	price.textContent = getTotal().toFixed(2);
}

var button3 = document.getElementById("add3");
var qt3 = document.getElementById("qt3");
add3.onclick = function(){
	if (qt3.textContent == 0){
		alert("Out of stock! Sorry!")
		return;
	}
	cart.push(item3);
	qt3.textContent = qt3.textContent - 1;
	price.textContent = getTotal().toFixed(2);
}

var button4 = document.getElementById("add4");
var qt4 = document.getElementById("qt4");
add4.onclick = function(){
	if (qt4.textContent == 0){
		alert("Out of stock! Sorry!")
		return;
	}
	cart.push(item4);
	qt4.textContent = qt4.textContent - 1;
	price.textContent = getTotal().toFixed(2);
}

var button5 = document.getElementById("add5");
var qt5 = document.getElementById("qt5");
add5.onclick = function(){
	if (qt5.textContent == 0){
		alert("Out of stock! Sorry!")
		return;
	}
	cart.push(item5);
	qt5.textContent = qt5.textContent - 1;
	price.textContent = getTotal().toFixed(2);
}

var button6 = document.getElementById("add6");
var qt6 = document.getElementById("qt6");
add6.onclick = function(){
	if (qt6.textContent == 0){
		alert("Out of stock! Sorry!")
		return;
	}
	cart.push(item6);
	qt6.textContent = qt6.textContent - 1;
	price.textContent = getTotal().toFixed(2);
}

function getItems(){
	var myItems = [];
	for (var i = 0; i < cart.length; i++){
		myItems.push(" " + cart[i].name + " ");
	}
	return myItems;
}

var checkout = document.getElementById("checkout");
checkout.onclick = function(){
	var total = (getTotal() * .06) + getTotal();
	var cart = getItems();
	alert("Your cart: " + cart + "\nTotal: $" + total.toFixed(2));
}









