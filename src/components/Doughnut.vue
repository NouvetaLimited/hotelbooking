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
        "Tiwi Beach",
        "Amare Resort",
        "Ol Pajeta Mansion",
        "Nairobi Hotel"
      ],
      datasets: [
        {
          label: "Bookings from each hotel",
          backgroundColor: ["#F97E3A", "#C8B521", "#FFFF00", "#C12E41"],
          data: [40, 20, 12, 39]
        }
      ]
    });
  }
};
</script>
