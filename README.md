<h1 align="center">The Destiny 2 Class Quiz</h1>

This site is for the potential new players for the Bungie first person shooter video game called Destiny 2. In the game you have a choice of picking between three classes of characters and this site is dedicated to showing the new players what the three classes are and through a short quiz, which type of character the user is most likely to enjoy playing as.

![Screen sizes](insert image of diff screen sizes)

The live link can be found here - https://dhowai.github.io/portfolio-2-destinyquiz/

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
        -   The Main colors used in the site were taken from Destiny 2 the game loading screen. Then, using mycolor.space I got a palette of accompanying colors.
        ![Color Palette](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/palette.png)
    -   ### Typography 
        -   The Overpass font was used as the main font for the site with Sans Serif as the fallback font. The Overpass was used because it is similar to the main logo of Destiny 2 the game.
    -   ### Imagery 
        -   Each page has images from Destiny 2 the game. Some are cartoon representations of the characters which make it light and fun to look at as well as in-game character models.

## Features 

### Existing Features

-   Landing/index Page 
    -   The site opens up with a fade in image of three characters standing looking up towards a large globe like structure.
    -   There is a welcome text and a clickable button which, when clicked hides the image and text and displays the page's main content.
    -   The main content is hidden and is only displayed when the let's begin button is clicked on through an event listener.

![Landing Page](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/landing.png)

-   Home Page

-   Navigation bar 
    -   This is featured on the home and quiz page which allows the user to easily navigate between both pages.
    -   There is a form that the user can enter their name and enter, it then saves it to local storage.
    -   Once the accompanying button is clicked the headings get customized by the users name that they filled in the form.
    -   There is an option to forget the data put in the form in which the headings return to the default as the data from the form is wipped from local storage.
    -   The navigation bar condenses to a three line box as the screen size gets smaller, which the becomes clickable to show the page links.

![Nav Bar](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/Nav%20Bar.png)
![Nav Bar localstorage add](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/localstorage.png)
![Nav Bar localstorage forget](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/localstorage2.png)

-   The footer
    -   The footer section has two buttons, one when clicked briefly tells the user what the site is about and the second allows the user to submit a contact form with their name, email and a short comment about the site.
    -   The buttons use a modal that when clicked on dims the background as the content is loaded. The user then can click on an empty side of the screen to close the modal.
    -   The other buttons are links to the respective Destiny 2 social media and the main website for the game.

![Footer](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/footer.png)
![Footer2](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/footer2.png)


-   The Hero Image
    -   After successfully logging in, the user is greeted with a cartoon image of a range of characters from the Destiny universe.
    -   A text asking the question what type of guardian the user be? Which already initiates the thinking of what type of play style the user could be.
    -   If the user enters a text in the form the headings change using local storage to store and get the data.

![Hero Image](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/home.png)
![Hero Image with name](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/home2.png)

-   The introduction section
    -   This intorductory section has a brief description of what the Destiny 2 the video game is about.
    -   It has a button that takes the user straight to the quiz page and informs the user that the can proceed that way or scroll further down to find out more about the different character classes called guardians.
    -   It has another cartoon image of one the video games main characters.*spoiler alert* was one of the main characters...

![Introduction](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/intro.png)

-   The Guardian Classes section 
    -   This section has the three types of playable classes with an image and a short paragraph about them.
    -   The images used are from the character sub-class section in-game and shows the various of powers the character can hold.

![Guardian Classes](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/characters1.png)
![Guardian Classes2](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/characters2.png)

-   Quiz Page

