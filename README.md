# Ionic-UI-UX
To install and run an Ionic app locally from GitHub, you'll typically follow these steps:

1. **Clone the Repository**: First, clone the GitHub repository of the Ionic app to your local machine. You can do this using the `git clone` command. Navigate to the directory where you want to clone the repository and run:

   ```
   git clone (https://github.com/YOUR_USERNAME/Ionic-UI-UX.git)
   ```

   Replace `<YOUR_USERNAME>` with the actual URL of the GitHub repository.

2. **Install Dependencies**: Once you have cloned the repository, navigate into the directory of the cloned repository and install the necessary dependencies. Typically, Ionic apps use npm (Node Package Manager) for managing dependencies. Run the following command:

   ```
   npm install
   ```

   This will install all the required packages specified in the `package.json` file.

3. **Serve the App**: After installing the dependencies, you can serve the Ionic app locally using the Ionic CLI. Run the following command:

   ```
   ionic serve
   ```

   This command will start a local development server and open the Ionic app in your default web browser.

4. **View the App**: Once the server is up and running, you can view the Ionic app in your web browser by navigating to `http://localhost:8100` (by default, unless specified otherwise).

These steps assume that the Ionic app you're working with follows the typical structure and setup. If the repository contains any specific instructions or configurations, make sure to follow those as well. Additionally, ensure that you have Node.js and npm installed on your machine before proceeding with these steps.

Thank you !
## Backend Api 
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




