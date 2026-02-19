const KPICard = (props) => {
  const { title, valorHoje, valorOntem, icon, currency = true } = props;
  
  const calcularDiferenca = function() {
    const diferenca = valorHoje - valorOntem;
    const percentual = ((diferenca / valorOntem) * 100);
    const isPositive = diferenca > 0;
    
    return {
      valor: diferenca,
      percentual: percentual,
      isPositive: isPositive
    };
  };
  
  const formatarValor = function(valor) {
    if (currency) {
      return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    return valor.toLocaleString('pt-BR');
  };
  
  const diff = calcularDiferenca();
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <div className="flex items-start justify-between mb-3">
        <span className="text-sm text-gray-500">{title}</span>
        <span className="text-gray-400">{icon}</span>
      </div>
      
      <div className="text-2xl font-bold text-gray-900 mb-2">
        {formatarValor(valorHoje)}
      </div>
      
      <div className="space-y-1">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Ontem:</span>
          <span className="text-gray-600">{formatarValor(valorOntem)}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Variação:</span>
          <span className={`font-medium ${diff.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {diff.isPositive ? '↑' : '↓'} {Math.abs(diff.percentual).toFixed(1)}%
          </span>
        </div>
        
        <div className={`text-xs font-medium ${diff.isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {diff.isPositive ? '+' : ''}{formatarValor(diff.valor)}
        </div>
      </div>
    </div>
  );
};