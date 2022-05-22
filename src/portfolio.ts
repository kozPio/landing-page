export const portfolioData = {
  main: {
    name: 'Piotr Kozłowski',
    occupation: 'Student Wyższej Szkoły Handlowej',
    description: 'Junior React Developer',
    image: 'http://feelgrafix.com/data_images/out/11/850345-matrix.jpg',
    bio: 'Nazywam się Piotr Kozłowski i jestem studentem WSH we Wrocławiu, jestem na drugim roku na  kierunku Informatyka. Lubię się uczyć nowych rzeczy oraz odkrywać nowe technologie które później mogę wykorzystać. ',
    email: 'piotrkozlowskidev@gmail.com',
    phone: '782 744 128',
    resumedownload:
      'https://firebasestorage.googleapis.com/v0/b/storelocator-8d5d0.appspot.com/o/Piotr-Kozłowski-CV.pdf?alt=media&token=271d4c22-6c34-4a07-90bc-edc844e099ed',
    social: [
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/piotr-koz%C5%82owski-7186101b7/',
        className: 'fa fa-linkedin',
      },
      {
        name: 'github',
        url: 'https://github.com/kozPio',
        className: 'fa fa-github',
      },
    ],
  },
  resume: {
    education: [
      {
        school: 'Wyższa Szkoła Handlowa we Wrocławiu',
        degree: 'Aktualnie jestem na trzecim roku, kierunek Informatyka',
        description: 'Studiuje zaocznie',
      },
    ],
    skills: [
      {
        name: 'ReactJs',
        level: '90%',
      },
      {
        name: 'JavaScript',
        level: '95%',
      },
      {
        name: 'Redux',
        level: '80%',
      },
      {
        name: 'CSS',
        level: '85%',
      },
      {
        name: 'Git',
        level: '60%',
      },
      {
        name: 'HTML5',
        level: '80%',
      },
      {
        name: 'MongoDB',
        level: '80%',
      },
      {
        name: 'NodeJS',
        level: '80%',
      },
      {
        name: 'Angielski',
        level: '90%',
      },
    ],
  },
  portfolio: {
    projects: [
      {
        title: 'Blogg App',
        category:
          'Frontend stworzony w Reacie oraz typescrypcie, backend stworzony w node.js (z wykorzystaniem graphqla jako języka zapytań, oraz prismy). Backend jak i obraz prismy zhostowane są na darmowej wersji heroku więc pierwszy request może zająć chwilę (aby obudzić dwa servery), Aplikacja umożliwia rejestrację, logowanie, tworzenie, edycję i usówanie postów oraz komentarzy, można też szukać postów po tytule. Aby tworzyć posty lub komentarze trzeba się zalogować można skorzystać z istniejącego użytkownika (email: tobi@example.com, password: red12345 ) ',
        image: 'bloggApp.png',
        url: 'https://whatsupapp-54a8e.web.app',
      },
      {
        title: 'JS Note',
        category:
          "Code Editor w przeglądarce, umożliwia napisanie kodu (można importować biblioteki) i podzielenie się nim z inną osobą poprzez przesłanie tej osobie pliku do którego jest on zapisany (domyślnie zapisywany jest on do pliku notebook.js ale przy starcie aplikacji można ustalić inną nazwę pliku jak również inny port na której aplikacja startuje domyślny to 4005) osoba do której wyślemy plik może zobaczyć nasz kod sttartując aplikację w folderze w którym znajduje się plik z naszym kodem. Aby wystartować aplikację należy mieć zainstalowanego node.js najlepiej jedną z nowszych wersji, wpisujemy polecenie 'npx jsnotexcli serve' po serve możemy opcjonalnie zmienić port po fladze -p lub bez żadnej flagi wpisać nazwę pliku w którym chcemy zapisywać nasze zmiany",
        image: 'jsnote.png',
        url: 'npx jsnotexcli serve',
      },
      {
        title: 'WhatsApp Clone',
        category:
          'WhatsApp Clone zbudowany przy użyciu Reacta do frontendu i firebase do backendu (Cloud Firestore oraz Storage) Możliwość zalogowania się z kontem Google lub jako gość. Dostępne są emotikonki, można wrzucać pliki lub zdjęcia no i oczywiście pisać wiadomości.',
        image: 'WhatsApp.png',
        url: 'https://whatsupapp-54a8e.web.app',
      },
      {
        title: 'AirBnB Clone',
        category:
          'Airbnb Clone zbudowany jako MERN projekt oraz z wykorzystaniem Google Maps API. Można wyszukać Pokoje w 28 największych miastach w Polsce (np. Wrocław, Warszawa, Gdańsk). Na stronie z wynkami wyszuukiwania można kliknąc na jeden z wyszukanych pokoi i otworzy się nam strona z odpowiednikiem tego pokoju. ',
        image: 'Airbnb.png',
        url: 'https://airbnb-clone-c8ee4.web.app',
      },
      {
        title: 'Starbucks Lokalizator',
        category:
          'Lokalizator Sturbucksów wyszukuje na podstawie kodu-pocztowego dostępne kody to 89164, 89146, 89128 Las Vegas; 90048, 90038, 90034 Los Angeles; 94203, 94204, 94229 Sacramento ',
        image: 'StoreLocator.png',
        url: 'https://storelocator-8d5d0.web.app',
      },
    ],
  },
};
