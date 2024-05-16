export async function getRatio(tickerOne, tickerTwo) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${tickerOne},${tickerTwo}&tsyms=USD`
  try {
    const response = await fetch(url, { method: "GET" })
    const data = await response.json()
    if (data.RAW && data.RAW[tickerOne] && data.RAW[tickerTwo]) {
      const priceOne = data.RAW[tickerOne].USD.PRICE
      const priceTwo = data.RAW[tickerTwo].USD.PRICE
      return Math.round((priceOne / priceTwo + Number.EPSILON) * 100) / 100
    } else {
      throw new Error("Data for one or both tickers is missing")
    }
  } catch (error) {
    console.error("Error fetching ratio:", error)
    return null
  }
}
