const calc = require('./calculadora')

test('somar 3 e 1 deve resultar em 4', () =>{
    const resultadosoma = calc.soma(3, 1)

    expect(resultadosoma).toBe(4)
})

test('multiplicar 3 e 3 resulta em 9', () =>{
    const resultado = calc.multiplicacao(3, 3)

    expect(resultado).toBe(9)
})