function drawBubbleChart(root){
	
    var diameter = 960;
    
    var color = d3.scale.category10();
    
    var bubble = d3.layout.pack().sort(null).size([960,960]).padding(1.5);

    var svg = d3.select("body")
                .append("svg")
                .attr("width",960)
                .attr("height", 960)
                .attr("class","bubble");
    
    var node = svg.selectAll(".node")
                  .data(bubble.nodes(root)
                  .filter(function(d){ return !d.children;}))
                  .enter()
                  .append("g")
                  .attr("class","node")
				  .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

   node.append("circle")
       .attr("r", function(d) { return d.r; })
	   .style("fill", function(d) { return color(d.group)  })
	   .append("svg:title").text(function(d){return d.title;})
       ;

   node.append("text")
       .attr("dy", ".3em")
       .style("text-anchor", "middle")
       .text(function(d) { 
              return d.name;
        })
		.append("svg:title").text(function(d){return d.title;});
}