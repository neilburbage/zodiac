/*
TO DO:
1) Make a horiscope generator, the 12 star signs and very short fortune re: a few words for each sign
2) Build framework with html and css, very simple site just a few headings and paragraphs and one photo
3) Use JS to generate the randomness and respond to the user click on where they select there star sign
4) Push it onto Git Hub 
5) Timeline
i.   Build the html framework: 30 minutes
ii.  Add the CSS, simple colour scheme, fonts and a 2 column layout: 1 hour
iii. Create the JS locally in VSCode and run it to test: 1 hour
iv.  Set up and use version control re: Git Hub commit changes as you make them: 1 hour 
v. Put the programme together so that the user can click to get the generated message via a website: 1 hour
vi. Test that it works: 30 minutes
*/
function selfunction() {
    "use strict";
    var textrowa,
    randomresult,
    result;
    textrowa = "Here is your Horoscope"
    document.getElementById('textrow1').innerHTML = textrowa;
    randomresult = [
        "An old friend will call you out of the blue and invite you to go shopping.",
        "Destiny invites you to buy £50 of Bitcoin shares.",
        "A family member will give you some good advice, will you follow their advice and prosper?",
        "Today you will discover who is your soulmate.",
        "Pay more attention to your health.",
        "A career opportunity will come your way, be strong and seize it to land your dream job.",
        "Relax and pamper yourself today, you deserve it.",
        "Think positive thoughts today and keep in mind that good things come to those who wait.",
        "Love arrives in the form of a piece of paper.",
        "Now is the perfect time for you to take up a new sport or hobby.",
        "An admirer will send you a gift. Use this chance.",
        "Destiny recommends that today you should spend time with friends."
    ];
    result = randomresult[Math.floor(Math.random() * 12)];   
    document.getElementById('textrow2').innerHTML = result;
    document.getElementById("restartbtn").style.visibility = "visible";
}