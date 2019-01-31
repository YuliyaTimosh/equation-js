const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

 function solveQuardEq(a, b, c) {
     const diskr = calcDiskr(a, b, c);
     if (diskr = 0) {
         return - b / 2 * a;
         
     }
     if (diskr < 0) {
         return null
         
     } 
     if (diskr > 0) {
         return -b + math.sqrt(diskr) / 2 * a;
         return - b - math.sqrt(iskr) / 2 * a;
     }
     
     
 }
 
 function calcDiskr(a, b, c) {
     return b * b - 4 * a * c;
     
 }
 
 
