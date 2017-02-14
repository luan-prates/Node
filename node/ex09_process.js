process.stdout.write('Qual seu nome?');
process.stdin.on('data', function(data){
    process.stdout.write(`Muito prazer ${data.toString()}Você é bem legal!`);
    process.exit();
});