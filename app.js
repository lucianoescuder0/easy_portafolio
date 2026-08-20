const SPECIFIC_LOGOS = {
  'BTC': 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
  'ETH': 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
  'BNB': 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png',
  'SOL': 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
  'USDT': 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
  'USDC': 'https://assets.coingecko.com/coins/images/6319/large/usdc.png',
  'DAI': 'https://assets.coingecko.com/coins/images/9956/large/Badge_Dai.png',
  'AAPL': 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Apple-Dark.svg',
  'GOOGL': 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'MSFT': 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'AMZN': 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg',
  'TSLA': 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
  'NVDA': 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg',
  'KO': 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg',
  'MCD': 'https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg',
  'MELI': 'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__small.png',
  'PYPL': 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg',
  'LMT': 'https://upload.wikimedia.org/wikipedia/commons/9/99/Lockheed_Martin_logo.svg'
};

const ASSET_GLOW_COLORS = {
  'AAPL': 'rgba(255, 255, 255, 0.05)',
  'MELI': 'rgba(255, 214, 10, 0.07)',
  'BTC': 'rgba(247, 147, 26, 0.08)',
  'ETH': 'rgba(98, 126, 234, 0.08)',
  'MSFT': 'rgba(0, 164, 239, 0.07)',
  'AMZN': 'rgba(255, 153, 0, 0.07)',
  'NVDA': 'rgba(118, 185, 0, 0.07)',
  'KO': 'rgba(237, 28, 36, 0.07)'
};

// Relleno sólido para el avatar cuando no hay logo real (imagen rota o sin cobertura):
// un círculo de color por categoría con las iniciales en blanco, como el logo de YPF.
const FALLBACK_FILL = {
  CEDEAR: '#0ea5e9',
  CRYPTO: '#d97706',
  ACCION: '#16a34a',
  YIELD: '#9333ea'
};

let CUSTOM_CEDEARS = JSON.parse(localStorage.getItem('port_custom_cedears_v43')) || {};

