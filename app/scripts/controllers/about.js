'use strict';

/**
 * @ngdoc function
 * @name nowaInnowacjaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nowaInnowacjaApp
 */
angular.module('nowaInnowacjaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.texts = [{
      badgeClass: 'info',
      badgeIconClass: ' glyphicon-globe',
      title: 'W postaci cyfrowej',
      content: `Wszystkie informacje na temat Blockchain są przetwarzane w postać cyfrową, co eliminuje potrzebę ręcznej dokumentacji.`
    }, 
    {
      badgeClass: 'warning',
      badgeIconClass: 'glyphicon-time',
      title: 'Chronologiczny i datowany',
      
      content: `Blockchain tak jak sugeruje sama nazwa, jest łańcuchem bloków - każdy będący repozytorium, 
      które przechowuje informacje dotyczące tranzakcji a także wskazuje na poprzedni blok w tej samej tranzakcji.
      Te połączone bloki tworzą chronologiczny łańcuch przedstawiający ślad pod którym kryje się transakcja. `
    },
    {
      badgeClass: 'danger',
      badgeIconClass: 'glyphicon-floppy-saved',
      title: 'Zabezpieczony szyfrem',
      content: `Utworzone bloki są kryptograficznie zabezpieczone w łańcuchu.
                          Oznacza to, że wcześniej utworzone bloki są niemożliwe do usunięcia, 
                          edytowania lub kopiowania i umieszczania ich w sieci. W ten sposób zapewniany jest
                          wysoki poziom niezawodności i zaufania. Co więcej, brak jednostki centralnej powoduje, że Blockchain jest bardzo odporny na awarie. Nawet w przypadku awarii dotyczącej dużej liczby uczestników sieci, Blokchain pozostaje dostępny, eliminując pojedynczy punkt awarii. Dane przechowywane w Blokchain są niezmienne. `
    },
    {
      badgeClass: 'success',
      badgeIconClass: ' glyphicon-transfer',
      title: 'Oparty na konsensusie',
      
      content: `Tranzakcja w technologii Blockchain może zostać przeprowadzona tylko jeśli wszystkie strony w niej uczesniczące jednogłośnie się na nią zgodzą.
      Jednakże, zasady konsensusu mogą zostać dostosowane do różnych okoliczności, zależnie od potrzeb.`
    },
    {
      badgeClass: 'info',
      badgeIconClass: ' glyphicon-cloud-download',
      title: 'Rejestry rozproszone',
      content: `W Blockchain wszystkie kopie informacji są nierozróżnialne. Uczesnicy niezależnie sprawdzają poprawność informacji bez scentralizowanej jednostki.
      Nawet jeśli jeden węzeł ulegnie awarii, działanie pozostałych węzłów będzie kontynuowane bez zakłóceń.`
    }
    ];
  });
