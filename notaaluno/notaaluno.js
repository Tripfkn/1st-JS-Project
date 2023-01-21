function soma(first, second, third, fourth) {
    const somando = first + second + third + fourth; // keep Data 
    const division = somando / 4;
    return division;
}



function check(materia, notaUm, notaDois, notaTres, notaQuatro) {  // keep data
    const tudo = soma(notaUm, notaDois, notaTres, notaQuatro); // summon up  // incocar // executar
    if (tudo >= 6) {
        console.log('Aluno Aprovado tirou' + ' ' + tudo + ' ' + 'em' + ' ' + materia);
    } else if (tudo >= 5 && tudo <= 6) { // revisar
        console.log('Esta de recuperação em ' + materia)
    } else {
        console.log('Aluno Reprovado tirou', tudo);
    }
}
check('portugues', 10, 2, 10, 10);  // USER (BUTTON FOR USERS ON HOW TO CHECK)