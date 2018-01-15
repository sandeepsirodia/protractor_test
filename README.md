clone this to your desired folder.
cd protractor_test
run sudo npm install
and then run command gulp serve
if it doesn't work probably you have'nt run sudo npm install properly, update your npm and nodejs to be sure npm install work properly
if gulp serve serve shows error of module not install copy that name and do sudo npm install <module_name>
if still it doesn't work copy the nodemodule folder outside the app folder and replace with node_modules folder present in app folder
now open another terminal in that directory and run webdriver-manager start
and now open another terminal in that directory and run protractor conf.js.
all the code is written conf.js and spec.js
you can uncomment commented portion and run protractor conf.js to run the test in firefox and change name of firefox to other to run in that browser
