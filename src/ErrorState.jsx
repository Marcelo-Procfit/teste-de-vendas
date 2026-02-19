const ErrorState = (props) => {
  const { message, onRetry } = props;
  
  return (
    <div className="p-6">
      <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-red-200">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900">Erro ao carregar dados</h3>
        <p className="text-gray-500 mt-1">{message}</p>
        <button 
          onClick={onRetry}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
};