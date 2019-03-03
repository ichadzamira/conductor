
import React from 'react';
import { Input, Popover, OverlayTrigger } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { connect } from 'react-redux';
import { getWorkflowDefs } from '../../../actions/WorkflowActions';

class TasksMetrics extends React.Component {
    state = {
        tasks: []
      };

      componentWillMount() {
        this.props.dispatch(getWorkflowDefs());
      }

      componentWillReceiveProps({ workflows }) {
        this.setState({ workflows });
      }

      render() {

        const { workflows } = this.state;

       var data = [
                           	{
                           		value: 300,
                           		color:"#F7464A",
                           		highlight: "#FF5A5E",
                           		label: "Red"
                           	},
                           	{
                           		value: 50,
                           		color: "#46BFBD",
                           		highlight: "#5AD3D1",
                           		label: "Green"
                           	},
                           	{
                           		value: 100,
                           		color: "#FDB45C",
                           		highlight: "#FFC870",
                           		label: "Yellow"
                           	}
                           ]

                           var options = {
                                         	//Boolean - Whether we should show a stroke on each segment
                                         	segmentShowStroke : true,

                                         	//String - The colour of each segment stroke
                                         	segmentStrokeColor : "#fff",

                                         	//Number - The width of each segment stroke
                                         	segmentStrokeWidth : 2,

                                         	//Number - The percentage of the chart that we cut out of the middle
                                         	percentageInnerCutout : 50, // This is 0 for Pie charts

                                         	//Number - Amount of animation steps
                                         	animationSteps : 100,

                                         	//String - Animation easing effect
                                         	animationEasing : "easeOutBounce",

                                         	//Boolean - Whether we animate the rotation of the Doughnut
                                         	animateRotate : true,

                                         	//Boolean - Whether we animate scaling the Doughnut from the centre
                                         	animateScale : false,

                                         	//String - A legend template
                                         	legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"

                                         }

                   var PieChart = require("react-chartjs").Pie;

        return (
              <div className="ui-content">
                <h1>Module Metrics</h1>
                <div >
                    <PieChart data={data} options={options}/>
                </div>
              </div>
            );
      }
}

export default connect(state => state.workflow)(TasksMetrics);