const BASE_CEDEAR_MAP = {
  'AABA': { name: 'Altaba Inc.', ratio: 3.0, us: 'AABA' },
  'AAL': { name: 'American Airlines Group Inc', ratio: 2.0, us: 'AAL' },
  'AAP': { name: 'Advanced Auto Parts Inc', ratio: 14.0, us: 'AAP' },
  'AAPL': { name: 'Apple Inc.', ratio: 20.0, us: 'AAPL' },
  'ABBV': { name: 'AbbVie Inc.', ratio: 10.0, us: 'ABBV' },
  'ABEV': { name: 'Ambev S.A.', ratio: 0.3333333333333333, us: 'ABEV' },
  'ABEV3': { name: 'Ambev S.A.', ratio: 1.0, us: 'ABEV3' },
  'ABNB': { name: 'Airbnb Inc', ratio: 15.0, us: 'ABNB' },
  'ABT': { name: 'Abbott Labs', ratio: 4.0, us: 'ABT' },
  'ACN': { name: 'Accenture', ratio: 75.0, us: 'ACN' },
  'ACWI': { name: 'iShares MSCI ACWI ETF', ratio: 26.0, us: 'ACWI' },
  'ADBE': { name: 'Adobe Systems Incorporated', ratio: 44.0, us: 'ADBE' },
  'ADGO': { name: 'Adecoagro S.A.', ratio: 1.0, us: 'ADGO' },
  'ADI': { name: 'Analog Devices', ratio: 15.0, us: 'ADI' },
  'ADP': { name: 'Automatic Data Processing Inc.', ratio: 6.0, us: 'ADP' },
  'ADS': { name: 'Adidas AG', ratio: 22.0, us: 'ADS' },
  'AEG': { name: 'Aegon N.V.', ratio: 1.0, us: 'AEG' },
  'AEM': { name: 'Agnico Eagle Mines Limited', ratio: 6.0, us: 'AEM' },
  'AI': { name: 'C3.AI INC', ratio: 5.0, us: 'AI' },
  'AIG': { name: 'American International Group (AIG)', ratio: 5.0, us: 'AIG' },
  'AKO.B': { name: 'Embotelladora Andina S.A.', ratio: 1.0, us: 'AKO.B' },
  'ALAB': { name: 'Astera Labs Inc', ratio: 44.0, us: 'ALAB' },
  'AMAT': { name: 'Applied Materials Inc.', ratio: 5.0, us: 'AMAT' },
  'AMD': { name: 'Advanced Micro Devices, Inc.', ratio: 10.0, us: 'AMD' },
  'AMGN': { name: 'Amgen Inc.', ratio: 30.0, us: 'AMGN' },
  'AMX': { name: 'America Movil', ratio: 1.0, us: 'AMX' },
  'AMZN': { name: 'Amazon.Com, Inc.', ratio: 144.0, us: 'AMZN' },
  'ANET': { name: 'Arista Networks Inc.', ratio: 29.0, us: 'ANET' },
  'ANF': { name: 'Abercrombie & Fitch Co', ratio: 1.0, us: 'ANF' },
  'AOCA': { name: 'Aluminum Corp Of China', ratio: 1.0, us: 'AOCA' },
  'ARCO': { name: 'Arcos Dorados Holdings Inc.', ratio: 0.5, us: 'ARCO' },
  'ARKK': { name: 'ARK INNOVATION', ratio: 10.0, us: 'ARKK' },
  'ARM': { name: 'ARM Holdings Plc', ratio: 27.0, us: 'ARM' },
  'ASML': { name: 'ASML HOLDING NV', ratio: 146.0, us: 'ASML' },
  'ASR': { name: 'Grupo Aeroportuario Del Sureste, S.A.B. de C.V.', ratio: 20.0, us: 'ASR' },
  'ASTS': { name: 'AST SpaceMobile Inc', ratio: 15.0, us: 'ASTS' },
  'ATAD': { name: 'Pjsc Tatneft', ratio: 4.0, us: 'ATAD' },
  'AUY': { name: 'Yamana Gold Inc.', ratio: 1.0, us: 'AUY' },
  'AVGO': { name: 'Broadcom Inc.', ratio: 39.0, us: 'AVGO' },
  'AVY': { name: 'Avery Dennison Corp.', ratio: 18.0, us: 'AVY' },
  'AXP': { name: 'American Express Co', ratio: 15.0, us: 'AXP' },
  'AZN': { name: 'Astrazeneca Plc', ratio: 4.0, us: 'AZN' },
  'B': { name: 'Barrick Gold Corp', ratio: 2.0, us: 'B' },
  'BA': { name: 'The Boeing Company', ratio: 24.0, us: 'BA' },
  'BAC': { name: 'Bank Of America Corporation', ratio: 4.0, us: 'BAC' },
  'BABA': { name: 'Alibaba Group Holding Limited', ratio: 9.0, us: 'BABA' },
  'BAK': { name: 'Braskem SA', ratio: 2.0, us: 'BAK' },
  'BAS': { name: 'Basf SE', ratio: 2.0, us: 'BAS' },
  'BAYN': { name: 'Bayer AG', ratio: 3.0, us: 'BAYN' },
  'BB': { name: 'Blackberry Limited', ratio: 3.0, us: 'BB' },
  'BBAS3': { name: 'Banco do Brasil S.A.', ratio: 2.0, us: 'BBAS3' },
  'BBD': { name: 'Banco Bradesco S.A.', ratio: 1.0, us: 'BBD' },
  'BBDC3': { name: 'Banco Bradesco S.A.', ratio: 1.0, us: 'BBDC3' },
  'BBV': { name: 'Bilbao Vizcaya Argentaria S.A', ratio: 1.0, us: 'BBV' },
  'BCS': { name: 'Barclays Bank Plc', ratio: 1.0, us: 'BCS' },
  'BHP': { name: 'Bhp Group Ltd', ratio: 2.0, us: 'BHP' },
  'BIDU': { name: 'Baidu, Inc.', ratio: 11.0, us: 'BIDU' },
  'BIB': { name: 'Biogen Inc.', ratio: 13.0, us: 'BIB' },
  'BIOX': { name: 'Bioceres Crop Solutions Corp.', ratio: 1.0, us: 'BIOX' },
  'BK': { name: 'The Bank Of New York Mellon Corp.', ratio: 2.0, us: 'BK' },
  'BKNG': { name: 'Booking', ratio: 700.0, us: 'BKNG' },
  'BKR': { name: 'Baker Hughes Co', ratio: 7.0, us: 'BKR' },
  'BMNR': { name: 'Bitmine Inmersion Technologies, Inc.', ratio: 8.0, us: 'BMNR' },
  'BMY': { name: 'Bristol-Myers Squibb Company', ratio: 3.0, us: 'BMY' },
  'BNG': { name: 'Bunge Limited', ratio: 5.0, us: 'BNG' },
  'BP': { name: 'BP PCL', ratio: 5.0, us: 'BP' },
  'BPAC11': { name: 'Banco BTG Pactual S.A.', ratio: 1.0, us: 'BPAC11' },
  'BRFS': { name: 'BRF S.A.', ratio: 0.3333333333333333, us: 'BRFS' },
  'BRKB': { name: 'Berkshire Hathaway Inc.', ratio: 22.0, us: 'BRKB' },
  'BSBR': { name: 'Banco Santander (Brasil) S.A.', ratio: 1.0, us: 'BSBR' },
  'BSN': { name: 'Danone', ratio: 20.0, us: 'BSN' },
  'BX': { name: 'Blackstone Inc.', ratio: 30.0, us: 'BX' },
  'C': { name: 'Citigroup Inc', ratio: 3.0, us: 'C' },
  'CAAP': { name: 'Corporación America Airports S.A.', ratio: 0.25, us: 'CAAP' },
  'CAH': { name: 'Cardinal Health Inc', ratio: 3.0, us: 'CAH' },
  'CAJ': { name: 'Canon Inc', ratio: 2.0, us: 'CAJ' },
  'CAR': { name: 'Avis Budget Group Inc.', ratio: 26.0, us: 'CAR' },
  'CAT': { name: 'Caterpillar Inc', ratio: 20.0, us: 'CAT' },
  'CBRD': { name: 'Companhia Brasileira De Dis NPV ADR', ratio: 1.0, us: 'CBRD' },
  'CC': { name: 'Cameco Corporation', ratio: 23.0, us: 'CC' },
  'CCL': { name: 'Carnival', ratio: 3.0, us: 'CCL' },
  'CDE': { name: 'Coeur Mining Inc.', ratio: 1.0, us: 'CDE' },
  'CEG': { name: 'CONSTELLATION ENERGY CORPORATION', ratio: 45.0, us: 'CEG' },
  'CIBR': { name: 'First Trust NASDAQ Cybersecurity', ratio: 10.01, us: 'CIBR' },
  'CL': { name: 'Colgate Palmolive Co', ratio: 3.0, us: 'CL' },
  'CLS': { name: 'CELESTICA INC', ratio: 20.0, us: 'CLS' },
  'COIN': { name: 'Coinbase Global Inc', ratio: 27.0, us: 'COIN' },
  'COP': { name: 'ConocoPhillips', ratio: 25.0, us: 'COP' },
  'COPX': { name: 'Global X Copper Miners ETF', ratio: 14.0, us: 'COPX' },
  'COST': { name: 'Costco Wholesale Corp', ratio: 48.0, us: 'COST' },
  'CRM': { name: 'Salesforce Inc.', ratio: 18.0, us: 'CRM' },
  'CRWD': { name: 'CrowdStrike Holdings, Inc.', ratio: 79.0, us: 'CRWD' },
  'CRWV': { name: 'CoreWeave Inc', ratio: 27.0, us: 'CRWV' },
  'CS': { name: 'Credit Suisse Group', ratio: 1.0, us: 'CS' },
  'CSCO': { name: 'Cisco Systems Inc', ratio: 5.0, us: 'CSCO' },
  'CSNA3': { name: 'Companhia Siderúrgica Nacional S.A', ratio: 1.0, us: 'CSNA3' },
  'CVS': { name: 'CVS Health', ratio: 15.0, us: 'CVS' },
  'CVX': { name: 'Chevron Corp.', ratio: 16.0, us: 'CVX' },
  'CX': { name: 'Cemex S.A.B. de CV', ratio: 1.0, us: 'CX' },
  'DAL': { name: 'Delta Air Lines', ratio: 8.0, us: 'DAL' },
  'DD': { name: 'Dupont de Nemours Inc.', ratio: 5.0, us: 'DD' },
  'DE': { name: 'Deere & Co.', ratio: 40.0, us: 'DE' },
  'DECK': { name: 'DECKERS OUTDOOR CORPORATION', ratio: 25.0, us: 'DECK' },
  'DEO': { name: 'Diageo PLC', ratio: 6.0, us: 'DEO' },
  'DHR': { name: 'Danaher Corp', ratio: 54.0, us: 'DHR' },
  'DIA': { name: 'SPDR DOW JONES INDUSTRIAL', ratio: 20.0, us: 'DIA' },
  'DIS': { name: 'The Walt Disney Co.', ratio: 12.0, us: 'DIS' },
  'DOCU': { name: 'DocuSign Inc.', ratio: 22.0, us: 'DOCU' },
  'DOW': { name: 'DOW Inc', ratio: 6.0, us: 'DOW' },
  'DTEA': { name: 'Deutsche Telekom Ag', ratio: 3.0, us: 'DTEA' },
  'E': { name: 'Eni Spa', ratio: 4.0, us: 'E' },
  'EA': { name: 'Electronic Arts Inc', ratio: 14.0, us: 'EA' },
  'EBAY': { name: 'Ebay Inc.', ratio: 2.0, us: 'EBAY' },
  'EBR': { name: 'Centrais Eléctricas Brasileiras S.A. - Eletrobras', ratio: 0.25, us: 'EBR' },
  'ECL': { name: 'Ecolab Inc', ratio: 56.0, us: 'ECL' },
  'EEM': { name: 'ISHARES MSCI EMERGING MARKET', ratio: 5.01, us: 'EEM' },
  'EFA': { name: 'iShares MSCI EAFE ETF', ratio: 18.0, us: 'EFA' },
  'EFX': { name: 'Equifax Inc.', ratio: 16.0, us: 'EFX' },
  'ELP': { name: 'Companhia Paranaense de Energía - COPEL', ratio: 13.0, us: 'ELP' },
  'EOAN': { name: 'E.On Se', ratio: 6.0, us: 'EOAN' },
  'EQNR': { name: 'Equinor Asa', ratio: 6.0, us: 'EQNR' },
  'ERIC': { name: 'Lm Ericsson Telephone Co.', ratio: 2.0, us: 'ERIC' },
  'ERJ': { name: 'Embraer-Empresa Brasileira de Aeronáutica S.A.', ratio: 1.0, us: 'ERJ' },
  'ESGU': { name: 'IShares ESG Aware MSCI USA ETF', ratio: 30.0, us: 'ESGU' },
  'ETHA': { name: 'ISHARES ETHEREUM TRETE', ratio: 5.0, us: 'ETHA' },
  'ETSY': { name: 'Etsy Inc.', ratio: 16.0, us: 'ETSY' },
  'EWJ': { name: 'iShares MSCI JAPAN ETF', ratio: 14.0, us: 'EWJ' },
  'EWY': { name: 'iShares MSCI South Korea ETF', ratio: 50.0, us: 'EWY' },
  'EWZ': { name: 'ISHARES MSCI BRAZIL CAP', ratio: 2.0, us: 'EWZ' },
  'F': { name: 'Ford Motor Company', ratio: 1.0, us: 'F' },
  'FCX': { name: 'Freeport Mcmoran Copper & Gold Inc.', ratio: 3.0, us: 'FCX' },
  'FDX': { name: 'Fedex Corp', ratio: 10.0, us: 'FDX' },
  'FISV': { name: 'Fiserv, Inc.', ratio: 11.0, us: 'FISV' },
  'FMCC': { name: 'Freddie Mac (Federal Home Loan)', ratio: 1.0, us: 'FMCC' },
  'FMX': { name: 'Fomento Economico Mexicano - Femsa', ratio: 6.0, us: 'FMX' },
  'FNMA': { name: 'Fed. Natl, Mortgage - Fannie Mae', ratio: 1.0, us: 'FNMA' },
  'FSLR': { name: 'First Solar Inc.', ratio: 18.0, us: 'FSLR' },
  'FXI': { name: 'ISHARES CHINA LARGE-CAP ETF', ratio: 5.0, us: 'FXI' },
  'GDX': { name: 'Van Eck Gold Miners ETF/USA', ratio: 10.0, us: 'GDX' },
  'GE': { name: 'General Electric Co.', ratio: 8.0, us: 'GE' },
  'GFI': { name: 'Gold Fields Ltd.', ratio: 1.0, us: 'GFI' },
  'GGB': { name: 'Gerdau S.A', ratio: 0.25, us: 'GGB' },
  'GILD': { name: 'Gilead Sciences, Inc.', ratio: 4.0, us: 'GILD' },
  'GLD': { name: 'ETF SPDR GOLD TRUST', ratio: 50.0, us: 'GLD' },
  'GLNG': { name: 'Golar LNG Ltd.', ratio: 10.0, us: 'GLNG' },
  'GLOB': { name: 'Globant S.A.', ratio: 18.0, us: 'GLOB' },
  'GLW': { name: 'Corning Inc.', ratio: 4.0, us: 'GLW' },
  'GM': { name: 'General Motors Co', ratio: 6.0, us: 'GM' },
  'GOOGL': { name: 'Alphabet Inc.', ratio: 58.0, us: 'GOOGL' },
  'GPRK': { name: 'Geopark Ltd.', ratio: 1.0, us: 'GPRK' },
  'GRMN': { name: 'Garmin Ltd.', ratio: 3.0, us: 'GRMN' },
  'GS': { name: 'The Goldman Sachs Group, Inc', ratio: 13.0, us: 'GS' },
  'GSK': { name: 'GSK Pic.', ratio: 4.0, us: 'GSK' },
  'GT': { name: 'Goodyear Tire & Rubber co./the', ratio: 2.0, us: 'GT' },
  'HAL': { name: 'Halliburton Co.', ratio: 2.0, us: 'HAL' },
  'HAPV3': { name: 'Hapvida Participacoes E Investimentos S.A', ratio: 1.0, us: 'HAPV3' },
  'HD': { name: 'The Home Depot Inc.', ratio: 32.0, us: 'HD' },
  'HDB': { name: 'Hdfc Bank Limited.', ratio: 2.0, us: 'HDB' },
  'HHPD': { name: 'Hon Hai Precision Industry Co. Ltd.', ratio: 2.0, us: 'HHPD' },
  'HIMS': { name: 'Hims & Hers Health, Inc.', ratio: 4.0, us: 'HIMS' },
  'HL': { name: 'Hecla Mining Co.', ratio: 1.0, us: 'HL' },
  'HMC': { name: 'Honda Motor Co. Ltd', ratio: 1.0, us: 'HMC' },
  'HMY': { name: 'Harmony Gold Mining Company Ltd.', ratio: 1.0, us: 'HMY' },
  'HNPIY': { name: 'Huaneng Power Intl', ratio: 1.0, us: 'HNPIY' },
  'HOG': { name: 'Harley-Davidson Inc.', ratio: 3.0, us: 'HOG' },
  'HON': { name: 'Honeywell International Inc.', ratio: 8.0, us: 'HON' },
  'HOOD': { name: 'Robinhood Markets Inc', ratio: 29.1, us: 'HOOD' },
  'HPQ': { name: 'Hp Inc', ratio: 1.0, us: 'HPQ' },
  'HSBC': { name: 'Hsbc Holdings Pic', ratio: 2.0, us: 'HSBC' },
  'HSY': { name: 'The Hershey Company', ratio: 21.0, us: 'HSY' },
  'HUT': { name: 'Hut 8 Mining Corp.', ratio: 5.0, us: 'HUT' },
  'HWM': { name: 'Howmet Aerospace Inc.', ratio: 1.0, us: 'HWM' },
  'IBB': { name: 'iShares Nasdaq Biotechnology ETF', ratio: 27.0, us: 'IBB' },
  'IBIT': { name: 'ISHARES BITCOIN TRUST', ratio: 10.0, us: 'IBIT' },
  'IBM': { name: 'International Business Machines', ratio: 15.0, us: 'IBM' },
  'IBN': { name: 'Icici Bank Ltd.', ratio: 1.0, us: 'IBN' },
  'ICLN': { name: 'iShares Global Clean Energy ETF', ratio: 5.0, us: 'ICLN' },
  'IEMG': { name: 'iShares Core MSCI Emerging Markets ETF', ratio: 12.0, us: 'IEMG' },
  'IEUR': { name: 'iShares Core MSCI Europe ETF', ratio: 11.0, us: 'IEUR' },
  'IFF': { name: 'International Flavors & Fragrances Inc.', ratio: 12.0, us: 'IFF' },
  'IJH': { name: 'iShares CORE S&P MID-CAP ETF', ratio: 12.0, us: 'IJH' },
  'ILF': { name: 'IShares Latin America 40 ETF', ratio: 6.0, us: 'ILF' },
  'INFY': { name: 'Infosys Limited', ratio: 1.0, us: 'INFY' },
  'ING': { name: 'Ing Groep Nv', ratio: 3.0, us: 'ING' },
  'INTC': { name: 'Intel Corporation', ratio: 5.0, us: 'INTC' },
  'IP': { name: 'International Paper Co.', ratio: 4.0, us: 'IP' },
  'IREN': { name: 'Iren Ltd', ratio: 12.0, us: 'IREN' },
  'ISRG': { name: 'Intuitive Surgical inc', ratio: 90.0, us: 'ISRG' },
  'ITA': { name: 'iShares U.S. Aerospace & Defense', ratio: 50.0, us: 'ITA' },
  'ITUB': { name: 'Itaú Unibanco Holding S.A.', ratio: 1.0, us: 'ITUB' },
  'ITUB3': { name: 'Banco Itaú Unibanco SA', ratio: 1.0, us: 'ITUB3' },
  'IVE': { name: 'iShares S&P 500 Value ETF', ratio: 40.0, us: 'IVE' },
  'IVV': { name: 'IShares Core S&P 500 ETF', ratio: 692.0, us: 'IVV' },
  'IVW': { name: 'iShares S&P 500 Growth ETF', ratio: 20.0, us: 'IVW' },
  'IWM': { name: 'ISHARES TRUST RUSSELL 2000', ratio: 10.0, us: 'IWM' },
  'JCI': { name: 'Johnson Controls International', ratio: 4.0, us: 'JCI' },
  'JD': { name: 'Jd.Com, Inc.', ratio: 1.0, us: 'JD' },
  'JMIA': { name: 'Adr Jumia Technologies Ag', ratio: 1.0, us: 'JMIA' },
  'JNJ': { name: 'Johnson & Johnson', ratio: 15.0, us: 'JNJ' },
  'JOYY': { name: 'JOYY Inc.', ratio: 5.0, us: 'JOYY' },
  'JPM': { name: 'J.P. Morgan & Chase Co.', ratio: 15.0, us: 'JPM' },
  'KB': { name: 'Kb Financial Group Inc.', ratio: 2.0, us: 'KB' },
  'KEEL': { name: 'Bitfarms Ltd.', ratio: 0.2, us: 'KEEL' },
  'KEP': { name: 'Korea Electric Power Corp.', ratio: 1.0, us: 'KEP' },
  'KGC': { name: 'Kinross Gold Corp', ratio: 1.0, us: 'KGC' },
  'KMB': { name: 'Kimberly-Clark Corp.', ratio: 6.0, us: 'KMB' },
  'KO': { name: 'The Coca Cola Company', ratio: 5.0, us: 'KO' },
  'KOFM': { name: 'Coca-Cola Femsa, S.A.B. De C.V.', ratio: 2.0, us: 'KOFM' },
  'LAC': { name: 'Lithium Americas Corp', ratio: 1.0, us: 'LAC' },
  'LAR': { name: 'Lithium Americas (Argentina) Corp', ratio: 1.0, us: 'LAR' },
  'LFC': { name: 'China Life Insurance', ratio: 2.0, us: 'LFC' },
  'LKOD': { name: 'Pjsc Lukoil', ratio: 4.0, us: 'LKOD' },
  'LLY': { name: 'Eli Lilly and Company', ratio: 56.0, us: 'LLY' },
  'LMT': { name: 'Lockheed Martin Corporation', ratio: 20.0, us: 'LMT' },
  'LND': { name: 'Brasilagro - Co Brasileira de Propriedades Agrícolas', ratio: 1.0, us: 'LND' },
  'LRCX': { name: 'Lam Research Corp', ratio: 56.0, us: 'LRCX' },
  'LREN3': { name: 'Lojas Renner S.A', ratio: 1.0, us: 'LREN3' },
  'LVS': { name: 'Las Vegas Sands Corp', ratio: 2.0, us: 'LVS' },
  'LYO': { name: 'Lloyds Banking Group Pic', ratio: 2.0, us: 'LYO' },
  'MA': { name: 'Mastercard Inc.', ratio: 33.0, us: 'MA' },
  'MBG': { name: 'Mercedes-Benz Group AG', ratio: 4.0, us: 'MBG' },
  'MBT': { name: 'Mobile Telesystems', ratio: 2.0, us: 'MBT' },
  'MCD': { name: 'Mcdonald\'s Corp.', ratio: 24.0, us: 'MCD' },
  'MDLZ': { name: 'Mondelez', ratio: 15.0, us: 'MDLZ' },
  'MDT': { name: 'Medtronic Public Limited Company', ratio: 4.0, us: 'MDT' },
  'MELI': { name: 'MercadoLibre Inc.', ratio: 120.0, us: 'MELI' },
  'META': { name: 'Meta Platforms Inc', ratio: 24.0, us: 'META' },
  'MFG': { name: 'Mizuho Financial Group', ratio: 1.0, us: 'MFG' },
  'MGLU3': { name: 'Magazine Luiza S.A.', ratio: 1.0, us: 'MGLU3' },
  'MMC': { name: 'Marsh & Mclennan Companies Inc.', ratio: 16.0, us: 'MMC' },
  'MMM': { name: '3M Company', ratio: 10.0, us: 'MMM' },
  'MO': { name: 'Altria Group Inc.', ratio: 4.0, us: 'MO' },
  'MOS': { name: 'The Mosaic Co', ratio: 5.0, us: 'MOS' },
  'MP': { name: 'MP Materials Corp.', ratio: 10.0, us: 'MP' },
  'MRK': { name: 'Merck & Co. Inc.', ratio: 5.0, us: 'MRK' },
  'MRNA': { name: 'Moderna Inc', ratio: 19.0, us: 'MRNA' },
  'MRVL': { name: 'Marvell Technology Inc', ratio: 14.0, us: 'MRVL' },
  'MSFT': { name: 'Microsoft Corp.', ratio: 30.0, us: 'MSFT' },
  'MSI': { name: 'Motorola Solutions, Inc.', ratio: 20.0, us: 'MSI' },
  'MSTR': { name: 'Microstrategy Inc CI A New', ratio: 20.0, us: 'MSTR' },
  'MU': { name: 'Micron Technology Inc', ratio: 5.0, us: 'MU' },
  'MUFG': { name: 'Mitsubishi Ufj Financial Group', ratio: 1.0, us: 'MUFG' },
  'MUX': { name: 'McEwen Mining Inc', ratio: 2.0, us: 'MUX' },
  'NATU3': { name: 'NATURA COSMETICOS SA', ratio: 1.0, us: 'NATU3' },
  'NBIS': { name: 'Nebius Group N.V.', ratio: 27.0, us: 'NBIS' },
  'NECI': { name: 'Nec Corporation', ratio: 0.3333333333333333, us: 'NECI' },
  'NEE': { name: 'NextEra Energy, Inc.', ratio: 19.0, us: 'NEE' },
  'NEM': { name: 'Newmont Corporation', ratio: 3.0, us: 'NEM' },
  'NFLX': { name: 'Netflix, Inc.', ratio: 48.0, us: 'NFLX' },
  'NG': { name: 'Novagold Resources INC.', ratio: 0.25, us: 'NG' },
  'NGG': { name: 'National Grid Pic', ratio: 2.0, us: 'NGG' },
  'NIO': { name: 'NIO Inc.', ratio: 4.0, us: 'NIO' },
  'NKE': { name: 'Nike Inc.', ratio: 12.0, us: 'NKE' },
  'NLM': { name: 'Novolipetsk Steel PJSC', ratio: 2.0, us: 'NLM' },
  'NMR': { name: 'Nomura Holdings, Inc', ratio: 1.0, us: 'NMR' },
  'NOKA': { name: 'Nokia Corporation', ratio: 1.0, us: 'NOKA' },
  'NOW': { name: 'SERVICENOW INC', ratio: 172.0, us: 'NOW' },
  'NSAN': { name: 'Nissan Motor Co., Ltd', ratio: 1.0, us: 'NSAN' },
  'NTES': { name: 'Netease, Inc', ratio: 14.0, us: 'NTES' },
  'NUE': { name: 'Nucor Corp', ratio: 16.0, us: 'NUE' },
  'NVDA': { name: 'Nvidia Corporation', ratio: 24.0, us: 'NVDA' },
  'NVO': { name: 'NOVO NORDISK A/S', ratio: 7.0, us: 'NVO' },
  'NVS': { name: 'Novartis Ag', ratio: 4.0, us: 'NVS' },
  'NXE': { name: 'Nexgen Energy LTD', ratio: 1.0, us: 'NXE' },
  'O': { name: 'Realty Income Corp.', ratio: 13.0, us: 'O' },
  'OGZD': { name: 'Pjsc Gazprom', ratio: 2.0, us: 'OGZD' },
  'OKLO': { name: 'Oklo Inc', ratio: 28.0, us: 'OKLO' },
  'ONDS': { name: 'Ondas Holdings Inc.', ratio: 2.0, us: 'ONDS' },
  'ORAN': { name: 'Orange S.A', ratio: 1.0, us: 'ORAN' },
  'ORCL': { name: 'Oracle Corporation', ratio: 3.0, us: 'ORCL' },
  'ORLY': { name: 'O\'reilly Automotive Inc', ratio: 222.0, us: 'ORLY' },
  'OXY': { name: 'Occidental Petroleum Corp.', ratio: 5.0, us: 'OXY' },
  'PAAS': { name: 'Pan American Silver Corp.', ratio: 3.0, us: 'PAAS' },
  'PAC': { name: 'Grupo Aeroportuario del Pacifico, S.A.B. de C.V.', ratio: 16.0, us: 'PAC' },
  'PAGS': { name: 'Pagseguro Digital Ltd', ratio: 3.0, us: 'PAGS' },
  'PANW': { name: 'Palo Alto Networks Inc', ratio: 50.0, us: 'PANW' },
  'PATH': { name: 'UIPATH INC', ratio: 2.0, us: 'PATH' },
  'PBI': { name: 'Pitney Bowes Inc', ratio: 1.0, us: 'PBI' },
  'PBR': { name: 'Petrobras (ADR)', ratio: 1.0, us: 'PBR' },
  'PCAR': { name: 'Paccar Inc.', ratio: 3.0, us: 'PCAR' },
  'PCRF': { name: 'Panasonic Corporation', ratio: 2.0, us: 'PCRF' },
  'PDD': { name: 'PDD HOLDINGS INC', ratio: 25.0, us: 'PDD' },
  'PEP': { name: 'Pepsico Inc', ratio: 18.0, us: 'PEP' },
  'PETR3': { name: 'Petrobras - Petróleo Brasileiro S.A.', ratio: 1.0, us: 'PETR3' },
  'PFE': { name: 'Pfizer Inc.', ratio: 4.0, us: 'PFE' },
  'PG': { name: 'Procter & Gamble', ratio: 15.0, us: 'PG' },
  'PHG': { name: 'Koninklijke Philips N.V.', ratio: 5.0, us: 'PHG' },
  'PINS': { name: 'Pinterest', ratio: 7.0, us: 'PINS' },
  'PKS': { name: 'Posco Holdings Inc.', ratio: 3.0, us: 'PKS' },
  'PLTR': { name: 'Palantir Technologies Inc', ratio: 3.0, us: 'PLTR' },
  'PM': { name: 'Philip Morris International', ratio: 18.0, us: 'PM' },
  'PRIO3': { name: 'Petro Rio S.A', ratio: 2.0, us: 'PRIO3' },
  'PSO': { name: 'Pearson Pic', ratio: 1.0, us: 'PSO' },
  'PSQ': { name: 'PROSHARES SHORT QQQ', ratio: 8.0, us: 'PSQ' },
  'PSX': { name: 'Phillips 66', ratio: 6.0, us: 'PSX' },
  'PTR': { name: 'Petrochina Co Ltd', ratio: 4.0, us: 'PTR' },
  'PYPL': { name: 'PayPal Holdings, Inc.', ratio: 8.0, us: 'PYPL' },
  'QCOM': { name: 'Qualcomm Inc.', ratio: 11.0, us: 'QCOM' },
  'QQQ': { name: 'Invesco QQQ Trust', ratio: 20.0, us: 'QQQ' },
  'RACE': { name: 'Ferrari', ratio: 83.0, us: 'RACE' },
  'RBLX': { name: 'Roblox Corp.', ratio: 2.0, us: 'RBLX' },
  'RCTB4': { name: 'Telebras PN', ratio: 0.001, us: 'RCTB4' },
  'RENT3': { name: 'Localiza Rent A Car S.A', ratio: 2.0, us: 'RENT3' },
  'RGTI': { name: 'RIGETTI COMPUTING INC', ratio: 2.0, us: 'RGTI' },
  'RIO': { name: 'Rio Tinto Pic', ratio: 8.0, us: 'RIO' },
  'RIOT': { name: 'Riot Platforms', ratio: 3.0, us: 'RIOT' },
  'RKLB': { name: 'Rocket Lab Corp', ratio: 12.0, us: 'RKLB' },
  'ROKU': { name: 'Roku', ratio: 13.0, us: 'ROKU' },
  'ROST': { name: 'Ross Stores, Inc.', ratio: 4.0, us: 'ROST' },
  'RSP': { name: 'Invesco S&P 500 eql wght ETF', ratio: 30.0, us: 'RSP' },
  'RTX': { name: 'Raytheon Technologies Corp', ratio: 5.0, us: 'RTX' },
  'SAN': { name: 'Banco Santander S.A', ratio: 0.25, us: 'SAN' },
  'SAP': { name: 'Sap Se', ratio: 6.0, us: 'SAP' },
  'SATL': { name: 'Satellogic Inc.', ratio: 1.0, us: 'SATL' },
  'SBS': { name: 'Companhia de Saneamento Básico do Estado de São Paulo-Sabesp', ratio: 0.5, us: 'SBS' },
  'SBSP3': { name: 'Cia Saneamento Básico de SP', ratio: 1.0, us: 'SBSP3' },
  'SBUX': { name: 'Starbucks Corporation', ratio: 12.0, us: 'SBUX' },
  'SCCO': { name: 'Southern Copper Corp', ratio: 2.0, us: 'SCCO' },
  'SCHW': { name: 'Charles Schwab', ratio: 13.0, us: 'SCHW' },
  'SDA': { name: 'SunCar Technology Group Inc', ratio: 2.0, us: 'SDA' },
  'SE': { name: 'Sea Ltd.', ratio: 32.0, us: 'SE' },
  'SH': { name: 'PROSHARES SHORT S&P500', ratio: 8.0, us: 'SH' },
  'SHEL': { name: 'Royal Dutch Shell Pic', ratio: 2.0, us: 'SHEL' },
  'SHOP': { name: 'Shopify Inc.', ratio: 107.0, us: 'SHOP' },
  'SHPW': { name: 'Shapeways Holdings Inc', ratio: 0.5, us: 'SHPW' },
  'SI': { name: 'Silvergate Bancorp', ratio: 10.0, us: 'SI' },
  'SID': { name: 'Companhia Siderúrgica Nacional', ratio: 0.125, us: 'SID' },
  'SIEGY': { name: 'Siemens Ag Adr', ratio: 3.0, us: 'SIEGY' },
  'SLB': { name: 'Schlumberger Ltd', ratio: 3.0, us: 'SLB' },
  'SLV': { name: 'iShares SILVER TRUST', ratio: 6.0, us: 'SLV' },
  'SMH': { name: 'VAN ECK SEMICONDUCTOR ETF', ratio: 50.0, us: 'SMH' },
  'SMSN': { name: 'Samsung Electronics Co. Ltd.', ratio: 14.0, us: 'SMSN' },
  'SNA': { name: 'Snap-On Inc', ratio: 6.0, us: 'SNA' },
  'SNAP': { name: 'Snap Inc.', ratio: 1.0, us: 'SNAP' },
  'SNDK': { name: 'Sandisk Corporation', ratio: 170.0, us: 'SNDK' },
  'SNOW': { name: 'Snowflake Inc.', ratio: 30.0, us: 'SNOW' },
  'SNP': { name: 'China Petroleum & Chem', ratio: 3.0, us: 'SNP' },
  'SONY': { name: 'Sony Group Corporation', ratio: 8.0, us: 'SONY' },
  'SPCE': { name: 'Virgin Galactic', ratio: 0.5, us: 'SPCE' },
  'SPCX': { name: 'SPACE EXPLORATION TECHNOLOGIES CORP.', ratio: 50.0, us: 'SPCX' },
  'SPGI': { name: 'S&P Global Inc', ratio: 45.0, us: 'SPGI' },
  'SPHQ': { name: 'Invesco S&P 500 quality ETF', ratio: 14.0, us: 'SPHQ' },
  'SPOT': { name: 'Spotify Technology S.A.', ratio: 28.0, us: 'SPOT' },
  'SPXL': { name: 'DIREXION DAILY S&P 500 BULL 3X', ratio: 25.0, us: 'SPXL' },
  'SPY': { name: 'SPDR S&P 500 ETF Trust', ratio: 60.0, us: 'SPY' },
  'STLA': { name: 'Stellantis', ratio: 5.0, us: 'STLA' },
  'STNE': { name: 'StoneCo Ltd', ratio: 3.0, us: 'STNE' },
  'SUZ': { name: 'Suzano Papel E Celulose S.A.', ratio: 1.0, us: 'SUZ' },
  'SUZB3': { name: 'Suzano S.A.', ratio: 1.0, us: 'SUZB3' },
  'SWKS': { name: 'Skyworks Solutions', ratio: 21.0, us: 'SWKS' },
  'SYY': { name: 'Sysco Corp.', ratio: 8.0, us: 'SYY' },
  'T': { name: 'At &T Inc.', ratio: 3.0, us: 'T' },
  'TCOM': { name: 'TRIP.COM Group Ltd.', ratio: 2.0, us: 'TCOM' },
  'TEAM': { name: 'ATLASSIAN CORPORATION', ratio: 47.0, us: 'TEAM' },
  'TEFO': { name: 'Telefonica SA', ratio: 8.0, us: 'TEFO' },
  'TEM': { name: 'TEMPUS AI INC', ratio: 12.0, us: 'TEM' },
  'TEN': { name: 'Tenaris', ratio: 1.0, us: 'TEN' },
  'TOT': { name: 'Target Corporation', ratio: 24.0, us: 'TOT' },
  'TILAY': { name: 'Telecom Italia S.P.A. Ordinary Shares', ratio: 1.0, us: 'TILAY' },
  'TIMB': { name: 'Tim Participações S.A.', ratio: 1.0, us: 'TIMB' },
  'TIMS3': { name: 'TIM SA', ratio: 1.0, us: 'TIMS3' },
  'TJX': { name: 'TJX Companies Inc/The', ratio: 22.0, us: 'TJX' },
  'TM': { name: 'Toyota Motor Corporation', ratio: 15.0, us: 'TM' },
  'TMO': { name: 'Thermo Fisher Scientific Inc.', ratio: 22.0, us: 'TMO' },
  'TMUS': { name: 'T-mobile', ratio: 33.0, us: 'TMUS' },
  'TQQQ': { name: 'ProShares UltraPro QQQ', ratio: 25.0, us: 'TQQQ' },
  'TRIP': { name: 'Tripadvisor, Inc.', ratio: 2.0, us: 'TRIP' },
  'TRVV': { name: 'The Travelers Cos. Inc.', ratio: 6.0, us: 'TRVV' },
  'TSLA': { name: 'Tesla, Inc.', ratio: 15.0, us: 'TSLA' },
  'TSM': { name: 'Taiwan Semiconductor Manufacturing', ratio: 9.0, us: 'TSM' },
  'TTE': { name: 'TotalEnergies SE', ratio: 3.0, us: 'TTE' },
  'TTM': { name: 'Tata Motors Ltd', ratio: 1.0, us: 'TTM' },
  'TV': { name: 'Grupo Televisa S.A.', ratio: 3.0, us: 'TV' },
  'TWLO': { name: 'Twilio Inc', ratio: 36.0, us: 'TWLO' },
  'TWTR': { name: 'Twitter, Inc.', ratio: 2.0, us: 'TWTR' },
  'TXN': { name: 'Texas Instruments Inc', ratio: 5.0, us: 'TXN' },
  'TXR': { name: 'Ternium S.A', ratio: 4.0, us: 'TXR' },
  'UAL': { name: 'United Airlines Holdings Inc.', ratio: 5.0, us: 'UAL' },
  'UBER': { name: 'Uber Technologies Inc.', ratio: 2.0, us: 'UBER' },
  'UGP': { name: 'Ultrapar Participações S.A.', ratio: 1.0, us: 'UGP' },
  'UL': { name: 'Unilever PLC - Sponsored', ratio: 3.0, us: 'UL' },
  'UN': { name: 'NU Holdings Ltd/Cayman Islands', ratio: 2.0, us: 'UN' },
  'UNH': { name: 'UnitedHealth Group Inc.', ratio: 33.0, us: 'UNH' },
  'UNP': { name: 'Union Pacific Corp.', ratio: 20.0, us: 'UNP' },
  'UPST': { name: 'Upstart Hlogs Inc', ratio: 5.0, us: 'UPST' },
  'URA': { name: 'Global X Uranium ETF', ratio: 5.0, us: 'URA' },
  'URBN': { name: 'Urban Outfitters INC.', ratio: 2.0, us: 'URBN' },
  'USB': { name: 'U.S. Bancorp', ratio: 5.0, us: 'USB' },
  'USO': { name: 'United States Oil Fund', ratio: 15.0, us: 'USO' },
  'V': { name: 'Visa Inc', ratio: 18.0, us: 'V' },
  'VALE': { name: 'Vale S.A', ratio: 2.0, us: 'VALE' },
  'VALE3': { name: 'Vale S.A', ratio: 1.0, us: 'VALE3' },
  'VEA': { name: 'Vanguard FTSE Developed Markets ETF', ratio: 10.0, us: 'VEA' },
  'VIC': { name: 'VANGUARD DIVIDEND APPRECIATION', ratio: 39.0, us: 'VIC' },
  'VIST': { name: 'Vista Energy S.A.B. de C.V.', ratio: 3.0, us: 'VIST' },
  'VIV': { name: 'Telefônica Brasil S.A', ratio: 1.0, us: 'VIV' },
  'VIVT3': { name: 'Telefônica Brasil S.A.', ratio: 1.0, us: 'VIVT3' },
  'VOD': { name: 'Vodafone Group Pic', ratio: 1.0, us: 'VOD' },
  'VRSN': { name: 'Verisign, Inc.', ratio: 6.0, us: 'VRSN' },
  'VRTX': { name: 'VERTEX PHARMACEUTICALS INC', ratio: 101.0, us: 'VRTX' },
  'VST': { name: 'VISTRA CORPORATION', ratio: 26.0, us: 'VST' },
  'VXX': { name: 'iPath Series B S&P 500 VIX', ratio: 5.0, us: 'VXX' },
  'VZ': { name: 'Verizon Communications Inc.', ratio: 4.0, us: 'VZ' },
  'WBA': { name: 'Walgreens Boots Alliance Inc.', ratio: 3.0, us: 'WBA' },
  'WBO': { name: 'Weibo Corporation', ratio: 6.0, us: 'WBO' },
  'WEGE3': { name: 'Weg S.A.', ratio: 1.0, us: 'WEGE3' },
  'WFC': { name: 'Wells Fargo & Co.', ratio: 5.0, us: 'WFC' },
  'WMT': { name: 'Walmart Inc.', ratio: 18.0, us: 'WMT' },
  'XLB': { name: 'The Materials Select Sector SPDR Fund', ratio: 18.0, us: 'XLB' },
  'XLC': { name: 'The Communication Services Select Sector SPDR Fund', ratio: 19.0, us: 'XLC' },
  'XLE': { name: 'ENERGY SELECT SECTOR SPDR FUND', ratio: 2.0, us: 'XLE' },
  'XLF': { name: 'Financial Select Sector SPDR Fund', ratio: 2.0, us: 'XLF' },
  'XLI': { name: 'The Industrial Select Sector SPDR Fund', ratio: 28.0, us: 'XLI' },
  'XLK': { name: 'The Technology Select Sector SPDR Fund', ratio: 46.0, us: 'XLK' },
  'XLP': { name: 'The Consumer Staples Select Sector SPDR Fund', ratio: 16.0, us: 'XLP' },
  'XLRE': { name: 'The Real Estate Select Sector SPDR Fund', ratio: 9.0, us: 'XLRE' },
  'XLU': { name: 'Utilities Select Sector SPDR Fund', ratio: 15.0, us: 'XLU' },
  'XLV': { name: 'The Health Care Select Sector SPDR Fund', ratio: 29.0, us: 'XLV' },
  'XLY': { name: 'The Consumer Discretionary Select Sector SPDR Fund', ratio: 43.0, us: 'XLY' },
  'XME': { name: 'State Street SPDR S&P Metals & Mining ETF', ratio: 30.0, us: 'XME' },
  'XOM': { name: 'Exxon Mobil Corporation', ratio: 10.0, us: 'XOM' },
  'XP': { name: 'XP Inc', ratio: 4.0, us: 'XP' },
  'XPEV': { name: 'XPENG INC', ratio: 4.0, us: 'XPEV' },
  'XROX': { name: 'Xerox Holding Corporation', ratio: 1.0, us: 'XROX' },
  'XYZ': { name: 'Square Inc.', ratio: 20.0, us: 'XYZ' },
  'YELP': { name: 'Yelp Inc.', ratio: 2.0, us: 'YELP' },
  'YZCA': { name: 'Yanzhou Coal Mining Co. Ltd.', ratio: 2.0, us: 'YZCA' },
  'ZM': { name: 'Zoom Video Communications Inc.', ratio: 47.0, us: 'ZM' }
};

