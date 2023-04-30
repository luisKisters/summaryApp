import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/summary/EN';

export const Summary = () => {
    // const [wordCount, setWordCount] = useState(100);
    // const [summary, setSummary] = useState("");

    // const handleWordCountChange = (event) => {
    //     setWordCount(Number(event.target.value));
    // }

    // const handleFormSubmit = (event) => {
    //     event.preventDefault();

    //     axios.get('/csrf-token/')
    //         .then(response => {
    //             const csrftoken = response.data.csrfToken;
    //             axios.post(`${API_URL}/${wordCount}/`, {}, {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'X-CSRFToken': csrftoken
    //                 }
    //             })
    //                 .then(response => {
    //                     const summary = response;
    //                     setSummary(summary);
    //                 })
    //                 .catch(error => console.error(error));
    //         })
    //         .catch(error => console.error(error));
    // }
    const summary = { "author": "Filip De Mott", "heading": "Bitcoin could jump nearly 70% if the US defaulted on its debt, Standard Chartered analyst says", "date": "2023-04-29T12:30:06Z", "article_content": "bitcoin could jump nearli 70 us default standard charter jump tomain contentsearchaccountmenu icona vertic stack three evenli space horizont line insid logoth word insid market insid logoth word market insid search marketssearch icona magnifi glass indic click perform search 0 watchlist market stock indic commod cryptocurr currenc etf news calendar iconan icon shape calendar economicearn search marketssearch icona magnifi glass indic click perform search search icona magnifi glass indic click perform search market insid logoth word market insid close icontwo cross line form x indic way close interact dismiss notif marketsth word market bondsfundspremarketmarket moversdow jone liveyour portfoliostocksth word stock stock findermarket moversindex constituentsearn calendardividendsindicesth word indic market moversindex constituentsdow jone livesp 500 livenasdaq liveworld mapcommoditiesth word commod newscommod livegoldoilcoppercryptocurrenciesth word cryptocurr bitcoinethereumcryptocurr livecurrenciesth word currenc newscurr livecurr convertereurusdgbpusdu dollar indexetfsth word etf newsetf finderetf issuersnewsth word news watchlist facebook iconth letter f twitter icona styliz bird open mouth tweet linkedin iconth word youtub icona play button shape televis screen instagram icona styliz camera insid logoth word insid \u00a9 2023 insid inc finanzennet gmbh imprint right reserv registr use site constitut accept term serviceand privaci policydisclaimeraccessibilitycommerc polici advertis policiesmad nyc stock quot finanzennetclos icontwo cross line form x indic way close interact dismiss notif home chevron iconit indic expand section menu sometim previou next navig option news chevron iconit indic expand section menu sometim previou next navig option currenc bitcoin could jump nearli 70 us default debt standard charter analyst saysfilip de mott 20230429t125151z filip de mottsav articl icona bookmark facebook iconth letter f email iconan envelop indic abil send email share iconan curv arrow point right twitter icona styliz bird open mouth tweetingtwitt facebook iconth letter ffacebook email iconan envelop indic abil send emailemail link iconan imag chain link symobil websit link urlcopi link read app bitcoin photo getti imag redeem bitcoin could climb 20000 us default happen standard charter geoff kendrick saidnot everi crypto would act similarli behav like equiti told insiderso actual optim trade would probabl long bitcoin short ethereum sign newslett get insid scoop trader talk \u2014 deliv daili inbox loadingsometh loadingthank sign access favorit topic person feed your go download app email address click \u2018sign up\u2019 agre receiv market email insid well partner offer accept term servic privaci polici loom debt ceil crisi show sign resolut bond equiti market becom jitterybut investor fear histor default one asset could potenti rise situat bitcoindescrib us default lowprob highimpact event geoff kendrick head fx research standard charter said may caus bitcoin jump 20000 repres increas 68 current levelsh told insid that top cryptocurr market cap reput perform well period stress often seen safe especi decentr assetbut kendrick doesnt think bitcoin would ralli straight line event us default say probabl come bit lower day one day two week case bitcoin could dip 5000 initi jump 25000 estimatedand everi cryptocurr would follow bitcoin behavior ad other like ethereum trade like stock would like fall defaultso actual optim trade would probabl long bitcoin short ethereum sort mix would probabl good express kendrick saidif congress fail lift 314 trillion feder debt limit default could come sometim summer \u2014 event could caus seismic ruptur global market tuesday treasuri secretari janet yellen warn default would catastroph us economi spark mass unemploy payment failur higher rate perpetuitywith hous republican white hous still far deal rais debt ceil yield threemonth treasuri recent jump 22year high would matur around potenti default datemeanwhil bitcoin still recov massiv selloff began late 2021 continu much 2022 feder reserv embark aggress tighten cycl bitcoin ralli nearli 80 far 2023 recent near 30000 first republ bank woe reignit fear financi sector part kendrick alreadi bullish bitcoin say note monday could surg 100000 end 2024 due bank turmoil bitcoin halv expect end fed rate hike among thing though didnt mention risk us defaultwhil sourc uncertainti remain think pathway usd 100000 level becom clearer wrotecheck person financ insid pick best cryptocurr exchang read next mi exclusivebitcoincrypto currenc close icontwo cross line form x indic way close interact dismiss notif market viewnam price datevideorel indicesnam price chang currenc exchang ratesnamepric chang follow us see also indicesdow jonessp 500nasdaq 100nasdaq compositefts 100nikkei 225dax 40hang sengkospisp tsx composit indexasxu dollar indexstock indicesdow futuresdow jone market moverscommoditiesgold priceoil pricesilv pricecopp pricecotton priceh oil pricealuminum pricenatur ga pricerealtim commod pricescurrencieseuro dollarbitcoin priceeth usdcad usdpeso usdpound usdusd inrcurr converterexchang ratesstocksgoogl stockmeta stockamazon stocktesla stockdowstockpremarketstock market newsse explor categori \u00a9 2023 insid inc finanzennet gmbh imprint right reserv registr use site constitut accept term serviceand privaci policydisclaimeraccess statementcommerc policyadvertis policiesmad nyc stock quot finanzennet contact usmasthead privaci choic", "article_url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-us-default-debt-ceiling-crisis-ethereum-price-2023-4", "newspaper_name": "Business Insider", "summary": { "id": "chatcmpl-7B4ZPNpfvii9zI4Edd4rvT9dVrGPa", "object": "chat.completion", "created": 1682873531, "model": "gpt-3.5-turbo-0301", "usage": { "prompt_tokens": 1286, "completion_tokens": 119, "total_tokens": 1405 }, "choices": [{ "message": { "role": "assistant", "content": "Bitcoin could potentially jump nearly 70% if the US defaults on its debt, according to Standard Chartered analyst Geoff Kendrick. Kendrick said that in a low-probability, high-impact event like a US default, bitcoin could climb to $20,000, representing a 68% increase from current levels. However, Kendrick does not expect the rally to be a straight line, and believes that bitcoin could dip to $5,000 before jumping to $25,000. He also cautioned that if there is a US default, all cryptocurrencies could follow bitcoin's behaviour and drop in value." }, "finish_reason": "stop", "index": 0 }] } }

    return (
        <div className='Summary-view'>
            <h1>Words</h1>
            {/* <form onSubmit={handleFormSubmit}> */}
            <form>
                {/* <input type="radio" name="words" id="50" value="50" onChange={handleWordCountChange} /> */}
                <input type="radio" name="words" id="50" value="50" />
                <label htmlFor="50">50</label>
                <br />
                {/* <input type="radio" name="words" id="100" value="100" onChange={handleWordCountChange} defaultChecked /> */}
                <input type="radio" name="words" id="100" value="100" />
                <label htmlFor="100">100</label>
                <br />
                <input type="radio" name="words" id="150" value="150" />
                <label htmlFor="150">150</label>
                <br />
                <input type="radio" name="words" id="200" value="200" />
                <label htmlFor="200">200</label>
                <br />
                <button type="submit">Summarize</button>
            </form>
            <p>GPT Model: {typeof summary === 'string' ? summary : JSON.stringify(summary.summary.model)}</p>
            <p>Total Tokens: {typeof summary === 'string' ? summary : JSON.stringify(summary.summary.usage.total_tokens)}</p>
            <p>Summary: {typeof summary === 'string' ? summary : JSON.stringify(summary.summary.choices[0].message.content)}</p>
            <p>Created at: {typeof summary === 'string' ? summary : JSON.stringify(summary.summary.created)}</p>
            <p>Created at: {typeof summary === 'string' ? summary : new Date(summary.summary.created * 1000).toLocaleString()} UTC</p>
            <p>Complete API Response: {typeof summary === 'string' ? summary : JSON.stringify(summary)}</p>
        </div>
    );
};
