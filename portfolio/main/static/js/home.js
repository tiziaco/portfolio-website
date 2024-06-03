function filterByTag(selectedTag, $projects) {
	$projects.each(function() {
		const $project = $(this);
		const projectTags = $project.data('tags');

		if (selectedTag === 'all' || (projectTags && projectTags.includes(selectedTag))) {
			$project.closest('.col-md-4').show()
		} else {
			$project.closest('.col-md-4').hide();
		}
	});
}

$(document).ready(function() {
	const $tags = $(".tag");
	const $projects = $(".project-card");

	$tags.on("click", function() {
		const selectedTag = $(this).data('tag');
		filterByTag(selectedTag, $projects);
	});
});

$(document).ready(function() {
	const interBubble = $('.interactive');
	let curX = 0;
	let curY = 0;
	let tgX = 0;
	let tgY = 0;

	function move() {
		curX += (tgX - curX) / 20;
		curY += (tgY - curY) / 20;
		interBubble.css('transform', `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`);
		requestAnimationFrame(() => {
			move();
		});
	}

	$(window).on('mousemove', function(event) {
		tgX = event.clientX;
		tgY = event.clientY;
		// console.log(tgX);
	});

	move();
});
