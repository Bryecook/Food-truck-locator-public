# Austin Food Truck Locator

## What is this/User stories
### Users can create an account.
### Trucks will be created with the type of food they serve, their hours of operations, and their locations on google maps. Each truck will have an average rating out of 5 that will be compiled from user reviews on the website.
### Eaters can save food trucks to favorites, rate food trucks, sort/filter main page by rating/type of food.
### Eaters can see all the food trucks on one map on the landing page.

## Project Specs
### Google maps API
### Auth for login for users.
### Validations for username/passwords for eater accounts. Validations for review rating numbers.
### Has_many_through relationship User - Favorite > Trucks. AKA User has_many favorite trucks thru favorites.
### Custom CSS

## Models
### Eaters - username, password -Done
### Favorites - eater_id, truck_id -Done
### Trucks - Hours of operation, rating, location on google maps, type of food served, profile picture 
### Reviews - eater_id, truck_id, rating out of 5 (validation that rating is not less than 1 or greater than 5), body


*Geocoder ruby gem
