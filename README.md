# sp-spa-starter
SharePoint Online Single Page App Starter is a repository which helps developers with the development of Single Page Apps in SharePoint 
using ReactJS and pnpjs library. 

# How to Start

After cloning or downloading the respository,Follow the steps mentioned below.

Upload the file **index.aspx** to sharepoint site under Site Pages library or to Site Assets Library. This file is available under the root folder of this project.

Delete the **index.aspx** file from the root folder.

Now, Open the **src/App.tsx** file and then replace the URL with your Sharepoint site URL where web object is initiated (ref below code)

```
const web = new Web("https://yourtenant.sharepoint.com/sites/dev/");
// Enter your Tenant URL here, it may be different than as shown above.
```

Then, execute the below commands to install all the dependencies and then run the project.
```
  npm install
  npm start
```

Once the project is complied, open the index.aspx file from the Site pages library in your sharepoint.

You should now be able to see the Single page App with the names of all the lists listed under left navigation section.
Once clicked on any of the list name, you will notice that the all the list items of the selected list are displayed in a tabular format under the main section.
