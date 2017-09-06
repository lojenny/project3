var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function add(a, b){
  return a + b;
}

function calculateSalesTax(salesData, taxRates) {
var output = {};
for (var i = 0 ; i < salesData.length; i++){
  var obj = salesData[i];
  if (!(obj.name in output)){
    output[obj.name] = {
      totalSales: 0,
      totalTaxes: 0
      };
    }
    var sumOfSales = obj.sales.reduce(add, 0);
    var prov = obj.province;
    var sumOfTaxes = sumOfSales * taxRates[prov];

    output[obj.name].totalSales += sumOfSales;
    output[obj.name].totalTaxes += sumOfTaxes;

  }

  return output;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/