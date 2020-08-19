### Solbooking test , .net 3.1 web api + React (Hooks)/Redux

# How to install

- Prerequisites
1. Microsoft Sql Server (Express) : It must have a predefined user (usr: roman / pass: roman in the scope of this project). This user must have enought permisson to create databases. MSQL must have TCP/IP enabled and mapped to the port 1433. Login with sql auth must be enabled.
2. Node
3. Git (to clone the package)
4. Net Core 3.1 SDK

- Installation
 - BackEnd
 1. Using the terminal navigate to /HotelsApi
 2. Install .net entity framework tools ```dotnet tool install --global dotnet-ef```
 3. Run ```dotnet ef database update```
 4. Run ```dotnet build```
 5. Run ```dotnet run``` . Now the server will be running at localhost:5000
 6. Navigate to /hotels-front
 7. Run ```npm i```
 8. Run ```npm run build```
 9. Serve the build with ```serve -s build```
 10. Use the application.
