function calculate(weight, type){
    if(type=="stamped"){
        let cost = .4 + (weight * .15)
        return cost;
    }
    else if(type == "metered"){
        let cost = .35 + (weight * .15);
        return cost;
    }
    else if(type == "large"){
        let cost = .85 + (weight * .15)
        return cost;
    }
    else {
        if (weight < 5){
            return 3.66;
        }
        else if(weight < 9){
            return 4.39;
        }
        else if(weight < 13)
            return 5.19;
        else 
            return 5.71;
    }
}
function doit(req, res){
    let weight = req.query.weight;
    let type = req.query.type;
    let cost = calculate(weight, type)
    if (type != "package")
        type = type + " letter";
    cost = cost.toFixed(2);
    let stuff = {weight: weight, type: type, cost: cost}
    
    res.render('output', stuff)
}
module.exports = {doit: doit};