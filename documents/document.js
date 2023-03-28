module.exports = ({ user, thScore, rfScore, portfolio }) => {
  const today = new Date();
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
         <script src="https://cdn.tailwindcss.com"></script>
        <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
        <title>Portfolio Pdf ${`${user.name}`}</title>
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body{padding: 2em;
            width:100%;
            background: #fbeedf;
            display: flex;
         justify-content: center;
        }
        .portfolio-cont{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .card{
            width: 50%;
            background: white;
            border-color: #ffe7cb5b;
            border-radius: 0.5rem;
            border-width: 2px;
            max-height: max-content;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 1.25rem;
            padding: 1.25rem;
        }
        </style>
    </head>
    <body>
        <div class="portfolio-cont">
    <h1>Risk Portfolio of ${`${user.name}`}</h1>
    <div class="card">
        <p>name:${`${user.name}`}</p>
        <p>Email:${`{${user.email}`}}</p>
        <p>Mobile:${`${user.mobile}`}</p>
        <p>Age:${`${user.age}`}</p>
        <p>Time Horizon Score:${`${thScore}`}</p>
        <p>Risk Preference Score:${`${rfScore}`}</p>
        </div>
        <div class="card">
        <p>Portfolio Type:${`${portfolio.portName}`}</p>
        <p>Portfolio Description:${`${portfolio.about}`}</p>
        <img src="https://4.imimg.com/data4/OA/FS/MY-29818169/modem-500x500.jpg" / >
        <p>Asset Allocation:</p><br/>
        <p>Domestic Equity :${`${portfolio.assetClass.domesticEquity}`}</p>
        <p>Domestic Fixed Income :${`${portfolio.assetClass.domesticFixedIncome}`}</p>
        <p>Overseas Equity :${`${portfolio.assetClass.overseasEquity}`}</p>
        <p>Gold/Cash :${`${portfolio.assetClass.goldOrCash}`}</p>
        </div>
    </div>
    </body>
    </html>`;
};
