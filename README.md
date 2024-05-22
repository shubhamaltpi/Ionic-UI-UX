# Ionic-UI-UX
To install and run an Ionic app locally from GitHub, you'll typically follow these steps:
#### This is Gold App BackEnd ###

1. **Clone the Repository**: First, clone the GitHub repository of the Ionic app to your local machine. You can do this using the `git clone` command. Navigate to the directory where you want to clone the repository and run:
2. 

   ```
   git clone (https://github.com/YOUR_USERNAME/Ionic-UI-UX.git)
   ```

   Replace `<YOUR_USERNAME>` with the actual URL of the GitHub repository.

3. **Install Dependencies**: Once you have cloned the repository, navigate into the directory of the cloned repository and install the necessary dependencies. Typically, Ionic apps use npm (Node Package Manager) for managing dependencies. Run the following command:

   ```
   npm install
   ```

   This will install all the required packages specified in the `package.json` file.

4. **Serve the App**: After installing the dependencies, you can serve the Ionic app locally using the Ionic CLI. Run the following command:

   ```
   ionic serve
   ```

   This command will start a local development server and open the Ionic app in your default web browser.

5. **View the App**: Once the server is up and running, you can view the Ionic app in your web browser by navigating to `http://localhost:8100` (by default, unless specified otherwise).

These steps assume that the Ionic app you're working with follows the typical structure and setup. If the repository contains any specific instructions or configurations, make sure to follow those as well. Additionally, ensure that you have Node.js and npm installed on your machine before proceeding with these steps.

Thank you !
## Backend Api 
####Login Api
getlogin 
```
/user/login?UPI=

```
```
body{
 email, password
}
```
Get States list
```
   getstates?count=100&name=ma&page=1
   ```
Get cities on the based on state 
```
   getcities?stateId= &count=100&name=ma&page=1
   ```
get rate of gold and silver
```
   /getrate
   ```

user onboard or signup

```
/subadmin/userOnboard
```
required data in body 
  mobileNumber,
    emailId,
    password,
    Name,
    userCityCode,
    userStateCode,
    userPincode,
    dateOfBirth,
    nomineeName,
    nomineeDateOfBirth,
    nomineeRelation,
    utmSource,
    utmMedium,
    utmCampaign,

    ```
     "mobileNumber":"90673433",
    "emailId":"ahers267@gmail.com",
    "password":"Shubham",
    "Name":"ShubhamAher",
    "userCityCode":"1GXDPyX2",
    "userStateCode":"ep9kJ7Px",
    "userPincode":"431113",
    "dateOfBirth":"2001-09-19",
    "nomineeName":"shather",
    "nomineeDateOfBirth":"2001-09-29",
    "nomineeRelation":"Brother",
    "utmSource":"FD",
    "utmMedium":"SA/BRANCH/MR/IFAPRIME/IFAGROWTH/NATIONALDISTRIBUTOR/CORPORATELIABILITIES",
    "utmCampaign":"EM42342434"
}
    ```


  ### get product list 
  ```
/user/getproductlist
```
###get product details

```
/user/proudct/info?productId=AU999GC20R
```
productId will be sku


## bank created 

```
/user/bank/bankcreate
```
JWt Required 
body data 
```
accountNumber,
    accountName,
    ifscCode
```


