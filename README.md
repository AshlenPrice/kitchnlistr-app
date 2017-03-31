# Kitchn Listr
![App snippet](http://i.imgur.com/GBhbDmI.png)

- Checkout this app's [API](https://github.com/AshlenPrice/capstone-api)
- Deployed On [Heroku](https://secure-mountain-84093.herokuapp.com/)
- Checkout [Kitchn Listr ](https://ashlenprice.github.io/kitchnlistr-app/)

Kitchn Listr app prototype is an app in progress. The purpose of the app is to build a network of
seasoned cooks/chefs and private Kitchen owners that want to help eachother grow. There are many chefs out there
that need spaces to prepare large quantities of goods and don't have access to the proper space. There are also
many kitchen owners that would be willing to lease out their kitchens when they are not in use. This app is the
perfect marriage to help fill tha gap.
Ideally this app will be a type of Yelp app for comercial kitchens. Where people can list their kitchen for rent.
Chefs can rate the kitchens and owners can see those ratings and respond to any expressed concerns or questions.

## Approach
I started out thinking about the idea for this app, and planning out the architecture and wireframes.
That took a couple days to get down the way I wanted it to. After I planned I began to worok on the back end
of my app and it took me a while. I ran into some pretty major challeneges trying to implement profile for the user.
Once I got through that, I worked on my front end, I started off trying to use Ember but was unable to because I
didn't have much time and I was too unfamiliar with ember. Over all I think that this app has great potential.

## Technologies Used
- JS
- Handlebars
- Alertify.js
- HTML/CSS
- Ruby/Rails (backend)


#### Dependencies
Dependencies are installed with npm install

## wireframes & ERD
* Original [Wireframe](http://i.imgur.com/LtFxIoYl.jpg)
* Initial [ERD](http://i.imgur.com/S6ZmKxPl.jpg)
* Final [ERD](http://i.imgur.com/w8mB3tdm.jpg)
* Final [Wireframe](http://i.imgur.com/W6qyJVK.jpg)

## Planned User Stories

As a guest I want to:
    - View Reviews and ratings
    - Search for a kitchen by features

  As a Kitch'n Owner I want to:
    - View my ratings/reviews
    - Change my password.
    - be able to log out.

  As a Chef I want to:
    - Create a review and rate Kitch'ns I've rented.
    - Change/Edit the reviews I've written.
    - Delete My reviews/ratings.
    - Add a Kitch'n to my favorites
    - Schedule/Reserve a kitch'n slot.
    - Add pictures of what I've cooked.
    - Change my password.
    - be able to log out.
    - Contact a Kitch'n owner to for more informantion
    -
## Completed User stories
As a guest I want to:
  - Visit KitchnListr to view available kitchens to rent.
  - Create an account/ sign-in to list a kitchen I own for rent.

As a Kitch'n Owner I want to:
  - Create a Kitch'n listing.
  - Upload pictures of my Kitch'n.
  - Edit my listing and its data.
  - Remove my Kitch'n listing


## Project Challenge & Future Goals
  I had a lot of challenges on the back enf of my projcet, where I spent most of the time on.
  On the front end I stuggled a bit with handlebars and my events I had a hard time ensuring that
  I was targting the right data on the back end to render the approprate data on the front end.
  Due to the time constrains that I had I ended up using the browser template, so in the future
  I would like to use ember to build another front end.

  Unfinished features & Improvements
  - CRUD for Review (create, read, update, delete)
  - CRUD for Review (create, read, update, delete)
  - Image uploads for both kitchens and users
  - Ability to search kitchens nearby
  - Ability to message a kitchen directly
  - Store Images to AWS
  - Owner access reviews on their kitchen
  - Star rating system


FYI- My first commit on day 1 of user stories and wireframes are on my back-end repo in the planning.md document.