const CEDEAR_MAP = { ...BASE_CEDEAR_MAP, ...CUSTOM_CEDEARS };

// Tickers locales de ByMA sin cobertura directa en el CDN de logos: se mapean a su ADR/ticker
// internacional equivalente (misma empresa, cotiza afuera) para poder traer el logo real.
const LOGO_SYMBOL_OVERRIDES = {
  'YPFD': 'YPF', 'PAMP': 'PAM', 'CRES': 'CRESY', 'TECO2': 'TEO', 'TGSU2': 'TGS', 'TXAR': 'TX'
};

function getAssetLogoUrl(h) {
  if (SPECIFIC_LOGOS[h.symbol]) return SPECIFIC_LOGOS[h.symbol];
  if (h.type !== 'CEDEAR' && h.type !== 'ACCION') return null;
  const ticker = LOGO_SYMBOL_OVERRIDES[h.symbol] || (CEDEAR_MAP[h.symbol] && CEDEAR_MAP[h.symbol].us) || h.symbol;
  return `https://assets.parqet.com/logos/symbol/${ticker}?format=png`;
}

// Ícono para una fila (tenencia o movimiento del libro contable): logo real si hay,
// si no un avatar circular sólido con las iniciales (fallback también si la imagen falla).
function buildIconHTML(a) {
  const fallbackFill = FALLBACK_FILL[a.type] || FALLBACK_FILL.CEDEAR;
  const letters = a.symbol.slice(0, 2);
  const logoUrl = getAssetLogoUrl(a);
  if (logoUrl) {
    return `
      <div class="h-icon-container">
        <img class="h-icon-img" src="${logoUrl}" alt="${a.symbol}" loading="lazy" onerror="this.style.display='none'; this.parentElement.classList.add('h-icon-fallback'); this.parentElement.style.background='${fallbackFill}'; this.parentElement.innerHTML='<span>${letters}</span>';">
      </div>
    `;
  }
  return `<div class="h-icon-container h-icon-fallback" style="background:${fallbackFill};"><span>${letters}</span></div>`;
}

