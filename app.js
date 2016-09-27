'use strict';

var storeHours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];
var allStoresArray = [];

function Store(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerSale){
  this.storeHours = storeHours;
  this.locationName = locationName;
  this.ulIdEl = document.getElementById(locationName);
  this.bodyIdEl = document.getElementById('body');
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.randCustPerHour = [];
  this.results = [];
  this.totalCookiesSoldPerHour = [];
  this.totalDailySales = null;

  //Methods
  this.randCustPerHourGen = function() {
    for (var i = 0; i < storeHours.length; i++){
      // is for loop running?
      // console.log(i);
      this.randCustPerHour[i] = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      console.log('Random Customers Per Hour at ' + this.locationName + ' at ' + storeHours[i] + ': ' + this.randCustPerHour[i]);
    }
  };

  this.totalCookiesSoldPerHourMethod = function() {
    this.randCustPerHourGen();
    for (var i = 0; i < storeHours.length; i++){
      this.totalCookiesSoldPerHour[i] = this.avgCookiesPerSale * this.randCustPerHour[i];
      console.log('Total Cookies Sold Each Hour at ' + this.locationName + ' at ' + storeHours[i] + ': ' + this.totalCookiesSoldPerHour[i]);
    }
  };

  this.totalDailySalesMethod = function() {
    this.totalCookiesSoldPerHourMethod();
    for (var i = 0; i < this.totalCookiesSoldPerHour.length; i++){
      this.totalCookiesSoldPerHour[i] = Math.ceil(this.totalCookiesSoldPerHour[i]);
      this.totalDailySales += this.totalCookiesSoldPerHour[i] ;
    }
    console.log('Total Cookies Sold Today at ' + this.locationName + ': ' + this.totalDailySales);
  };

  this.render = function() {
    this.totalDailySalesMethod();
    var h1El = document.createElement('h1');
    h1El.textContent = this.locationName;
    this.bodyIdEl.insertBefore(h1El, this.ulIdEl);
    for(var i = 0; i < this.totalCookiesSoldPerHour.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = storeHours[i] + ': ' + this.totalCookiesSoldPerHour[i] + ' cookies';
      this.ulIdEl.appendChild(liEl);
    };

    var liElTwo = document.createElement('li');
    liElTwo.textContent = 'Total Cookies Sold Today: ' + this.totalDailySales + ' cookies';
    this.ulIdEl.appendChild(liElTwo);
  };
  allStoresArray.push(this);
}

function AllStoresObj(locationName) { //eslint-disable-line
  this.locationName = locationName;
  this.totalDailySales = 0;
  this.ulIdEl = document.getElementById(locationName);
  this.bodyIdEl = document.getElementById('body');
  this.totalDailySalesRender = function(){
    for (var i = 0; i < allStoresArray.length; i++){
      allStoresArray[i].render();
      this.totalDailySales += allStoresArray[i].totalDailySales;
    }
    var h1El = document.createElement('h1');
    h1El.textContent = this.locationName;
    this.bodyIdEl.insertBefore(h1El, this.ulIdEl);
    var liEl = document.createElement('li');
    liEl.textContent = this.totalDailySales + ' cookies sold at ' + this.locationName + ' today!';
    this.ulIdEl.appendChild(liEl);
  };
}

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3); //eslint-disable-line
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2); //eslint-disable-line
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7); //eslint-disable-line
var capHill = new Store('Capitol Hill', 20, 38, 2.3); //eslint-disable-line
var alki = new Store('Alki', 2, 16, 4.6); //eslint-disable-line

var allStores = new AllStoresObj('All Stores');
allStores.totalDailySalesRender();
