$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items : 1,
      itemsCustom : false,
      singleItem : true,
      itemsScaleUp : false,
      slideSpeed : 50,
      paginationSpeed : 800,
      rewindSpeed : 1000,
      autoPlay : true,
      stopOnHover : true,
      navigation : true,
      navigationText : ["&#171;","&#187;"],
      rewindNav : true,
      scrollPerPage : false,
      pagination : true,
      paginationNumbers: false,
      responsive: true,
      responsiveRefreshRate : 200,
      responsiveBaseWidth: window,
      baseClass : "owl-carousel",
      theme : "owl-theme",
  })
  $(".about__responses-carousel").owlCarousel({
      items : 1,
      itemsCustom : false,
      singleItem : true,
      itemsScaleUp : false,
      slideSpeed : 50,
      rewindSpeed : 1000,
      autoPlay : true,
      stopOnHover : true,
      rewindNav : true,
      scrollPerPage : false,
      responsive: true,
      responsiveRefreshRate : 200,
      responsiveBaseWidth: window
  })
  $(".about__clients-carousel").owlCarousel({
      items : 6,
      itemsCustom : false,
      itemsDesktop : [1200,4],
      itemsDesktopSmall : [900,3],
      itemsTablet: [700,2],
      itemsTabletSmall: false,
      itemsMobile : [450,1],
      singleItem : false,
      itemsScaleUp : false,
      slideSpeed : 1,
      rewindSpeed : 5,
      autoPlay : true,
      stopOnHover : true,
      rewindNav : true,
      scrollPerPage : false,
      responsive: true,
      responsiveRefreshRate : 200,
      responsiveBaseWidth: window,
      paginationSpeed : 20,
      pagination : false,
      paginationNumbers: false,
      navigation:true,
      navigationText:["&#60;", "&#62;"]
  })
  $(".blog-item__carousel").owlCarousel({
    items : 1,
    itemsCustom : true,
    singleItem : true,
    itemsScaleUp : true,
    slideSpeed : 50,
    paginationSpeed : 800,
    rewindSpeed : 1000,
    autoPlay : true,
    stopOnHover : false,
    navigation : true,
    navigationText : ["&#171;","&#187;"],
    rewindNav : true,
    scrollPerPage : false,
    pagination : false,
    paginationNumbers: false,
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: ".blog-item__content",
    baseClass : "owl-carousel",
    theme : "owl-theme",
  })



$(function () {
    $('.suspendisse').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '50',
            align: 'center',
            verticalAlign: 'middle',
            y: 20
        },
        tooltip: {
            enabled:false,
            pointFormat: ''
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Suspendisse',
            innerSize: '50%',
            data: [
                ['',   50],
                ['',   50],
                {
                    name: 'Proprietary or Undetectable',
                    y: 0,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
});
$(function () {
    $('.maecenas').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '70',
            align: 'center',
            verticalAlign: 'middle',
            y: 20
        },
        tooltip: {
            enabled:false,
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Maecenas',
            innerSize: '50%',
            data: [
                ['',   70],
                ['',   30],
                {
                    name: 'Proprietary or Undetectable',
                    y: 0,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
});
$(function () {
    $('.aliquam').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '80',
            align: 'center',
            verticalAlign: 'middle',
            y: 20
        },
        tooltip: {
            enabled:false,
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Aliquam',
            innerSize: '50%',
            data: [
                ['',   80],
                ['',   20],
                {
                    name: 'Proprietary or Undetectable',
                    y: 0,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
});
$(function () {
    $('.habitasse').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '100',
            align: 'center',
            verticalAlign: 'middle',
            y: 20
        },
        tooltip: {
            enabled:false,
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: '#777777'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'habitasse',
            innerSize: '50%',
            data: [
                ['',   100],
                ['',   0],
                {
                    name: 'Proprietary or Undetectable',
                    y: 0,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
});



$(".mobile-nav__trigger").click(function(){
    $(".header").css("left", "0");
    // setTimeout(function(){
    //   $(".mobile-nav__close").show();
    // }, 500);
});
$(".mobile-nav__close").click(function(){
  $(".header").css("left", "-1000px");
  // $(this).hide();
});

// $('.blog-item__aside-date').width($('.blog-item__aside-icon').width());



})//end-ready
