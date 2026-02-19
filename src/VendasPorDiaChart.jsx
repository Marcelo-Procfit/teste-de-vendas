const VendasPorDiaChart = () => {
  const [options] = React.useState({
    data: [
      { dia: '1', vendas: 485320 },
      { dia: '2', vendas: 523180 },
      { dia: '3', vendas: 467890 },
      { dia: '4', vendas: 512340 },
      { dia: '5', vendas: 589200 },
      { dia: '6', vendas: 634520 },
      { dia: '7', vendas: 678900 },
      { dia: '8', vendas: 543210 },
      { dia: '9', vendas: 612340 },
      { dia: '10', vendas: 587650 },
      { dia: '11', vendas: 698230 },
      { dia: '12', vendas: 723450 },
      { dia: '13', vendas: 756890 },
      { dia: '14', vendas: 689120 },
      { dia: '15', vendas: 634570 },
      { dia: '16', vendas: 712340 },
      { dia: '17', vendas: 768920 },
      { dia: '18', vendas: 823450 },
      { dia: '19', vendas: 798650 },
      { dia: '20', vendas: 876320 },
      { dia: '21', vendas: 923480 },
      { dia: '22', vendas: 845670 },
      { dia: '23', vendas: 789230 },
      { dia: '24', vendas: 734560 },
      { dia: '25', vendas: 678900 },
      { dia: '26', vendas: 723450 },
      { dia: '27', vendas: 798320 },
      { dia: '28', vendas: 867540 },
      { dia: '29', vendas: 934620 },
      { dia: '30', vendas: 823450 }
    ],
    series: [
      {
        type: 'bar',
        xKey: 'dia',
        yKey: 'vendas',
        yName: 'Vendas',
        fill: '#00b4a0',
        stroke: '#00b4a0',
        strokeWidth: 1,
        fillOpacity: 0.8
      }
    ],
    axes: [
      {
        type: 'category',
        position: 'bottom',
        title: { text: 'Dia do Mês' },
        label: {
          fontSize: 11,
          color: '#6b7280'
        }
      },
      {
        type: 'number',
        position: 'left',
        title: { text: 'Vendas (R$)' },
        label: {
          fontSize: 12,
          color: '#6b7280',
          formatter: function(params) {
            return 'R$ ' + (params.value / 1000).toFixed(0) + 'k';
          }
        }
      }
    ],
    legend: {
      enabled: false
    },
    background: {
      fill: 'white'
    }
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Vendas por Dia do Mês</h3>
        <p className="text-sm text-gray-500">Janeiro 2026</p>
      </div>
      <div style={{ height: 350, width: '100%' }}>
        <AgChartsReact options={options} />
      </div>
    </div>
  );
};