const ACCIONES_LOCALES = {
  'AGRO': { name: 'Agrometal S.A.I.', yahooSymbol: 'AGRO.BA' },
  'AL30': { name: 'Bono Bonar 2030 USD', yahooSymbol: 'AL30.BA' },
  'ALUA': { name: 'Aluar Aluminio Argentino', yahooSymbol: 'ALUA.BA' },
  'BBAR': { name: 'BBVA Argentina', yahooSymbol: 'BBAR.BA' },
  'BMA':  { name: 'Banco Macro S.A.', yahooSymbol: 'BMA.BA' },
  'BYMA': { name: 'Bolsas y Mercados Argentinos', yahooSymbol: 'BYMA.BA' },
  'CEPU': { name: 'Central Puerto S.A.', yahooSymbol: 'CEPU.BA' },
  'COME': { name: 'Sociedad Comercial del Plata', yahooSymbol: 'COME.BA' },
  'CRES': { name: 'Cresud S.A.C.I.F. y A.', yahooSymbol: 'CRES.BA' },
  'EDN':  { name: 'Edenor S.A.', yahooSymbol: 'EDN.BA' },
  'GD30': { name: 'Bono Global 2030 USD', yahooSymbol: 'GD30.BA' },
  'GGAL': { name: 'Grupo Financiero Galicia', yahooSymbol: 'GGAL.BA' },
  'IRSA': { name: 'IRSA Inversiones y Representaciones', yahooSymbol: 'IRSA.BA' },
  'LOMA': { name: 'Loma Negra C.I.A.S.A.', yahooSymbol: 'LOMA.BA' },
  'MIRG': { name: 'Mirgor S.A.C.I.F.I.A.', yahooSymbol: 'MIRG.BA' },
  'MOLI': { name: 'Molinos Río de la Plata', yahooSymbol: 'MOLI.BA' },
  'PAMP': { name: 'Pampa Energía S.A.', yahooSymbol: 'PAMP.BA' },
  'SUPV': { name: 'Grupo Supervielle S.A.', yahooSymbol: 'SUPV.BA' },
  'TECO2':{ name: 'Telecom Argentina S.A.', yahooSymbol: 'TECO2.BA' },
  'TGNO4':{ name: 'Transportadora Gas del Norte', yahooSymbol: 'TGNO4.BA' },
  'TGSU2':{ name: 'Transportadora Gas del Sur', yahooSymbol: 'TGSU2.BA' },
  'TRAN': { name: 'Transener S.A.', yahooSymbol: 'TRAN.BA' },
  'TXAR': { name: 'Ternium Argentina S.A.', yahooSymbol: 'TXAR.BA' },
  'VALO': { name: 'Banco de Valores S.A.', yahooSymbol: 'VALO.BA' },
  'YM34O':{ name: 'ON YPF Clase 34 Dólar Cable', yahooSymbol: 'YM34O.BA' },
  'YPFD': { name: 'YPF S.A. Clase D', yahooSymbol: 'YPFD.BA' },
  'CONIOLA': { name: 'Adcap Acciones - FCI Clase A', yahooSymbol: 'CONIOLA.BA' }
};

const DIVIDEND_SCHEDULE = {
  'AAPL': { company: 'Apple Inc.', months: 'Feb, May, Ago, Nov', monthNums: [2, 5, 8, 11], freq: 'Trimestral', currency: 'USD Cable', estDpa: 0.26 },
  'ABBV': { company: 'AbbVie Inc.', months: 'Feb, May, Ago, Nov', monthNums: [2, 5, 8, 11], freq: 'Trimestral', currency: 'USD Cable', estDpa: 1.55 },
  'BAC':  { company: 'Bank of America', months: 'Mar, Jun, Sep, Dic', monthNums: [3, 6, 9, 12], freq: 'Trimestral', currency: 'USD Cable', estDpa: 0.24 },
  'CVX':  { company: 'Chevron Corp.', months: 'Mar, Jun, Sep, Dic', monthNums: [3, 6, 9, 12], freq: 'Trimestral', currency: 'USD Cable', estDpa: 1.63 },
  'HD':   { company: 'Home Depot', months: 'Mar, Jun, Sep, Dic', monthNums: [3, 6, 9, 12], freq: 'Trimestral', currency: 'USD Cable', estDpa: 2.25 },
  'INTC': { company: 'Intel Corp.', months: 'Mar, Jun, Sep, Dic', monthNums: [3, 6, 9, 12], freq: 'Trimestral', currency: 'USD Cable', estDpa: 0.125 },
  'JNJ':  { company: 'Johnson & Johnson', months: 'Mar, Jun, Sep, Dic', monthNums: [3, 6, 9, 12], freq: 'Trimestral', currency: 'USD Cable', estDpa: 1.19 },
  'JPM':  { company: 'JPMorgan Chase', months: 'Ene, Abr, Jul, Oct', monthNums: [1, 4, 7, 10], freq: 'Trimestral', currency: 'USD Cable', estDpa: 1.15 },
  'KO':   { company: 'Coca-Cola Co.', months: 'Abr, Jul, Oct, Dic', monthNums: [4, 7, 10, 12], freq: 'Trimestral', currency: 'USD Cable', estDpa: 0.485 },
  'LMT':  { company: 'Lockheed Martin', months: 'Mar, Jun, Sep, Dic', monthNums: [3, 6, 9, 12], freq: 'Trimestral', currency: 'USD Cable', estDpa: 3.15 },
  'MCD':  { company: "McDonald's", months: 'Mar, Jun, Sep, Dic', monthNums: [3, 6, 9, 12], freq: 'Trimestral', currency: 'USD Cable', estDpa: 1.67 },
  'MRSH': { company: 'Marsh & McLennan', months: 'Feb, May, Ago, Nov', monthNums: [2, 5, 8, 11], freq: 'Trimestral', currency: 'USD Cable', estDpa: 0.715 },
  'MSFT': { company: 'Microsoft Corp.', months: 'Mar, Jun, Sep, Dic', monthNums: [3, 6, 9, 12], freq: 'Trimestral', currency: 'USD Cable', estDpa: 0.75 },
  'PEP':  { company: 'PepsiCo Inc.', months: 'Ene, Mar, Jun, Sep', monthNums: [1, 3, 6, 9], freq: 'Trimestral', currency: 'USD Cable', estDpa: 1.26 },
  'PFE':  { company: 'Pfizer Inc.', months: 'Mar, Jun, Sep, Dic', monthNums: [3, 6, 9, 12], freq: 'Trimestral', currency: 'USD Cable', estDpa: 0.42 },
  'PG':   { company: 'Procter & Gamble', months: 'Feb, May, Ago, Nov', monthNums: [2, 5, 8, 11], freq: 'Trimestral', currency: 'USD Cable', estDpa: 0.94 },
  'QQQ':  { company: 'Nasdaq 100 ETF', months: 'Mar, Jun, Sep, Dic', monthNums: [3, 6, 9, 12], freq: 'Trimestral', currency: 'USD Cable', estDpa: 0.65 },
  'SBUX': { company: 'Starbucks Corp.', months: 'Feb, May, Ago, Nov', monthNums: [2, 5, 8, 11], freq: 'Trimestral', currency: 'USD Cable', estDpa: 0.57 },
  'SPY':  { company: 'S&P 500 ETF', months: 'Mar, Jun, Sep, Dic', monthNums: [3, 6, 9, 12], freq: 'Trimestral', currency: 'USD Cable', estDpa: 1.78 },
  'T':    { company: 'AT&T Inc.', months: 'Feb, May, Ago, Nov', monthNums: [2, 5, 8, 11], freq: 'Trimestral', currency: 'USD Cable', estDpa: 0.28 },
  'VZ':   { company: 'Verizon Comm.', months: 'Feb, May, Ago, Nov', monthNums: [2, 5, 8, 11], freq: 'Trimestral', currency: 'USD Cable', estDpa: 0.66 },
  'XLF':  { company: 'Financial SPDR ETF', months: 'Mar, Jun, Sep, Dic', monthNums: [3, 6, 9, 12], freq: 'Trimestral', currency: 'USD Cable', estDpa: 0.21 },
  'XOM':  { company: 'Exxon Mobil', months: 'Mar, Jun, Sep, Dic', monthNums: [3, 6, 9, 12], freq: 'Trimestral', currency: 'USD Cable', estDpa: 0.95 },
  'IBM':  { company: 'International Business Machines', months: 'Feb, May, Ago, Nov', monthNums: [2, 5, 8, 11], freq: 'Trimestral', currency: 'USD Cable', estDpa: 1.67 },
  'MMM':  { company: '3M Company', months: 'Mar, Jun, Sep, Dic', monthNums: [3, 6, 9, 12], freq: 'Trimestral', currency: 'USD Cable', estDpa: 1.51 },
  'TXN':  { company: 'Texas Instruments', months: 'Feb, May, Ago, Nov', monthNums: [2, 5, 8, 11], freq: 'Trimestral', currency: 'USD Cable', estDpa: 1.30 },
  'CAT':  { company: 'Caterpillar Inc', months: 'Feb, May, Ago, Nov', monthNums: [2, 5, 8, 11], freq: 'Trimestral', currency: 'USD Cable', estDpa: 1.30 },
  'WMT':  { company: 'Walmart Inc.', months: 'Ene, Abr, Jul, Oct', monthNums: [1, 4, 7, 10], freq: 'Trimestral', currency: 'USD Cable', estDpa: 0.21 },
  'AL30': { company: 'Bono Bonar 2030', months: 'Ene, Jul', monthNums: [1, 7], freq: 'Semestral', currency: 'USD MEP', estDpa: 0.04 },
  'GD30': { company: 'Bono Global 2030', months: 'Ene, Jul', monthNums: [1, 7], freq: 'Semestral', currency: 'USD Cable', estDpa: 0.04 },
  'YM34O':{ company: 'ON YPF 2034', months: 'Feb, Ago', monthNums: [2, 8], freq: 'Semestral', currency: 'USD Cable', estDpa: 0.04375 },
  'YPFD': { company: 'YPF S.A. Clase D', months: 'May', monthNums: [5], freq: 'Eventual', currency: 'ARS', estDpa: 300.0 },
  'GGAL': { company: 'Grupo Fin. Galicia', months: 'May, Ago', monthNums: [5, 8], freq: 'Eventual', currency: 'ARS', estDpa: 55.0 },
  'PAMP': { company: 'Pampa Energia', months: 'Jul', monthNums: [7], freq: 'Eventual', currency: 'ARS', estDpa: 35.0 },
  'BMA':  { company: 'Banco Macro', months: 'May', monthNums: [5], freq: 'Eventual', currency: 'ARS', estDpa: 1200.0 },
  'TXAR': { company: 'Ternium Argentina', months: 'May', monthNums: [5], freq: 'Eventual', currency: 'ARS', estDpa: 12.0 },
  'ALUA': { company: 'Aluar', months: 'May', monthNums: [5], freq: 'Eventual', currency: 'ARS', estDpa: 8.0 }
};

