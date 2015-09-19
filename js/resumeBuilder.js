//Work Profile
var work = {
    "jobs": [
        {
            "employer": "Interwireless Consultant",
            "title": "Radio Network engineer",
            "location": "Lagos, Nigeria",
            "date": "September, 2011",
            "description": "Telecommunication Comparison"
        },
        {
            "employer": "Freelance Web Developer",
            "title" : "Web Developer and Designer",
            "location": "Copenhagen, Denmark",
            "date": "September 2012",
            "description" : "Designing and creating great web pages"
        }
    ]

}
work.display = function() {
$("#workExperience").append(HTMLworkStart);
    for (var job in work.jobs){
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription );

    }
}
work.display();

//Project profile
var projects = {
    "projects": [
        {   "title": "Intimate group website design using Drupal CMS",
            "dates": "August,2014",
            "description": "As an open network, INTIMATE brings together international palaeo-climate scientistsAs an open network, INTIMATE brings together international palaeo-climate scientists from a wide range of disciplines, to focus on developing innovative past climate reconstruction tools and methods. Central to INTIMATE research is the comparison of palaeo-climate and -environmental records based on their independent timescales",
            "images": ["images/intimate.jpg","images/intimate2.jpg","images/intimate3.jpg"]
        },
        {   "title": "Cakes and events design using Wordpress CMS",
            "dates": "December,2014",
            "description": "Cakes & Gateaux by L'event Plan is a fully registered company in charge of events ranging from birthdays to weddings, baby,bridal-showers and other special occasions. We also organise cake training courses at different times of the year for those who love what we do",
            "images": ["images/cakes.jpg", "images/cakes2.jpg", "images/cakes3.jpg"]
        }
    ]

}
projects.display =function(){
    for (var project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates); 
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0){
            for (image in projects.projects[project].images){
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImage);
            }
        }
    }
}
projects.display();

// Bio Profile
var bio = {
        "name" : "Demola Abdulai",
        "role" : "Web Devloper", 
        "contacts": {
                "email":"demolaabdulai@gmail.com",
                "github": "demmyboy",
                "mobile" : 4531686740, 
                "twitter": "@lurddemmy"
                }, 
        "skills" : ["Designing", "Software troubleshooting", "IT technician", "Graphic designer"],
        "location": "Denmark",
        "welcomeMsg":"Welcome to the demmy's World, Lets make a change in the front-end Industry",
        "pic": "images/demmy.jpg"
    }
bio.display = function(){
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%",bio.location);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    var formattedPicture = HTMLbioPic.replace("%data%",bio.pic);
       
    $("#header").append(formattedPicture);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);
    $("#header").append(formattedWelcomeMsg); 
       
       
    $("#header").append(HTMLskillsStart);
    var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
    $("#header").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
    $("#header").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);
    $("#header").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%",bio.skills[3]);
    $("#header").append(formattedSkills); 
}
bio.display();

//Education Profile
var education = {
    "schools": [
        {
            "name": "University of Copenhagen",
            "location": "Copenhagen, denmark",
            "degree": "M.Sc",
            "major": "Physics",
            "date": "2013-2015",
            "url": "www.ku.dk"
        },
        {
            "name": "Information Technology University",
            "location": "Copenhagen, Denmark",
            "degree": "Guest Student",
            "major": "Java and Interactive Multimedia",
            "date": "2013",
            "url": "www.itu.dk"
        }
    ],
    "onlinecourses": [
        {
            "title": "Front End Developer Nano-Program",
            "school": "Udacity",
            "date": 2015,
            "url": "www.udacity.com"
        },
        {
            "title": "Front End Developer course",
            "school": "Udemy",
            "date": 2015,
            "url": "www.udemy.com"
        },
        {
            "title": "Front End Developer course",
            "school": "Cousera",
            "date": 2015,
            "url": "www.cousera.org"

        }
    ]
}
education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var schools in education.schools){
        var formattedName = HTMLschoolName.replace("%data%", education.schools[schools].name);
        $('.education-entry:last').append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[schools].date);
        $('.education-entry:last').append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].major);
        $('.education-entry:last').append(formattedMajor);
    };

    $('#education').append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    
    for (var online in education.onlinecourses){
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[online].school);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[online].title);
        var schoolTitle = formattedOnlineSchool + formattedOnlineTitle;
        $('.education-entry:last').append(schoolTitle);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlinecourses[online].date);
        $('.education-entry:last').append(formattedOnlineDates);

        var formattedURL= HTMLonlineURL.replace("%data%", education.onlinecourses[online].url);
        $('.education-entry:last').append(formattedURL);

    };
}
education.display();


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
