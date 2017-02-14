function temParam(param){
    console.log(process.argv)
    return process.argv.indexOf(param) !== -1;
}

if(temParam('--producao')){
    console.log('Atenção total!')
} else {
    console.log('Tranquilo...')
}