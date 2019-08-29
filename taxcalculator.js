var ques= prompt('Are these compounding taxes?(Yes or No)');
if (ques.toLowerCase() === 'yes' ){alert('Lets calculate your new base price. compounding taxes');
var taxRate=prompt ('Please enter your the first tax that will be applied to the base price in 1.X format');
var taxRate=parseFloat(taxRate);
var taxRate2=prompt('Pleae enter the second tax rate that will be applied to the base + first tax in 1.X format');
var taxRate2=parseFloat(taxRate2);

var Price= prompt ('Please enter the out the door price.');
var Price=parseFloat(Price);

var oldBase= prompt('Please enter your current base price.');
var oldBase=parseFloat(oldBase);

var message='Your new base price is'

var divide= Price/taxRate2;
var divide1=divide/taxRate;
var div= Price.toFixed(2) + ' ';
var div1= taxRate.toFixed(2) + ' ';

var finalPrice= divide1.toFixed(2)
var newPrice= finalPrice

var difference= newPrice-oldBase
var difference= parseFloat(difference);
var percentage= ((difference/oldBase)*100).toFixed(2);
var percentage= parseFloat(percentage);


document.write(message + '  $' + finalPrice+'.');
document.write('<br>');
document.write('The change is '+percentage+ '%.');
                                  } else {
  alert('Lets calculate your new base price. Exclusive only taxes');
var taxRate=prompt ('Please enter your new tax rate total across exclusive taxes added together in 1.X format');
var taxRate=parseFloat(taxRate);

var Price= prompt ('Please enter the out the door price.');
var Price=parseFloat(Price);

var message='your new base price is'

var divide= Price/taxRate;
var div= Price + ' ';
var div1= taxRate + ' ';
div+= ' / '+div1+ '= ';
document.write(message);
document.write('<br>');
document.write(div+divide.toFixed(2));}
