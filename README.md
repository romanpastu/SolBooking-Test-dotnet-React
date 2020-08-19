### Solbooking test , .net 3.1 web api + React (Hooks)/Redux

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
 5. Run ```dotnet build```
 6. Run ```dotnet run``` . Now the server will be running at localhost:5000
 7. Navigate to /hotels-front
 8. Run ```npm i```
 9. Run ```npm run build```
 10. Serve the build with ```serve -s build```
 11. Use the application.
