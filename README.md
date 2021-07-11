<h1 align="center">The Destiny 2 Class Quiz</h1>

This site is for the potenial new players for the Bungie first person shooter video game callled Destiny 2. In the game you have a choice of picking between three classes of characters and this site is dedicated to showing the new players what the three classes are and through a short quiz which type of character the user is suitable to play as.

![Screen sizes](insert image of diff screen sizes)

## User Experience (UX)

-   ### User Stories

    -   ### First Time Visitor Goals
        -   As a First Time Visitor, I want to understand the main purpose of the site.
        -   As a First Time Visitor, I want to be able to easily navigate the site.
        -   As a First Time Visitor, I want to see where I can find/buy the product.
    
    -   ### Returning Visitor Goals 
        -   As a returning Visitor, I want to easily find any new potential updates from the game.
        -   As a returning Visitor, I want to get in contact to possibly ask questions.
    
    -   ### Frequent User Goals
        -   As a frequent User, I want to easily find any new potential updates from the game.
        -   As a frequent User, I want to see any new implements to the site based on user feedback.

-   ### Desing
    -   ### Color Scheme
        -   The Main colors used in the site was taken from Destiny 2 the game loading screen. Then using mycolor.space I got a palette of accompanying colors.
        ![Color Palette](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/palette.png)
    -   ### Typography 
        -   The Overpass font was used as the main font for the site with Sans Serif as the fallback font. Overpass was used because it is similar to the main logo of Destiny 2 the game.
    -   ### Imagery 
        -   Each page has images from Destiny 2 the game. Majority of which are cartoon representations of the characters which make it light and fun to look at as well as in-game character modals.

## Features 

### Existing Features

-   Landing/index Page 
    -   The site opens up with a fadein image of three characters standing looking up towards a large globe like structure.
    -   There is a welcome text and a clickable button which opens a modal with a form element in which the user would then enter their email and a username to login into the home page.

![Landing Page](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/landing.png)
[Landing Page with Login]()

-   Home Page

-   Navigation bar 
    -   This is features on the home and quiz page which allows the user to easily navigate between both pages.
    -   The nav bar condenses to a three line box as the screen size gets smaller which the becomes clickable to show the page links.

![Nav Bar](insert image here)
![Nav Bar condensed](insert image here)

-   The footer
    -   The footer section has two buttons, one when clicks breifly tells the user what the site is about and the second allows the user to submit a contact form with their name, email and a short comment about the site.
    -   The buttons use a modal that when clicked on dims the background as the content is loaded. The user then can click on an empty side of the screen to close the modal.

![Footer](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/footer.png)

-   The Hero Image
    -   After succesfully logging in the user is greeted with a cartoon image of a range of characters from the Destiny universe.
    -   A text asking the question what type of guardian the user be? Which already initiates the thinking of what type of play style the user could prefers.

![Hero Image](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/home.png)

-   The introduction section
    -   This intorduction section has a breif discription of what the Destiny 2 the video game is about.
    -   It has a button that takes the user straight to the quiz page and informs the user that the can proceed that way or scroll further down to find out more about the different character classes called guardians.
    -   It has another cartoon image of one the video games main characters.*spoiler alert* was one of the main characters...

![Introduction](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/intro.png)

-   The Guardian Classes section 
    -   This section has the three types of playable classes with an image and a short paragraph about them.
    -   The images used are from the character sub-class section in-game and shows the various of powers the character can hold.

![Guardian Classes]()
![Guardian Classes]()

-   Quiz Page

-   Main Page
    -   At first glance there is a Destiny 2 logo on the page with a button that informs the user to click to begin the quiz.
    ![Quiz Page](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/quiz.png)

    -   Once the button is clikced the question number, question text and three option buttons appear and the button dissapears from screen.
    -   Each option is hightlighted when the user scrolls over.
    -   Once a button is clicked that option gets logged into the answer data variable, a new question appears with new option buttons and the increment in the question number.
    -   The questions and options are selected at random from the question array.
    ![Quiz with question and options](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/quiz%20with%20questions.png)

    -   Once the user reached the end of the questions the endQuiz function is read and the users total scores in answer data are organizated in descending order and checks which character classes are the most occuring.
    -   The main quiz image is then removed and the results are displayed in the form of a text of what class the user is and an occompanying image of said class.
    -   Insert restart functiion here
    ![Quiz with results](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/quiz%20results.png)
    ![Quiz restart]()

