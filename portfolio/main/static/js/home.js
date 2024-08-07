function filterByTag(selectedTag, $projects) {
	$projects.each(function() {
		const $project = $(this);
		const projectTags = $project.data('tags');
		const column = $project.closest('.col-md-4');

		// console.log("	" + $project);
		console.log("	" + projectTags);
		console.log("	" + column)
		console.log("	res: " + projectTags.includes(selectedTag))
		if (selectedTag === 'all' || (projectTags && projectTags.includes(selectedTag))) {
			column.css('display', 'flex');
			console.log("	SHOW");
			console.log($project.closest('.col-md-4'))
		} else {
			column.css('display', 'none');
			console.log("	HIDE");
			console.log($project.closest('.col-md-4'))
		}
	});
}

function changeButtonColor($tags, $clickedTag) {
	// Remove active class from all buttons
	$tags.removeClass('active');

	// Add active class to the clicked button
	console.log("Filter button clicked: " + $clickedTag);
	$clickedTag.addClass('active');
}

$(document).ready(function() {
	const $tags = $(".tag");
	const $projects = $(".project-card");

	$tags.on("click", function() {
		const selectedTag = $(this).data('tag');
		console.log("Filter button clicked: " + selectedTag);

		// Change button colors
		changeButtonColor($tags, $(this));

		// Filter projects
		filterByTag(selectedTag, $projects);
	});

	// Initialize with the 'all' button active
    changeButtonColor($tags, $('.tag[data-tag="all"]'));
});

// $(document).ready(function() {
// 	const interBubble = $('.interactive');
// 	let curX = 0;
// 	let curY = 0;
// 	let tgX = 0;
// 	let tgY = 0;

// 	function move() {
// 		curX += (tgX - curX) / 20;
// 		curY += (tgY - curY) / 20;
// 		interBubble.css('transform', `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`);
// 		requestAnimationFrame(() => {
// 			move();
// 		});
// 	}

// 	$(window).on('mousemove', function(event) {
// 		tgX = event.clientX;
// 		tgY = event.clientY;
// 		// console.log(tgX);
// 	});

// 	move();
// });
