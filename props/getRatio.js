
export async function getRatio(tickerOne, tickerTwo) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${tickerOne},${tickerTwo}&tsyms=USD`;
  try {
    const response = await fetch(url, {
      headers: {},
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "omit",
    });
    const data = await response.json();
    if (data.RAW &&
      data.RAW[tickerOne] &&
      data.RAW[tickerTwo] &&
      data.RAW[tickerOne].USD &&
      data.RAW[tickerTwo].USD) {
      const priceOne = data.RAW[tickerOne].USD.PRICE;
      const priceTwo = data.RAW[tickerTwo].USD.PRICE;
      const ratio = priceOne / priceTwo;
      return Math.round((ratio + Number.EPSILON) * 100) / 100; // Rounding to two decimal places
    } else {
      throw new Error("Data for one or both tickers is missing");
    }
  } catch (error) {
    return null;
  }
}
