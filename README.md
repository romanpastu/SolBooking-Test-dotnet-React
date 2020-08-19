### Solbooking test .net 3.1 web api/Ef + React (Hooks)/Redux

# How to install

- Prerequisites
1. Microsoft Sql Server (Express) : It must have a predefined user (usr: roman / pass: roman in the scope of this project). This user must have enought permisson to create databases. MSQL must have TCP/IP enabled and mapped to the port 1433. Login with sql auth must be enabled.
2. Node
3. Git (to clone the package)
4. Net Core 3.1 SDK

- Installation
 1. Using the terminal navigate to /HotelsApi
 2. Install .net entity framework tools ```dotnet tool install --global dotnet-ef```
 3. Update appsetings.json -> ConnectionStrings -> HotelsConnection to your database values, server can be updated to "localhost"
 4. Run ```dotnet ef database update```
 5. Fill the database, for this preconfig to work, you must input 3 hotels which MUST have the following image names: image1 | image2 | image3 since its stored as a reference, and those referenced images are available in the current build.
 6. Run ```dotnet build```
 7. Run ```dotnet run``` . Now the server will be running at localhost:5000
 8. Navigate to /hotels-front
 9. Run ```npm i```
 10. Run ```npm run build```
 11. Serve the build with ```serve -s build```
 12. Use the application.