const DEFAULT_BROKERS = [
  'BullMarket', 'InvertirOnline', 'Balanz', 'Binance', 'LemonCash', 'MercadoPago', 'CocosCapital', 'Metamask'
];

let currentTheme = localStorage.getItem('port_theme_v43') || 'obsidian';
let customBrokers = JSON.parse(localStorage.getItem('port_brokers_v43')) || DEFAULT_BROKERS;
let transactions = JSON.parse(localStorage.getItem('port_v43_txs')) || [];
let livePrices = JSON.parse(localStorage.getItem('port_v43_prices')) || {};
let change24hMap = JSON.parse(localStorage.getItem('port_v43_24h')) || {};
let cclRate = 1250; // dólar MEP (nombre de variable heredado, ver fetchCCL)
let btcPriceUSD = 65000;
let displayCurrency = 'USD';
let currentCategory = 'CRYPTO';
let activeCategoryFilter = 'ALL';
let mainTab = 'holdings';
let selectedAsset = null;
let managingSymbol = null;
let selectedTimeframeDays = 0;

let chartPieInstance = null;
let chartGrowthInstance = null;
let chartInjectionVsValInstance = null;
let chartRoiRankingInstance = null;

document.getElementById('tradeDate').valueAsDate = new Date();
document.getElementById('sellDate').valueAsDate = new Date();

function openSettingsModal() {
  renderBrokersManagementList();
  openModal('modalSettings');
}

function renderBrokersManagementList() {
  const list = document.getElementById('customBrokersList');
  list.innerHTML = '';
  customBrokers.forEach((b, index) => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';
    div.style.padding = '8px 12px';
    div.style.background = 'var(--card-bg)';
    div.style.border = '1px solid var(--border)';
    div.style.borderRadius = '10px';
    div.innerHTML = `<span>💼 ${b}</span>${customBrokers.length > 1 ? `<button class="btn-del-mini" onclick="deleteCustomBroker(${index})">✕</button>` : ''}`;
    list.appendChild(div);
  });
  populateBrokerSelects();
}

function addNewCustomBroker() {
  const input = document.getElementById('newBrokerNameInput');
  const name = input.value.trim().replace(/[^a-zA-Z0-9_\-\s]/g, '');
  if (!name) return;
  if (!customBrokers.includes(name)) {
    customBrokers.push(name);
    localStorage.setItem('port_brokers_v43', JSON.stringify(customBrokers));
    renderBrokersManagementList();
    input.value = '';
  }
}

function deleteCustomBroker(index) {
  if (!confirm(`¿Eliminar "${customBrokers[index]}"?`)) return;
  customBrokers.splice(index, 1);
  localStorage.setItem('port_brokers_v43', JSON.stringify(customBrokers));
  renderBrokersManagementList();
}

function populateBrokerSelects() {
  const sel = document.getElementById('brokerSelect');
  if (!sel) return;
  const currentVal = sel.value;
  sel.innerHTML = '';
  customBrokers.forEach(b => {
    const opt = document.createElement('option');
    opt.value = b;
    opt.innerText = b;
    sel.appendChild(opt);
  });
  if (customBrokers.includes(currentVal)) sel.value = currentVal;
}

function setCategoryFilter(cat) {
  activeCategoryFilter = cat;
  ['kpiBoxCedear', 'kpiBoxCrypto', 'kpiBoxAccion', 'kpiBoxYield'].forEach(id => {
    document.getElementById(id).classList.remove('active-filter');
  });
  if (cat === 'CEDEAR') document.getElementById('kpiBoxCedear').classList.add('active-filter');
  if (cat === 'CRYPTO') document.getElementById('kpiBoxCrypto').classList.add('active-filter');
  if (cat === 'ACCION') document.getElementById('kpiBoxAccion').classList.add('active-filter');
  if (cat === 'YIELD') document.getElementById('kpiBoxYield').classList.add('active-filter');
  render();
}

function clearAllData() {
  if (!confirm('¿Deseas vaciar todas las operaciones?')) return;
  transactions = [];
  localStorage.removeItem('port_v43_txs');
  render();
  alert('Portafolio reiniciado.');
}

function setMainTab(tab) {
  mainTab = tab;
  ['btnTabHoldings', 'btnTabDividends', 'btnTabMetrics', 'btnTabHistory'].forEach(b => {
    if(document.getElementById(b)) document.getElementById(b).classList.remove('active');
  });
  ['holdingsView', 'dividendsView', 'metricsView', 'historyView'].forEach(v => {
    if(document.getElementById(v)) document.getElementById(v).style.display = 'none';
  });

  if (tab === 'holdings') {
    document.getElementById('btnTabHoldings').classList.add('active');
    document.getElementById('holdingsView').style.display = 'flex';
    document.getElementById('holdingsSortBy').style.display = 'block';
  } else if (tab === 'dividends') {
    document.getElementById('btnTabDividends').classList.add('active');
    document.getElementById('dividendsView').style.display = 'flex';
    document.getElementById('holdingsSortBy').style.display = 'none';
    renderDividendsTable();
  } else if (tab === 'metrics') {
    document.getElementById('btnTabMetrics').classList.add('active');
    document.getElementById('metricsView').style.display = 'flex';
    document.getElementById('holdingsSortBy').style.display = 'none';
    populateMetricsFilter();
    renderMetricsAdvanced();
    renderPie(getConsolidatedHoldings());
    renderGrowthChart();
  } else if (tab === 'history') {
    document.getElementById('btnTabHistory').classList.add('active');
    document.getElementById('historyView').style.display = 'flex';
    document.getElementById('holdingsSortBy').style.display = 'none';
    renderHistory();
  }
}

