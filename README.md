# Egg.js
A JavaScript API for calculating boiling time for eggs

## Usage
The JS-Class "Egg" has 4 properties:

* weight: Gewichtsklasse (s=50,m=__58__,l=68,xl=80)
* height: m üNN (default=__300__)
* tStart: temperature at start (default=__7__)
* tYolk: consistency of the yolk (sehr weich=62,wachsweich=__72__,eher hart=80)  

```
    var egg = new Egg();
    egg.timePretty() // should return 06:38

    egg.weight = 66;
    egg.timePretty() // should return 07:14
```
