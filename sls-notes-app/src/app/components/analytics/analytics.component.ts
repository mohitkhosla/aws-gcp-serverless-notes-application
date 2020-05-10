import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-analytics',    
    templateUrl: 'analytics.component.html',
    styleUrls: ['./analytics.component.css']

})
export class AnalyticsComponent {
    myImgBoxPlot1 = "https://analytics-img.s3.amazonaws.com/box-plot-expires.png";
    myImgBoxPlot2 = "https://analytics-img.s3.amazonaws.com/box-plot-timestamp.png";
    myImgHistogram1 = "https://analytics-img.s3.amazonaws.com/histogram-expires.png";
    myImgHistogram2 = "https://analytics-img.s3.amazonaws.com/histogram-timestamp.png";
    pieChart = "https://analytics-img.s3.amazonaws.com/pie-chart.png";
    scatterPlot = "https://analytics-img.s3.amazonaws.com/scatter-plot.png";
    surfaceGraph = "https://analytics-img.s3.amazonaws.com/surface-graph.png";


    
}