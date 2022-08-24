function radiocheck() { 
            if(document.getElementById('bca').checked) {
                document.getElementById('bca').id = 'tfmethode';
                document.getElementById('tfmethode').value = 'BCA';
                document.getElementById('tfmethode').checked = true;
                document.getElementById('bni').disabled = true;
				document.getElementById('bri').disabled = true;
				document.getElementById('mandiri').disabled = true;
                document.getElementById('gopay').disabled = true;
				document.getElementById('ovo').disabled = true;
            }
            else if(document.getElementById('bni').checked) {
                document.getElementById('bni').id = 'tfmethode';
                document.getElementById('tfmethode').value = 'BNI';
                document.getElementById('tfmethode').checked = true;
                document.getElementById('bca').disabled = true;
				document.getElementById('bri').disabled = true;
				document.getElementById('mandiri').disabled = true;
                document.getElementById('gopay').disabled = true;
				document.getElementById('ovo').disabled = true;
            }
            else if(document.getElementById('bri').checked) {
                document.getElementById('bri').id = 'tfmethode';
                document.getElementById('tfmethode').value = 'BRI';
                document.getElementById('tfmethode').checked = true;
                document.getElementById('bni').disabled = true;
				document.getElementById('bca').disabled = true;
				document.getElementById('mandiri').disabled = true;
                document.getElementById('gopay').disabled = true;
				document.getElementById('ovo').disabled = true;
            }
            else if(document.getElementById('mandiri').checked) {
                document.getElementById('mandiri').id = 'tfmethode';
                document.getElementById('tfmethode').value = 'Mandiri'; 
                document.getElementById('tfmethode').checked = true;
                document.getElementById('bni').disabled = true;
				document.getElementById('bri').disabled = true;
				document.getElementById('bca').disabled = true;
                document.getElementById('gopay').disabled = true;
				document.getElementById('ovo').disabled = true;
            }
            else if(document.getElementById('gopay').checked) {
                document.getElementById('gopay').id = 'tfmethode';
                document.getElementById('tfmethode').value = 'Gopay'; 
                document.getElementById('tfmethode').checked = true;
                document.getElementById('bni').disabled = true;
				document.getElementById('bri').disabled = true;
				document.getElementById('mandiri').disabled = true;
                document.getElementById('bca').disabled = true;
				document.getElementById('ovo').disabled = true;
            }
            else if(document.getElementById('ovo').checked) {
                document.getElementById('ovo').id = 'tfmethode';
                document.getElementById('tfmethode').value = 'OVO';  
                document.getElementById('tfmethode').checked = true;
                document.getElementById('bni').disabled = true;
				document.getElementById('bri').disabled = true;
				document.getElementById('mandiri').disabled = true;
                document.getElementById('gopay').disabled = true;
				document.getElementById('bca').disabled = true;
            }
            else {
                document.getElementById('tfmethode').innerHTML
                    = 'No one selected';
            }
        }
