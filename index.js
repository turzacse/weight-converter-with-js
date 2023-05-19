document.getElementById('output').style.visibility='hidden';
        document.getElementById('lbsinput').addEventListener('input', function(){

            document.getElementById('output').style.visibility='visible';

            let lb= event.target.value;
            document.getElementById('kgoutput').innerHTML=lb/0.0022046;

            document.getElementById('gramsoutput').innerHTML=lb/2.2046;

            document.getElementById('ogoutput').innerHTML=lb*16;
        })