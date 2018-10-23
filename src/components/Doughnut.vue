<script>
import { Doughnut } from "vue-chartjs";
export default {
  name: "doughnut-graph",
  extends: Doughnut,
  props: ["data"],
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      type: "horizontalBar",
      labels: [
        "Hadassah Hotel",
        "Masada Hotel",
        "Pearl Palace Hotel",
        "West Wood Hotel",
        "Sweet Lake Resort",
        "Lake Naivasha Resort"
      ],
      datasets: [
        {
          label: "Bookings from each hotel",
          backgroundColor: [
            "#F97E3A",
            "#C8B521",
            "#FFFF00",
            "#C12E41",
            "#C8B521",
            "#FFFF00"
          ],
          data: [4000, 2000, 1200, 3900, 3000, 5500]
        }
      ]
    });
  }
};
</script>
