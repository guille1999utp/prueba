# Getting Started

## Project Set Up

we located ourselves in the root of the project and install the necesary development dependencies:

```bash
$ npm install
```

After installing we can run the project with the following command:

```bash
$ npm run dev
```

the project will run in the port "5173", to access the project we enter the following link:

[http://localhost:5173](http://localhost:5173)


## Production

we located ourselves in the root of the project and install the necesary development dependencies:

```bash
$ npm install
```

After installing the dependencies we will continue to build the project with the following command:

```bash
$ npm run build
```

a dist folder will be created in the root of our project ("../prueba/dist") where it contains the production files of our project 


## Deploy Application 

when we have the dist folder of our project after performing the build steps of the project we will continue with the installation of SURGE to be able to publish our project in production

```bash
$ npm install --global surge
```

then we will execute arise in the root of the project 

```bash
$ surge
```

and we will fill in the email and password and then it will come to a part where it will show us the project where it will be deployed, you have to be careful since the path has to point to the dist folder:

```console
Welcome to surge! (surge.sh)
   Login (or create surge account) by entering email & password.

          email: YourEmail@Youremail.com
       password:

   Running as YourEmail@Youremail.com 

        project: C:\Users\admin\Documentos\GitHub\prueba\dist
```


and finally all the next thing is to hit the enter key, our domain will be where an alert appears that says success, for example:

```console
Success! - Published to outgoing-pin.surge.sh
```

if you want to update the project, simply enter the domain that you were previously given and indicate the path of the project after doing the build, that is, the dist file:

```console
$ surge --domain outgoing-pin.surge.sh
 Running as guillermo.penaranda@utp.edu.co (Student)

        project: C:\Users\admin\Documentos\GitHub\prueba\dist
         domain: outgoing-pin.surge.sh
         upload: [====================] 100% eta: 0.0s (5 files, 226544 bytes)
            CDN: [====================] 100%
     encryption: *.surge.sh, surge.sh (310 days)
             IP: 138.197.235.123

   Success! - Published to outgoing-pin.surge.sh
```
