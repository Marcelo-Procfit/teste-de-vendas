const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);

  const kpiData = [
    { title: 'Venda Bruta', valorHoje: 876320, valorOntem: 823450, icon: '💰' },
    { title: 'Desconto Automático', valorHoje: 43816, valorOntem: 41172, icon: '🤖' },
    { title: 'Desconto Negociado', valorHoje: 26289, valorOntem: 24704, icon: '🤝' },
    { title: 'Desconto Total', valorHoje: 70105, valorOntem: 65876, icon: '📉' },
    { title: 'Venda Líquida', valorHoje: 806215, valorOntem: 757574, icon: '💵' },
    { title: 'Total de Impostos', valorHoje: 161243, valorOntem: 151515, icon: '🏛️' },
    { title: 'Receita Líquida', valorHoje: 644972, valorOntem: 606059, icon: '📈' },
    { title: 'Total de CMV', valorHoje: 387583, valorOntem: 363635, icon: '📦' },
    { title: 'Comissões', valorHoje: 32249, valorOntem: 30303, icon: '💼' },
    { title: 'Lucro Bruto', valorHoje: 225140, valorOntem: 212121, icon: '🎯' }
  ];

  React.useEffect(function() {
    const loadData = async function() {
      try {
        setIsLoading(true);
        await new Promise(function(resolve) { 
          setTimeout(resolve, 1500); 
        });
        setData({ loaded: true });
        setError(null);
      } catch (e) {
        setError('Não foi possível carregar os dados do dashboard. Verifique sua conexão.');
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const handleRetry = function() {
    setError(null);
    setIsLoading(true);
    setTimeout(function() {
      setData({ loaded: true });
      setIsLoading(false);
    }, 1000);
  };

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={handleRetry} />;
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard de Vendas</h1>
            <p className="text-gray-500 mt-1">Análise completa do desempenho de vendas</p>
          </div>
          <div className="text-sm text-gray-500">
            Última atualização: 20/01/2026, 20:15:32
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex items-center gap-4 mb-6 flex-wrap bg-white p-4 rounded-lg shadow-sm">
        <span className="text-sm text-gray-600 flex items-center gap-2">⚙ Filtros:</span>
        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option>Todas as Lojas</option>
          <option>Loja Matriz</option>
          <option>Loja Shopping</option>
          <option>Loja Centro</option>
        </select>
        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option>Todos os Vendedores</option>
          <option>João Silva</option>
          <option>Maria Santos</option>
          <option>Pedro Oliveira</option>
        </select>
        <span className="text-sm text-gray-600">Período:</span>
        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option>Hoje vs Ontem</option>
          <option>Esta Semana vs Anterior</option>
          <option>Este Mês vs Anterior</option>
        </select>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <VendasPorHoraChart />
        <VendasPorDiaChart />
      </div>

      {/* KPIs */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          INDICADORES FINANCEIROS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {kpiData.map(function(kpi, index) {
            return (
              <KPICard
                key={index}
                title={kpi.title}
                valorHoje={kpi.valorHoje}
                valorOntem={kpi.valorOntem}
                icon={kpi.icon}
                currency={true}
              />
            );
          })}
        </div>
      </div>

      {/* Resumo */}
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6 border border-blue-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Resumo do Desempenho</h3>
            <p className="text-gray-600">Comparativo com o dia anterior</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">+6.4%</div>
            <div className="text-sm text-gray-600">Crescimento em Vendas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">R$ 225k</div>
            <div className="text-sm text-gray-600">Lucro Bruto Hoje</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-600">25.7%</div>
            <div className="text-sm text-gray-600">Margem de Lucro</div>
          </div>
        </div>
      </div>
    </div>
  );
};