function setTimeframe(days) {
  selectedTimeframeDays = days;
  document.querySelectorAll('#metricsView .curr-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderMetricsAdvanced();
}

function setDisplayCurrency(curr) {
  displayCurrency = curr;
  document.getElementById('btnUSD').className = `curr-btn ${curr === 'USD' ? 'active' : ''}`;
  document.getElementById('btnARS').className = `curr-btn ${curr === 'ARS' ? 'active' : ''}`;
  document.getElementById('btnBTC').className = `curr-btn ${curr === 'BTC' ? 'active' : ''}`;
  render();
}

function formatValue(valUSD) {
  if (displayCurrency === 'ARS') {
    const valARS = valUSD * cclRate;
    return `$${valARS.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ARS`;
  } else if (displayCurrency === 'BTC') {
    const valBTC = btcPriceUSD > 0 ? (valUSD / btcPriceUSD) : 0;
    return `₿${valBTC.toFixed(6)} BTC`;
  }
  return `$${valUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
}

function openBuyModal() {
  resetBuyForm();
  populateBrokerSelects();
  openModal('modalBuy');
}

function openModal(id) { document.getElementById(id).classList.add('open'); }

function closeModal(id, e) {
  if (!e || e.target === document.getElementById(id)) {
    document.getElementById(id).classList.remove('open');
    if (id === 'modalBuy') resetBuyForm();
    if (id === 'modalManage') resetManageForm();
    if (id === 'modalEditYield') document.getElementById('editYieldNewAmount').value = '';
    if (id === 'modalSettings') document.getElementById('newBrokerNameInput').value = '';
  }
}

function resetBuyForm() {
  document.getElementById('symbol').value = '';
  document.getElementById('inputAmount').value = '';
  document.getElementById('inputPrice').value = '';
  document.getElementById('inputYieldCapital').value = '';
  document.getElementById('tradeDate').valueAsDate = new Date();
  document.getElementById('dropdown').style.display = 'none';
  selectedAsset = null;
  updateFormLabels();
}

function resetManageForm() {
  document.getElementById('sellInput1').value = '';
  document.getElementById('sellInput2').value = '';
  document.getElementById('sellDate').valueAsDate = new Date();
}

function updateManageLabels() {
  const holdings = getConsolidatedHoldings();
  const pos = holdings.find(h => h.symbol === managingSymbol);
  if (!pos) return;

  const isArs = document.getElementById('sellCurrency').value === 'ARS';
  const currSym = isArs ? 'ARS ($)' : 'USD ($)';

  if (pos.type === 'CRYPTO') {
    const isStable = (pos.symbol === 'USDT' || pos.symbol === 'USDC' || pos.symbol === 'DAI');
    document.getElementById('sellInput1Label').innerText = isStable ? `Cantidad de ${pos.symbol}` : `Cantidad de Cripto`;
    document.getElementById('sellInput1').placeholder = `ej: ${isStable ? '150' : '0.00032'}`;
    if (isStable) {
       document.getElementById('sellInput2Field').style.display = 'none';
    } else {
       document.getElementById('sellInput2Field').style.display = 'block';
       document.getElementById('sellInput2Label').innerText = `Precio (${currSym})`;
    }
  } else {
    document.getElementById('sellInput1Label').innerText = `Cantidad de títulos / CEDEARs`;
    document.getElementById('sellInput1').placeholder = `ej: 2`;
    document.getElementById('sellInput2Field').style.display = 'block';
    document.getElementById('sellInput2Label').innerText = `Precio (${currSym})`;
  }
}

function openManageModal(symbol) {
  managingSymbol = symbol;
  const holdings = getConsolidatedHoldings();
  const pos = holdings.find(h => h.symbol === symbol);
  if (!pos) return;

  document.getElementById('manageTitle').innerText = `Operar ${symbol}`;
  document.getElementById('manageSubtitle').innerText = `Valuación: ${formatValue(pos.currentVal)}`;
  resetManageForm();

  document.getElementById('manageCedearSection').style.display = pos.type === 'CEDEAR' ? 'block' : 'none';
  if (pos.type === 'CEDEAR') document.getElementById('customRatioInput').value = pos.ratio;

  updateManageLabels();
  openModal('modalManage');
}

function openParityModal(symbol) {
  const holdings = getConsolidatedHoldings();
  const h = holdings.find(x => x.symbol === symbol);
  if (!h) return;

  const pricePerCedear = h.units > 0 ? (h.currentVal / h.units) : 0;
  const impliedSharePrice = h.realShares > 0 ? (h.currentVal / h.realShares) : 0;

  document.getElementById('parityTitle').innerText = `${h.symbol} · Detalle de Paridad`;
  document.getElementById('paritySubtitle').innerText = h.companyName;
  document.getElementById('parityBody').innerHTML = `
    <div class="parity-row"><span>Paridad</span><b>1 acción real = ${h.ratio} CEDEARs</b></div>
    <div class="parity-row"><span>Tu tenencia</span><b>${h.units < 1 ? h.units.toFixed(6) : h.units.toFixed(2)} CEDEARs</b></div>
    <div class="parity-row"><span>Equivale a</span><b>${h.realShares.toFixed(4)} acciones reales</b></div>
    <div class="parity-row"><span>Precio del CEDEAR</span><b>${formatValue(pricePerCedear)}</b></div>
    <div class="parity-row"><span>Precio implícito x acción real</span><b>${formatValue(impliedSharePrice)}</b></div>
    <div class="parity-row"><span>Valor total de la posición</span><b>${formatValue(h.currentVal)}</b></div>
  `;
  openModal('modalParity');
}

function openBrokerModal(symbol) {
  const holdings = getConsolidatedHoldings();
  const h = holdings.find(x => x.symbol === symbol);
  if (!h) return;

  document.getElementById('brokersTitle').innerText = `${h.symbol} · Por Broker`;
  document.getElementById('brokersSubtitle').innerText = h.companyName;
  document.getElementById('brokersBody').innerHTML = h.brokerBreakdown.map(b => {
    const val = h.units > 0 ? (b.units / h.units) * h.currentVal : 0;
    const pct = h.units > 0 ? (b.units / h.units) * 100 : 0;
    const unitsText = b.units < 1 ? b.units.toFixed(6) : b.units.toFixed(2);
    return `<div class="parity-row"><span>${b.broker}</span><b>${formatValue(val)} <span style="color:var(--muted); font-weight:600;">· ${unitsText} un. (${pct.toFixed(0)}%)</span></b></div>`;
  }).join('');
  openModal('modalBrokers');
}

function openEditYieldModal(symbol) {
  managingSymbol = symbol;
  const holdings = getConsolidatedHoldings();
  const pos = holdings.find(h => h.symbol === symbol);
  if (!pos) return;

  document.getElementById('editYieldTitle').innerText = `✏ Actualizar ${symbol}`;
  document.getElementById('editYieldSubtitle').innerText = `Costo Invertido: ${formatValue(pos.totalCostUSD)}`;
  document.getElementById('editYieldNewAmount').value = (pos.currentVal * (document.getElementById('editYieldCurrency').value === 'ARS' ? cclRate : 1)).toFixed(2);

  openModal('modalEditYield');
}

function saveEditedYieldBalance() {
  const val = parseFloat(document.getElementById('editYieldNewAmount').value);
  const curr = document.getElementById('editYieldCurrency').value;
  if (isNaN(val) || val < 0) return;

  const newCurrentValUSD = curr === 'ARS' ? (val / cclRate) : val;
  livePrices[managingSymbol] = newCurrentValUSD;
  localStorage.setItem('port_v43_prices', JSON.stringify(livePrices));

  closeModal('modalEditYield');
  render();
}

function applyCustomRatio() {
  const newRatio = parseFloat(document.getElementById('customRatioInput').value);
  if (isNaN(newRatio) || newRatio <= 0) return;

  transactions.forEach(t => {
    if (t.symbol === managingSymbol) t.ratio = newRatio;
  });

  localStorage.setItem('port_v43_txs', JSON.stringify(transactions));
  closeModal('modalManage');
  render();
  updateLivePrices();
}

function setSellAll() {
  const holdings = getConsolidatedHoldings();
  const pos = holdings.find(h => h.symbol === managingSymbol);
  if (!pos) return;

  const isArs = document.getElementById('sellCurrency').value === 'ARS';
  const isStable = pos.type === 'CRYPTO' && (pos.symbol === 'USDT' || pos.symbol === 'USDC' || pos.symbol === 'DAI');

  document.getElementById('sellInput1').value = pos.units;
  const currP = livePrices[managingSymbol] || pos.avgPrice;
  if (!isStable) document.getElementById('sellInput2').value = isArs ? (currP * cclRate).toFixed(2) : currP.toFixed(2);
}

function executeSale() {
  const holdings = getConsolidatedHoldings();
  const pos = holdings.find(h => h.symbol === managingSymbol);
  if (!pos) return;

  const isStable = pos.type === 'CRYPTO' && (pos.symbol === 'USDT' || pos.symbol === 'USDC' || pos.symbol === 'DAI');
  const v1 = parseFloat(document.getElementById('sellInput1').value);
  let v2 = isStable ? 1 : parseFloat(document.getElementById('sellInput2').value);
  const date = document.getElementById('sellDate').value || new Date().toISOString().slice(0, 10);
  const curr = document.getElementById('sellCurrency').value;

  if (isNaN(v1) || isNaN(v2) || v1 <= 0 || v2 <= 0) return;
  
  let priceUSD = isStable ? 1 : (curr === 'ARS' ? (v2 / cclRate) : v2);

  if (v1 > (pos.units + 0.000001)) {
    alert('No podés vender más unidades de las disponibles.');
    return;
  }

  transactions.push({
    id: Date.now(),
    side: 'SELL',
    symbol: managingSymbol,
    type: pos.type,
    units: v1,
    priceUSD: priceUSD,
    date: date,
    ratio: pos.ratio
  });

  localStorage.setItem('port_v43_txs', JSON.stringify(transactions));
  closeModal('modalManage');
  render();
}

function deleteSingleTx(id) {
  if (!confirm('¿Eliminar movimiento?')) return;
  transactions = transactions.filter(t => t.id !== id);
  localStorage.setItem('port_v43_txs', JSON.stringify(transactions));
  render();
  if (mainTab === 'history') renderHistory();
  if (mainTab === 'metrics') renderMetricsAdvanced();
  if (mainTab === 'dividends') renderDividendsTable();
}

function deleteEntireGroup() {
  if (!confirm(`¿Eliminar toda la posición de ${managingSymbol}?`)) return;
  transactions = transactions.filter(t => t.symbol !== managingSymbol);
  localStorage.setItem('port_v43_txs', JSON.stringify(transactions));
  closeModal('modalManage');
  closeModal('modalEditYield');
  render();
}

function setCategory(cat) {
  currentCategory = cat;
  ['tabCrypto', 'tabCedear', 'tabAccion', 'tabYield'].forEach(t => document.getElementById(t).classList.remove('active'));
  if (cat === 'CRYPTO') document.getElementById('tabCrypto').classList.add('active');
  if (cat === 'CEDEAR') document.getElementById('tabCedear').classList.add('active');
  if (cat === 'ACCION') document.getElementById('tabAccion').classList.add('active');
  if (cat === 'YIELD') document.getElementById('tabYield').classList.add('active');

  document.getElementById('boxStandard').style.display = cat === 'YIELD' ? 'none' : 'block';
  document.getElementById('boxYield').style.display = cat === 'YIELD' ? 'block' : 'none';
  document.getElementById('symbol').value = '';
  selectedAsset = null;
  updateFormLabels();
}

function updateFormLabels() {
  const isArs = document.getElementById('currency').value === 'ARS';
  const currSym = isArs ? 'ARS ($)' : 'USD ($)';
  const sym = document.getElementById('symbol').value.toUpperCase().trim();
  const isStable = currentCategory === 'CRYPTO' && (sym === 'USDT' || sym === 'USDC' || sym === 'DAI');

  if (currentCategory === 'CRYPTO') {
    document.getElementById('symbol').placeholder = 'Buscar Ticker (BTC, ETH, USDT)...';
    if (isStable) {
        document.getElementById('inputAmount').placeholder = `Cantidad de ${sym}`;
        document.getElementById('priceFieldWrapper').style.display = 'none';
    } else {
        document.getElementById('inputAmount').placeholder = 'Cantidad de monedas';
        document.getElementById('inputPrice').placeholder = `Precio unitario (${currSym})`;
        document.getElementById('priceFieldWrapper').style.display = 'block';
    }
  } else if (currentCategory === 'YIELD') {
    document.getElementById('symbol').placeholder = 'Nombre (MercadoPago, PlazoFijo Galicia)...';
    document.getElementById('inputYieldCapital').placeholder = `Capital Invertido (${currSym})`;
    document.getElementById('priceFieldWrapper').style.display = 'none';
  } else {
    document.getElementById('symbol').placeholder = 'Buscar Ticker (MELI, AAPL, GGAL, AL30, YM34O)...';
    document.getElementById('inputAmount').placeholder = 'Cantidad de títulos / CEDEARs';
    document.getElementById('inputPrice').placeholder = `Precio unitario (${currSym})`;
    document.getElementById('priceFieldWrapper').style.display = 'block';
  }
}

async function fetchCCL() {
  try {
    const res = await fetch('https://dolarapi.com/v1/dolares/bolsa');
    const data = await res.json();
    if (data.compra) {
      cclRate = (data.compra + data.venta) / 2;
      document.getElementById('mepRate').innerText = `MEP $${cclRate.toLocaleString('es-AR', {maximumFractionDigits:0})}`;
    }
  } catch(e) {}
}

async function handleSearch() {
  const q = document.getElementById('symbol').value.trim().toUpperCase();
  const drop = document.getElementById('dropdown');
  drop.innerHTML = '';
  updateFormLabels();
  
  if (currentCategory === 'YIELD' || q.length < 1) { 
    drop.style.display = 'none'; 
    return; 
  }

  let matches = [];
  if (currentCategory === 'CEDEAR') {
    matches = Object.keys(CEDEAR_MAP).filter(k => k.includes(q) || CEDEAR_MAP[k].name.toUpperCase().includes(q))
      .map(k => ({ symbol: k, name: CEDEAR_MAP[k].name, ratio: CEDEAR_MAP[k].ratio, type: 'CEDEAR' }));
  } else if (currentCategory === 'ACCION') {
    matches = Object.keys(ACCIONES_LOCALES).filter(k => k.includes(q) || ACCIONES_LOCALES[k].name.toUpperCase().includes(q))
      .map(k => ({ symbol: k, name: ACCIONES_LOCALES[k].name, ratio: 1, type: 'ACCION' }));
  } else {
    const TOP_CRYPTOS = [
      { symbol: 'BTC', name: 'Bitcoin', ratio: 1, type: 'CRYPTO' },
      { symbol: 'ETH', name: 'Ethereum', ratio: 1, type: 'CRYPTO' },
      { symbol: 'USDT', name: 'Tether USD', ratio: 1, type: 'CRYPTO' },
      { symbol: 'USDC', name: 'USD Coin', ratio: 1, type: 'CRYPTO' },
      { symbol: 'SOL', name: 'Solana', ratio: 1, type: 'CRYPTO' },
      { symbol: 'BNB', name: 'Binance Coin', ratio: 1, type: 'CRYPTO' }
    ];
    matches = TOP_CRYPTOS.filter(x => x.symbol.startsWith(q) || x.name.toUpperCase().includes(q));
  }

  if (matches.length === 0) { drop.style.display = 'none'; return; }
  
  matches.forEach(item => {
    const div = document.createElement('div');
    div.style.padding = '10px 14px';
    div.style.cursor = 'pointer';
    div.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
    div.innerHTML = `<b>${item.symbol}</b> <span style="color:#717d96">| ${item.name}${item.ratio > 1 ? ` (1:${item.ratio})` : ''}</span>`;
    div.onclick = () => {
      document.getElementById('symbol').value = item.symbol;
      selectedAsset = item;
      updateFormLabels(); 
      drop.style.display = 'none';
    };
    drop.appendChild(div);
  });
  drop.style.display = 'block';
}

function saveAsset() {
  const symbol = document.getElementById('symbol').value.toUpperCase().trim();
  const date = document.getElementById('tradeDate').value || new Date().toISOString().slice(0, 10);
  const curr = document.getElementById('currency').value;
  const broker = document.getElementById('brokerSelect').value || customBrokers[0] || 'BullMarket';

  if (!symbol) return;

  const isStable = currentCategory === 'CRYPTO' && (symbol === 'USDT' || symbol === 'USDC' || symbol === 'DAI');
  let units = 0;
  let priceUSD = 0;
  let ratio = selectedAsset ? selectedAsset.ratio : (CEDEAR_MAP[symbol]?.ratio || 1);

  if (currentCategory === 'YIELD') {
    const capital = parseFloat(document.getElementById('inputYieldCapital').value);
    if (isNaN(capital) || capital <= 0) return;
    units = curr === 'ARS' ? (capital / cclRate) : capital;
    priceUSD = 1;
  } else {
    const valAmount = parseFloat(document.getElementById('inputAmount').value);
    let valPrice = isStable ? (curr === 'ARS' ? cclRate : 1) : parseFloat(document.getElementById('inputPrice').value);
    if (isNaN(valAmount) || isNaN(valPrice) || valAmount <= 0 || valPrice <= 0) return;
    units = valAmount;
    priceUSD = isStable ? 1 : (curr === 'ARS' ? (valPrice / cclRate) : valPrice);
  }

  transactions.push({
    id: Date.now(),
    side: 'BUY',
    symbol,
    broker,
    type: currentCategory,
    units,
    priceUSD,
    date,
    ratio
  });

  localStorage.setItem('port_v43_txs', JSON.stringify(transactions));
  closeModal('modalBuy');
  render();
  updateLivePrices();
}

function getConsolidatedHoldings() {
  const sorted = [...transactions].sort((a,b) => new Date(a.date) - new Date(b.date));
  const holdings = {};

  sorted.forEach(t => {
    if (!holdings[t.symbol]) {
      holdings[t.symbol] = {
        symbol: t.symbol,
        type: t.type,
        broker: t.broker || 'Custodia Principal',
        units: 0,
        totalCostUSD: 0,
        ratio: t.ratio || 1,
        brokerBuys: {},
        txs: []
      };
    }
    const h = holdings[t.symbol];
    h.txs.push(t);
    if (t.ratio) h.ratio = t.ratio;

    if (!t.side || t.side === 'BUY') {
      h.units += t.units;
      h.totalCostUSD += (t.units * t.priceUSD);
      const b = t.broker || 'Custodia Principal';
      h.brokerBuys[b] = (h.brokerBuys[b] || 0) + t.units;
    } else if (t.side === 'SELL') {
      const avgCost = h.units > 0 ? (h.totalCostUSD / h.units) : 0;
      const soldUnits = Math.min(t.units, h.units);
      h.units -= soldUnits;
      h.totalCostUSD -= (soldUnits * avgCost);
    }
  });

  let list = Object.values(holdings).filter(h => h.units > 0.000001 || (h.type === 'YIELD' && h.totalCostUSD > 0.01)).map(h => {
    let currentVal = 0;
    let avgPrice = h.totalCostUSD / (h.units || 1);
    let currentPrice = livePrices[h.symbol] || avgPrice;

    if (h.type === 'YIELD') {
      currentVal = livePrices[h.symbol] !== undefined ? livePrices[h.symbol] : h.totalCostUSD;
      currentPrice = h.totalCostUSD > 0 ? (currentVal / h.totalCostUSD) : 1;
    } else {
      currentVal = h.units * currentPrice;
    }

    const pnl = currentVal - h.totalCostUSD;
    const pnlPct = h.totalCostUSD > 0 ? (pnl / h.totalCostUSD) * 100 : 0;
    const realShares = (h.units / (h.ratio || 1));
    
    let companyName = h.symbol;
    if (CEDEAR_MAP[h.symbol]) companyName = CEDEAR_MAP[h.symbol].name;
    else if (ACCIONES_LOCALES[h.symbol]) companyName = ACCIONES_LOCALES[h.symbol].name;
    else if (h.type === 'YIELD') companyName = h.symbol.replace('_', ' ');

    // Reparto por broker a prorrata de lo comprado en cada uno (si hubo ventas parciales,
    // no sabemos de qué broker salieron, así que se descuentan proporcionalmente entre todos).
    const grossBought = Object.values(h.brokerBuys).reduce((a, b) => a + b, 0);
    const brokerBreakdown = Object.entries(h.brokerBuys)
      .map(([broker, boughtUnits]) => ({
        broker,
        units: grossBought > 0 ? h.units * (boughtUnits / grossBought) : 0
      }))
      .filter(b => b.units > 0.000001)
      .sort((a, b) => b.units - a.units);

    return { ...h, companyName, avgPrice, currentPrice, currentVal, pnl, pnlPct, realShares, brokerBreakdown };
  });

  if (activeCategoryFilter !== 'ALL') {
    list = list.filter(h => h.type === activeCategoryFilter);
  }

  const sortBy = document.getElementById('holdingsSortBy')?.value || 'VAL_DESC';
  if (sortBy === 'VAL_DESC') list.sort((a,b) => b.currentVal - a.currentVal);
  else if (sortBy === 'PNL_DESC') list.sort((a,b) => b.pnl - a.pnl);
  else if (sortBy === 'ROI_DESC') list.sort((a,b) => b.pnlPct - a.pnlPct);
  else if (sortBy === 'ROI_ASC') list.sort((a,b) => a.pnlPct - b.pnlPct);
  else if (sortBy === 'ALPHA') list.sort((a,b) => a.symbol.localeCompare(b.symbol));

  return list;
}

async function fetchArsQuoteMap() {
  // data912.com espeja cotizaciones de ByMA en tiempo real y permite fetch directo desde el
  // browser (CORS abierto), sin depender de un proxy de terceros. Los tickers coinciden 1:1
  // con los usados en CEDEAR_MAP / ACCIONES_LOCALES (sin sufijo .BA).
  const endpoints = ['arg_cedears', 'arg_stocks', 'arg_bonds'];
  const map = {};
  await Promise.all(endpoints.map(async (ep) => {
    try {
      const r = await fetch(`https://data912.com/live/${ep}`);
      const list = await r.json();
      list.forEach(q => {
        if (q.symbol && q.c) map[q.symbol] = { price: q.c, pct: q.pct_change || 0 };
      });
    } catch (e) {}
  }));
  return map;
}

