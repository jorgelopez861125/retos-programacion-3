new Promise((resolver, rechazar)=> {
    console.log('inicial');
    resolver();
})
//rechazar
.then(()=> {
    throw new Error('algo fallo');
    console.log('haz esto');
})
.catch(()=> {
    console.log('haz aquello');
})
.then(()=> {
    console.log('haz esto sin que importe lo que sucedio antes');
});