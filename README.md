# The Project is running with Ionic 4/5

# The Project is using Card Layouts without images.

# Download the Github Repository https://github.com/dark-panthera/ionic-telephony

# It is using Angular 8

# When Clicking on An Item from the cards it will animate to the next page where it will list all the cards

# When is in the card details an icon will be displayed at the top that allows the user to redirect back to the home page

# A Common Components:
    # Detail Tile - relating to details of the page
    # Home Header - it will be common for each page (but in the details page, the icon will appear)
    # Offer Tile - currently the offer page used in home page - currently passing hardcoded 100, in the route, but the service is calling the api on one specific id which is 100

# A Service Portal (Client Portal)
    # https://selfcare-service.demo.melita.com/interview/api/offers/${id}/subscriptions - used to get the subscription by passing the offer id
    # https://selfcare-service.demo.melita.com/interview/api/offers - used to get the list of offers

# Whilst the service is calling the api, it is using a BehaviourSubject since it already has a value set as false, this subject is used to update the state of the ui everytime the api is called to display a loading message

# Just to give you a heads up, I did not focus much on the UI, but I focused more on the logic.

