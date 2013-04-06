var num_comments = 0;

$(document).ready(function(){
	$('.error').hide();
	$('#slides').presentation({
		slide: '.slide', //Reference to each individual slide
		pagerClass: 'nav-pager', //Class to put on the unordered list that contains links to each slide
		prevNextClass: 'nav-prev-next', //Class to put on the unordered list that contains the previous and next links
		prevText: 'Previous', //Text for the Previous link
		nextText: 'Next', //Text for the Next link
		transition: 'slide' //Possible values are 'fade', 'show/hide', 'slide'
	});
	do_comment_stuff();
});

function do_comment_stuff(){
	$.get("/php/get_comments.php", function(data){
		// get the form and the comments
		var commentForm = $('#comments');
		var commentsDiv = $('.all_comments');
		
		// get the button, name, and comment
		var button = $('.add_comment');
		var name = $('#name');
		var comment = $('#comment');
		
		// validate info
		button.click(function(){
			if (comment.val() == "" || name.val() == ""){
				$('.error').slideDown();
				return false;
			}
			
			// get the text
			var nameText = name.val();
			var commentText = comment.val();
			
			$.post("/php/add_comment.php", {name:nameText, comment:commentText}, function(data2){
				var id = data2.id;
				
				commentsDiv = add_new_comment(id, nameText, commentText, commentsDiv);
			});
			
			return false;
		});
		
		if(data.length == 0)
		{
			commentsDiv.html("<i>No comments in the system at this time.</i>");
		}
		
		for(var i = 0; i < data.length; i++)
		{
			commentsDiv = add_new_comment(data[i].id, data[i].name, data[i].comment, commentsDiv);
			num_comments++;
		}
	}, "json");
}

function add_new_comment(id, name, comment, commentsDiv){
	if(num_comments == 0)
	{
		commentsDiv.html("");
	}

	var newCommentDiv = $("<pre>");
	newCommentDiv.addClass("comment");
	newCommentDiv.attr("id", id);
	newCommentDiv.html("<br>" + name + " wrote:<br><br>\"" + comment + "\"<br>");
	commentsDiv.append(newCommentDiv);
	num_comments++;
	return commentsDiv;
}