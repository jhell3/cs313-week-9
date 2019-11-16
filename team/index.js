const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

function funct(param1, param2, operator){
    let result = 0;
    switch (operator) {
        case 'add':
            result = param1 + param2;
            break;
        case 'sub':
            result = param1 - param2;
            break;
        case 'mult':
            result = param1 * param2;
            break;
        case 'div':
            result = param1 / param2;
            break;
        default:
            return "Sorry, we don't support that operator";
    }
    return result;
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/math', (req, res) =>
    let param1 = req.query.num1;
    let param2 = req.query.num2;
    let operator = req.query.math;
    let product = funct(param1, param2, operator);
    res.render(param1 + " " + operator + " " + param2 + " = " + product);
  )

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
