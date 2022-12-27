//convertir poids livre en kg
  let livre = 60;
  let weightConvertKg = (livre * 0.45359237).toFixed(0);
  console.log(weightConvertKg);
//créer variable poids (kg) et taille (m)
  let weight = weightConvertKg;
  let height = 1.76;
// créer fonction pour le calcul de l'IMC
  let imc = parseFloat((weight / (height * height)).toFixed(1));

  console.log(`Ton IMC est de ${imc}`)
// déterminer les catégories d'IMC
  switch (true) {
    //moins de 18,5 (maigreur)
    case imc < 18.5:
      console.log("Tu es en dessous de la moyenne de l'IMC, maigreur!");
      break;
    // 18,5 à 24,9 (poids normal)
    case imc >= 18.5 && imc <= 24.9:
      console.log("Tu es dans la moyenne de l'IMC, tu es en forme, continu!");
      break;
    // 25 à 29,9 (surpoids)
    case imc >= 25 && imc <= 29.9:
      console.log("Tu es au dessus de la moyenne en surpoids, fais attention!");
      break;
    // 30 à 34,9 (obésité de niveau 1)
    case imc >= 30 && imc <= 34.9:
      console.log("Tu es au dessus de la moyenne en obésité de niveau 1!");
      break;
    // 35 à 39,9 (obésité de niveau 2)
    case imc >= 35 && imc <= 39.9:
      console.log("Tu es au dessus de la moyenne en obésité de niveau 2!");
      break;
    // 40 ou plus (obésité de niveau 3)
    case imc >= 40:
      console.log("Tu es au dessus de la moyenne en obésité de niveau 3!");
      break;
    default:
      console.log("Je ne comprends pas, vérifies tes informations!");
  }