# buy / sell 
#### details of user 
```
/user/party/data ? dataType=

```
dataTpe should be { bank, his} bank de, his -> his of gold and silver ,and default you will get userdata 
```
{
    "event": "Succes",
    "gBalance": "10.000",
    "sBalance": "11.5000",
    "aCnumber": {
        "id": 4,
        "userBankId": "GXD8wVX2",
        "uniqueId": "ahers287",
        "bankId": "nul",
        "bankName": "null",
        "accountNumber": "662801255177",
        "accountName": "Ramesh",
        "ifscCode": "SBIN0BHAESE",
        "status": "active",
        "createdAt": "2024-04-19T08:00:55.000Z",
        "updatedAt": "2024-04-19T08:00:55.000Z"
    },
    "hist": [
        {
            "id": 1,
            "quantity": "2.0000",
            "totalAmount": "15505.17",
            "preTaxAmount": "15053.56",
            "metalType": "gold",
            "rate": "7526.78",
            "uniqueId": "ahers287",
            "userName": "ShubhamAher",
            "merchantTransactionId": "d73eb0045ff648ed919b",
            "mobileNumber": "9067343773",
            "goldBalance": "8.0000",
            "silverBalance": null,
            "totalTaxAmount": "451.61",
            "CGSTtaxPerc": "1.50",
            "CGSTtaxAmount": "225.80",
            "SGSTtaxPerc": "1.50",
            "SGSTtaxAmount": "225.80",
            "invoiceNumber": "GLP04254113",
            "referenceType": null,
            "referenceId": null,
            "Type": null,
            "createdAt": "2024-04-19T07:15:22.000Z",
            "updatedAt": "2024-04-19T07:15:22.000Z"
        }
        ,
        {
            "id": 5,
            "quantity": "1.0000",
            "totalAmount": "93.73",
            "preTaxAmount": "91.00",
            "metalType": "silver",
            "rate": "91.00",
            "uniqueId": "ahers287",
            "userName": "ShubhamAher",
            "merchantTransactionId": "bc1b45ecf7934e9ea64ea1b7c",
            "mobileNumber": "9067343773",
            "goldBalance": "10.0000",
            "silverBalance": "5.0000",
            "totalTaxAmount": "2.73",
            "CGSTtaxPerc": "1.50",
            "CGSTtaxAmount": "1.37",
            "SGSTtaxPerc": "1.50",
            "SGSTtaxAmount": "1.37",
            "invoiceNumber": "SLP04254126",
            "referenceType": null,
            "referenceId": null,
            "Type": null,
            "createdAt": "2024-04-19T07:44:04.000Z",
            "updatedAt": "2024-04-19T07:44:04.000Z"
        },
        {
            "id": 6,
            "quantity": "1.0000",
            "totalAmount": "93.70",
            "preTaxAmount": "90.97",
            "metalType": "silver",
            "rate": "90.97",
            "uniqueId": "ahers287",
            "userName": "ShubhamAher",
            "merchantTransactionId": "ahers287NaN",
            "mobileNumber": "9067343773",
            "goldBalance": "10.0000",
            "silverBalance": "6.0000",
            "totalTaxAmount": "2.73",
            "CGSTtaxPerc": "1.50",
            "CGSTtaxAmount": "1.36",
            "SGSTtaxPerc": "1.50",
            "SGSTtaxAmount": "1.36",
            "invoiceNumber": "SLP04254131",
            "referenceType": null,
            "referenceId": null,
            "Type": null,
            "createdAt": "2024-04-19T07:50:29.000Z",
            "updatedAt": "2024-04-19T07:50:29.000Z"
        },
        {
            "id": 7,
            "quantity": "1.0000",
            "totalAmount": "93.72",
            "preTaxAmount": "90.99",
            "metalType": "silver",
            "rate": "90.99",
            "uniqueId": "ahers287",
            "userName": "ShubhamAher",
            "merchantTransactionId": "ahers287",
            "mobileNumber": "9067343773",
            "goldBalance": "10.0000",
            "silverBalance": "7.0000",
            "totalTaxAmount": "2.73",
            "CGSTtaxPerc": "1.50",
            "CGSTtaxAmount": "1.36",
            "SGSTtaxPerc": "1.50",
            "SGSTtaxAmount": "1.36",
            "invoiceNumber": "SLP04254132",
            "referenceType": null,
            "referenceId": null,
            "Type": null,
            "createdAt": "2024-04-19T07:52:36.000Z",
            "updatedAt": "2024-04-19T07:52:36.000Z"
        },
        {
            "id": 8,
            "quantity": "1.0000",
            "totalAmount": "93.70",
            "preTaxAmount": "90.97",
            "metalType": "silver",
            "rate": "90.97",
            "uniqueId": "ahers287",
            "userName": "ShubhamAher",
            "merchantTransactionId": "ahers28771",
            "mobileNumber": "9067343773",
            "goldBalance": "10.0000",
            "silverBalance": "8.0000",
            "totalTaxAmount": "2.73",
            "CGSTtaxPerc": "1.50",
            "CGSTtaxAmount": "1.36",
            "SGSTtaxPerc": "1.50",
            "SGSTtaxAmount": "1.36",
            "invoiceNumber": "SLP04254133",
            "referenceType": null,
            "referenceId": null,
            "Type": null,
            "createdAt": "2024-04-19T07:56:21.000Z",
            "updatedAt": "2024-04-19T07:56:21.000Z"
        },
        {
            "id": 9,
            "quantity": "1.0000",
            "totalAmount": "93.70",
            "preTaxAmount": "90.97",
            "metalType": "silver",
            "rate": "90.97",
            "uniqueId": "ahers287",
            "userName": "ShubhamAher",
            "merchantTransactionId": "ahers28781",
            "mobileNumber": "9067343773",
            "goldBalance": "10.0000",
            "silverBalance": "9.0000",
            "totalTaxAmount": "2.73",
            "CGSTtaxPerc": "1.50",
            "CGSTtaxAmount": "1.36",
            "SGSTtaxPerc": "1.50",
            "SGSTtaxAmount": "1.36",
            "invoiceNumber": "SLP04254134",
            "referenceType": null,
            "referenceId": null,
            "Type": null,
            "createdAt": "2024-04-19T07:56:25.000Z",
            "updatedAt": "2024-04-19T07:56:25.000Z"
        },
        {
            "id": 10,
            "quantity": "1.0000",
            "totalAmount": "93.66",
            "preTaxAmount": "90.93",
            "metalType": "silver",
            "rate": "90.93",
            "uniqueId": "ahers287",
            "userName": "ShubhamAher",
            "merchantTransactionId": "ahers28791",
            "mobileNumber": "9067343773",
            "goldBalance": "10.0000",
            "silverBalance": "10.0000",
            "totalTaxAmount": "2.73",
            "CGSTtaxPerc": "1.50",
            "CGSTtaxAmount": "1.36",
            "SGSTtaxPerc": "1.50",
            "SGSTtaxAmount": "1.36",
            "invoiceNumber": "SLP04254135",
            "referenceType": null,
            "referenceId": null,
            "Type": null,
            "createdAt": "2024-04-19T07:57:10.000Z",
            "updatedAt": "2024-04-19T07:57:10.000Z"
        },
        {
            "id": 11,
            "quantity": "1.0000",
            "totalAmount": "93.67",
            "preTaxAmount": "90.94",
            "metalType": "silver",
            "rate": "90.94",
            "uniqueId": "ahers287",
            "userName": "ShubhamAher",
            "merchantTransactionId": "ahers287101",
            "mobileNumber": "9067343773",
            "goldBalance": "10.0000",
            "silverBalance": "11.0000",
            "totalTaxAmount": "2.73",
            "CGSTtaxPerc": "1.50",
            "CGSTtaxAmount": "1.36",
            "SGSTtaxPerc": "1.50",
            "SGSTtaxAmount": "1.36",
            "invoiceNumber": "SLP04254136",
            "referenceType": null,
            "referenceId": null,
            "Type": null,
            "createdAt": "2024-04-19T07:59:07.000Z",
            "updatedAt": "2024-04-19T07:59:07.000Z"
        },
        {
            "id": 12,
            "quantity": "0.5000",
            "totalAmount": "46.82",
            "preTaxAmount": "45.46",
            "metalType": "silver",
            "rate": "90.91",
            "uniqueId": "ahers287",
            "userName": "ShubhamAher",
            "merchantTransactionId": "ahers287111",
            "mobileNumber": "9067343773",
            "goldBalance": "10.0000",
            "silverBalance": "11.5000",
            "totalTaxAmount": "1.36",
            "CGSTtaxPerc": "1.50",
            "CGSTtaxAmount": "0.68",
            "SGSTtaxPerc": "1.50",
            "SGSTtaxAmount": "0.68",
            "invoiceNumber": "SLP04254137",
            "referenceType": null,
            "referenceId": null,
            "Type": null,
            "createdAt": "2024-04-19T08:00:55.000Z",
            "updatedAt": "2024-04-19T08:00:55.000Z"
        }
    ]
}
```
#### gold silver buy only 
```
/user/goldsilver/gSBuy
```
body
```
{
    "metalType":"SILVER/GOLD/SIP(SIP NOT Activated now)", "quantity":"0.5"
}
```

