let converter = document.getElementById('converter');
let bin = document.getElementById('bin');

converter.onclick = () => {
  let bin2 = bin.value;
   
  if(bin2 == 'a' || bin2 == '1')  
        alert('Digite um numero binario para converter');

      let decimal = parseInt(bin2, 2);
    
      document.getElementById('dec').value = decimal;
}