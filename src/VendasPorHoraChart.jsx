const VendasPorHoraChart = () => {
  const [options] = React.useState({
    data: [
      { hora: '06h', hoje: 12500, ontem: 11200 },
      { hora: '07h', hoje: 18300, ontem: 16800 },
      { hora: '08h', hoje: 25600, ontem: 23400 },
      { hora: '09h', hoje: 32100, ontem: 29800 },
      { hora: '10h', hoje: 41200, ontem: 38500 },
      { hora: '11h', hoje: 48900, ontem: 45200 },
      { hora: '12h', hoje: 52300, ontem: 49800 },
      { hora: '13h', hoje: 46700, ontem: 44100 },
      { hora: '14h', hoje: 42800, ontem: 41200 },
      { hora: '15h', hoje: 38400, ontem: 36800 },
      { hora: '16h', hoje: 33200, ontem: 31500 },
      { hora: '17h', hoje: 28900, ontem: 27200 },
      { hora: '18h', hoje: 22100, ontem: 20800 },
      { hora: '19h', hoje: 18600, ontem: 17300 },
      { hora: '20h', hoje: 15200, ontem: 14100 },
      { hora: '21h', hoje: 9800, ontem: 9200 },
      { hora: '22h', hoje: 4300, ontem: 4100 }
    ],
    series: [
      {
        type: 'line',
        xKey: 'hora',
        yKey: 'hoje',
        yName: 'Hoje',
        stroke: '#3b82f6',
        strokeWidth: 3,
        marker: {
          enabled: true,
          fill: '#3b82f6',
          strokeWidth: 2,
          size: 6
        }
      },
      {
        type: 'line',
        xKey: 'hora',
        yKey: 'ontem',
        yName: 'Ontem',
        stroke: '#94a3b8',
        strokeWidth: 2,
        strokeOpacity: 0.7,
        marker: {
          enabled: true,
          fill: '#94a3b8',
          strokeWidth: 2,
          size: 4
        }
      }
    ],
    axes: [
      {
        type: 'category',
        position: 'bottom',
        title: { text: 'Hora do Dia' },
        label: {
          fontSize: 12,
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
      enabled: true,
      position: 'top'
    },
    background: {
      fill: 'white'
    }
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Vendas por Hora</h3>
        <p className="text-sm text-gray-500">Comparativo hoje vs ontem</p>
      </div>
      <div style={{ height: 350, width: '100%' }}>
        <AgChartsReact options={options} />
      </div>
    </div>
  );
};