
var jq = jQuery.noConflict();

// console.log("Hello World!");

var targetodd = '.path-courses .main-container .region-content .view-content div.table-responsive:nth-child(odd)';
var targeteven = '.path-courses .main-container .region-content .view-content div.table-responsive:nth-child(even)';

var imgodd = jq(targetodd).prepend( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-img-default.png"></div>' );
var imgeven = jq(targeteven).append( '<div class="course-list-img"><img class="img-responsive hidden-xs" src="/themes/itsweb/images/course-img-default.png"></div>' );

