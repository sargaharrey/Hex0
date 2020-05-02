$(function(){

  
 
    $('.toggler').click(function () {

   
        $('.first-bar').toggleClass('tog');
        $('.sidebar .navbar-head').toggleClass('navbar-head-toggled');
        $('.sidebar .nav-link span').toggleClass('dis');
        $('.sidebar .nav-item').toggleClass('lower');
        $('.sidebar .nav-item .active img').toggleClass('act-tog');
        $('.content-wrapper').toggleClass('content-wrapper-tog');
        $('.main-menu .nav-title').toggleClass('main_get_back');
        $('.toggler').toggleClass('toggler-in');
    
})
})

$(document).ready(function() {

  
   

 
    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.sidebar .collapse').collapse('hide');
        };
    });




    window.onload = function () {

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul'],
                datasets: [{
                    label: 'none',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                
                scales: {
                    
                    yAxes: [{
                        
                        ticks: {
                            beginAtZero: true,
                            

                        }
                    }]
                }
            }
        });
    }
})