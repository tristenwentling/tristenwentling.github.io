// Chart docs https://www.chartjs.org/docs/latest/developers/api.html
$.ajaxSetup({ cache: false });


var ctxBc = document.getElementById('bubbleChart').getContext('2d');
var bubbleChart = new Chart(ctxBc, {
	type: 'bubble',
	data: {
		datasets: [{
			label: 'Earth',
			data: [{
				x: 0,
				y: 0,
				r: 25
			}],
			backgroundColor: "blue",
			hoverBackgroundColor: "#ff6384",
		}, {
			label: 'Moon',
			data: [{
				x: 2,
				y: 0,
				r: 10
			}],
			backgroundColor: "gray",
			hoverBackgroundColor: "#44e4ee"
		}, {
			label: 'Planet X',
			data: [{
				x: 10,
				y: 0,
				r: 25
			}],
			backgroundColor: "purple",
			hoverBackgroundColor: "#62088A"
		},
			{
			label: 'Rocket Distance',
			data: [{
				x: 4,
				y: 0,
				r: 5
			}],
			backgroundColor: "yellow",
			hoverBackgroundColor: "#62088A"
		}]
	},
	options: {
        responsive: true,
        title: {
            display: true,
            text: 'Example Travel Distance'
        },
        scales: {
            xAxes: [{
                display: true
            }],
            yAxes: [{
                display: false
            }]
        },
        animation: {
        	duration: 0
    		}
    }
})

$("#example").click(function() {
 var ctxBc = document.getElementById('bubbleChart2').getContext('2d');
 var bubbleChart = new Chart(ctxBc, {
	type: 'bubble',
	data: {
		datasets: [{
			label: 'Earth',
			data: [{
				x: 0,
				y: 0,
				r: 25
			}],
			backgroundColor: "blue",
			hoverBackgroundColor: "#ff6384",
		}, {
			label: 'Moon',
			data: [{
				x: 2,
				y: 0,
				r: 10
			}],
			backgroundColor: "gray",
			hoverBackgroundColor: "#44e4ee"
		}, {
			label: 'Planet X',
			data: [{
				x: 10,
				y: 0,
				r: 25
			}],
			backgroundColor: "purple",
			hoverBackgroundColor: "#62088A"
		},
			{
			label: 'Rocket Distance',
			data: [{
				x: 6,
				y: 0,
				r: 5
			}],
			backgroundColor: "yellow",
			hoverBackgroundColor: "#62088A"
		}]
	},
	options: {
        responsive: true,
        title: {
            display: true,
            text: 'Example Calculation of Travel Distance'
        },
        scales: {
            xAxes: [{
                display: true
            }],
            yAxes: [{
                display: false
            }]
        },
        animation: {
        	duration: 0
    		}
    }
	});
});

$("#inputs").click(function() {
 var val1 = parseInt($('#fuel_amount').val(), 10)
 var val2 = parseInt($('#fuel_quality').val(), 10)
 var val3 = parseInt($('#other_input').val(), 10)
 var ctxBc = document.getElementById('bubbleChart3').getContext('2d');
 var bubbleChart = new Chart(ctxBc, {
	type: 'bubble',
	data: {
		datasets: [{
			label: 'Earth',
			data: [{
				x: 0,
				y: 0,
				r: 25
			}],
			backgroundColor: "blue",
			hoverBackgroundColor: "#ff6384",
		}, {
			label: 'Moon',
			data: [{
				x: 2,
				y: 0,
				r: 10
			}],
			backgroundColor: "gray",
			hoverBackgroundColor: "#44e4ee"
		}, {
			label: 'Planet X',
			data: [{
				x: 10,
				y: 0,
				r: 25
			}],
			backgroundColor: "purple",
			hoverBackgroundColor: "#62088A"
		},
			{
			label: 'Rocket Distance',
			data: [{
				x: val1 + val2 + val3,
				y: 0,
				r: 5
			}],
			backgroundColor: "yellow",
			hoverBackgroundColor: "#62088A"
		}]
	},
	options: {
        responsive: true,
        title: {
            display: true,
            text: 'Calculation of Travel Distance With Your Values'
        },
        scales: {
            xAxes: [{
                display: true
            }],
            yAxes: [{
                display: false
            }]
        },
        animation: {
        	duration: 0
    		}
    }
	});
});