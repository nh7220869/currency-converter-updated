const amountInput = document.getElementById("amount") as HTMLInputElement;
const fromCurrency = document.getElementById("fromCurrency") as HTMLSelectElement;
const toCurrency = document.getElementById("toCurrency") as HTMLSelectElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;
const convertBtn = document.getElementById("convertBtn") as HTMLButtonElement;
const fromFlag = document.getElementById("fromFlag") as HTMLImageElement;
const toFlag = document.getElementById("toFlag") as HTMLImageElement;

const exchangeRates = {
    USD: 1,           // United States Dollar
    EUR: 0.85,        // Euro
    GBP: 0.75,        // British Pound
    PKR: 280,         // Pakistani Rupee
    INR: 83.45,       // Indian Rupee
    AUD: 1.35,        // Australian Dollar
    CAD: 1.25,        // Canadian Dollar
    JPY: 110,         // Japanese Yen
    CNY: 6.45,        // Chinese Yuan
    ZAR: 14.7,        // South African Rand
    BRL: 5.25,        // Brazilian Real
    MXN: 20.1,        // Mexican Peso
    NGN: 420,         // Nigerian Naira
    EGP: 15.7,        // Egyptian Pound
    THB: 33,          // Thai Baht
    SGD: 1.35,        // Singapore Dollar
    KRW: 1180,        // South Korean Won
    MYR: 4.15,        // Malaysian Ringgit
    AED: 3.67,        // UAE Dirham
    SAR: 3.75,        // Saudi Riyal
    VND: 23000,       // Vietnamese Dong
    PHP: 50,          // Philippine Peso
    RUB: 75,          // Russian Ruble
    TRY: 8.65,        // Turkish Lira
    NOK: 8.5,         // Norwegian Krone
    SEK: 8.65,        // Swedish Krona
    DKK: 6.35,        // Danish Krone
    CHF: 0.92,        // Swiss Franc
    PLN: 3.85,        // Polish Zloty
    HUF: 290,         // Hungarian Forint
    CZK: 22.5,        // Czech Koruna
    ARS: 95,          // Argentine Peso
    CLP: 760,         // Chilean Peso
    PEN: 4,           // Peruvian Sol
    COP: 3850,        // Colombian Peso
    BOB: 6.9,         // Bolivian Boliviano
    UYU: 43,          // Uruguayan Peso
    BZD: 2,           // Belize Dollar
    HTG: 98,          // Haitian Gourde
    DOP: 57,          // Dominican Peso
    JMD: 155,         // Jamaican Dollar
    TTD: 6.75,        // Trinidad and Tobago Dollar
    BBD: 2,           // Barbadian Dollar
    KYD: 0.82,        // Cayman Islands Dollar
    XCD: 2.7,         // East Caribbean Dollar
    BHD: 0.38,        // Bahraini Dinar
    KWD: 0.3,         // Kuwaiti Dinar
    QAR: 3.64,        // Qatari Riyal
    OMR: 0.38,        // Omani Rial
    JOD: 0.71,        // Jordanian Dinar
    LKR: 200,         // Sri Lankan Rupee
    BDT: 85,          // Bangladeshi Taka
    NPR: 118,         // Nepalese Rupee
    BWP: 11,          // Botswana Pula
    ZMW: 22,          // Zambian Kwacha
    GHS: 6,           // Ghanaian Cedi
    KES: 110,         // Kenyan Shilling
    UGX: 3500,        // Ugandan Shilling
    TZS: 2300,        // Tanzanian Shilling
    ETB: 45,          // Ethiopian Birr
    MAD: 9,           // Moroccan Dirham
    TND: 2.9,         // Tunisian Dinar
    DZD: 135,         // Algerian Dinar
    XOF: 600,         // West African CFA Franc
    XAF: 600,         // Central African CFA Franc
    AOA: 600,         // Angolan Kwanza
    MZN: 63,          // Mozambican Metical
    CDF: 2000,        // Congolese Franc (DRC)
    XPF: 105,         // CFP Franc
    PGK: 3.5,         // Papua New Guinean Kina
    FJD: 2,           // Fijian Dollar
    SBD: 8,           // Solomon Islands Dollar
    TOP: 2.25,        // Tongan Pa'anga
    WST: 2.65,        // Samoan Tala
    VUV: 110,         // Vanuatu Vatu
    XDR: 0.71         // IMF Special Drawing Rights                             
};

// Update flags on currency change
fromCurrency.addEventListener("change", updateFlags);
toCurrency.addEventListener("change", updateFlags);

function updateFlags() {
  const fromFlagCode = fromCurrency.selectedOptions[0].getAttribute("data-flag");
  const toFlagCode = toCurrency.selectedOptions[0].getAttribute("data-flag");
  
  if (fromFlagCode && toFlagCode) {
    fromFlag.src = `flags/${fromFlagCode}.png`;
    toFlag.src = `flags/${toFlagCode}.png`;
  }
}

// Convert currency on button click
convertBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (!isNaN(amount) && exchangeRates[from] && exchangeRates[to]) {
    const convertedAmount = (amount / exchangeRates[from]) * exchangeRates[to];
    resultDiv.innerText = `Converted Amount: ${convertedAmount.toFixed(2)} ${to}`;
    resultDiv.style.color = "#ffffff";
  } else {
    resultDiv.innerText = "Invalid amount or currency.";
    resultDiv.style.color = "#da1212";
  }
});
