const TYPE_VALIDATION = ['capital_inicial', 'taxa_juros', 'periodo'];
//TYPE_VALIDATION[3] : "PositiveFloat" || "Float" || "PositiveInterge"
function calculaJuros({ capital_inicial, taxa_juros }, i) {
  if (taxa_juros === 0) {
    return null;
  }
  const taxa = taxa_juros / 100;
  const base = 1 + taxa;
  const expoente = i;
  const montante = capital_inicial * Math.pow(base, expoente);
  return montante;
}

function montador_array(inputsInfo) {
  const { capital_inicial, periodo } = inputsInfo;
  let arrayMontado = new Array(periodo + 1); //posição [0] cabeçalho
  arrayMontado[0] = inputsInfo;

  for (let i = 0; i < arrayMontado.length; i++) {
    if (i > 0) {
      const montante = calculaJuros(inputsInfo, i);
      const diferenca = -(capital_inicial - montante);
      const perc = diferenca / capital_inicial;
      arrayMontado[i] = {
        id: i,
        montante,
        diferenca,
        perc,
      };
    }
  }

  return arrayMontado;
}
//TYPE_VALIDATION[3] : "PositiveFloat" || "Float" || "PositiveInterge"
function messegerValidation(type, value) {
  let msg = '';

  if (type === TYPE_VALIDATION[0] && (value <= 0 || value === '')) {
    msg = 'Por favor, digite um valor maior que zero';
  } else if (type === TYPE_VALIDATION[1] && value === '') {
    msg = 'Por favor, digite uma taxa de juros';
  } else if (
    type === TYPE_VALIDATION[2] &&
    (value % 1 !== 0 || // float > 0
    value % 1 !== -0 || // float < 0
    value === '' || // value vazio
      (value % 1 === 0 && value <= 0)) // inteiro <=0
  ) {
    msg = 'Por favor, digite um valor positivo do tipo inteiro';
  }

  return msg;
}

function formatNumber(number, type) {
  if (type === 'moeda') {
    const newString = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(number);
    return newString;
  }
  if (type === 'porcentagem') {
    const newString = new Intl.NumberFormat('pt-BR', {
      style: 'percent',
      maximumSignificantDigits: 5,
    }).format(number);
    return newString;
  }
}
export { montador_array, TYPE_VALIDATION, messegerValidation, formatNumber };
