
//$("#main").append("demola Abdulai")
//$("#main").append("funthoughts");

//var awesomeThoughts = "I am Demmy and I am Awesome, thank God for that"

//var funthoughts = awesomeThoughts.replace("Awesome", "fun");

/*var name = "Demola Abdulai";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
*/








//$("#header").prepend(formattedRole); 
//$("#header").prepend(formattedName);


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
	"welcomeMsg":"Welcome to the demmy's World",
	"pic": "images/demmy.jpg",


"display" : function( ){
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
  };  
  bio.display();

var work = {
	"jobs" :  
	//{ "employer1": "interwiress Consultant",
	  //"title1" : "Radio Network Engineer",
	  //"location1": "Lagos, Nigeria",
	  //"dates1": "September 2011",
	  //"decription1" : "Telecommunication comparison"
	//},
	 { "employer": "Freelance Web Developer",
	 "title" : "Wed Developer and Designer",
	  "location": "Copenhagen, Denmark",
	  "dates": "September 2012",
	  "decription" : "Designing and creating great web pages"
	 },

	"display": function( ){
		//var formattedDate1 = HTMLworkDates.replace("%data%",work.jobs.dates1);
		//var formattedEmployer1= HTMLworkEmployer.replace("%data%",work.jobs.employer1);
		//var formattedWorkTitle1 = HTMLworkTitle.replace("%data%", work.jobs.title1);
		//var formattedLocation1 =  HTMLworkLocation.replace("%data%",work.jobs.location1);
		//var formattedDescription1 = HTMLworkDescription.replace("%data%",work.jobs.decription1);

		var formattedDate = HTMLworkDates.replace("%data%",work.jobs.dates);
		var formattedEmployer= HTMLworkEmployer.replace("%data%",work.jobs.employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs.title);
		var formattedLocation =  HTMLworkLocation.replace("%data%",work.jobs.location);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs.decription);

		
		//$("#workExperience").append(formattedEmployer1);
		//$("#workExperience").append(formattedWorkTitle1);
		//$("#workExperience").append(formattedDate1);
		//$("#workExperience").append(formattedLocation1);
		//$("#workExperience").append(formattedDescription1);

		$("#workExperience").append(formattedEmployer);
		$("#workExperience").append(formattedWorkTitle);
		$("#workExperience").append(formattedDate);
		$("#workExperience").append(formattedLocation);
		$("#workExperience").append(formattedDescription);
	}
};
work.display();

var projects = {
	"project": [
	{	"title": "intimate group",
		"dates": "August,2014",
		"decription": "a drupal site for the group",
		"URL": "http://www.intimate.ku.dk"
	},
	{	"title": "cakes and events",
		"dates": "December,2014",
		"decription": "a CMS site for the company",
		"URL": "http://www.cakesforevents.org"
	}
	]

}
/*
var bio {
	"name" : "Demola Abdulai",
	"role" : "Web Devloper", 
	"contact info": {
				"email address":"demolaabdulai@gmail.com",
				"github": "demmyboy",
				"phone" : 4531686740, 
				"twitter": "@lurdDemmy"

	}, 
	"skills" : ["designing", "software troubleshooting", "IT technician", "graphic desiner"],
	"location": "Denmark"

}

var education = {
      "schools": [ 
      {
      	"name": "University of Copenahgen",
      	"location": "Copenhagen, Denmark",
      	"degreee": "MSc",
      	"major": "physics",
      	"dates attended": "September, 2012",
      	"url": "www.ku.dk"
      },
      {	"name": "Lagos State University",
      	"location": "Lagos, Nigeria",
      	"degreee": "BSc",
      	"major": "physics",
      	"dates attended": "March, 2002",
      	"url": "www.lasu.org"
      }
      ],
      "online Course": [ 
      {
      	"title": "Front End developer Nanodegree",
      	"school": "Udacity",
      	"date": "July, 2015",
      	"URL": "www.udacity.com"
      },
      {

		"title": "Learn to be a Web Developer",
      	"school": "Udemy",
      	"date": "April, 2015",
      	"URL": "www.udemy.com"
      }
      ] 

}

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);

	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);

	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);

	$("#skills").append(formattedSkill);
}

for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formatterTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formatterTitle;

	$(".work-entry:last").append(
		formattedEmployerTitle);



}
*/