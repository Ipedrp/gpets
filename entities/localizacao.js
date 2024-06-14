class Localizacao {
  constructor(tempoReal, areaSegura) {
    this.tempoReal = tempoReal;
    this.areaSegura = areaSegura;
    this.dentroArea = false;

  }

  verificaQuadrante() {
    let quadranteX1 = parseFloat(this.areaSegura[0].quadrante1_eixo_x);
    let quadranteY1 = parseFloat(this.areaSegura[0].quadrante1_eixo_y);
    let quadranteX2 = parseFloat(this.areaSegura[0].quadrante2_eixo_x);
    let quadranteY2 = parseFloat(this.areaSegura[0].quadrante2_eixo_y);
    let quadranteX3 = parseFloat(this.areaSegura[0].quadrante3_eixo_x);
    let quadranteY3 = parseFloat(this.areaSegura[0].quadrante3_eixo_y);
    let quadranteX4 = parseFloat(this.areaSegura[0].quadrante4_eixo_x);
    let quadranteY4 = parseFloat(this.areaSegura[0].quadrante4_eixo_y);

    console.log(`Quadrantes convertidos: 
      X1: ${quadranteX1}, Y1: ${quadranteY1}, 
      X2: ${quadranteX2}, Y2: ${quadranteY2}, 
      X3: ${quadranteX3}, Y3: ${quadranteY3}, 
      X4: ${quadranteX4}, Y4: ${quadranteY4}`);

    this.isDentro(quadranteX1, quadranteY1, quadranteX2, quadranteY2, quadranteX3, quadranteY3, quadranteX4, quadranteY4);
  }

  isDentro(quadranteX1, quadranteY1, quadranteX2, quadranteY2, quadranteX3, quadranteY3, quadranteX4, quadranteY4) {
    const xMin = Math.min(quadranteX1, quadranteX2, quadranteX3, quadranteX4);
    const xMax = Math.max(quadranteX1, quadranteX2, quadranteX3, quadranteX4);
    const yMin = Math.min(quadranteY1, quadranteY2, quadranteY3, quadranteY4);
    const yMax = Math.max(quadranteY1, quadranteY2, quadranteY3, quadranteY4);

    console.log(`xMin: ${xMin}, xMax: ${xMax}, yMin: ${yMin}, yMax: ${yMax}`);

    const longitude = parseFloat(this.tempoReal.longitude);
    const latitude = parseFloat(this.tempoReal.latitude);

    console.log(`Longitude: ${longitude}, Latitude: ${latitude}`);

    if (longitude >= xMin && longitude <= xMax && latitude >= yMin && latitude <= yMax) {
      this.dentroArea = true;
    }
  }

  getQuadrante() {
    this.verificaQuadrante();
    let resposta = [this.tempoReal];
    if (this.dentroArea === true) {
     let mensagem = "Dentro da área segura";
      resposta.push(mensagem) 
    }
    else {
      let mensagem = "Fora da área segura";
      resposta.push(mensagem) 
    }
    return resposta;
  }
}

module.exports = Localizacao;
