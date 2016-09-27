'use strict';
//object literal for each location (5)
//Properties: mincusto, maxcusto, avgcookpercusto, locationName, randCustPerHour[],  results[], totalCookiesSoldPerHour, totalDailySales
//Methods: randCustPerHourGen, calculateAndStoreCookiesPurchasedEachHour, resultsGenerator(avgcookpercusto*randCustPerHour stored with hour[i]), totalDailySalesMethod(calculateAndStoreTotalCookiesPurchased), render(display list of store data (appendChild))

//outsideVariables
//Hours[6am, ... 8pm] (store outside object),

//<ul id = locationName></ul> document.getElementById()

var storeHours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];

var firstAndPike = {
  //Properties
  ulIdEl : document.getElementById('1st and Pike'),
  bodyIdEl : document.getElementById('body'),
  locationName : '1st and Pike',
  minCustPerHour : 23,
  maxCustPerHour : 65,
  avgCookiesPerSale : 6.3,
  randCustPerHour : [],
  results : [],
  totalCookiesSoldPerHour : [] ,
  totalDailySales : null,

  //Methods
  randCustPerHourGen : function() {
    for (var i = 0; i < storeHours.length; i++){
      // is for loop running?
      // console.log(i);
      this.randCustPerHour[i] = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      console.log('Random Customers Per Hour at ' + this.locationName + ' at ' + storeHours[i] + ': ' + this.randCustPerHour[i]);
    }
  },

  totalCookiesSoldPerHourMethod : function() {
    this.randCustPerHourGen();
    for (var i = 0; i < storeHours.length; i++){
      this.totalCookiesSoldPerHour[i] = this.avgCookiesPerSale * this.randCustPerHour[i];
      console.log('Total Cookies Sold Each Hour at ' + this.locationName + ' at ' + storeHours[i] + ': ' + this.totalCookiesSoldPerHour[i]);
    }
  },

  totalDailySalesMethod : function() {
    this.totalCookiesSoldPerHourMethod();
    for (var i = 0; i < this.totalCookiesSoldPerHour.length; i++){
      this.totalCookiesSoldPerHour[i] = Math.ceil(this.totalCookiesSoldPerHour[i]);
      this.totalDailySales += this.totalCookiesSoldPerHour[i] ;
    }
    console.log('Total Cookies Sold Today at ' + this.locationName + ': ' + this.totalDailySales);
  },

  render : function() {
    this.totalDailySalesMethod();
    var h1El = document.createElement('h1');
    h1El.textContent = this.locationName;
    this.bodyIdEl.insertBefore(h1El, this.ulIdEl);
    for(var i = 0; i < this.totalCookiesSoldPerHour.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = storeHours[i] + ': ' + this.totalCookiesSoldPerHour[i] + ' cookies';
      this.ulIdEl.appendChild(liEl);
    }

    var liElTwo = document.createElement('li');
    liElTwo.textContent = 'Total Cookies Sold Today: ' + this.totalDailySales + ' cookies';
    this.ulIdEl.appendChild(liElTwo);
  }
};

var seaTacAirport = {
  //Properties
  ulIdEl : document.getElementById('SeaTac Airport'),
  bodyIdEl : document.getElementById('body'),
  locationName : 'Sea Tac Airport',
  minCustPerHour : 3,
  maxCustPerHour : 24,
  avgCookiesPerSale : 1.2,
  randCustPerHour : [],
  results : [],
  totalCookiesSoldPerHour : [] ,
  totalDailySales : null,

  //Methods
  randCustPerHourGen : function() {
    for (var i = 0; i < storeHours.length; i++){
      // is for loop running?
      // console.log(i);
      this.randCustPerHour[i] = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      console.log('Random Customers Per Hour at ' + this.locationName + ' at ' + storeHours[i] + ': ' + this.randCustPerHour[i]);
    }
  },

  totalCookiesSoldPerHourMethod : function() {
    this.randCustPerHourGen();
    for (var i = 0; i < storeHours.length; i++){
      this.totalCookiesSoldPerHour[i] = this.avgCookiesPerSale * this.randCustPerHour[i];
      console.log('Total Cookies Sold Each Hour at ' + this.locationName + ' at ' + storeHours[i] + ': ' + this.totalCookiesSoldPerHour[i]);
    }
  },

  totalDailySalesMethod : function() {
    this.totalCookiesSoldPerHourMethod();
    for (var i = 0; i < this.totalCookiesSoldPerHour.length; i++){
      this.totalCookiesSoldPerHour[i] = Math.ceil(this.totalCookiesSoldPerHour[i]);
      this.totalDailySales += this.totalCookiesSoldPerHour[i];
    }
    console.log('Total Cookies Sold Today at ' + this.locationName + ': ' + this.totalDailySales);
  },

  render : function() {
    this.totalDailySalesMethod();
    var h1El = document.createElement('h1');
    h1El.textContent = this.locationName;
    this.bodyIdEl.insertBefore(h1El, this.ulIdEl);
    for(var i = 0; i < this.totalCookiesSoldPerHour.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = storeHours[i] + ': ' + this.totalCookiesSoldPerHour[i] + ' cookies';
      this.ulIdEl.appendChild(liEl);
    }

    var liElTwo = document.createElement('li');
    liElTwo.textContent = 'Total Cookies Sold Today: ' + this.totalDailySales + ' cookies';
    this.ulIdEl.appendChild(liElTwo);
  }
};

