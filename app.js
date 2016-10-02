'use strict';

var storeHours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];
var allStoresArray = [];
var salmonCookiesInput = document.getElementById('salmon-cookies-input');
var salmonTableIdEl = document.getElementById('salmon-cookies');
var staffingTableIdEl = document.getElementById('staffing-table');
var totalHourlyCookies = [];
var totalDailySales = null;
var firstAndPike = new Store('1st and Pike', 23, 65, 6.3); //eslint-disable-line
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2); //eslint-disable-line
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7); //eslint-disable-line
var capHill = new Store('Capitol Hill', 20, 38, 2.3); //eslint-disable-line
var alki = new Store('Alki', 2, 16, 4.6); //eslint-disable-line
var locationName = document.getElementById('storeName');
var minCustPerHour = document.getElementById('minCustPerHour');
var maxCustPerHour = document.getElementById('maxCustPerHour');
var avgCookiesPerSale = document.getElementById('avgCookiesPerSale');
var today = new Date();
var year = today.getFullYear();
document.getElementById('date').innerHTML = year;

var totalDailySalesCalc = function(){ //eslint-disable-line
  totalDailySales = 0;
  for (var i = 0; i < allStoresArray.length; i++){
    totalDailySales += allStoresArray[i].totalDailySales;
  };

};

var totalHourlyCookieSales = function(){ //eslint-disable-line
  var trEl = document.createElement('tr');
  trEl.textContent = '';
  salmonTableIdEl.appendChild(trEl);
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
  this.staffingArray = [];

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
    salmonTableIdEl.appendChild(trEl);

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

// function deleteRow(location){
//   for (var i = 0; i < allStoresArray.length; i++){
//     if (allStoresArray[i].locationName === location){
//       allStoresArray[i].pop();
//     };
//   }
//
//   createHeaderRow();
//   for (var i = 0; i < allStoresArray.length; i++){
//     allStoresArray[i].render();
//   }
//
//   totalDailySalesCalc();
//   totalHourlyCookieSales();
// }

function createHeaderRow(tableName){
  var headerRow = document.createElement('th');
  headerRow.textContent = ' ';
  tableName.appendChild(headerRow);
  for (var i = 0; i < storeHours.length; i++){
    headerRow = document.createElement('th');
    headerRow.textContent = storeHours[i];
    tableName.appendChild(headerRow);
  };
  if (tableName === staffingTableIdEl){
    return;
  } else {
    headerRow = document.createElement('th');
    headerRow.textContent = 'Total';
    tableName.appendChild(headerRow);
  }
}

function staffingSolution(){
  createHeaderRow(staffingTableIdEl);

  for (var i = 0; i < allStoresArray.length; i++){
    var trEl = document.createElement('tr');
    trEl.textContent = '';
    staffingTableIdEl.appendChild(trEl);

    var tdEl = document.createElement('td');
    tdEl.textContent = allStoresArray[i].locationName;
    trEl.appendChild(tdEl);

    for (var j = 0; j < storeHours.length; j++){
      var temp = Math.ceil(allStoresArray[i].randCustPerHour[j] / 20);
      if (temp <= 2){
        temp = 2;
      };
      allStoresArray[i].staffingArray.push(temp);
      tdEl = document.createElement('td');
      tdEl.textContent = allStoresArray[i].staffingArray[j];
      trEl.appendChild(tdEl);
    }
  }
}

function handleStoreSubmit(event){
  event.preventDefault();

  if(!event.target.storeName.value || !event.target.minCustPerHour.value || !event.target.maxCustPerHour.value || !event.target.avgCookiesPerSale.value){
    return alert('Do not leave fields empty!');
  };

  locationName = event.target.storeName.value;
  minCustPerHour = parseInt(event.target.minCustPerHour.value);
  maxCustPerHour = parseInt(event.target.maxCustPerHour.value);
  avgCookiesPerSale = parseFloat(event.target.avgCookiesPerSale.value);
  console.log(avgCookiesPerSale);

  if(maxCustPerHour < minCustPerHour){
    event.target.minCustPerHour.value = null;
    event.target.maxCustPerHour.value = null;
    return alert('Minimum Customers must be less than or equal to Maximum Customers');
  };

  console.log('this event is happening' + event);

  var handleStore = new Store(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerSale);

  for (var i = 0; i < allStoresArray.length - 1; i++){
    if (handleStore.locationName === allStoresArray[i].locationName){
      allStoresArray[i] = handleStore;
      allStoresArray.pop();
      console.log('All Stores Array Popping');
    }
  }

  event.target.storeName.value = null;
  event.target.minCustPerHour.value = null;
  event.target.maxCustPerHour.value = null;
  event.target.avgCookiesPerSale.value = null;
  salmonTableIdEl.textContent = null;
  staffingTableIdEl.textContent = null;

  createHeaderRow(salmonTableIdEl);
  for (var i = 0; i < allStoresArray.length; i++){
    allStoresArray[i].render();
  };
  totalDailySalesCalc();
  totalHourlyCookieSales();
  staffingSolution();
}

createHeaderRow(salmonTableIdEl);
for (var i = 0; i < allStoresArray.length; i++){
  allStoresArray[i].render();
}

totalDailySalesCalc();
totalHourlyCookieSales();
staffingSolution();

// Event listener for Store Variables Input
salmonCookiesInput.addEventListener('submit', handleStoreSubmit);
