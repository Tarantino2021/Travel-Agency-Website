# Travel-Agency-Website

It is a static Travel Agency site with 4 pages using Framer Motion and GSAP for subtle animation and transitions. It is fully responsive. I utilize modern UI/UX designs. To use the best out of React, I break down all the pages into as many small components as possible. I have a rule where I try not to go over 100-150 lines, if it goes over then it is a good indicator for me that I probably should break it down to smaller components. 

That's what I love about using React JS, the ability to write clean code and most importantly maintainable. This also brings me to the question using SASS as the styling, it also allows me to write cleaner mark-up, and the nesting ability of it is one of my favorite features, because I tend to keep my SASS code short as well, the nested look of it feels much more clean and easy to read. Overall, i enjoyed building this mock Travel Agency Website, I have learned a lot as I was building it and I'm sure there are much more room for improvement of its code as well as my way of writing it. But I loved using the modern functional components with Hooks. 

The website has a main Home page, 3 pages that are switched between using React-Router-Dom, as well as shared components which are Footer, Header, Menu. The pages are: Approach, Services, About Us. These pages share the pain banner as a component. 

* The Home page utilizes GSAP animation when the site is loaded initially to reveal the content.

* The Approach page has 4 sections each broken down to their own components. Subtle scroll animation used in this page.

* The Services page has 3 sections and an Accordion section which is a component within a section. I utilize Framer Motion animation in this page.

* The About Us page has 3 sections, and 2 separate components within the third section: Cards and Calendar. This page has a slider I build with Javascript and use Framer Motion for transitions. Cards are separate component; I use CSS Grid to put those cards within the section. The Calendar is built with the React-Date-Range.

* The Footer, Header and Menu are self-explanatory. Nothing fancy. I have just used GSAP animation to open and close the menu much smoother. 

* For Responsive design I used Include-Media documents for SASS which allows you to create simple mixins to use for the responsive design.


I utilized this:

 	* ReactJS
  
 	* SASS
  
 	* Javascript
  
 	* Material-Ui
  
 	* Framer Motion
  
 	* React-Hook-Form
  
 	* React-Youtube
  
 	* React-Router-Dom
  
 	* React-Date-Range