async function updateLivePrices() {
  const uniqueSymbols = [...new Set(transactions.map(t => t.symbol))];
  const symbolType = {};
  transactions.forEach(t => { symbolType[t.symbol] = t.type; });

  const arsQuotes = await fetchArsQuoteMap();

  await Promise.all(uniqueSymbols.map(async (symbol) => {
    const type = symbolType[symbol];
    if (type === 'CRYPTO') {
      if (symbol === 'USDT' || symbol === 'USDC' || symbol === 'DAI') {
        livePrices[symbol] = 1;
        change24hMap[symbol] = 0;
        return;
      }
      try {
        const r = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}USDT`);
        const d = await r.json();
        if (d.lastPrice) {
          livePrices[symbol] = parseFloat(d.lastPrice);
          change24hMap[symbol] = parseFloat(d.priceChangePercent);
          if (symbol === 'BTC') btcPriceUSD = livePrices['BTC'];
        }
      } catch (e) {}
    } else if (type === 'CEDEAR' || type === 'ACCION') {
      const quote = arsQuotes[symbol];
      if (quote && cclRate > 0) {
        livePrices[symbol] = quote.price / cclRate;
        change24hMap[symbol] = quote.pct;
      }
    }
  }));

  localStorage.setItem('port_v43_prices', JSON.stringify(livePrices));
  localStorage.setItem('port_v43_24h', JSON.stringify(change24hMap));
  render();
}

function updateKpiTrafficLight(boxId, tagId, currentVal, costVal) {
  const tag = document.getElementById(tagId);
  if (!tag) return;
  tag.classList.remove('pos', 'neg', 'neu');

  if (costVal <= 0.01 && currentVal <= 0.01) {
    tag.classList.add('neu');
    tag.innerText = '0.0%';
    return;
  }

  const pnl = currentVal - costVal;
  const pnlPct = costVal > 0 ? (pnl / costVal) * 100 : 0;
  const pctString = pnlPct.toLocaleString('en-US', {maximumFractionDigits: 1});

  if (pnl > 0.01) {
    tag.classList.add('pos');
    tag.innerText = `+${pctString}%`;
  } else if (pnl < -0.01) {
    tag.classList.add('neg');
    tag.innerText = `${pctString}%`;
  } else {
    tag.classList.add('neu');
    tag.innerText = '0.0%';
  }
}

function populateMetricsFilter() {
  const select = document.getElementById('metricsAssetFilter');
  const currentSelected = select.value;
  select.innerHTML = '<option value="ALL">Portafolio Global Consolidado</option>';

  const holdings = getConsolidatedHoldings();
  holdings.forEach(h => {
    const opt = document.createElement('option');
    opt.value = h.symbol;
    opt.innerText = `${h.symbol} - ${h.companyName}`;
    select.appendChild(opt);
  });

  if ([...select.options].some(o => o.value === currentSelected)) select.value = currentSelected;
}

function renderDividendsTable() {
  const holdings = getConsolidatedHoldings();
  const calContainer = document.getElementById('monthlyCalendarContainer');
  const tableContainer = document.getElementById('dividendsTableContainer');
  const divHoldings = holdings.filter(h => !!DIVIDEND_SCHEDULE[h.symbol]);

  if (divHoldings.length === 0) {
    calContainer.innerHTML = '';
    tableContainer.innerHTML = '<div style="color:var(--muted); text-align:center; padding:30px 0; font-size:0.85rem;">No tenés activos con dividendos registrados.</div>';
    return;
  }

  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const monthlyPayouts = Array(12).fill(0).map(() => ({ totalUSD: 0, tickers: [] }));

  divHoldings.forEach(h => {
    const info = DIVIDEND_SCHEDULE[h.symbol];
    let payoutEstUSD = (h.realShares * info.estDpa);

    if (info.currency === 'ARS') {
      payoutEstUSD = payoutEstUSD / cclRate;
    }

    info.monthNums.forEach(mNum => {
      const mIdx = mNum - 1;
      monthlyPayouts[mIdx].totalUSD += payoutEstUSD;
      monthlyPayouts[mIdx].tickers.push(h.symbol);
    });
  });

  let calHtml = '';
  monthNames.forEach((name, i) => {
    const data = monthlyPayouts[i];
    const hasPay = data.totalUSD > 0;
    calHtml += `
      <div class="cal-month-card ${hasPay ? 'has-payout' : ''}">
        <div class="cal-month-head">
          <span class="cal-month-name">${name.slice(0,3)}</span>
          <span class="cal-month-total">${hasPay ? formatValue(data.totalUSD) : '—'}</span>
        </div>
        <div class="cal-tickers-list">
          ${hasPay ? data.tickers.map(t => `<span class="cal-ticker-badge">${t}</span>`).join('') : '<span style="font-size:0.62rem; color:var(--muted)">Sin pagos</span>'}
        </div>
      </div>
    `;
  });
  calContainer.innerHTML = calHtml;

  let html = `
    <table class="div-table">
      <thead>
        <tr>
          <th>Activo / Empresa</th>
          <th>Meses de Pago</th>
          <th>Frecuencia</th>
          <th>Moneda</th>
          <th>Renta Est. / Pago</th>
        </tr>
      </thead>
      <tbody>
  `;

  divHoldings.forEach(h => {
    const info = DIVIDEND_SCHEDULE[h.symbol];
    let estTotalText = '';
    
    if (info.currency === 'ARS') {
      estTotalText = '$' + (h.realShares * info.estDpa).toLocaleString('es-AR', {minimumFractionDigits:2}) + ' ARS';
    } else {
      estTotalText = '$' + (h.realShares * info.estDpa).toLocaleString('en-US', {minimumFractionDigits:2}) + ' USD';
    }

    html += `
      <tr>
        <td>
          <b>${h.symbol}</b> · <span style="color:#94a3b8">${info.company}</span>
          <div style="font-size:0.7rem; color:var(--muted)">Tenencia: ${h.units < 1 ? h.units.toFixed(4) : h.units.toFixed(2)} un. (${h.realShares.toFixed(2)} Acc/Tít.)</div>
        </td>
        <td><b>${info.months}</b></td>
        <td><span style="color:var(--accent); font-weight:700;">${info.freq}</span></td>
        <td><span class="badge-tag" style="background:rgba(245,158,11,0.15); color:var(--gold);">${info.currency}</span></td>
        <td><b style="color:var(--green)">${estTotalText}</b></td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  tableContainer.innerHTML = html;
}

function renderMetricsAdvanced() {
  const filter = document.getElementById('metricsAssetFilter').value || 'ALL';
  const holdings = getConsolidatedHoldings();
  const now = new Date();
  
  let filteredTxs = transactions.filter(t => t.date && !isNaN(new Date(t.date).getTime()));
  if (filter !== 'ALL') filteredTxs = filteredTxs.filter(t => t.symbol === filter);

  if (selectedTimeframeDays > 0) {
    const cutoff = new Date(now.getTime() - (selectedTimeframeDays * 24 * 60 * 60 * 1000));
    filteredTxs = filteredTxs.filter(t => new Date(t.date) >= cutoff);
  }

  filteredTxs.sort((a,b) => new Date(a.date) - new Date(b.date));

  let totalInjected = 0;
  let peakCapital = 0;
  let realizedPnL = 0;
  let currentValTotal = 0;
  let costBasisTotal = 0;

  if (filter === 'ALL') {
    holdings.forEach(h => { currentValTotal += h.currentVal; costBasisTotal += h.totalCostUSD; });
  } else {
    const h = holdings.find(i => i.symbol === filter);
    if (h) { currentValTotal = h.currentVal; costBasisTotal = h.totalCostUSD; }
  }

  const trackMap = {};
  filteredTxs.forEach(t => {
    if (!trackMap[t.symbol]) trackMap[t.symbol] = { units: 0, cost: 0 };
    const m = trackMap[t.symbol];

    if (!t.side || t.side === 'BUY') {
      m.units += t.units;
      m.cost += (t.units * t.priceUSD);
      totalInjected += (t.units * t.priceUSD);
    } else if (t.side === 'SELL') {
      const avg = m.units > 0 ? (m.cost / m.units) : 0;
      const sold = Math.min(t.units, m.units);
      realizedPnL += (sold * t.priceUSD) - (sold * avg);
      m.units -= sold;
      m.cost -= (sold * avg);
      totalInjected -= (sold * avg);
    }
    peakCapital = Math.max(peakCapital, totalInjected);
  });

  const netUnrealized = currentValTotal - costBasisTotal;
  const totalROI = costBasisTotal > 0 ? ((netUnrealized + realizedPnL) / costBasisTotal) * 100 : 0;

  document.getElementById('metricROI').innerText = `${totalROI >= 0 ? '+' : ''}${totalROI.toLocaleString('en-US', {maximumFractionDigits:2})}%`;
  document.getElementById('metricROI').style.color = totalROI >= 0 ? 'var(--green)' : 'var(--red)';
  document.getElementById('metricRealized').innerText = formatValue(realizedPnL);
  document.getElementById('metricInjections').innerText = formatValue(costBasisTotal);
  document.getElementById('metricPeakCapital').innerText = formatValue(peakCapital);

  const ctx1 = document.getElementById('chartInjectionVsVal');
  if (ctx1) {
    if (chartInjectionVsValInstance) chartInjectionVsValInstance.destroy();

    const dateMap = {};
    let runningCost = 0;

    filteredTxs.forEach(t => {
      runningCost += (t.side === 'SELL' ? -1 : 1) * (t.units * t.priceUSD);
      const currentP = livePrices[t.symbol] || t.priceUSD;
      const currVal = (runningCost / (t.priceUSD || 1)) * currentP;
      dateMap[t.date] = { cost: Math.max(0, runningCost), val: Math.max(0, currVal) };
    });

    const todayStr = new Date().toISOString().slice(0, 10);
    if(!dateMap[todayStr]) {
      dateMap[todayStr] = { cost: costBasisTotal, val: currentValTotal };
    }

    const labels1 = Object.keys(dateMap).sort();
    const injectedPoints = labels1.map(d => dateMap[d].cost);
    const marketValPoints = labels1.map(d => dateMap[d].val);

    chartInjectionVsValInstance = new Chart(ctx1.getContext('2d'), {
      type: 'line',
      data: {
        labels: labels1,
        datasets: [
          { 
            label: 'Inyección (Costo)', 
            data: injectedPoints, 
            borderColor: 'rgba(148, 163, 184, 0.8)', 
            borderDash: [5, 5], 
            pointRadius: 3, 
            fill: false,
            stepped: 'before'
          },
          { 
            label: 'Valuación Real', 
            data: marketValPoints, 
            borderColor: '#38bdf8', 
            backgroundColor: 'rgba(56, 189, 248, 0.08)', 
            pointRadius: 4, 
            fill: true, 
            tension: 0.3 
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { display: false }, ticks: { color: '#94a3b8', font: { size: 9 }, maxTicksLimit: 6 } },
          y: { 
            grid: { color: 'rgba(255,255,255,0.04)' }, 
            ticks: { 
              color: '#94a3b8', font: { size: 9 }, 
              callback: (v) => formatValue(v)
            } 
          }
        },
        plugins: { 
          legend: { position: 'top', labels: { boxWidth: 10, color: '#f8fafc', font: { size: 11, weight: 600 } } },
          tooltip: {
            backgroundColor: '#0d121c',
            titleColor: '#f8fafc',
            bodyColor: '#cbd5e1',
            borderColor: 'rgba(255,255,255,0.15)',
            borderWidth: 1,
            padding: 10
          }
        }
      }
    });
  }

  const ctx2 = document.getElementById('chartRoiRanking');
  if (ctx2) {
    if (chartRoiRankingInstance) chartRoiRankingInstance.destroy();
    const sortedHoldings = [...holdings].sort((a,b) => b.pnlPct - a.pnlPct);
    const labels2 = sortedHoldings.map(h => h.symbol);
    const roiData2 = sortedHoldings.map(h => h.pnlPct);
    const bgColors2 = sortedHoldings.map(h => h.pnlPct >= 0 ? 'rgba(48, 209, 88, 0.75)' : 'rgba(255, 69, 58, 0.75)');

    chartRoiRankingInstance = new Chart(ctx2.getContext('2d'), {
      type: 'bar',
      data: { labels: labels2, datasets: [{ data: roiData2, backgroundColor: bgColors2, borderRadius: 6 }] },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#94a3b8', font: { size: 9 }, callback: (v) => `${v}%` } },
          y: { grid: { display: false }, ticks: { color: '#f8fafc', font: { size: 9, weight: 700 } } }
        },
        plugins: { 
          legend: { display: false },
          tooltip: {
            backgroundColor: '#0d121c',
            titleColor: '#f8fafc',
            bodyColor: '#cbd5e1',
            borderColor: 'rgba(255,255,255,0.15)',
            borderWidth: 1
          }
        }
      }
    });
  }
}

function render() {
  const holdings = getConsolidatedHoldings();
  const list = document.getElementById('holdingsView');
  list.innerHTML = '';

  const allHoldings = (function() {
    const sorted = [...transactions].sort((a,b) => new Date(a.date) - new Date(b.date));
    const m = {};
    sorted.forEach(t => {
      if (!m[t.symbol]) m[t.symbol] = { symbol: t.symbol, type: t.type, units: 0, totalCostUSD: 0, ratio: t.ratio || 1 };
      if (!t.side || t.side === 'BUY') { m[t.symbol].units += t.units; m[t.symbol].totalCostUSD += (t.units * t.priceUSD); }
      else if (t.side === 'SELL') { const avg = m[t.symbol].units > 0 ? (m[t.symbol].totalCostUSD / m[t.symbol].units) : 0; const s = Math.min(t.units, m[t.symbol].units); m[t.symbol].units -= s; m[t.symbol].totalCostUSD -= (s * avg); }
    });
    return Object.values(m).filter(h => h.units > 0.000001 || (h.type === 'YIELD' && h.totalCostUSD > 0.01)).map(h => {
      let val = h.type === 'YIELD' ? (livePrices[h.symbol] !== undefined ? livePrices[h.symbol] : h.totalCostUSD) : (h.units * (livePrices[h.symbol] || (h.totalCostUSD / (h.units || 1))));
      return { ...h, currentVal: val };
    });
  })();

  let totalWorth = 0;
  let totalCost = 0;
  let catTotals = { CEDEAR: 0, CRYPTO: 0, ACCION: 0, YIELD: 0 };
  let catCosts = { CEDEAR: 0, CRYPTO: 0, ACCION: 0, YIELD: 0 };

  allHoldings.forEach(h => {
    totalWorth += h.currentVal;
    totalCost += h.totalCostUSD;
    if (catTotals[h.type] !== undefined) {
      catTotals[h.type] += h.currentVal;
      catCosts[h.type] += h.totalCostUSD;
    }
  });

  if (holdings.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📭</div>
        <div class="empty-state-title">Sin posiciones</div>
        <div class="empty-state-sub">No hay activos registrados en esta categoría todavía.</div>
      </div>
    `;
  }

  holdings.forEach(h => {
    const isPos = h.pnl >= 0;
    let badgeInfo = '';
    let subDesc = '';

    const brokerBadge = h.brokerBreakdown.length > 1
      ? `<span class="badge-broker badge-clickable" onclick="event.stopPropagation(); openBrokerModal('${h.symbol}')" title="Ver desglose por broker">${h.brokerBreakdown.length} brokers ⓘ</span>`
      : `<span class="badge-broker">${h.broker}</span>`;

    if (h.type === 'YIELD') {
      badgeInfo = `<span class="badge-tag" style="background:rgba(191,90,242,0.15); color:var(--purple)">Fondo / Renta</span>`;
      subDesc = `Invertido: ${formatValue(h.totalCostUSD)} · ${h.broker}`;
    } else {
      const ratioTag = h.type === 'CEDEAR' ? `1:${h.ratio}` : '1:1';
      const ratioBadge = h.type === 'CEDEAR'
        ? `<span class="badge-tag badge-clickable" onclick="event.stopPropagation(); openParityModal('${h.symbol}')" title="Ver detalle de paridad">${ratioTag} ⓘ</span>`
        : `<span class="badge-tag">${ratioTag}</span>`;
      badgeInfo = `${ratioBadge} ${brokerBadge}`;
      const realAccInfo = h.type === 'CEDEAR' ? `· ${h.realShares.toFixed(2)} Acc. Reales` : '';
      subDesc = `${h.units < 1 ? h.units.toFixed(6) : h.units.toFixed(2)} un. @ ${formatValue(h.avgPrice)} PPP ${realAccInfo}`;
    }

    const iconHTML = buildIconHTML(h);

    const pct24 = change24hMap[h.symbol] !== undefined ? change24hMap[h.symbol] : 0;
    const diff24USD = (h.currentVal * pct24) / 100;
    const is24Pos = pct24 > 0.001;
    const is24Neg = pct24 < -0.001;
    const badge24Class = is24Pos ? 'pos' : (is24Neg ? 'neg' : 'neu');
    const badge24Text = `${is24Pos ? '+' : ''}${pct24.toFixed(2)}%`;
    const diff24Text = `${is24Pos ? '+' : ''}${formatValue(diff24USD)}`;

    const customGlow = ASSET_GLOW_COLORS[h.symbol] || 'transparent';

    const row = document.createElement('div');
    row.className = `h-item cat-${h.type.toLowerCase()}`;
    row.style.background = `linear-gradient(135deg, ${customGlow} 0%, var(--card-bg) 60%)`;

    row.innerHTML = `
      <div class="h-item-watermark">${h.symbol}</div>

      <div class="h-left">
        ${iconHTML}
        <div class="h-titles">
          <div class="h-name-row">
            <span class="h-ticker">${h.symbol}</span>
            ${badgeInfo}
          </div>
          <div class="h-company">${h.companyName}</div>
          <div class="h-sub">${subDesc}</div>
        </div>
      </div>

      <div class="h-center-24h">
        <span class="h-24h-title">Hoy</span>
        <div class="h-badge-24h ${badge24Class}">${badge24Text}</div>
        <span class="h-24h-val" style="color: ${is24Pos ? 'var(--green)' : (is24Neg ? 'var(--red)' : 'var(--text-dim)')};">
          ${diff24Text}
        </span>
      </div>

      <div class="h-right">
        <div>
          <div class="h-val">${formatValue(h.currentVal)}</div>
          <div class="h-pnl" style="color:${isPos ? 'var(--green)' : 'var(--red)'}">
            ${isPos ? '+' : ''}${formatValue(h.pnl)} (${isPos ? '+' : ''}${h.pnlPct.toFixed(2)}%)
          </div>
        </div>
        ${h.type === 'YIELD'
          ? `<button class="btn-edit" title="Editar Saldo" onclick="openEditYieldModal('${h.symbol}')">✏</button>` 
          : `<button class="btn-trade" title="Operar / Vender" onclick="openManageModal('${h.symbol}')">⇄</button>`}
      </div>
    `;
    list.appendChild(row);
  });

  const unrealizedPnL = totalWorth - totalCost;
  const unrealizedPct = totalCost > 0 ? (unrealizedPnL / totalCost) * 100 : 0;
  const isUnrealPos = unrealizedPnL >= 0;

  document.getElementById('totalValue').innerText = formatValue(totalWorth);
  const badge = document.getElementById('badgeUnrealized');
  badge.className = `pill ${isUnrealPos ? 'pos' : 'neg'}`;
  badge.innerText = `${isUnrealPos ? '+' : ''}${formatValue(unrealizedPnL)} (${isUnrealPos ? '+' : ''}${unrealizedPct.toFixed(2)}%)`;

  document.getElementById('badgeTotalCost').innerText = `Invertido: ${formatValue(totalCost)}`;

  document.getElementById('statCedears').innerText = formatValue(catTotals.CEDEAR);
  document.getElementById('statCrypto').innerText = formatValue(catTotals.CRYPTO);
  document.getElementById('statAcciones').innerText = formatValue(catTotals.ACCION);
  document.getElementById('statYield').innerText = formatValue(catTotals.YIELD);

  document.getElementById('costCedear').innerText = `Inv: ${formatValue(catCosts.CEDEAR)}`;
  document.getElementById('costCrypto').innerText = `Inv: ${formatValue(catCosts.CRYPTO)}`;
  document.getElementById('costAccion').innerText = `Inv: ${formatValue(catCosts.ACCION)}`;
  document.getElementById('costYield').innerText = `Inv: ${formatValue(catCosts.YIELD)}`;

  updateKpiTrafficLight('kpiBoxCedear', 'tagCedear', catTotals.CEDEAR, catCosts.CEDEAR);
  updateKpiTrafficLight('kpiBoxCrypto', 'tagCrypto', catTotals.CRYPTO, catCosts.CRYPTO);
  updateKpiTrafficLight('kpiBoxAccion', 'tagAccion', catTotals.ACCION, catCosts.ACCION);
  updateKpiTrafficLight('kpiBoxYield', 'tagYield', catTotals.YIELD, catCosts.YIELD);

  if (mainTab === 'metrics') {
    renderPie(allHoldings);
    renderGrowthChart();
    renderMetricsAdvanced();
  }
}

function renderHistory() {
  const list = document.getElementById('historyView');
  list.innerHTML = '';

  if (transactions.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📖</div>
        <div class="empty-state-title">Sin movimientos</div>
        <div class="empty-state-sub">Todavía no registraste ninguna compra, venta o alta.</div>
      </div>
    `;
    return;
  }

  const sorted = [...transactions].sort((a,b) => new Date(b.date) - new Date(a.date) || b.id - a.id);
  const companyNameOf = (t) => (CEDEAR_MAP[t.symbol]?.name) || (ACCIONES_LOCALES[t.symbol]?.name) || (t.type === 'YIELD' ? t.symbol.replace('_', ' ') : t.symbol);

  sorted.forEach(t => {
    const isSell = t.side === 'SELL';
    const sideText = isSell ? 'Venta / Rescate' : 'Compra / Alta';
    const totalUSD = t.units * t.priceUSD;
    const detailText = `${t.units < 1 ? t.units.toFixed(6) : t.units.toFixed(2)} un. @ ${formatValue(t.priceUSD)} PPP`;

    const item = document.createElement('div');
    item.className = `h-item ledger-item cat-${t.type.toLowerCase()}`;
    item.innerHTML = `
      <div class="h-left">
        ${buildIconHTML(t)}
        <div class="h-titles">
          <div class="h-name-row">
            <span class="h-ticker" style="font-size:1.05rem;">${t.symbol}</span>
            <span class="badge-tag" style="background:${isSell ? 'var(--red-glow)' : 'var(--green-glow)'}; color:${isSell ? 'var(--red)' : 'var(--green)'}">${sideText}</span>
          </div>
          <div class="h-company">${companyNameOf(t)}</div>
          <div class="h-sub">${t.date} · ${detailText} · ${t.broker || 'Broker'}</div>
        </div>
      </div>

      <div style="display:flex; align-items:center; gap:12px;">
        <div class="h-val" style="font-size:1.05rem;">${formatValue(totalUSD)}</div>
        <button class="btn-del-mini" title="Eliminar registro" onclick="deleteSingleTx(${t.id})">✕</button>
      </div>
    `;
    list.appendChild(item);
  });
}

const CATEGORY_LABELS = { CEDEAR: 'CEDEARs', CRYPTO: 'Cripto', ACCION: 'Acciones', YIELD: 'Liquidez' };
const PIE_SYMBOL_PALETTE = ['#38bdf8', '#ffd60a', '#30d158', '#bf5af2', '#f472b6', '#fb923c', '#22d3ee', '#a3e635', '#818cf8', '#f87171'];

function renderPie(holdingsData) {
  const ctx = document.getElementById('chartPie');
  if (!ctx) return;
  if (chartPieInstance) chartPieInstance.destroy();

  const isFiltered = activeCategoryFilter !== 'ALL';
  const pieMap = {};
  let colorMap = {};
  let total = 0;

  if (isFiltered) {
    // Con una categoría seleccionada, mostrar la composición por activo dentro de esa categoría
    // (un donut de una sola categoría contra el total sería una sola porción, poco útil).
    holdingsData.filter(h => h.type === activeCategoryFilter).forEach((h, i) => {
      pieMap[h.symbol] = h.currentVal;
      total += h.currentVal;
      colorMap[h.symbol] = PIE_SYMBOL_PALETTE[i % PIE_SYMBOL_PALETTE.length];
    });
    const titleEl = document.getElementById('pieChartTitle');
    if (titleEl) titleEl.innerText = `🍕 Composición de ${CATEGORY_LABELS[activeCategoryFilter] || activeCategoryFilter}`;
  } else {
    pieMap['CEDEARs'] = 0; pieMap['Cripto'] = 0; pieMap['Acciones'] = 0; pieMap['Liquidez'] = 0;
    colorMap = { 'CEDEARs': '#38bdf8', 'Cripto': '#ffd60a', 'Acciones': '#30d158', 'Liquidez': '#bf5af2' };
    holdingsData.forEach(h => {
      total += h.currentVal;
      if (h.type === 'CEDEAR') pieMap['CEDEARs'] += h.currentVal;
      else if (h.type === 'CRYPTO') pieMap['Cripto'] += h.currentVal;
      else if (h.type === 'ACCION') pieMap['Acciones'] += h.currentVal;
      else if (h.type === 'YIELD') pieMap['Liquidez'] += h.currentVal;
    });
    const titleEl = document.getElementById('pieChartTitle');
    if (titleEl) titleEl.innerText = `🍕 Composición de Cartera`;
  }

  const pieCenterVal = document.getElementById('pieCenterVal');
  if (pieCenterVal) {
    if (displayCurrency === 'ARS') {
      pieCenterVal.innerText = `$${(total * cclRate).toLocaleString('es-AR', { notation: 'compact', maximumFractionDigits: 1 })}`;
    } else if (displayCurrency === 'BTC') {
      pieCenterVal.innerText = `₿${(btcPriceUSD > 0 ? (total / btcPriceUSD) : 0).toFixed(4)}`;
    } else {
      pieCenterVal.innerText = `$${total.toLocaleString('en-US', { notation: 'compact', maximumFractionDigits: 1 })}`;
    }
  }

  const labels = Object.keys(pieMap).filter(k => pieMap[k] > 0);
  const data = labels.map(k => pieMap[k]);
  const backgroundColor = labels.map(k => colorMap[k] || '#38bdf8');
  if (labels.length === 0) return;

  chartPieInstance = new Chart(ctx.getContext('2d'), {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor,
        borderWidth: 2,
        borderColor: '#020408',
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '72%',
      plugins: {
        legend: { 
          position: 'right',
          labels: { 
            boxWidth: 12, color: '#f8fafc', font: { size: 12, weight: 700 }, padding: 14,
            generateLabels: (chart) => {
              const datasets = chart.data.datasets;
              return chart.data.labels.map((label, i) => {
                const val = datasets[0].data[i];
                const pct = total > 0 ? ((val / total) * 100).toFixed(1) : '0.0';
                return { text: `${label} (${pct}%)`, fillStyle: datasets[0].backgroundColor[i], hidden: false, index: i, fontColor: '#f8fafc' };
              });
            }
          } 
        },
        tooltip: {
          backgroundColor: '#0d121c',
          titleColor: '#f8fafc',
          bodyColor: '#cbd5e1',
          borderColor: 'rgba(255,255,255,0.15)',
          borderWidth: 1,
          padding: 12
        }
      },
      onResize: (chart) => positionPieCenterLabel(chart)
    }
  });

  positionPieCenterLabel(chartPieInstance);
}

function positionPieCenterLabel(chart) {
  const label = document.querySelector('.pie-center-label');
  const meta = chart && chart.getDatasetMeta(0);
  const arc = meta && meta.data && meta.data[0];
  if (!label || !arc) return;
  label.style.left = `${arc.x}px`;
  label.style.top = `${arc.y}px`;
}

function renderGrowthChart() {
  const ctx = document.getElementById('chartGrowth');
  if (!ctx) return;
  if (chartGrowthInstance) chartGrowthInstance.destroy();

  const validTxs = transactions.filter(t => t.date && !isNaN(new Date(t.date).getTime()));
  validTxs.sort((a,b) => new Date(a.date) - new Date(b.date));

  const dateMap = {};
  let runningCapital = 0;

  validTxs.forEach(t => {
    runningCapital += (t.side === 'SELL' ? -1 : 1) * (t.units * t.priceUSD);
    dateMap[t.date] = Math.max(0, runningCapital);
  });

  const todayStr = new Date().toISOString().slice(0, 10);
  if(!dateMap[todayStr]) dateMap[todayStr] = runningCapital;

  const labels = Object.keys(dateMap).sort();
  const dataPoints = labels.map(d => dateMap[d]);
  if (labels.length === 0) return;

  chartGrowthInstance = new Chart(ctx.getContext('2d'), {
    type: 'line',
    data: {
      labels,
      datasets: [{
        data: dataPoints,
        borderColor: '#38bdf8',
        backgroundColor: 'rgba(56, 189, 248, 0.05)',
        fill: true,
        stepped: 'before',
        pointRadius: 4,
        pointBackgroundColor: '#38bdf8'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { display: false }, ticks: { color: '#717d96', font: { size: 9 }, maxTicksLimit: 6 } },
        y: { 
          grid: { color: 'rgba(255,255,255,0.03)' }, 
          ticks: { 
            color: '#717d96', font: { size: 9 }, 
            callback: (v) => formatValue(v)
          } 
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0d121c',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          padding: 10
        }
      }
    }
  });
}

function exportCSV() {
  if (transactions.length === 0) { alert('No hay movimientos.'); return; }
  let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
  csvContent += "ID,Fecha,Tipo_Operacion,Ticker,Broker,Clase,Cantidad,Precio_USD,Total_USD,Total_ARS,Ratio\n";
  transactions.forEach(t => {
    const totalUSD = (t.units * t.priceUSD).toFixed(2);
    const totalARS = (totalUSD * cclRate).toFixed(2);
    const row = [t.id, t.date, t.side || 'BUY', t.symbol, `"${t.broker || 'Broker'}"`, t.type, t.units.toFixed(6), t.priceUSD.toFixed(2), totalUSD, totalARS, t.type === 'CEDEAR' ? `1:${t.ratio}` : '1:1'].join(",");
    csvContent += row + "\n";
  });
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `historial_contable_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportData() {
  const backupPayload = { version: "43.0", exportDate: new Date().toISOString(), theme: currentTheme, brokers: customBrokers, transactions: transactions };
  const blob = new Blob([JSON.stringify(backupPayload, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `portafolio_backup_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
}

function importData(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (evt) => {
    try {
      const parsed = JSON.parse(evt.target.result);
      if (Array.isArray(parsed)) transactions = parsed;
      else if (parsed && Array.isArray(parsed.transactions)) {
        transactions = parsed.transactions;
        if (Array.isArray(parsed.brokers)) customBrokers = parsed.brokers;
        if (parsed.theme) {
          currentTheme = parsed.theme;
          document.documentElement.setAttribute('data-theme', currentTheme);
          localStorage.setItem('port_theme_v43', currentTheme);
        }
      }
      localStorage.setItem('port_v43_txs', JSON.stringify(transactions));
      localStorage.setItem('port_brokers_v43', JSON.stringify(customBrokers));
      render();
      updateLivePrices();
      alert('¡Datos importados!');
    } catch (err) { alert('Formato inválido.'); }
  };
  reader.readAsText(file);
}

document.documentElement.setAttribute('data-theme', currentTheme);
populateBrokerSelects();
render();
fetchCCL().then(updateLivePrices);