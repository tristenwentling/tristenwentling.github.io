// Chart docs https://www.chartjs.org/docs/latest/developers/api.html
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
	// var distance = 0;
 //    var datasets = bubbleChart.config.data.datasets;
 //    var data = datasets.pop();
 //    data.data = {x:6, y:0, r:5};
 //    datasets.push(data)
 //    bubbleChart.config.data.datasets = datasets
 //    bubbleChart.update()
 //    bubbleChart.render()
 //    console.log(bubbleChart.config.data.datasets)
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
	$('p#explanation2').text('Updated explanation message');
});

