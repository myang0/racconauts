# Installation Guide #

### NodeJS and npm ###

The first step for installation will be to download NodeJS.  Link for installation is here: https://nodejs.org/en/download/.  Select LTS version, and install

Note that both `node` and `npm` will be installed through this installer.  To verify that it is working, open up your terminal and enter the following commands:

```
node -v
```

```
npm -v
```

If both of these have been installed correctly, then these commands should output some version number.

Remember to add `node` to your path when installing.

### Git ###

Use the following link to download Git to your machine if you haven't already: https://git-scm.com/downloads

To verify whether or not the installation was successful, run the following command in your terminal:

```
git -v
```

If Git has properly been installed, then this command should output some version number.

Remember to add `git` to your path when installing.


### Downloading the Repository ###

To get the repository locally on your machine, either download the zip file for this repository, or clone it.

To clone, execute the following commands in the directory of your choice:

```
git clone https://github.com/myang0/raccoon-sys-hacks.git
cd raccoon-sys-hacks
```

### Installing the Required Packages ###

Once the repository has been downloaded to your machine, you will need to install the dependencies needed to run the app locally.  To do this, run the following command while in the `raccoon-sys-hacks` directory.

```
npm install
```

### Running the App ###

Finally, you should be able to run the app.  To start, run the following command, again in the `raccoon-sys-hacks` directory.

```
npm start
```

Now, open http://localhost:5000 in the web browser of your choice.  If all has been done correctly, then you should see the app running locally.
