'use strict';

var storeHours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];
var allStoresArray = [];
var salmonCookiesInput = document.getElementById('salmon-cookies-input');
var totalsCalcInput = document.getElementById('totals-calculation');
var tableIdEl = document.getElementById('salmon-cookies');
var totalHourlyCookies = [];
var totalDailySales = null;
var firstAndPike = new Store('1st and Pike', 23, 65, 6.3); //eslint-disable-line
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2); //eslint-disable-line
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7); //eslint-disable-line
var capHill = new Store('Capitol Hill', 20, 38, 2.3); //eslint-disable-line
var alki = new Store('Alki', 2, 16, 4.6); //eslint-disable-line
var locationName = document.getElementById('storeName'); //eslint-disable-line
var minCustPerHour = document.getElementById('minCustPerHour'); //eslint-disable-line
var maxCustPerHour = document.getElementById('maxCustPerHour'); //eslint-disable-line
var avgCookiesPerSale = document.getElementById('avgCookiesPerSale'); //eslint-disable-line



var totalDailySalesCalc = function(){ //eslint-disable-line
  totalDailySales = 0;
  for (var i = 0; i < allStoresArray.length; i++){
    totalDailySales += allStoresArray[i].totalDailySales;
  };

};

var totalHourlyCookieSales = function(){ //eslint-disable-line
  var trEl = document.createElement('tr');
  trEl.textContent = '';
  tableIdEl.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  tdEl.setAttribute('class', 'total-class');
  for(var i = 0; i < storeHours.length; i++){
    var hourlyCookies = 0;
    for(var j = 0; j < allStoresArray.length; j++){
      hourlyCookies += allStoresArray[j].totalCookiesSoldPerHour[i];
    };
    totalHourlyCookies.push(hourlyCookies);
    tdEl = document.createElement('td');
    tdEl.textContent = hourlyCookies;
    trEl.appendChild(tdEl);
    tdEl.setAttribute('class', 'hourly-cookies');
  };
  tdEl = document.createElement('td');
  tdEl.textContent = totalDailySales;
  trEl.appendChild(tdEl);
  tdEl.setAttribute('class', 'total-cookies');
};

function Store(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerSale){
  this.storeHours = storeHours;
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.randCustPerHour = [];
  this.totalCookiesSoldPerHour = [];
  this.totalCookiesRow = [];
  this.totalDailySales = 0;

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

  this.totalDailySalesMethod();

  this.render = function() {
    var trEl = document.createElement('tr');
    trEl.textContent = '';
    tableIdEl.appendChild(trEl);
    var tdEl = document.createElement('td');
    tdEl.textContent = this.locationName;
    trEl.appendChild(tdEl);
    tdEl.setAttribute('class', 'location-name');

    for(var i = 0; i < this.totalCookiesRow.length; i++){
      tdEl = document.createElement('td');
      tdEl.textContent = this.totalCookiesRow[i];
      trEl.appendChild(tdEl);
    };
  };
  allStoresArray.push(this);
}



function createHeaderRow(){
  var headerRow = document.createElement('th');
  headerRow.textContent = ' ';
  tableIdEl.appendChild(headerRow);
  for (var i = 0; i < storeHours.length; i++){
    headerRow = document.createElement('th');
    headerRow.textContent = storeHours[i];
    tableIdEl.appendChild(headerRow);
  };
  headerRow = document.createElement('th');
  headerRow.textContent = 'Total';
  tableIdEl.appendChild(headerRow);
}

function handleStoreSubmit(event){
  event.preventDefault();

  if(!event.target.storeName.value || !event.target.minCustPerHour.value || !event.target.maxCustPerHour.value || !event.target.avgCookiesPerSale.value){
    return alert('Do not leave fields empty!');
  };

  // if (event.target.storeName.value !== string){
  //   return alert('Please enter a name with letters');
  // }

  locationName = event.target.storeName.value;
  minCustPerHour = parseInt(event.target.minCustPerHour.value);
  maxCustPerHour = parseInt(event.target.maxCustPerHour.value);
  avgCookiesPerSale = parseFloat(event.target.avgCookiesPerSale.value);
  console.log(avgCookiesPerSale);

  console.log('this event is happening' + event);
  var handleStore = new Store(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerSale);
  event.target.storeName.value = null;
  event.target.minCustPerHour.value = null;
  event.target.maxCustPerHour.value = null;
  event.target.avgCookiesPerSale.value = null;
  tableIdEl.textContent = null;

  createHeaderRow();
  for (var i = 0; i < allStoresArray.length; i++){
    allStoresArray[i].render();
  }
  totalDailySalesCalc();
  totalHourlyCookieSales();

}

// function handleTotalsCalc(event){
//   event.preventDefault();
//   console.log('runnin?');
// }

createHeaderRow();
for (var i = 0; i < allStoresArray.length; i++){
  allStoresArray[i].render();
}

// Event listener for Store Variables Input
salmonCookiesInput.addEventListener('submit', handleStoreSubmit);


// Event listener for Calculate Totals Button
// totalsCalcInput.addEventListener('submit', handleTotalsCalc);
