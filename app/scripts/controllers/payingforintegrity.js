'use strict';

/**
 * @ngdoc function
 * @name nowaInnowacjaApp.controller:PayingforintegrityCtrl
 * @description
 * # PayingforintegrityCtrl
 * Controller of the nowaInnowacjaApp
 */
angular.module('nowaInnowacjaApp')
  .controller('PayingforintegrityCtrl', function ($scope) {
    var titleEN = 'Opłata za podtrzymanie sieci';
    /**/
    var introductionEN = `Rozwiązywanie hash puzzle odgrywa znaczącą rolę w osiąganiu i utrzymywaniu nienaruszalności sieci.
    Kosztuje to jednak wiele zasobów obliczeniowch, a co za tym idzie pieniędzy. Z tego powodu
    konieczne jest zrekompensowanie węzłów, które przyczyniają się do integralności systemu.
    Jednak podczas dyskusji przyjęto, że węzły są kompensowane bez pytania o to, który 
    instrument płatniczy jest do tego używany.`;
    var elementsEN = [
      {
        title: 'Rola opłat w Blockchain',
        content: `Blockchain wykorzystuje metodę kija i marchewki aby użytkownicy tworzący system wzajemnie się pilnowali. 
        Nagrody i kary są wdrożone z nagrodami opartymi na opłatach transakcyjnych i algorytmie PoW (proof of work). Efekt ten jest uniwersalny we wszystkich zastosowaniach typu blockchain, niezależnie 
        od ich konkretnego celu aplikacji. Jednak wybór konkretnej metody płatności służącej nagrodzić użytkowników utrzymujących poprawne działanie systemu nie jest identyczny we wszystkich zastosowaniach typu blockchain. 
        Definiowanie i używanie instrumentu płatności, który zostanie przekazany partnerom w celu weryfikacji i dodanie nowych bloków do łańcucha blokowego jest uważane za jedno z głównych wyzwań przy tworzeniu aplikacji blockchain.  `,
        id: '1'
        /* */
      },
      {
        title: 'Wpływ na integralność systemu',
        content: `Siły nagrody i kary są podstawą osiągnięcia i utrzymania integralności w blockchain. Takie działanie ma sens, ponieważ użytkownicy systemu otrzymują wynagrodzenie za utrzymanie integralności systemu. 
        Brak zaufania do instrumentu płatniczego służącego do nagradzania użytkowników w systemie spowoduje zanieczyszczenie całego systemu. W związku z tym instrument płatności stosowany do nagradzania 
        zwolenników systemu ma bezpośredni wpływ na wiarygodność samego bloku blockchain.`,
        id: '2'
      },
      {
        title: 'Wpływ na otwartość systemu',
        content: `Blockchain ma być otwartym systemem peer-to-peer. Każdy może podłączyć komputer do systemu i zostanie nagrodzony za wkład w utrzymanie integralności. Ale co się stanie, jeśli instrument, 
        którego płatność służy do nagradzania hostów, nie jest tak otwarty jak sam blok? Co się stanie, jeśli nagroda zostanie przyznana przy użyciu dostępnego instrumentu płatniczego lub zaakceptowana 
        tylko w niektórych 
        krajach lub z zastrzeżeniem ograniczenia kapitału? W tym przypadku instrument płatniczy przeciwdziała otwartości systemu technicznego, wywołując ograniczenia ekonomiczne.`,
        id: '3'
      },
      {
        title: 'Wpływ na rozproszoną naturę systemu',
        content: `Blockchain jest całkowicie rozproszonym systemem peer-to-peer bez żadnego elementu centralnej kontroli. Jeśli jednak 
        instrument płatności używany do nagradzania użytkowników utrzymujących poprawne działanie systemu jest kontrolowany i zarządzany przez jedną centralną instytucję. 
        Tworzy to ukryty sposób dostępu do systemu przeciwdziałający rozproszonemy charakterowi systemu.`,
        id: '4'
      },
      {
        title: 'Pożądane właściwości instrumentu płatności dla równych sobie użytkowników',
        content: `Pierwsza i najbardziej znacząca aplikacja typu blockchain została stworzona, aby rozwiązać problem. Idea tego blockchaina jest genialna: jest to całkowicie rozproszony system peer-to-peer, 
        który zarządza prawem własności do nowego rodzaju pieniędzy cyfrowych, który z kolei jest wykorzystywany do nagradzania użytkowników systemu za weryfikację i dodawanie nowych bloków do struktury danych blockchain. 
        Ta nowość łączy w sobie cel aplikacji, zarządzanie prawem własności do nowego rodzaju pieniądza, jednocześnie posiadając godny zaufania instrument płatności nagradzający jego współtwórców. 
        System Bitcoin nie tylko zarządza własnymi pieniędzmi cyfrowymi w czysto rozproszonym systemie peer-to-peer, ale także podarowuje mającym wkład w tworzenie systemu użytkownikom pieniądze. 
        Ze względu na fakt, że blockchain w dużym stopniu opiera się na kryptografii, ten nowy rodzaj pieniądza nazywany jest kryptograficzną walutą lub w skrócie kryptowalutą.
        `,
        id: '5'
        
      },
    ]
    $scope.title = titleEN;
    $scope.elements = elementsEN;
    $scope.introduction = introductionEN;

  });

