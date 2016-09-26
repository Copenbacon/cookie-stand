'use strict';
//object literal for each location (5)
//Properties: mincusto, maxcusto, avgcookpercusto, locationName, randCustPerHour[],  results[], totalCookiesSoldPerHour, totalDailySales
//Methods: randCustPerHourGen, calculateAndStoreCookiesPurchasedEachHour, resultsGenerator(avgcookpercusto*randCustPerHour stored with hour[i]), totalDailySalesMethod(calculateAndStoreTotalCookiesPurchased), render(display list of store data (appendChild))

//outsideVariables
//Hours[6am, ... 8pm] (store outside object),

//<ul id = locationName></ul> document.getElementById()

var storeHours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];

var firstAndPike = {
  //Properties
  locationName : '1st and Pike',
  minCustPerHour : 23,
  maxCustPerHour : 65,
  avgCookiesPerSale : 6.3,
  randCustPerHour : [],
  results : [],
  totalCookiesSoldPerHour : [] ,
  totalDailySales : null,

  //Methods
  randCustPerHourGen : function(minCustPerHour, maxCustPerHour) {
    for (var i = 0; i < storeHours.length; i++){
      // is for loop running?
      // console.log(i);
      this.minCustPerHour = Math.ceil(this.minCustPerHour);
      this.maxCustPerHour = Math.floor(this.maxCustPerHour);
      this.randCustPerHour[i] = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      console.log(this.randCustPerHour[i]);
    }
  },

  totalCookiesSoldPerHourMethod : function() {
    this.randCustPerHourGen();
    for (var i = 0; i < storeHours.length; i++){
      this.totalCookiesSoldPerHour[i] = this.avgCookiesPerSale * this.randCustPerHour[i];
      console.log(this.totalCookiesSoldPerHour[i]);
    }
  },

  totalDailySalesMethod : function() {
    this.totalCookiesSoldPerHourMethod();
    for (var i = 0; i < this.totalCookiesSoldPerHour.length; i++){
      this.totalDailySales += Math.ceil(this.totalCookiesSoldPerHour[i]) ;
      console.log(this.totalDailySales);
    }
  },

  render : function() {
    this.totalDailySalesMethod();
    
  }
};
