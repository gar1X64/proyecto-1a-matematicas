module.exports = {
  /**
   * @example
   * n1 = 1, n2 = 3 => resultado 4
   * @param {*} n1 Numero uno de la suma
   * @param {*} n2 Numero dos de la suma
   * @returns
   */
  suma: function (n1, n2) {
    return this.esNumero((n1, n2) ? n1 + n2 : this.mensajeError());
  },
  /**
   * @example
   * n1 = 1, n2 = 3 => resultado -2
   * @param {*} n1 Numero uno de la resta
   * @param {*} n2 Numero dos de la resta
   * @returns
   */
  resta: function (n1, n2) {
    return this.esNumero((n1, n2) ? n1 - n2 : this.mensajeError());
  },
  /**
   * @example
   * n1 = 1, n2 = 3 => resultado 3
   * @param {*} n1 Numero uno de la multiplicacion
   * @param {*} n2 Numero dos de la multiplicacion
   * @returns
   */
  multiplicacion: function (n1, n2) {
    return this.esNumero((n1, n2) ? n1 * n2 : this.mensajeError());
  },
  /**
   * @example
   * n1 = 1, n2 = 3 => resultado 0.33
   * @param {*} n1 Numero uno de la división
   * @param {*} n2 Numero dos de la división
   * @returns
   */
  division: function (n1, n2) {
    return this.esNumero((n1, n2) ? n1 / n2 : this.mensajeError());
  },
  /**
   * Mensaje de error que se ejecuta cuando no tengamos valores numéricos
   */
  mensajeError: function () {
    console.log("un valor o los valores no son numericos");
  },
  esNumero: function (n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
      return false;
    }
    return false;
  },
};
