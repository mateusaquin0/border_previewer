function applyBorder(){
    let border_tl = document.querySelector('#t-left'),
        border_tr = document.querySelector('#t-right'),
        border_br = document.querySelector('#b-right'),
        border_bl = document.querySelector('#b-left'),
        editable_box = document.querySelector('#editable-box'),
        css_gen = document.querySelector('#css-generator'),
        values = [border_tl,
                    border_tr,
                    border_br,
                    border_bl]

    values = verifyValues(values)
    const equal = verifyEquals(values)
    
    if(equal){
        editable_box.style.borderRadius = border_tl.value + 'px'
        css_gen.value = `border-radius: ${border_tl.value}px;`
        return
    }
    
    editable_box.style.borderTopLeftRadius = border_tl.value + 'px'
    editable_box.style.borderTopRightRadius = border_tr.value + 'px'
    editable_box.style.borderBottomRightRadius = border_br.value + 'px'
    editable_box.style.borderBottomLeftRadius = border_bl.value + 'px'

    css_gen.value = `border-top-left-radius: ${border_tl.value}px;
border-top-right-radius: ${border_tr.value}px;
border-bottom-right-radius: ${border_br.value}px;
border-bottom-left-radius: ${border_bl.value}px;`
}

function verifyValues(array){
    console.log(array)
    for( let i = 0; i < array.length; i++){
        if(array[i].value == '' || array[i].value < 0){
            array[i].value = '0'
        }
        else if(array[i].value > 120){
            array[i].value = '120'
        }
    }
    return array
}

function verifyEquals(array){
    let verf1 = 0

    for(let i = 0; i < array.length; i++){
        if(array[0].value == array[i].value){
            verf1++
        }
    }

    if(verf1 == 4){
        return true
    }
    return false
}