var seattleCenter = {
  //Properties
  ulIdEl : document.getElementById('Seattle Center'),
  bodyIdEl : document.getElementById('body'),
  locationName : 'Seattle Center',
  minCustPerHour : 11,
  maxCustPerHour : 38,
  avgCookiesPerSale : 3.7,
  randCustPerHour : [],
  results : [],
  totalCookiesSoldPerHour : [] ,
  totalDailySales : null,

  //Methods
  randCustPerHourGen : function() {
    for (var i = 0; i < storeHours.length; i++){
      // is for loop running?
      // console.log(i);
      this.randCustPerHour[i] = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      console.log('Random Customers Per Hour at ' + this.locationName + ' at ' + storeHours[i] + ': ' + this.randCustPerHour[i]);
    }
  },

  totalCookiesSoldPerHourMethod : function() {
    this.randCustPerHourGen();
    for (var i = 0; i < storeHours.length; i++){
      this.totalCookiesSoldPerHour[i] = this.avgCookiesPerSale * this.randCustPerHour[i];
      console.log('Total Cookies Sold Each Hour at ' + this.locationName + ' at ' + storeHours[i] + ': ' + this.totalCookiesSoldPerHour[i]);
    }
  },

  totalDailySalesMethod : function() {
    this.totalCookiesSoldPerHourMethod();
    for (var i = 0; i < this.totalCookiesSoldPerHour.length; i++){
      this.totalCookiesSoldPerHour[i] = Math.ceil(this.totalCookiesSoldPerHour[i]);
      this.totalDailySales += this.totalCookiesSoldPerHour[i] ;
    }
    console.log('Total Cookies Sold Today at ' + this.locationName + ': ' + this.totalDailySales);
  },

  render : function() {
    this.totalDailySalesMethod();
    var h1El = document.createElement('h1');
    h1El.textContent = this.locationName;
    this.bodyIdEl.insertBefore(h1El, this.ulIdEl);
    for(var i = 0; i < this.totalCookiesSoldPerHour.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = storeHours[i] + ': ' + this.totalCookiesSoldPerHour[i] + ' cookies';
      this.ulIdEl.appendChild(liEl);
    }

    var liElTwo = document.createElement('li');
    liElTwo.textContent = 'Total Cookies Sold Today: ' + this.totalDailySales + ' cookies';
    this.ulIdEl.appendChild(liElTwo);
  }
};

var capHill = {
  //Properties
  ulIdEl : document.getElementById('Capitol Hill'),
  bodyIdEl : document.getElementById('body'),
  locationName : 'Capitol Hill',
  minCustPerHour : 20,
  maxCustPerHour : 38,
  avgCookiesPerSale : 2.3,
  randCustPerHour : [],
  results : [],
  totalCookiesSoldPerHour : [] ,
  totalDailySales : null,

  //Methods
  randCustPerHourGen : function() {
    for (var i = 0; i < storeHours.length; i++){
      // is for loop running?
      // console.log(i);
      this.randCustPerHour[i] = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      console.log('Random Customers Per Hour at ' + this.locationName + ' at ' + storeHours[i] + ': ' + this.randCustPerHour[i]);
    }
  },

  totalCookiesSoldPerHourMethod : function() {
    this.randCustPerHourGen();
    for (var i = 0; i < storeHours.length; i++){
      this.totalCookiesSoldPerHour[i] = this.avgCookiesPerSale * this.randCustPerHour[i];
      console.log('Total Cookies Sold Each Hour at ' + this.locationName + ' at ' + storeHours[i] + ': ' + this.totalCookiesSoldPerHour[i]);
    }
  },

  totalDailySalesMethod : function() {
    this.totalCookiesSoldPerHourMethod();
    for (var i = 0; i < this.totalCookiesSoldPerHour.length; i++){
      this.totalCookiesSoldPerHour[i] = Math.ceil(this.totalCookiesSoldPerHour[i]);
      this.totalDailySales += this.totalCookiesSoldPerHour[i] ;
    }
    console.log('Total Cookies Sold Today at ' + this.locationName + ': ' + this.totalDailySales);
  },

  render : function() {
    this.totalDailySalesMethod();
    var h1El = document.createElement('h1');
    h1El.textContent = this.locationName;
    this.bodyIdEl.insertBefore(h1El, this.ulIdEl);
    for(var i = 0; i < this.totalCookiesSoldPerHour.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = storeHours[i] + ': ' + this.totalCookiesSoldPerHour[i] + ' cookies';
      this.ulIdEl.appendChild(liEl);
    }

    var liElTwo = document.createElement('li');
    liElTwo.textContent = 'Total Cookies Sold Today: ' + this.totalDailySales + ' cookies';
    this.ulIdEl.appendChild(liElTwo);
  }
};

