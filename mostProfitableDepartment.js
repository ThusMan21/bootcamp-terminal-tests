export default function mostProfitableDepartment(salesData) {
  const salesDataMap = {};

 
  for (let i = 0; i < salesData.length; i++) {
      const item = salesData[i];
      if (!salesDataMap[item.department]) {
          salesDataMap[item.department] = 0;
      }
      salesDataMap[item.department] += item.sales;
  }

  
  let maxSales = 0;
  let profitableDepartment = '';

  for (const department in salesDataMap) {
      if (salesDataMap[department] > maxSales) {
          maxSales = salesDataMap[department];
          profitableDepartment = department;
      }
  }

  return profitableDepartment;
}
