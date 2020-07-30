window.onload = function () 
{


    //GRAFICO 1
    var chart = new CanvasJS.Chart("chartContainer", {

      title:{
        text: "Grafico de Barras"              
      },
      data: [//array of dataSeries              
        { //dataSeries object

         /*** Change type "column" to "bar", "area", "line" or "pie"***/
         type: "column",
         dataPoints: [
         { label: "banana", y: 18 },
         { label: "orange", y: 29 },
         { label: "apple", y: 40 },                                    
         { label: "mango", y: 34 },
         { label: "grape", y: 24 },
         { label: "grape2", y: 84 }
         ]
       }
       ]
     });
    chart.render();



    //Grafico 2
    var chart2 = new CanvasJS.Chart("chartContainer2", {
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Grafico de Torta"
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 51.08, label: "Chrome" },
                { y: 27.34, label: "Internet Explorer" },
                { y: 10.62, label: "Firefox" },
                { y: 5.02, label: "Microsoft Edge" },
                { y: 4.07, label: "Safari" },
                { y: 1.22, label: "Opera" },
                { y: 0.44, label: "Others" }
            ]
        }]
    });
    chart2.render();


    //Grafico 3
    var chart3 = new CanvasJS.Chart("chartContainer3", {
        animationEnabled: true,
        title: {
            text: "Grafico de Trazabilidad"
        },
        axisX: {
            title: "Time"
        },
        axisY: {
            title: "Percentage",
            suffix: "%",
            includeZero: true
        },
        data: [{
            type: "line",
            name: "CPU Utilization",
            connectNullData: true,
            //nullDataLineDashType: "solid",
            xValueType: "dateTime",
            xValueFormatString: "DD MMM hh:mm TT",
            yValueFormatString: "#,##0.##\"%\"",
            dataPoints: [
                { x: 1501048673000, y: 35.939 },
                { x: 1501052273000, y: 40.896 },
                { x: 1501055873000, y: 56.625 },
                { x: 1501059473000, y: 26.003 },
                { x: 1501063073000, y: 20.376 },
                { x: 1501066673000, y: 19.774 },
                { x: 1501070273000, y: 23.508 },
                { x: 1501073873000, y: 18.577 },
                { x: 1501077473000, y: 15.918 },
                { x: 1501081073000, y: null },
                { x: 1501084673000, y: 10.314 },
                { x: 1501088273000, y: 10.574 },
                { x: 1501091873000, y: 14.422 },
                { x: 1501095473000, y: 18.576 },
                { x: 1501099073000, y: 22.342 },
                { x: 1501102673000, y: 22.836 },
                { x: 1501106273000, y: 23.220 },
                { x: 1501109873000, y: 23.594 },
                { x: 1501113473000, y: 24.596 },
                { x: 1501117073000, y: 31.947 },
                { x: 1501120673000, y: 31.142 }
            ]
        }]
    });
    chart3.render();



    //Grafico 4
    var chart4 = new CanvasJS.Chart("chartContainer4", {
        animationEnabled: true,
        title:{
            text: "Grafico de Precios-Ganancias"
        },
        axisX:{
            valueFormatString: "MMM",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: "Precio en Peso Chileno",
            valueFormatString: "$##000.0",
            crosshair: {
                enabled: true,
                snapToDataPoint: true,
                labelFormatter: function(e) {
                    return "$" + CanvasJS.formatNumber(e.value, "##0.00");
                }
            }
        },
        data: [{
            type: "area",
            xValueFormatString: "MMM",
            yValueFormatString: "$##000.0",
            dataPoints: [
                { x: new Date(2020, 01, 00), y: 2000000 },
                { x: new Date(2020, 01, 01), y: 3000000 },
                { x: new Date(2020, 03, 02), y: 5000000 },
                { x: new Date(2020, 04, 03), y: 8000000 },
                { x: new Date(2020, 05, 04), y: 4000000 },
                { x: new Date(2020, 06, 05), y: 1000000 },
                { x: new Date(2020, 07, 06), y: 7000000 },
                { x: new Date(2020, 07, 07), y: 4000000 },
                { x: new Date(2020, 07, 08), y: 9000000 },
                { x: new Date(2020, 07, 09), y: 2000000 },
                { x: new Date(2020, 07, 10), y: 000000 }
            ]
        }]
    });
    chart4.render();


//Grafico 5

