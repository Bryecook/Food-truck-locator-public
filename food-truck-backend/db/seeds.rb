# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Eater.destroy_all
Truck.destroy_all
Favorite.destroy_all
Review.destroy_all

e1 = Eater.create(username: "Brian", password: "123")
e2 = Eater.create(username: "Gab", password: "123")


t1 = Truck.create(name: "Angelo's Tacos", location: {lat: 30.26453579371571, lng: -97.73777782766213}, type_of_food: "Mexican", profile_picture: "https://image.shutterstock.com/z/stock-vector-taco-food-truck-728660344.jpg", hours_of_operation: "Monday-Saturday 10am-8pm")
t2= Truck.create(name: "Pizzas etc.", location: {lat: 30.26137556512428, lng: -97.74798200330086} , type_of_food: "Italian", profile_picture: "https://futuristo.eu/wp-content/uploads/2020/08/pizza-food-truck.jpg", hours_of_operation: "Monday-Sunday 11am to 9pm")
t3= Truck.create(name: "Gab's Wraps", location: {lat: 30.277047660811252, lng: -97.740949025402}, type_of_food: "Wraps", profile_picture: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/18745-italian-chicken-wraps-600x600.jpg?ext=.jpg", hours_of_operation: "Monday-Friday 11am to 6pm")
t4= Truck.create(name: "Mi Madre's", location: {lat: 30.279751816584596, lng: -97.73593571990159}, type_of_food: "Mexican", profile_picture: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/austin/La_Condesa_Tacos_Courtesy_of_Jody_Horton_f525f296-5afa-4867-afee-5b7b795a09e7.jpg", hours_of_operation: "Monday-Sunday 11am to 9pm")
t5= Truck.create(name: "Mi Padre's", location: {lat: 30.27854470288052, lng: -97.7436876296997}, type_of_food: "Mexican", profile_picture: "https://s23209.pcdn.co/wp-content/uploads/2019/04/Mexican-Street-TacosIMG_9108-1.jpg", hours_of_operation: "Monday-Saturday 10am-8pm")
t6= Truck.create(name: "Brian's BBQ", location: {lat: 30.265087555260283, lng: -97.7089455319818}, type_of_food: "BBQ", profile_picture: "https://d4o3oxzf7m9sj.cloudfront.net/N_0XWZVXv-wFuaYlyGEADhc917U=/1200x630/smart/https://media.data.statesman.com/restaurants/images/rbz_Franklin_BBQ_05.JPG", hours_of_operation: "Monday-Sunday 11am to 9pm")
t7= Truck.create(name: "Mama Regard's Home Cooking", location: {lat: 30.272957156469843, lng:-97.74254494144333}, type_of_food: "BBQ", profile_picture: "https://www.countryandtownhouse.co.uk/wp-content/uploads/2019/08/evan-wise-D99y38Na5Xo-unsplash.jpg", hours_of_operation: "Monday-Saturday 10am-8pm")
t8= Truck.create(name: "Ol' Bessy's", location: {lat: 30.28096974701333, lng: -97.75347354711543}, type_of_food: "BBQ", profile_picture: "https://bigseventravel.com/wp-content/uploads/2019/12/Screenshot-2019-12-18-at-19.27.58.png", hours_of_operation: "Monday-Saturday 11am-10pm")
t9= Truck.create(name: "Veggie BBQ", location: {lat: 30.27496383078562, lng: -97.76359542155737}, type_of_food: "BBQ", profile_picture: "https://www.weightlossresources.co.uk/pimg/wlr/b/bbq-healthy-og.jpg", hours_of_operation: "Thursday-Sunday 11am to 8pm")
t10= Truck.create(name: "Mama Mia's", location: {lat: 30.260129111590146, lng: -97.75542155539675}, type_of_food: "Italian", profile_picture: "https://www.recipetineats.com/wp-content/uploads/2020/05/Pizza-Crust-without-yeast_5-SQ.jpg", hours_of_operation: "Monday-Sunday 11am to 9pm")
t11= Truck.create(name: "Tone's Taco Truck", location: {lat: 30.281990910294656, lng: -97.70417436154925}, type_of_food: "Mexican", profile_picture: "https://i2.wp.com/www.eatfigsnotpigs.com/wp-content/uploads/2020/04/Vegan-Birria-Tacos-9013-scaled.jpg?fit=2560%2C1707&ssl=1", hours_of_operation: "Thursday-Sunday 11am to 8pm")
t12= Truck.create(name: "Wrap It Up", location: {lat: 30.284072831431235, lng: -97.72066854515097}, type_of_food: "Wraps", profile_picture: "https://shortgirltallorder.com/wp-content/uploads/2020/01/edamame-hummus-veggie-wraps-square-1-of-1-735x735.jpg", hours_of_operation: "Thursday-Sunday 11am to 8pm")
t13= Truck.create(name: "Mix Tape", location: {lat: 30.283392684114084, lng: -97.7229948197004}, type_of_food: "Wraps", profile_picture: "https://sweetpeasandsaffron.com/wp-content/uploads/2019/02/cajun-chicken-wraps-6.jpg", hours_of_operation: "Tuesday-Sunday 11am to 8pm")
t14= Truck.create(name: "Pizza My Heart", location: {lat: 30.28158796683859, lng: -97.73138162252367}, type_of_food: "Italian", profile_picture: "https://francospizza.com/wp-content/uploads/banner__pizza-1.png", hours_of_operation: "Tuesday-Sunday 11am to 8pm")
t15= Truck.create(name: "The Porky Palace", location: {lat: 30.281216278649282, lng: -97.7441870894889}, type_of_food: "BBQ", profile_picture: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Porky_Pig.svg/1200px-Porky_Pig.svg.png", hours_of_operation: "Tuesday-Sunday 11am to 8pm")

Favorite.create(eater_id: e1.id, truck_id: t1.id)


Review.create(eater_id: e1.id, truck_id: t1.id, rating: 4, body: "Delicious tacos! Just a tad cold when they were served.")
Review.create(eater_id: e1.id, truck_id: t2.id, rating: 3, body: "Pretty tasty! Good service.")
Review.create(eater_id: e1.id, truck_id: t3.id, rating: 2, body: "Slow service and poor quality.")
Review.create(eater_id: e1.id, truck_id: t4.id, rating: 5, body: "Amazing!")
Review.create(eater_id: e1.id, truck_id: t5.id, rating: 4, body: "Highly recommend!")
Review.create(eater_id: e1.id, truck_id: t6.id, rating: 3, body: "Service was rude but food delicious!")
Review.create(eater_id: e1.id, truck_id: t7.id, rating: 4, body: "Uh-Maz-Ing")
Review.create(eater_id: e1.id, truck_id: t8.id, rating: 4, body: "Lovely service and a great price!")
Review.create(eater_id: e2.id, truck_id: t9.id, rating: 1, body: "Oof.")
Review.create(eater_id: e2.id, truck_id: t10.id, rating: 1, body: "Terrible service.")
Review.create(eater_id: e2.id, truck_id: t11.id, rating: 2, body: "Food was cold.")
Review.create(eater_id: e2.id, truck_id: t12.id, rating: 3, body: "A little expensive.")
Review.create(eater_id: e2.id, truck_id: t13.id, rating: 5, body: "Great food! Great Price!")
Review.create(eater_id: e2.id, truck_id: t14.id, rating: 5, body: "I'm bringing my entire family next time!")
Review.create(eater_id: e2.id, truck_id: t15.id, rating: 3, body: "Meh food, but cheap enough.")
