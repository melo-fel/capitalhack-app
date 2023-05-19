const StatPage = () => {
    return (
        <div>
            <h1 className="title">Statistics</h1>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>

            <body>
                <canvas id="myChart" style="width:100%;max-width:600px"></canvas>
                <script>
                    var xValues = ["Sarah", "Messenger", "Snake vs Block", "Facebook", "Amazon", "Spotify Music", "Netflix", "Word Connect", "Pandora", "WhatsApp Messenger"];
                    var yValues = [388, 257, 242, 214, 183, 154, 153, 144, 130, 121];
                    var barColors = ["red", "green","blue","orange","brown"];
                    
                    new Chart("myChart", {
                    type: "horizontalBar",
                    data: {
                        labels: xValues,
                        datasets: [{
                            backgroundColor: barColors,
                            data: yValues
                        }]
                    },
                    options: {
                        legend: {display: false},
                        title: {
                            display: true,
                            text: "Graph of Monetary Statistics"
                        },
                        scales: {
                            xAxes: [{ticks: {min: 100, max:400}}]
                        }
                        }});
                </script>
            </body>
        </div>
    );
}

export default StatPage;