var chart5 = new CanvasJS.Chart("chartContainer5", {
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	animationEnabled: true,
	title:{
		text: "Grafico de Precios-Ganancias 2"   
	},
	axisX: {
		interval: 1,
		intervalType: "month",
		valueFormatString: "MMM"
	},
	axisY:{
		title: "Price (in USD)",
		valueFormatString: "$#0"
	},
	data: [{        
		type: "line",
		markerSize: 12,
		xValueFormatString: "MMM, YYYY",
		yValueFormatString: "$###.#",
		dataPoints: [        
			{ x: new Date(2016, 00, 1), y: 61, indexLabel: "Ganancia", markerType: "triangle",  markerColor: "#6B8E23" },
			{ x: new Date(2016, 01, 1), y: 71, indexLabel: "Ganancia", markerType: "triangle",  markerColor: "#6B8E23" },
			{ x: new Date(2016, 02, 1) , y: 55, indexLabel: "Perdida", markerType: "cross", markerColor: "tomato" },
			{ x: new Date(2016, 03, 1) , y: 50, indexLabel: "Perdida", markerType: "cross", markerColor: "tomato" },
			{ x: new Date(2016, 04, 1) , y: 65, indexLabel: "Ganancia", markerType: "triangle", markerColor: "#6B8E23" },
			{ x: new Date(2016, 05, 1) , y: 85, indexLabel: "Ganancia", markerType: "triangle", markerColor: "#6B8E23" },
			{ x: new Date(2016, 06, 1) , y: 68, indexLabel: "Perdida", markerType: "cross", markerColor: "tomato" },
			{ x: new Date(2016, 07, 1) , y: 28, indexLabel: "Perdida", markerType: "cross", markerColor: "tomato" },
			{ x: new Date(2016, 08, 1) , y: 34, indexLabel: "Ganancia", markerType: "triangle", markerColor: "#6B8E23" },
			{ x: new Date(2016, 09, 1) , y: 24, indexLabel: "Perdida", markerType: "cross", markerColor: "tomato" },
			{ x: new Date(2016, 10, 1) , y: 44, indexLabel: "Ganancia", markerType: "triangle", markerColor: "#6B8E23" },
			{ x: new Date(2016, 11, 1) , y: 34, indexLabel: "Perdida", markerType: "cross", markerColor: "tomato" }
		]
	}]
});
chart5.render();



//Grafico 6

var chart6 = new CanvasJS.Chart("chartContainer6", {
	animationEnabled: true,
	title:{
		text: "Grafico De Trafico"
	},
	axisX:{
		valueFormatString: "DD MMM"
	},
	axisY: {
		title: "Number of Visitors",
		scaleBreaks: {
			autoCalculate: true
		}
	},
	data: [{
		type: "line",
		xValueFormatString: "DD MMM",
		color: "#F08080",
		dataPoints: [
			{ x: new Date(2017, 0, 1), y: 610 },
			{ x: new Date(2017, 0, 2), y: 680 },
			{ x: new Date(2017, 0, 3), y: 690 },
			{ x: new Date(2017, 0, 4), y: 700 },
			{ x: new Date(2017, 0, 5), y: 710 },
			{ x: new Date(2017, 0, 6), y: 658 },
			{ x: new Date(2017, 0, 7), y: 734 },
			{ x: new Date(2017, 0, 8), y: 963 },
			{ x: new Date(2017, 0, 9), y: 847 },
			{ x: new Date(2017, 0, 10), y: 853 },
			{ x: new Date(2017, 0, 11), y: 869 },
			{ x: new Date(2017, 0, 12), y: 943 },
			{ x: new Date(2017, 0, 13), y: 970 },
			{ x: new Date(2017, 0, 14), y: 869 },
			{ x: new Date(2017, 0, 15), y: 890 },
			{ x: new Date(2017, 0, 16), y: 930 },
			{ x: new Date(2017, 0, 17), y: 1850 },
			{ x: new Date(2017, 0, 18), y: 1905 },
			{ x: new Date(2017, 0, 19), y: 1980 },
			{ x: new Date(2017, 0, 20), y: 1858 },
			{ x: new Date(2017, 0, 21), y: 1034 },
			{ x: new Date(2017, 0, 22), y: 963 },
			{ x: new Date(2017, 0, 23), y: 847 },
			{ x: new Date(2017, 0, 24), y: 853 },
			{ x: new Date(2017, 0, 25), y: 869 },
			{ x: new Date(2017, 0, 26), y: 943 },
			{ x: new Date(2017, 0, 27), y: 970 },
			{ x: new Date(2017, 0, 28), y: 869 },
			{ x: new Date(2017, 0, 29), y: 890 },
			{ x: new Date(2017, 0, 30), y: 930 },
			{ x: new Date(2017, 0, 31), y: 750 }
		]
	}]
});
chart6.render();


//Grafico 7

var chart7 = new CanvasJS.Chart("chartContainer7", {
	animationEnabled: true,
	
	title:{
		text:"Barra Lateral"
	},
	axisX:{
		interval: 1
	},
	axisY2:{
		interlacedColor: "rgba(1,77,101,.2)",
		gridColor: "rgba(1,77,101,.1)",
		title: "Number of Companies"
	},
	data: [{
		type: "bar",
		name: "companies",
		axisYType: "secondary",
		color: "#014D65",
		dataPoints: [
			{ y: 3, label: "Sweden" },
			{ y: 7, label: "Taiwan" },
			{ y: 5, label: "Russia" },
			{ y: 9, label: "Spain" },
			{ y: 7, label: "Brazil" },
			{ y: 7, label: "India" },
			{ y: 9, label: "Italy" },
			{ y: 8, label: "Australia" },
			{ y: 11, label: "Canada" },
			{ y: 15, label: "South Korea" },
			{ y: 12, label: "Netherlands" },
			{ y: 15, label: "Switzerland" },
			{ y: 25, label: "Britain" },
			{ y: 28, label: "Germanygit" },
			{ y: 29, label: "France" },
			{ y: 52, label: "Japan" },
			{ y: 103, label: "China" },
			{ y: 134, label: "US" }
		]
	}]
});
chart7.render();