### Features left to implement

-   Maybe send user the quiz results
-   Add more pages detailing the game history and ongoing updates since it is a game as a service.
-   Any user suggested features e.g. improvement to questions and option or to add more to question pool.

## Testing 

### Functional Testing 

-   Landing Page login form
    -   Local stroage js here, needs to justify saving to local storage

-   Navigation Bar 
    -   The naviagtion bar stays on the top of the page and has links to the home and quiz page.
    -   The active page is highlighted so that the user knows at all time what page they are on. 
    -   On hovering over the pages the text color changes to let the user know what they are about to click on.
    -   As the screen gets smaller a three line box on the right side and the quiz page link disapears.
    -   The user can then click on the three line box to display the quiz page link. The home page and quiz links then apear as a drop down and take the full navigation bar.
    -   The home page link remains on the navigation bar at all times so the user can easily navigate back if an error occurs.

-   The footer
    -   The footer holds two buttons that open different modals. One is a simple about button that displays a text about the general purpose of the site. The second is a form where the user can send an email to the site developer.
    -   Both buttons have an animation when clicked and creates a dim effect on the background which allows the content being clicked on to be focussed. 
    -   The user can then click on the x icon on the modals or on any blank section of the screen to close the content.
    -   The form sends an email through emailjs to the developer using a template created on emailjs. It retrives the users email, name and message from the form and sends the information as an email to the site developer.

-   Images
    -   All images used are responsive depending on the screen sizes viewing the content.
    -   Only the main landing page and home page image do not have responsiness. This is because at various screen sizes different parts of the image can be viewed and does not affect the user experience as majority of the main image can still be seen.

-   Quiz page
    -   Fill in details about quiz and js used


### Testing user Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1.  As a First Time Visitor, I want to understand the main purpose of the site.

        -   Ideally the first time visitor would have some idea of what the video game is about and how to get access to it.
        -   The home page has a introduction section explainging what the video game is and the purpose of why the site was created to help the user pick a character to play as when starting the video game for the first time.
        -   There is also a section dedicated to the various character classes available to play as.

    2.  As a First Time Visitor, I want to be able to easily navigate the site.

        -   The home page has a header that is located at the very top of the page.
        -   The page the user is on is always highlighted.
        -   Each section of the home page has a title describing the content of each section
        -   The home page has a link to the quiz page as well as it being on the top of the page.
        -   The quiz page is simple and requires the user the click on the button to being.

    3.  As a First Time Visitor, I want to see where I can find/buy the product.

        -   Add a link to the destiny 2 steam page!!
        -   Add link to destiny 2 website and maybe reddit

-   #### Returning Visitor Goals

    1.  As a returning Visitor, I want to easily find any new potential updates from the game.

        -   Update character section if there is a new guardian calss introduced
        -   Possibly add new/refine questions to get better user results
    
    2.  As a returning Visitor, I want to get in contact to possibly ask questions.

        -   The contact form is located in the footer if the user would want to get in touch and ask questions about the video game or about the site.quiz.
        -   Destiny 2 socials here

-   #### Frequent User Goals

    1.  As a frequent User, I want to easily find any new potential updates from the game.

        -   Insert destiny 2 social media links

    2.  As a frequent User, I want to see any new implements to the site based on user feedback.

        -   Possibly add new/refine questions to get better user results


-   ### Validator Testing

-   HTML
    -   No errors were returned when passing through the official [W3C validator]()

-   CSS
    -   No errors were found when passing through the official [(jigsaw) validator]()     

-   JavaScript
    -   ???

### Known Bugs

-   Not sure

## Deployment

-  The site was deployed to GitHub pages. These are the steps to deploy:
    -   Login to GitHub and click on the repository
    -   In the GitHub repository, navigate to the settings tab
    -   On the sidebar navigate to the pages tab
    -   From the source section, select the Master Branch, root and save
    -   After a few minutes it will say your site has been published with a link to the site

 The live link can be found here - 

## Credits

 ### Languages Used

 -  [HTML5](https://en.wikipedia.org/wiki/HTML5)
 -  [CSS3](https://en.wikipedia.org/wiki/CSS)
 -  [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

 ### Content

-   

### Media

-   

### Acknowledgement

-   My mentor for giving constant feedback throughtout the sessions.
