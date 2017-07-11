angular.module('ionic-datepicker.service', [])

  .service('IonicDatepickerService', function () {

    this.monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    this.getYearsList = function (from, to) {
      var yearsList = [];
      var currentYear = new Date().getFullYear();
      var minYear = currentYear - 5;
      var maxYear = currentYear + 5;

      minYear = from ? new Date(from).getFullYear() : minYear;
      maxYear = to ? new Date(to).getFullYear() : maxYear;

      for (var i = minYear; i <= maxYear; i++) {
        yearsList.push(i);
      }

      return yearsList;
    };
  });