//Grafico 8

var chart8 = new CanvasJS.Chart("chartContainer8", {
	animationEnabled: true,
	exportEnabled: true,
	theme: "light1",
	title:{
		text: "Grafico Piramidal"
	},
	data: [{
		type: "pyramid",
		yValueFormatString: "#\"%\"",
		indexLabelFontColor: "black",
		indexLabelFontSize: 16,
		indexLabel: "{label} - {y}",
		//reversed: true, // Reverses the pyramid
		dataPoints: [
			{ y: 100, label: "a" },
			{ y: 65, label: "b" },
			{ y: 45, label: "c" },
			{ y: 32, label: "d" },
			{ y: 5, label: "e" }
		]
	}]
});
chart8.render();




//Grafico 9

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart9 = am4core.create("chartContainer9", am4charts.PieChart);

// Add data
chart9.data = [ {
  "country": "Lithuania",
  "litres": 501.9
}, {
  "country": "Czechia",
  "litres": 301.9
}, {
  "country": "Ireland",
  "litres": 201.1
}, {
  "country": "Germany",
  "litres": 165.8
}, {
  "country": "Australia",
  "litres": 139.9
}, {
  "country": "Austria",
  "litres": 128.3
}, {
  "country": "UK",
  "litres": 99
}, {
  "country": "Belgium",
  "litres": 60
}, {
  "country": "The Netherlands",
  "litres": 50
} ];

// Add and configure Series
var pieSeries = chart9.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;


//Grafico 10

// Create chart instance
var chart3 = am4core.create("chartContainer10", am4charts.XYChart3D);

// Add data
chart3.data = [{
  "country": "USA",
  "visits": 4025
}, {
  "country": "China",
  "visits": 1882
}, {
  "country": "Japan",
  "visits": 1809
}, {
  "country": "Germany",
  "visits": 1322
}, {
  "country": "UK",
  "visits": 1122
}, {
  "country": "France",
  "visits": 1114
}, {
  "country": "India",
  "visits": 984
}, {
  "country": "Spain",
  "visits": 711
}, {
  "country": "Netherlands",
  "visits": 665
}, {
  "country": "Russia",
  "visits": 580
}, {
  "country": "South Korea",
  "visits": 443
}, {
  "country": "Canada",
  "visits": 441
}, {
  "country": "Brazil",
  "visits": 395
}, {
  "country": "Italy",
  "visits": 386
}, {
  "country": "Australia",
  "visits": 384
}, {
  "country": "Taiwan",
  "visits": 338
}, {
  "country": "Poland",
  "visits": 328
}];

// Create axes
let categoryAxis = chart3.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.labels.template.rotation = 270;
categoryAxis.renderer.labels.template.hideOversized = false;
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.tooltip.label.rotation = 270;
categoryAxis.tooltip.label.horizontalCenter = "right";
categoryAxis.tooltip.label.verticalCenter = "middle";

let valueAxis = chart3.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Countries";
valueAxis.title.fontWeight = "bold";

// Create series
var series = chart3.series.push(new am4charts.ColumnSeries3D());
series.dataFields.valueY = "visits";
series.dataFields.categoryX = "country";
series.name = "Visits";
series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
series.columns.template.fillOpacity = .8;

var columnTemplate = series.columns.template;
columnTemplate.strokeWidth = 2;
columnTemplate.strokeOpacity = 1;
columnTemplate.stroke = am4core.color("#FFFFFF");

columnTemplate.adapter.add("fill", function(fill, target) {
  return chart3.colors.getIndex(target.dataItem.index);
})

columnTemplate.adapter.add("stroke", function(stroke, target) {
  return chart3.colors.getIndex(target.dataItem.index);
})

chart3.cursor = new am4charts.XYCursor();
chart3.cursor.lineX.strokeOpacity = 0;
chart3.cursor.lineY.strokeOpacity = 0;



//Grafico 11

// Themes begin
am4core.useTheme(am4themes_dataviz);
am4core.useTheme(am4themes_animated);
// Themes end

var chart4 = am4core.create("chartContainer11", am4charts.PieChart3D);
chart4.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart4.legend = new am4charts.Legend();

chart4.data = [
  {
    country: "Lithuania",
    litres: 501.9
  },
  {
    country: "Czech Republic",
    litres: 301.9
  },
  {
    country: "Ireland",
    litres: 201.1
  },
  {
    country: "Germany",
    litres: 165.8
  },
  {
    country: "Australia",
    litres: 139.9
  },
  {
    country: "Austria",
    litres: 128.3
  },
  {
    country: "UK",
    litres: 99
  },
  {
    country: "Belgium",
    litres: 60
  },
  {
    country: "The Netherlands",
    litres: 50
  }
];

var series = chart4.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "litres";
series.dataFields.category = "country";


  }