-   Main Page
    -   At first glance there is a Destiny 2 logo on the page with a button that informs the user to click to begin the quiz.
    ![Quiz Page](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/quiz.png)

    -   Once the button is clickced the question number, question text and three option buttons appear and the button is hidden.
    -   Each option is highlighted when the user scrolls over.
    -   Once a button is clicked that choice gets logged into the answer data variable, a new question appears with new option buttons and the increment in the question number.
    -   The questions and options are selected at random from the question array.
    ![Quiz with question and options](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/quiz%20with%20questions.png)

    -   Once the user reached the end of the questions the endQuiz function is called and the users total scores in answer is are organized in descending order and checks which character classes are the most occurring.
    -   The main quiz image is then removed and the results are displayed in the form of a text of what class the user is and an accompanying image of said class.
    -   /*restart function*/
    ![Quiz with results](https://github.com/dhowai/portfolio-2-destinyquiz/blob/master/assets/images/readme/quiz%20results.png)
    ![Quiz restart]()

### Features left to implement

-   Store an array of users and scores to local storage an have an option to send the user the results.
-   Add more pages detailing the game history and ongoing updates since it is a game as a service.
-   Any user suggested features, e.g. improvement to questions and options or to add more to question pool.

## Testing 

### Functional Testing 

-   Landing Page login form
    -   There is form in the header that the user can add their name to and have that input appear in the heading of the home page.
    -   This data is saved to local storage and can be eased when a click of the button again.
    -   The headings, then return to default.

-   Navigation Bar 
    -   The navigation bar stays on the top of the page and has links to the home and quiz page.
    -   The active page is highlighted so that the user knows at all time what page they are on. 
    -   On hovering over the pages the text color changes to let the user know what they are about to click on.
    -   As the screen gets smaller a three line box on the right side and the quiz page get hidden and the form drops below.
    -   The user can then click on the three line box to display the quiz page link. The home page and quiz links then appear as a drop down and take the full navigation bar.
    -   The home page link remains on the navigation bar at all times so the user can easily navigate back if an error occurs.

-   The footer
    -   The footer holds two buttons that open different modals. One is a simple about button that displays a text about the general purpose of the site. The second is a form where the user can send an email to the site developer.
    -   Both buttons have an animation when clicked and creates a dim effect on the background which allows the content being clicked on to be focussed. 
    -   The rest of the buttons are links to the various destiny 2 social media and main website page.
    -   The user can then click on the x icon on the modals or on any blank section of the screen to close the content.
    -   The form sends an email through emailjs to the developer using a template created on emailjs. It retrieves the user's email, name and a message from the form and sends the information as an email to the site developer.
    -   As the screen size reduces the footer buttons move to the center and reduce in size to fit the screen.

-   Images
    -   All images used are responsive depending on the screen sizes viewing the content.
    -   Only the main landing image and home page image do not have responsiveness. This is because at various screen sizes, different parts of the image can be viewed and does not affect the user experience as the majority of the main image can still be seen.

-   Quiz page
    -   This page holds the majority of the javascript. Initially all the javascript was located on one page which caused an error of having different evernt listeners waiting to be called due it being on a different page. Therefore, the scripts were split into three, one for the quiz, one for the landing image and the local storage function and lastely one that they share is the mainscript which hold the naviagation function and modal functions for the footer.
    -   


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

        -   The contact form is located in the footer if the user would want to get in touch and ask questions about the video game or about the site, quiz.
        -   The user can explore the destiny 2 social media links in the footer to find out about updates and where to download the game from.

-   #### Frequent User Goals

    1.  As a frequent User, I want to easily find any new potential updates from the game.

        -   The footer has links to the video games main website and vaious social media.
        -   The returning user can then engage with the vast community and find official information from the game developers.

    2.  As a frequent User, I want to see any new implements to the site based on user feedback.

        -   Possibly add new/refine questions to get better user results


-   ### Validator Testing

-   HTML
    -   No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdhowai.github.io%2Fportfolio-2-destinyquiz%2F)

-   CSS
    -   No errors were found when passing through the official [(jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdhowai.github.io%2Fportfolio-2-destinyquiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)     

-   JavaScript
    -   [JSHint](https://jshint.com/) was used to check for any major errors in the scripts. The only errors found were for the 'let','const' due to being only available on ES6.

-   ### Known Bugs

-   

## Deployment

-  The site was deployed to GitHub pages. These are the steps to deploy:
    -   Login to GitHub and click on the repository
    -   In the GitHub repository, navigate to the settings tab
    -   On the sidebar navigate to the pages tab
    -   From the source section, select the Master Branch, root and save
    -   After a few minutes it will say your site has been published with a link to the site

 

## Credits

 ### Languages Used

 -  [HTML5](https://en.wikipedia.org/wiki/HTML5)
 -  [CSS3](https://en.wikipedia.org/wiki/CSS)
 -  [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

 ### Content

-   Text taken from the character class descriptions was taken from [PCgamesn](https://www.pcgamesn.com/destiny-2/destiny-2-class-guide), [Wikipedia](https://en.wikipedia.org/wiki/Destiny_2), [Shacknews](https://www.shacknews.com/article/113290/destiny-2-all-classes-subclasses-and-perk-trees) and [IGN](https://www.ign.com/wikis/destiny/Classes).
-   The font used was taken from [Google Fonts](https://fonts.google.com/)
-   The icons used were taken from [Font Awesome](https://fontawesome.com)
-   [GitHub](https://github.com/) used to store the project code 
-   Wireframe software used to design the site structure [Balsamiq](https://balsamiq.com/)
-   Used [Autodesk sketchBook](https://www.autodesk.com/products/sketchbook/overview) to edit images for the classes taken from the in-game character screen
-   Used [Imageonline](https://remove-white-background.imageonline.co/) to remove the white backgrounds from the edited images.
-   Used W3schools for instruction on how to:
    -   How to create a modal box [W3schools](https://www.w3schools.com/howto/howto_css_modals.asp)
-   [EmailJS](https://www.emailjs.com/docs/tutorial/overview/) was used for the contact form element in the footer.
-   The ReadMe file was written in reference to [The Code Institute sample README](https://github.com/Code-Institute-Solutions/SampleREADME),[The Code Institute readme template](https://github.com/Code-Institute-Solutions/readme-template), [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

### Media

-   Photo used for the landing page is from [goodfon](https://www.goodfon.com/wallpaper/destiny-destiny-2-warlock-hunter-titan-traveller.html).
-   The character class images was taken via screenshots from destiny the video game and editied using the autodesk sketchbook.
-   The various cartoon images were taken from [Imgbin](https://imgbin.com/).

### Acknowledgement

-   The Destiny 2 community from the game and various social media for the inspiration behind the questions.
-   My mentor for giving constant feedback throughtout the sessions.
