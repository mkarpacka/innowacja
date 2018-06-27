'use strict';

/**
 * @ngdoc function
 * @name nowaInnowacjaApp.controller:RestrictionsCtrl
 * @description
 * # RestrictionsCtrl
 * Controller of the nowaInnowacjaApp
 */
angular.module('nowaInnowacjaApp')
  .controller('RestrictionsCtrl', function ($scope) {
    var titleEN = 'Ograniczenia';

    var introductionEN = `Poprzednie strony połączyły wszystkie elementy układanki i dały możliwość zrozumienia czym jest Blockchain, podkreślając niezależność jego koncepcji technicznych.
    Blockchain jest złożony i posiada wysoce zaawansowaną konstrukcję. Mimo to nie jest doskonały ani wolny od ograniczeń. Oto jego najważniejsze ograniczenia: `;
    var elementsEN = [
      {
        title: 'Brak prywatności',
        content: `Blockchain jest zdecentralizowaną i rozproszoną bazą danych o architekturze peer-to-peer, która przechowuje dane poszczególnych tranzakcji.
        Wszystkie szczegóły tranzakcji takie jak rodzaj i wartość towarów, uczestniczące konta oraz czas tranzakcji są dostępne dla wszystkich.
        Jest to konieczne aby umożliwić każdemu użytkownikowi zweryfikowanie tranzakcji. Przez to brak prywatności jest nieodłącznym elementem tej technologii.`,
        id: '1'
      },
      {
        title: 'Model bezpieczeństwa',
        content: `Blockchain wykorzystuje asymetryczną kryptografię do identyfikacji, uwierzytelniania
        użytkowników i autoryzowania transakcji. Numery kont w blockchain są w rzeczywistości publicznymi
        kluczami kryptograficznymi. Klucz prywatny to jedyny instrument bezpieczeństwa, który potwierdza tożsamość właściciela.
        W momencie przekazania klucza prywatnego konta do kogoś innego, celowo, przez przypadek, przez pomyłkę lub w wyniku kradzieży danych, ochrona tego konkretnego konta zostaje złamana.`,
        id: '2'
      },
      {
        title: 'Wysokie koszty',
        content: `Rozwiązanie hashing puzzle oraz algorytmu PoW (proof of work) jest celowo kosztowne pod względem obliczeniowym.
        Jest to środek bezpieczeństwa, który gwarantuje niezmienność historii danych transakcji.
        Koszty obliczeniowe mogą być wyrażone w różnych skalach jako liczba cykli obliczeniowych, czasu fizycznego,
        energii elektrycznej i pieniądzy. Jednak wynik jest zawsze taki sam: PoW jest kosztowny. W związku z tym cały blockchain ponosi koszty.
        Wielkość tych kosztów zależy od trudności hashing puzzle.`,
        id: '3'
      },
      {
        title: 'Niewystarczająca elastyczność',
        content: `Blockchain jest złożoną konstrukcją techniczną, która składa się z wielu różnych koncepcji i
        protokołów, które są zoptymalizowane i dostosowane do siebie. Wymiana pieniędzy w tym dopracowanym
        ekosystemie może być bardzo trudna. W rzeczywistości nie ma ustanowionej procedury
        dotyczącej zmiany lub aktualizacji głównych składników kiedy Blockchain rozpocznie swoją operację.`,

        id: '4'
      },
      {
        title: 'Ogromny rozmiar',
        content: `Wytrzymałość na manipulacje, a tym samym wiarygodność zbiorowo utrzymywanej historii danych transakcji
        opiera się na założeniu, że większość mocy obliczeniowej systemu kontrolowana jest przez poprawnie działające węzły.
        Jednak w małych systemach peer-to-peer z ograniczoną mocą obliczeniową, ta większość nadal może być bardzo mała, co z
        kolei może umożliwić wykonanie 51-procentowego ataku. Ten problem jest szczególnie istotny w przypadku kryptowalut o niskiej kapitalizacji
        rynkowej i ograniczonej akceptacji użytkowników. Stąd każdy blockchain będzie wymagał ogromnej ilości hostów działających z protokołem,
        aby ją wspierać i uczynić ją odporną atakujący z dużą mocą obliczeniową. Osiągnięcie krytycznego rozmiaru, który sprawia 51 procent ataków
        niemożliwe jest wyzwaniem, z którym każny nowy blockchain musi się zmierzyć.`,
        id: '5'
      },
    ]
    $scope.title = titleEN;
    $scope.elements = elementsEN;
    $scope.introduction = introductionEN;
  });
