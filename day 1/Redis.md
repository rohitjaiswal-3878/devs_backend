# How To Install Redis On Windows 10
Follow the steps as shown to properly install Redis on Windows 10.


>## Step 1: Download .Zip Or .Msi File
As told earlier, Redis is not available on windows but Microsoft makes it available for the Windows users.

Go to https://github.com/microsoftarchive/redis/releases to Download .zip or .msi file.

The ZIP file will require you to add the environment variables manually while the MSI file is an installer and will do it automatically for you.

In this blog, I will show you both the process. Starting with the ZIP File.

how to install redis on windows 10
MicrosoftArchive Redis
Make sure you get the latest release and not the pre-release, as shown by the mouse pointer on the picture.

>## Step 2: Extract The ZIP File
Create a new folder named “Redis” and extract the ZIP file into it. Name of the folder is up to you but it is good to follow the conventions.

After Extracting the ZIP you will see files of the Redis.

Redis Files
Redis Files
Two important files in this folder is redis-server.exe which will run the redis server and the redis-cli.exe which will enable us to interact with the server.

Let’s start the redis-server by double clicking the redis-server.exe.

Redis Server
Redis Server
By Default Redis Server runs on the port 6379.

Let’s Open the redis-cli and interact with the server.

Double click the redis-cli.exe to start the client interface.

Redis Client
Redis Client
The above image shows the interaction with the Redis Server.

This shows that the Redis is working in Windows 10, but we don’t want to come to this directory every time we want to work with Redis. To Solve this we will add the Redis-server and Redis-CLI path to the windows environment variable to interact with it using the command prompt.

>## Step 3: Move The Redis Folder To C Drive (Optional)
By Default the Redis folder will be downloaded on the Download folder of the windows. Then we created a folder and extracted the ZIP file into it.

It may happen that we accidently delete the Redis folder and the system will not find the path to open the Redis-Server and Redis-CLI.

So, it will be a good choice if we move our Redis folder to the Root of the C Drive.

>## Step 3: Add Redis Path To Windows 10 Environment Variable
Right Click to the My Computer (This PC in Windows 10) icon and go to properties or move to Control Panel\All Control Panel Items\System. Then go to Advanced System Settings > Environment Variables.

On the System Variables section, double click on the PATH variable and add the path of redis folder.

redis to environment variable
redis to environment variable
To test the path has been successfully added or not.

Open the Command Prompt and write command:

> redis-server
Bash/Shell

Redis on Commad Prompt
Redis on Commad Prompt
> redis-cli
Bash/Shell

Redis Server on Powershell and Redis Client on Command Prompt
Redis Server on Powershell and Redis Client on Command Prompt