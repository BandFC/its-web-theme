
var jq = jQuery.noConflict();

/* var targetodd = '.path-courses .main-container .region-content .view-content div.table-responsive:nth-child(odd)';
var targeteven = '.path-courses .main-container .region-content .view-content div.table-responsive:nth-child(even)';
var imgodd = jq(targetodd).prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-img-default.png"></div>' );
var imgeven = jq(targeteven).append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-img-default.png"></div>' );*/

// Sector Subject Area Imagery

jq('body.path-courses .view-content div.table-responsive table.table caption').each(function(i, el){
	
	var ssa = jq(this).text();
	var ssa = jq.trim(ssa);
	
	switch(ssa){
		
		// Accounting and Finance
		case "Accounting and Finance":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/accounting.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/accounting.jpg"></div>' );
				}
	
			break;
			
		// Administration
		case "Administration":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/administration.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/administration.jpg"></div>' );
				}
	
			break;
			
		// Automotive and Motorsport 
		case "Automotive and Motorsport":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/automotive.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/automotive.jpg"></div>' );
				}
	
			break;
			
		// Automotive Training 
		case "Automotive Training":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/motor_vehicle.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/motor_vehicle.jpg"></div>' );
				}
	
			break;

		// Building and Construction 
		case "Building and Construction":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/default.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/default.jpg"></div>' );
				}
	
			break;
		
		// Business and Project Management
		case "Business and Project Management":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/default.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/default.jpg"></div>' );
				}
	
			break;
		
		// Child Development and Wellbeing
		case "Child Development and Wellbeing":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/child_wellbeing.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/child_wellbeing.jpg"></div>' );
				}
	
			break;
		
		// Commercial Training
		case "Commercial Training":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/default.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/default.jpg"></div>' );
				}
	
			break;
			
		// Computing - ICT for Users
		case "Computing - ICT for Users":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/ict.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/ict.jpg"></div>' );
				}
	
			break;
			
		// Computing, Digital Media and ICT
		case "Computing, Digital Media and ICT":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/web.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/web.jpg"></div>' );
				}
	
			break;
			
		// Engineering
		case "Engineering":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/engineering.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/engineering.jpg"></div>' );
				}
	
			break;
			
		// Hair, Beauty and Related Therapies
		case "Hair, Beauty and Related Therapies":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/hairdressing.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/hairdressing.jpg"></div>' );
				}
	
			break;
			
		// Health and Social Care
		case "Health and Social Care":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/health_and_social.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/health_and_social.jpg"></div>' );
				}
	
			break;
			
		// Hospitality and Catering
		case "Hospitality and Catering":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/hospitality.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/hospitality.jpg"></div>' );
				}
	
			break;
			
		// Learning Support 
		case "Learning Support":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/learning_support.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/learning_support.jpg"></div>' );
				}
	
			break;

		// Manufacturing Technologies
		case "Manufacturing Technologies":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/manufacturing.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/manufacturing.jpg"></div>' );
				}
	
			break;

		// Marketing, PR and Event Management
		case "Marketing, PR and Event Management":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/events.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/events.jpg"></div>' );
				}
	
			break;
			
		// Public Services
		case "Public Services":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/public_services.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/public_services.jpg"></div>' );
				}
	
			break;
		
		// Retail
		case "Retail":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/retail.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/retail.jpg"></div>' );
				}
	
			break;

		// Sport, Leisure and Recreation 
		case "Sport, Leisure and Recreation":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/default.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/default.jpg"></div>' );
				}
	
			break;

		// Travel and Tourism
		case "Travel and Tourism":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/default.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/default.jpg"></div>' );
				}
	
			break;

		// Warehousing and Distribution
		case "Warehousing and Distribution":
			
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/warehousing.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/warehousing.jpg"></div>' );
				}

			break;
			
		default:
		
				if (i % 2 === 0){ 
					jq(this).closest("div.table-responsive").prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/default.jpg"></div>' );
				} else { 
					jq(this).closest("div.table-responsive").append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-search/default.jpg"></div>' );
				}
						
	}// End Switch

	
});

// Search Header Placeholder Text Override
jQuery('.region-search-header .form-search').attr("placeholder", "Career / Course Search");