var alki = {
  //Properties
  ulIdEl : document.getElementById('Alki'),
  bodyIdEl : document.getElementById('body'),
  locationName : 'Alki',
  minCustPerHour : 2,
  maxCustPerHour : 16,
  avgCookiesPerSale : 4.6,
  randCustPerHour : [],
  results : [],
  totalCookiesSoldPerHour : [] ,
  totalDailySales : null,

  //Methods
  randCustPerHourGen : function() {
    for (var i = 0; i < storeHours.length; i++){
      // is for loop running?
      // console.log(i);
      this.randCustPerHour[i] = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      console.log('Random Customers Per Hour at ' + this.locationName + ' at ' + storeHours[i] + ': ' + this.randCustPerHour[i]);
    }
  },

  totalCookiesSoldPerHourMethod : function() {
    this.randCustPerHourGen();
    for (var i = 0; i < storeHours.length; i++){
      this.totalCookiesSoldPerHour[i] = this.avgCookiesPerSale * this.randCustPerHour[i];
      console.log('Total Cookies Sold Each Hour at ' + this.locationName + ' at ' + storeHours[i] + ': ' + this.totalCookiesSoldPerHour[i]);
    }
  },

  totalDailySalesMethod : function() {
    this.totalCookiesSoldPerHourMethod();
    for (var i = 0; i < this.totalCookiesSoldPerHour.length; i++){
      this.totalCookiesSoldPerHour[i] = Math.ceil(this.totalCookiesSoldPerHour[i]);
      this.totalDailySales += this.totalCookiesSoldPerHour[i] ;
    }
    console.log('Total Cookies Sold Today at ' + this.locationName + ': ' + this.totalDailySales);
  },

  render : function() {
    this.totalDailySalesMethod();
    var h1El = document.createElement('h1');
    h1El.textContent = this.locationName;
    this.bodyIdEl.insertBefore(h1El, this.ulIdEl);
    for(var i = 0; i < this.totalCookiesSoldPerHour.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = storeHours[i] + ': ' + this.totalCookiesSoldPerHour[i] + ' cookies';
      this.ulIdEl.appendChild(liEl);
    }

    var liElTwo = document.createElement('li');
    liElTwo.textContent = 'Total Cookies Sold Today: ' + this.totalDailySales + ' cookies';
    this.ulIdEl.appendChild(liElTwo);
  }
};

var allStores = [firstAndPike, seaTacAirport, seattleCenter, capHill, alki];

var allStoresObj = {
  locationName : 'All Stores',
  totalDailySales: 0,
  ulIdEl : document.getElementById('All Stores'),
  bodyIdEl : document.getElementById('body'),
  totalDailySalesRender : function(){
    for (var i = 0; i < allStores.length; i++){
      allStores[i].render();
      this.totalDailySales += allStores[i].totalDailySales;
    }
    var h1El = document.createElement('h1');
    h1El.textContent = this.locationName;
    this.bodyIdEl.insertBefore(h1El, this.ulIdEl);
    var liEl = document.createElement('li');
    liEl.textContent = this.totalDailySales + ' cookies sold at ' + this.locationName + ' today!';
    this.ulIdEl.appendChild(liEl);
  },
};

allStoresObj.totalDailySalesRender();

// {
//
//   firstAndPike.render(),
//   seaTacAirport.render(),
//   seattleCenter.render(),
//   capHill.render(),
//   alki.render(),
//
// }