#### gold silver sell api
```
/user/goldsilver/gSSell
```
body should be
```
{
    "metalType":"SILVER/GOLD/SIP(SIP NOT Activated now)", "quantity":"0.5"
}

```

### user Bank Update 
API
```
/user/party/userBankUpdate
```
--body 
```
"accountNumber":"123456789012",
    "accountName":"Shubham",
    "ifscCode":"MAHB0001756"
```

#### product order on adre
Backed Api Should be integrate with aug
```
```

## integration of gold with our App
Login by VPA please send VPA as params 
```
```
** if user have buy gold with this app we will dont need signup
if not then just singup the user 
***
#### buy gold/ silver by amount 
amount should be send in parameter 

### we are not enabling to sell gold through our CCSA App
user will get creadiantial to login throw the gold app and he will able to see his histroy 
```
```
### new feature come in market 

### we are not enabling to sell gold through our CCSA App
user will get creadiantial to login throw the gold app and he will able to see his histroy 
```
```
### new feature come in market 
### we are not enabling to sell gold through our CCSA App
user will get creadiantial to login throw the gold app and he will able to see his histroy 
```
```
### new feature come in market 

### we are not enabling to sell gold through our CCSA App
user will get creadiantial to login throw the gold app and he will able to see his histroy 
```
```
### new feature come in market 
