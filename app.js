'use strict';

var storeHours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];
var allStoresArray = [];
var tableIdEl = document.getElementById('salmon-cookies');
var headerRow = document.createElement('th');
headerRow.textContent = ' ';
tableIdEl.appendChild(headerRow);

function Store(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerSale){
  this.storeHours = storeHours;
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.randCustPerHour = [];
  this.totalCookiesSoldPerHour = [];
  this.totalCookiesRow = [];
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
      this.totalCookiesSoldPerHour[i] = Math.ceil(this.avgCookiesPerSale * this.randCustPerHour[i]);
      console.log('Total Cookies Sold Each Hour at ' + this.locationName + ' at ' + storeHours[i] + ': ' + this.totalCookiesSoldPerHour[i]);
      this.totalCookiesRow.push(this.totalCookiesSoldPerHour[i]);
    }
  };

  this.totalDailySalesMethod = function() {
    this.totalCookiesSoldPerHourMethod();
    for (var i = 0; i < this.totalCookiesSoldPerHour.length; i++){
      this.totalCookiesSoldPerHour[i] = this.totalCookiesSoldPerHour[i];
      this.totalDailySales += this.totalCookiesSoldPerHour[i] ;
    }
    this.totalCookiesRow.push(this.totalDailySales);
    console.log('Total Cookies Sold Today at ' + this.locationName + ': ' + this.totalDailySales);
  };

  this.render = function() {
    this.totalDailySalesMethod();
  };
  allStoresArray.push(this);
}

for (var i = 0; i < storeHours.length; i++){
  var headerRowTwo = document.createElement('th');
  headerRowTwo.textContent = storeHours[i];
  tableIdEl.appendChild(headerRowTwo);
};
var headerRowTwo = document.createElement('th');
headerRowTwo.textContent = 'Total';
tableIdEl.appendChild(headerRowTwo);

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3); //eslint-disable-line
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2); //eslint-disable-line
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7); //eslint-disable-line
var capHill = new Store('Capitol Hill', 20, 38, 2.3); //eslint-disable-line
var alki = new Store('Alki', 2, 16, 4.6); //eslint-disable-line



function AllStoresObj(locationName) { //eslint-disable-line
  this.locationName = locationName;
  this.totalDailySales = 0;
  this.totalDailySalesRender = function(){

    //all stores console.logging
    for (var i = 0; i < allStoresArray.length; i++){
      allStoresArray[i].render();
      this.totalDailySales += allStoresArray[i].totalDailySales;
    };


    // var tdEl = document.createElement('td');
    // tdEl.textContent = this.totalDailySales;
    // this.trIdEl.appendChild(tdEl);
    // var h1El = document.createElement('tr');
    // h1El.textContent = this.locationName;
    // this.bodyIdEl.appendChild(this.ulIdEl);
    // var liEl = document.createElement('td');
    // liEl.textContent = this.totalDailySales + ' cookies sold at ' + this.locationName + ' today!';
    // this.ulIdEl.appendChild(liEl);
  };
}


var allStores = new AllStoresObj('All Stores');
allStores.totalDailySalesRender();

for(var i = 0; i < allStoresArray.length; i++){
  var trEl = document.createElement('tr');
  trEl.textContent = allStoresArray[i].locationName;
  tableIdEl.appendChild(trEl);
  for(var j = 0; j < storeHours.length + 1; j++){
    var tdEl = document.createElement('td');
    tdEl.textContent = allStoresArray[i].totalCookiesRow[j];
    trEl.appendChild(tdEl);
  };
};
