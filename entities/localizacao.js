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

    this.isDentro(quadranteX1, quadranteY1, quadranteX2, quadranteY2, quadranteX3, quadranteY3, quadranteX4, quadranteY4);
  }

  isDentro(quadranteX1, quadranteY1, quadranteX2, quadranteY2, quadranteX3, quadranteY3, quadranteX4, quadranteY4) {
    const xMin = Math.min(quadranteX1, quadranteX2, quadranteX3, quadranteX4);
    const xMax = Math.max(quadranteX1, quadranteX2, quadranteX3, quadranteX4);
    const yMin = Math.min(quadranteY1, quadranteY2, quadranteY3, quadranteY4);
    const yMax = Math.max(quadranteY1, quadranteY2, quadranteY3, quadranteY4);

    const longitude = parseFloat(this.tempoReal.longitude);
    const latitude = parseFloat(this.tempoReal.latitude);

    if (longitude >= xMin && longitude <= xMax && latitude >= yMin && latitude <= yMax) {
      this.dentroArea = true;
    }
  }

  getQuadrante() {
    this.verificaQuadrante();
    return this.dentroArea;
}
}
module.exports = Localizacao;
