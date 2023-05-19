const StatPage = () => {
    return (
        <div>
            <h1 className="title">Statistics</h1>
            <canvas id = "statsGraph" style="width:100%;max-width:700px"></canvas>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js">

            var xValues = ["Sarah", "Messenger", "Snake vs Block", "Facebook", "Amazon", "Spotify Music", "Netflix", "Word Connect", "Pandora", "WhatsApp Messenger"];
            var yValues = [55, 49, 44, 24, 15, 55, 49, 44, 24, 15];
            var barColors = ["red", "green","blue","orange","brown"];

            const myChart = new Chart("myChart", {
                type: bar,
                data: {labels: xValues, datasets: [{backgroundColor: barColors, data: yValues{"}"}]{"}"},
                options: {legend: {display: false{"}"}, title: {display: true, text: "Stats Page for User"}}
            {"}"});
            </script>
        </div>
    );
}

export default StatPage;