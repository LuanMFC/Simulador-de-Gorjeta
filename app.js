function resetar(){
    var form   = document.getElementById("formulario");
    var span1 = document.getElementById("inputgorjeta");
    var span2 = document.getElementById("inputtotal");

    form.reset();
    span1.textContent = '$0.00';
    span2.textContent = '$0.00';
}

function nomeb(nomebotao){
    
    if (nomebotao == 'cincporcent') {
        
            button_value = document.formulario.cincporcent.value;
            button_value = 5/100
            return button_value;
    }

    else if (nomebotao == 'dezporcent') {
        
        button_value = document.formulario.quinporcent.value;
        button_value = 10/100
        return button_value;
    }
    
    else if (nomebotao == 'quinporcent') {
        
        button_value = document.formulario.quinporcent.value;
        button_value = 15/100
        return button_value;
    }

    else if (nomebotao == 'vintporcent') {
        
        button_value = document.formulario.quinporcent.value;
        button_value = 25/100
        return button_value;
    }

    else if (nomebotao == 'cinquporcent') {
        
        button_value = document.formulario.quinporcent.value;
        button_value = 50/100
        return button_value;
    }

    else if (nomebotao == 'custom'){
        button_value = document.formulario.custom.value /100
        return button_value;
    }

}

function medperson (){
    nomeb();
    var span1 = document.getElementById("inputgorjeta");
    var span2 = document.getElementById("inputtotal");
    var span3 = document.getElementById("error");

    var person_value = document.formulario.person.value;

    if (person_value == 0){
        span3.textContent = "Can't be zero";
        return;
    }
    var bill_value = document.formulario.bill.value;

    var val_gorjeta = ((bill_value * button_value) / person_value);

    span1.textContent = '$'+ val_gorjeta.toFixed(2);

    var val_total = val_gorjeta + (bill_value / person_value);

    
    span2.textContent = '$'+ val_total.toFixed(2);
}