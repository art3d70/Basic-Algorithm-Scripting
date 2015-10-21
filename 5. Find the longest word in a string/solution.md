"Mi nombre es"

convertir a array lo hacemos con split

var nom = str.split(' ');  //es decir separamos con base en los espacios

ahora queda como

nom = ["Mi", "nombre", "es"]
ó
nom =[0][1][2]

podemos ver el largo de cada valor de cada array

nom[0].length = 2
nom[1].length = 6
nom[2].length = 2
nom.length = 3  por tener 3 valores el array

como saber cual es mayor?
con un loop 

for
i = 0;
i < nom.length; la condicion es que i sea menor que el largo del array en este caso 2
i++

-------------

 i = 0; i < 3 ? (si) {

 ( nom[0].length = 2  >  maxL=0 ) si
entonces  maxL = nom[0].length = 2;

return maxL; que en este caso quedó como 2

termina y suma 1 a i



 i=1 > 3 ? (si){

 ( nom[1].length = 6 > maxL = 2 ) si
entonces maxL = nom[1].length = 6

return maxL; que quedó como 6

termina y suma 1 a i

 

 i=2 < 3? (si){
( nom[2],length = 2 > maxL = 6) no
no hace nada por ser falsala condición, es decir maxL se queda como 6

return maxL; que quedó como 6

termina y suma 1 a i


 i=3 < 3? (no)
termina el loop

ya en código:

function findLongestWord(str) {
  
  var words = str.split(' ');
  var maxL = 0;
  
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxL) {
      maxL = words[i].length;      
    }
  }

  return maxL;
}

findLongestWord("The quick brown fox jumped over the lazy dog");