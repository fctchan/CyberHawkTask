# CyberHawkTask
Wind Turbine Task provided by Cyber Hawk Implemented by Chun Ting, Chan

#Decrsiption
The page will display 1 to 100 wind Turbine result by using Laravel and React as front end. By using axios as ajax calling API to get data.

#Protential Improvment
1) Result can be shown by input specific value 1 to 100
2) Layout refine including animation for rendering
3) Function for changing the result output dynamically. 
   (For example: factor of 4 is specific output; factor of 6 is specific output; common factor of 4 and 6 are specific output)
4) Database implement for footprinting and data storage.

# Installation
Run:

composer require laravel/ui
php artisan ui react
npm install && npm run dev
npm install react-router
npm install react-router-dom
npm install react-bootstrap bootstrap@5.1.3

# Unit Test
Run:

vendor\bin\phpunit tests\Unit\WindTurbineTest.php

