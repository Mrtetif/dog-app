import { Bar } from 'react-chartjs-2';

const Piechart = ({ chartData }) => {
  return (
    <div className="container">
      <h4>Adopciones desde el 2018 al 2024</h4>
      <p>
        Muchísimas gracias a todos y cada uno de nuestros adoptantes. Sois unos ángeles para
        nuestros animales.
      </p>
      <Bar
        data={chartData}
        options={{
          indexAxis: 'y',
          plugins: {
            title: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};
export default Piechart;
