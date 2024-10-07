import { Chart, defaults } from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { useState } from 'react';
import { chartData } from '../data';
import Piechart from './Piechart';
import Wrapper from '../assets/wrappers/MyChart';

Chart.register(CategoryScale);

defaults.responsive = true;
defaults.maintainAspectRatio = false;

defaults.plugins.title.font.size = 32;
defaults.plugins.title.color = '#004643';

const MyChart = () => {
  const [char, setChar] = useState({
    labels: chartData.map((data) => data.year),
    datasets: [
      {
        label: 'Adopciones',
        data: chartData.map((data) => data.adopciones),
        backgroundColor: [
          'rgb(251, 155, 238, 0.5)',
          'rgb(215, 166, 63, 0.5)',
          'rgb(194, 215, 63, 0.5)',
          'rgb(63, 215, 115, 0.5)',
          'rgb(63, 162, 215, 0.5)',
          'rgb(91, 63, 215, 0.5)',
          'rgb(215, 63, 86, 0.5)',
        ],
        borderColor: 'rgb(165, 165, 165)',
        borderWidth: 1,
        hoverBorderWidth: 2,
        hoverBorderColor: '#ebebeb',
      },
    ],
  });

  return (
    <Wrapper>
      <Piechart chartData={char} />
    </Wrapper>
  );
};
export default MyChart;
