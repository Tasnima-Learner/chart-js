Chart.defaults.global.defaultFontSize= 16;
  
  var ctx = document.getElementById('myChart').getContext('2d');
	var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['value1','value2','value3','value4','value5','value6'],
        datasets: [{
            
			label:'A simple line chart',
			data: [10,45,67,25, 67,9],
			fill:false,
			borderColor: [
                'gray'
            ],
			 pointBackgroundColor: [
                '#c82333 ',
				'#ffc107',
                '#218838',                
                '#5a6268',
                '#0069d9',
                '#c82340',
            ],
			
            
            
            borderWidth: 2,
			pointBorderWidth:10,
			pointRadius:7,
			pointHoverRadius:12,
			
			
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true	
                }
            }]
        }
    },	
	
	options: {
        legend: {
            labels: {
				
                fontSize: 24
			
            }
	}
	},
	
	 
	
	
});
  myChart.config.data.datasets[0]['pointBackgroundColor'][0] = 'red';
  
  Chart.Legend.prototype.afterFit = function() {
    this.height = this.height + 50;
};
