import Chart from 'chart.js/auto';
import { store } from '../flux/Store';

class VoteStatistics extends HTMLElement {
  chart: Chart | null = null;

  connectedCallback() {
    this.innerHTML = `<canvas id="voteChart" width="1000" height="600"></canvas>`;
    store.subscribe(() => this.updateChart());
    this.renderChart();
  }

  renderChart() {
    const ctx = this.querySelector('#voteChart') as HTMLCanvasElement;
    const data = this.getChartData();
    this.chart = new Chart(ctx, {
      type: 'bar',
      data,
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }

  updateChart() {
    if (this.chart) {
      const newData = this.getChartData();
      this.chart.data = newData;
      this.chart.update();
    }
  }

  getChartData() {
    const state = store.getState();
    const labels: string[] = [];
    const votes: number[] = [];

    state.characters.forEach((pair, i) => {
      labels.push(pair[0].name); // Barça
      labels.push(pair[1].name); // Real
      votes.push(state.votes[i][0]);
      votes.push(state.votes[i][1]);
    });

    return {
      labels,
      datasets: [
        {
          label: 'Votos',
          data: votes,
          backgroundColor: labels.map((_, i) => i % 2 === 0 ? '#a50044' : '#e5be01'),
        }
      ]
    };
  }
}

customElements.define('vote-statistics', VoteStatistics);
