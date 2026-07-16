  const NIVELES=[
    {nm:'Amateur',minApu:100,pct:5},{nm:'Semi-Pro',minApu:1000,pct:7},
    {nm:'Profesional',minApu:5000,pct:9},{nm:'Crack',minApu:10000,pct:11},
    {nm:'Campeón',minApu:30000,pct:13},{nm:'Leyenda',minApu:80000,pct:15},
    {nm:'Élite',minApu:100000,pct:17}
  ];
  function calc(){
    const perd=parseFloat(document.getElementById('perd').value)||0;
    const out=document.getElementById('out');out.style.display='block';
    let n=null;for(const x of NIVELES){if(perd>=x.minApu)n=x}
    if(!n){
      document.getElementById('oNivel').textContent='Aún sin nivel';
      document.getElementById('oPct').textContent='—';
      document.getElementById('oEj').innerHTML='Necesitas al menos <b>$100</b> en apuestas perdedoras esta semana para calificar a Amateur (además de tu depósito mínimo).';
      return;
    }
    const ret=(perd*n.pct/100).toLocaleString('es-MX',{maximumFractionDigits:0});
    document.getElementById('oNivel').textContent=n.nm;
    document.getElementById('oPct').textContent='$'+ret;
    document.getElementById('oEj').innerHTML='Nivel '+n.nm+' ('+n.pct+'%) — se calcula sobre <b>lo que pierdes</b>, no sobre tu depósito. Estimado; también debes cumplir el depósito mínimo del nivel esa semana.';
  }
  document.getElementById('perd').addEventListener('keydown',e=>{if(e.key==='Enter')calc()});
