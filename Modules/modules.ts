// Modules 
//note that the modules allow you to organize your code into separate files. The modules are useful when you want to create a large application with many files. The modules allow you to split your code into separate files and import the code from one file to another file.

import { getCurrentPaymentDetails, addPaymentGateway } from "./paymentGateway";

let result = addPaymentGateway(100);
console.log(result);
