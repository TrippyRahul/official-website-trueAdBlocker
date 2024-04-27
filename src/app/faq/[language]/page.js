"use client"
import FrequentlyAskedQuestion from "../../components/FAQ";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from "../../styles/faq.module.scss";
import { usePathname } from "next/navigation";

const Page = () => {
    const path = usePathname();
    const pathname = path.split("/")[2];
    const lang = {
        english: {
            title: "FAQs",
            button: "More Questions",
            questions: [
                {
                    id: 1,
                    ques: "What is Trueadblocker and how does it work?",
                    ans: "It is the best extension that is designed to improve your online experience by eliminating all unwanted ads. It also protects your privacy and saves your data usage. The best part is it is free to use. ",
                },
                {
                    id: 2,
                    ques: "Does this extension block all types of ads?",
                    ans: "Yes, this adblocker Chrome extension blocks all types of ads including banner ads, pop-ups, video ads, and many more.",
                },
                {
                    id: 3,
                    ques: "Can this extension affect your web browsing speed?    ",
                    ans: "It can speed up your page loading by blocking all the unwanted ads.",
                },
                {
                    id: 4,
                    ques: "How to whitelist websites in Trueadblocker?",
                    ans: "You can whitelist websites by adding them to the allowed list in its settings then it will permit all the ads on those selected sites.",
                },
                {
                    id: 5,
                    ques: "Is using this adblocker Chrome extension legal?",
                    ans: "Yes, this extension is absolutely legal and safe to use.",
                },
                {
                    id: 6,
                    ques: "Is this extension compatible with other websites?",
                    ans: "This adblocker Chrome extension is compatible with most of the major browsers including Google and Firefox.",
                },
                {
                    id: 7,
                    ques: "How can I install Trueadblocker on my web browser?",
                    ans: "It is very simple as you just need to search for the extension or you can visit our website and download the extension from there.",
                },
                {
                    id: 8,
                    ques: "Is it safe to use Trueadblocker on multiple sites?",
                    ans: "Yes, it is absolutely safe to the extension on multiple browsers including Google Chrome and Firefox.",
                },
                {
                    id: 9,
                    ques: "Is there any free version of Trueadblocker?",
                    ans: "Yes, our extension is free to use. You can block all types of ads for free and enhance your online experience.",
                },
                {
                    id: 10,
                    ques: "Why Trueadblocker is better than other adblockers?",
                    ans: "The majority of adblockers can not get rid of unnecessary ads, but by installing our extension you can block all types of hidden ads that may ruin your experience. It not only blocks ads but also protects your browser from dangerous websites.",
                },
            ],
        },
        dutch: {
            title: "FAQs",
            button: "Meer vragen",
            questions: [
                {
                    id: 1,
                    ques: "Wat is Trueadblocker en hoe werkt het?",
                    ans: "Het is de beste extensie die is ontworpen om uw online ervaring te verbeteren door alle soorten vervelende advertenties te blokkeren. Het beschermt ook uw privacy en bespaart uw datagebruik. Het beste deel is dat het gratis te gebruiken is.",
                },
                {
                    id: 2,
                    ques: "Blokkeert deze extensie alle soorten advertenties?",
                    ans: "Ja dit adblocker Chrome extension blokkeert alle soorten advertenties, waaronder banneradvertenties, pop-ups, videoadvertenties en nog veel meer.",
                },
                {
                    id: 3,
                    ques: "Kan deze extensie uw surfsnelheid beïnvloeden?",
                    ans: "Het kan het laden van uw pagina versnellen door alle ongewenste advertenties te blokkeren.",
                },
                {
                    id: 4,
                    ques: "Hoe websites op de witte lijst zetten in Trueadblocker?",
                    ans: "U kunt websites op de witte lijst zetten door ze toe te voegen aan de toegestane lijst in de instellingen. Vervolgens worden alle advertenties op die geselecteerde sites toegestaan.",
                },
                {
                    id: 5,
                    ques: "Gebruikt dit adblocker Chrome extension legaal?",
                    ans: "Ja, deze extensie is legaal en veilig te gebruiken.",
                },
                {
                    id: 6,
                    ques: "Is deze extensie compatibel met andere websites?",
                    ans: "Dit adblocker Chrome extension is compatibel met de meeste grote browsers, waaronder Google en Firefox.",
                },
                {
                    id: 7,
                    ques: "Hoe kan ik Trueadblocker in mijn webbrowser installeren?",
                    ans: "Het is heel eenvoudig, u hoeft alleen maar naar de extensie te zoeken of u kunt onze website bezoeken en de extensie vanaf daar downloaden.",
                },
                {
                    id: 8,
                    ques: "Is het veilig om Trueadblocker op meerdere sites te gebruiken?",
                    ans: "Ja, het is absoluut veilig om de extensie in meerdere browsers te gebruiken, waaronder Google Chrome en Firefox.",
                },
                {
                    id: 9,
                    ques: "Bestaat er een gratis versie van Trueadblocker?",
                    ans: "Ja, onze extensie is gratis te gebruiken. U kunt gratis alle soorten advertenties blokkeren en uw online ervaring verbeteren.",
                },
                {
                    id: 10,
                    ques: "Waarom Trueadblocker beter is dan andere adblockers?",
                    ans: "De meeste adblockers kunnen onnodige advertenties niet verwijderen, maar door onze extensie te installeren kunt u alle soorten verborgen advertenties blokkeren die uw ervaring kunnen verpesten. Het blokkeert niet alleen advertenties, maar beschermt uw browser ook tegen gevaarlijke websites.",
                },
            ],
        },
        french: {
            title: "FAQs",
            button: "Plus de questions",
            questions: [
                {
                    id: 1,
                    ques: "Qu'est-ce que Trueadblocker et comment ça marche ?",
                    ans: "Il s'agit de la meilleure extension conçue pour améliorer votre expérience en ligne en bloquant tous les types de publicités gênantes. Il protège également votre vie privée et enregistre votre utilisation des données. La meilleure partie est que son utilisation est gratuite.",
                },
                {
                    id: 2,
                    ques: "Cette extension bloque-t-elle tous les types de publicités ?",
                    ans: "Oui ca adblocker Chrome extension bloque tous les types de publicités, y compris les bannières publicitaires, les pop-ups, les publicités vidéo et bien d'autres.",
                },
                {
                    id: 3,
                    ques: "Cette extension peut-elle affecter votre vitesse de navigation sur le Web ?",
                    ans: "Il peut accélérer le chargement de votre page en bloquant toutes les publicités indésirables.",
                },
                {
                    id: 4,
                    ques: "Comment mettre sur liste blanche des sites Web dans Trueadblocker ?",
                    ans: "Vous pouvez ajouter des sites Web à la liste blanche en les ajoutant à la liste autorisée dans ses paramètres. Toutes les annonces seront alors autorisées sur ces sites sélectionnés.",
                },
                {
                    id: 5,
                    ques: "Utilise ceci adblocker Chrome extension légal?",
                    ans: "Oui, cette extension est légale et sûre à utiliser.",
                },
                {
                    id: 6,
                    ques: "Cette extension est-elle compatible avec d'autres sites Web ?",
                    ans: "Ce adblocker Chrome extension est compatible avec la plupart des principaux navigateurs, dont Google et Firefox.",
                },
                {
                    id: 7,
                    ques: "Comment puis-je installer Trueadblocker sur mon navigateur Web ?",
                    ans: "C'est très simple car il vous suffit de rechercher l'extension ou vous pouvez visiter notre site Web et télécharger l'extension à partir de là.",
                },
                {
                    id: 8,
                    ques: "Est-il sûr d'utiliser Trueadblocker sur plusieurs sites ?",
                    ans: "Oui, l'extension est absolument sûre sur plusieurs navigateurs, notamment Google Chrome et Firefox.",
                },
                {
                    id: 9,
                    ques: "Existe-t-il une version gratuite de Trueadblocker ?",
                    ans: "Oui, notre extension est gratuite. Vous pouvez bloquer gratuitement tous les types de publicités et améliorer votre expérience en ligne.",
                },
                {
                    id: 10,
                    ques: "Pourquoi Trueadblocker est meilleur que les autres adblockers ?",
                    ans: "La majorité des bloqueurs de publicités ne peuvent pas se débarrasser des publicités inutiles, mais en installant notre extension, vous pouvez bloquer tous les types de publicités cachées susceptibles de gâcher votre expérience. Il bloque non seulement les publicités, mais protège également votre navigateur des sites Web dangereux.",
                },
            ],
        },
        german: {
            title: "FAQs",
            button: "Mehr Fragen",
            questions: [
                {
                    id: 1,
                    ques: "Was ist Trueadblocker und wie funktioniert es?",
                    ans: "Es ist die beste Erweiterung, die Ihr Online-Erlebnis verbessern soll, indem sie alle Arten lästiger Werbung blockiert. Es schützt auch Ihre Privatsphäre und speichert Ihre Datennutzung. Das Beste daran ist, dass die Nutzung kostenlos ist.",
                },
                {
                    id: 2,
                    ques: "Blockiert diese Erweiterung alle Arten von Werbung?",
                    ans: "Ja das adblocker Chrome extension Blockiert alle Arten von Werbung, einschließlich Bannerwerbung, Pop-ups, Videoanzeigen und vielem mehr.",
                },
                {
                    id: 3,
                    ques: "Kann diese Erweiterung Ihre Geschwindigkeit beim Surfen im Internet beeinträchtigen?",
                    ans: "Es kann das Laden Ihrer Seite beschleunigen, indem es alle unerwünschten Anzeigen blockiert.",
                },
                {
                    id: 4,
                    ques: "Wie kann ich Websites in Trueadblocker auf die Whitelist setzen?",
                    ans: "Sie können Websites auf die Whitelist setzen, indem Sie sie in den Einstellungen zur Liste der zulässigen Websites hinzufügen. Dann werden alle Anzeigen auf den ausgewählten Websites zugelassen.",
                },
                {
                    id: 5,
                    ques: "Ist die Verwendung dieser Adblocker-Chrome-Erweiterung legal?",
                    ans: "Ja, diese Erweiterung ist absolut legal und sicher in der Anwendung.",
                },
                {
                    id: 6,
                    ques: "Ist diese Erweiterung mit anderen Websites kompatibel?",
                    ans: "Das adblocker Chrome extension ist mit den meisten gängigen Browsern kompatibel, einschließlich Google und Firefox.",
                },
                {
                    id: 7,
                    ques: "Wie kann ich Trueadblocker in meinem Webbrowser installieren?",
                    ans: "Es ist sehr einfach, da Sie nur nach der Erweiterung suchen müssen oder unsere Website besuchen und die Erweiterung von dort herunterladen können.",
                },
                {
                    id: 8,
                    ques: "Ist es sicher, Trueadblocker auf mehreren Websites zu verwenden?",
                    ans: "Ja, die Erweiterung ist in mehreren Browsern, einschließlich Google Chrome und Firefox, absolut sicher.",
                },
                {
                    id: 9,
                    ques: "Gibt es eine kostenlose Version von Trueadblocker?",
                    ans: "Ja, die Nutzung unserer Erweiterung ist kostenlos. Sie können alle Arten von Werbung kostenlos blockieren und Ihr Online-Erlebnis verbessern.",
                },
                {
                    id: 10,
                    ques: "Warum ist Trueadblocker besser als andere Adblocker?",
                    ans: "Die meisten Adblocker können unnötige Werbung nicht entfernen, aber durch die Installation unserer Erweiterung können Sie alle Arten von versteckter Werbung blockieren, die Ihr Erlebnis ruinieren könnte. Es blockiert nicht nur Werbung, sondern schützt Ihren Browser auch vor gefährlichen Websites.",
                },
            ],
        },
        italian: {
            title: "FAQs",
            button: "Più domande",
            questions: [
                {
                    id: 1,
                    ques: "Cos'è Trueadblocker e come funziona?",
                    ans: "È la migliore estensione progettata per migliorare la tua esperienza online bloccando tutti i tipi di pubblicità fastidiose. Inoltre protegge la tua privacy e salva l'utilizzo dei dati. La parte migliore è che è gratuito.",
                },
                {
                    id: 2,
                    ques: "Questa estensione blocca tutti i tipi di annunci?",
                    ans: "Si Questo adblocker Chrome extension blocca tutti i tipi di annunci inclusi banner pubblicitari, pop-up, annunci video e molti altri.",
                },
                {
                    id: 3,
                    ques: "Questa estensione può influire sulla velocità di navigazione sul Web?",
                    ans: "Può accelerare il caricamento della pagina bloccando tutti gli annunci indesiderati.",
                },
                {
                    id: 4,
                    ques: "Come inserire nella whitelist i siti Web in Trueadblocker?",
                    ans: "Puoi autorizzare i siti Web aggiungendoli all'elenco consentito nelle sue impostazioni, quindi consentirà tutti gli annunci su quei siti selezionati.",
                },
                {
                    id: 5,
                    ques: "Sta usando questo adblocker Chrome extensionlegale?",
                    ans: "Sì, questa estensione è legale e sicura da usare.",
                },
                {
                    id: 6,
                    ques: "Questa estensione è compatibile con altri siti web?",
                    ans: "Questo adblocker Chrome extension è compatibile con la maggior parte dei principali browser tra cui Google e Firefox.",
                },
                {
                    id: 7,
                    ques: "Come posso installare Trueadblocker sul mio browser web?",
                    ans: "È semplicissimo poiché devi solo cercare l'estensione oppure puoi visitare il nostro sito Web e scaricare l'estensione da lì.",
                },
                {
                    id: 8,
                    ques: "È sicuro utilizzare Trueadblocker su più siti?",
                    ans: "Sì, l'estensione è assolutamente sicura su più browser tra cui Google Chrome e Firefox.",
                },
                {
                    id: 9,
                    ques: "Esiste una versione gratuita di Trueadblocker?",
                    ans: "Sì, la nostra estensione è gratuita. Puoi bloccare tutti i tipi di annunci gratuitamente e migliorare la tua esperienza online.",
                },
                {
                    id: 10,
                    ques: "Perché Trueadblocker è migliore di altri adblocker?",
                    ans: "La maggior parte degli adblocker non riesce a eliminare gli annunci non necessari, ma installando la nostra estensione puoi bloccare tutti i tipi di annunci nascosti che potrebbero rovinare la tua esperienza. Non solo blocca la pubblicità, ma protegge anche il tuo browser da siti Web pericolosi.",
                },
            ],
        },
        korean: {
            title: "FAQs",
            button: "더 많은 질문",
            questions: [
                {
                    id: 1,
                    ques: "Trueadblocker는 무엇이며 어떻게 작동하나요?",
                    ans: "모든 유형의 성가신 광고를 차단하여 온라인 경험을 향상시키도록 설계된 최고의 확장 프로그램입니다. 또한 귀하의 개인 정보를 보호하고 데이터 사용량을 절약합니다. 가장 좋은 점은 무료로 사용할 수 있다는 것입니다.",
                },
                {
                    id: 2,
                    ques: "이 확장 프로그램은 모든 유형의 광고를 차단합니까?",
                    ans: "응, 이거 adblocker Chrome extension 배너 광고, 팝업, 비디오 광고 등을 포함한 모든 유형의 광고를 차단합니다.",
                },
                {
                    id: 3,
                    ques: "이 확장 프로그램이 웹 검색 속도에 영향을 미칠 수 있나요?",
                    ans: "원치 않는 광고를 모두 차단하여 페이지 로딩 속도를 높일 수 있습니다.",
                },
                {
                    id: 4,
                    ques: "Trueadblocker에서 웹사이트를 화이트리스트에 추가하는 방법은 무엇입니까?",
                    ans: "설정에서 허용된 목록에 웹사이트를 추가하여 화이트리스트에 추가할 수 있으며, 그러면 선택한 사이트의 모든 광고가 허용됩니다.",
                },
                {
                    id: 5,
                    ques: "이것을 사용하고 있다 adblocker Chrome extension 합법적인?",
                    ans: "예, 이 확장 프로그램은 합법적이고 사용하기에 안전합니다.",
                },
                {
                    id: 6,
                    ques: "이 확장 프로그램은 다른 웹사이트와 호환됩니까?",
                    ans: "이것 adblocker Chrome extension Google 및 Firefox를 포함한 대부분의 주요 브라우저와 호환됩니다.",
                },
                {
                    id: 7,
                    ques: "웹 브라우저에 Trueadblocker를 어떻게 설치하나요?",
                    ans: "확장 프로그램을 검색하거나 당사 웹사이트를 방문하여 거기에서 확장 프로그램을 다운로드하면 되므로 매우 쉽습니다.",
                },
                {
                    id: 8,
                    ques: "여러 사이트에서 Trueadblocker를 사용해도 안전합니까?",
                    ans: "예, Google Chrome 및 Firefox를 포함한 여러 브라우저에서 확장 프로그램을 사용하는 것은 절대적으로 안전합니다.",
                },
                {
                    id: 9,
                    ques: "Trueadblocker의 무료 버전이 있나요?",
                    ans: "예, 확장 프로그램은 무료로 사용할 수 있습니다. 모든 유형의 광고를 무료로 차단하고 온라인 경험을 향상시킬 수 있습니다.",
                },
                {
                    id: 10,
                    ques: "Trueadblocker가 다른 것보다 나은 이유 adblockers?",
                    ans: "대부분의 광고 차단기는 불필요한 광고를 제거할 수 없지만 확장 프로그램을 설치하면 경험을 망칠 수 있는 모든 유형의 숨겨진 광고를 차단할 수 있습니다. 광고를 차단할 뿐만 아니라 위험한 웹사이트로부터 브라우저를 보호합니다.",
                },
            ],
        },
        polish: {
            title: "FAQs",
            button: "Więcej pytań",
            questions: [
                {
                    id: 1,
                    ques: "Co to jest Trueadblocker i jak działa?",
                    ans: "Jest to najlepsze rozszerzenie, które ma na celu poprawę komfortu korzystania z Internetu poprzez blokowanie wszelkiego rodzaju irytujących reklam. Chroni także Twoją prywatność i oszczędza wykorzystanie danych. Najlepsze jest to, że korzystanie z niego jest bezpłatne.",
                },
                {
                    id: 2,
                    ques: "Czy to rozszerzenie blokuje wszystkie typy reklam?",
                    ans: "Tak to adblocker Chrome extension blokuje wszystkie typy reklam, w tym banery reklamowe, wyskakujące okienka, reklamy wideo i wiele innych.",
                },
                {
                    id: 3,
                    ques: "Czy to rozszerzenie może mieć wpływ na szybkość przeglądania Internetu??",
                    ans: "Może przyspieszyć ładowanie strony, blokując wszystkie niechciane reklamy.",
                },
                {
                    id: 4,
                    ques: "Jak dodać witryny do białej listy w Trueadblocker?",
                    ans: "Możesz dodać strony internetowe do białej listy, dodając je do listy dozwolonych w swoich ustawieniach, a wtedy zezwolisz na wszystkie reklamy w tych wybranych witrynach.",
                },
                {
                    id: 5,
                    ques: "Używa tego adblocker Chrome extension prawny?",
                    ans: "Tak, to rozszerzenie jest legalne i bezpieczne w użyciu.",
                },
                {
                    id: 6,
                    ques: "Czy to rozszerzenie jest kompatybilne z innymi stronami internetowymi?",
                    ans: "Ten adblocker Chrome extension jest kompatybilny z większością głównych przeglądarek, w tym Google i Firefox.",
                },
                {
                    id: 7,
                    ques: "Jak mogę zainstalować Trueadblocker w mojej przeglądarce internetowej?",
                    ans: "Nie wymaga to żadnego wysiłku, wystarczy wyszukać rozszerzenie lub odwiedzić naszą stronę internetową i pobrać stamtąd rozszerzenie.",
                },
                {
                    id: 8,
                    ques: "Czy używanie Trueadblockera w wielu witrynach jest bezpieczne??",
                    ans: "Tak, rozszerzenie jest całkowicie bezpieczne w wielu przeglądarkach, w tym Google Chrome i Firefox.",
                },
                {
                    id: 9,
                    ques: "Czy istnieje darmowa wersja Trueadblocker?",
                    ans: "Tak, korzystanie z naszego rozszerzenia jest bezpłatne. Możesz bezpłatnie blokować wszystkie typy reklam i ulepszać swoje doświadczenia online.",
                },
                {
                    id: 10,
                    ques: "Dlaczego Trueadblocker jest lepszy od innych programów blokujących reklamy?",
                    ans: "Większość programów blokujących reklamy nie może pozbyć się niepotrzebnych reklam, ale instalując nasze rozszerzenie, możesz zablokować wszelkiego rodzaju ukryte reklamy, które mogą zrujnować Twoje wrażenia. Nie tylko blokuje reklamy, ale także chroni przeglądarkę przed niebezpiecznymi stronami internetowymi.",
                },
            ],
        },
        portuguese: {
            title: "FAQs",
            button: "Mais perguntas",
            questions: [
                {
                    id: 1,
                    ques: "O que é Trueadblocker e como funciona?",
                    ans: "É a melhor extensão projetada para melhorar sua experiência online, bloqueando todos os tipos de anúncios irritantes. Ele também protege sua privacidade e economiza o uso de dados. A melhor parte é que seu uso é gratuito.",
                },
                {
                    id: 2,
                    ques: "Esta extensão bloqueia todos os tipos de anúncios?",
                    ans: "Sim, esta extensão bloqueadora de anúncios do Chrome bloqueia todos os tipos de anúncios, incluindo banners, pop-ups, anúncios em vídeo e muito mais.",
                },
                {
                    id: 3,
                    ques: "Esta extensão pode afetar sua velocidade de navegação na web??",
                    ans: "Ele pode acelerar o carregamento da sua página, bloqueando todos os anúncios indesejados.",
                },
                {
                    id: 4,
                    ques: "Como colocar sites na lista de permissões no Trueadblocker?",
                    ans: "Você pode colocar sites na lista de permissões adicionando-os à lista permitida em suas configurações, então isso permitirá todos os anúncios nesses sites selecionados.",
                },
                {
                    id: 5,
                    ques: "Está usando isso adblocker Chrome extension jurídico?",
                    ans: "Sim, esta extensão é legal e segura de usar.",
                },
                {
                    id: 6,
                    ques: "Esta extensão é compatível com outros sites?",
                    ans: "Esse adblocker Chrome extension é compatível com a maioria dos principais navegadores, incluindo Google e Firefox.",
                },
                {
                    id: 7,
                    ques: "Como posso instalar o Trueadblocker no meu navegador?",
                    ans: "É muito simples, basta procurar a extensão ou visitar nosso site e baixar a extensão de lá.",
                },
                {
                    id: 8,
                    ques: "É seguro usar Trueadblocker em vários sites?",
                    ans: "Sim, a extensão é absolutamente segura em vários navegadores, incluindo Google Chrome e Firefox.",
                },
                {
                    id: 9,
                    ques: "Existe alguma versão gratuita do Trueadblocker?",
                    ans: "Sim, nossa extensão é de uso gratuito. Você pode bloquear todos os tipos de anúncios gratuitamente e aprimorar sua experiência online.",
                },
                {
                    id: 10,
                    ques: "Por que o Trueadblocker é melhor que outros bloqueadores de anúncios?",
                    ans: "A maioria dos bloqueadores de anúncios não consegue se livrar de anúncios desnecessários, mas ao instalar nossa extensão você pode bloquear todos os tipos de anúncios ocultos que podem arruinar sua experiência. Ele não apenas bloqueia anúncios, mas também protege seu navegador de sites perigosos.",
                },
            ],
        },
        spanish: {
            title: "FAQs",
            button: "Más preguntas",
            questions: [
                {
                    id: 1,
                    ques: "Qué es Trueadblocker y cómo funciona?",
                    ans: "Es la mejor extensión diseñada para mejorar su experiencia en línea bloqueando todo tipo de anuncios molestos. También protege su privacidad y ahorra el uso de datos. La mejor parte es que es de uso gratuito.",
                },
                {
                    id: 2,
                    ques: "Esta extensión bloquea todo tipo de anuncios?",
                    ans: "Si esto adblocker Chrome extension bloquea todo tipo de anuncios, incluidos anuncios publicitarios, ventanas emergentes, anuncios de vídeo y muchos más.",
                },
                {
                    id: 3,
                    ques: "Puede esta extensión afectar tu velocidad de navegación web?",
                    ans: "Puede acelerar la carga de su página bloqueando todos los anuncios no deseados.",
                },
                {
                    id: 4,
                    ques: "Cómo incluir sitios web en la lista blanca en Trueadblocker?",
                    ans: "Puede incluir sitios web en la lista blanca agregándolos a la lista permitida en su configuración y luego permitirá todos los anuncios en esos sitios seleccionados.",
                },
                {
                    id: 5,
                    ques: "esta usando esto adblocker Chrome extension legal?",
                    ans: "Sí, esta extensión es legal y segura de usar.",
                },
                {
                    id: 6,
                    ques: "Esta extensión es compatible con otros sitios web??",
                    ans: "Esto adblocker Chrome extension es compatible con la mayoría de los principales navegadores, incluidos Google y Firefox.",
                },
                {
                    id: 7,
                    ques: "Cómo puedo instalar Trueadblocker en mi navegador web?",
                    ans: "Es muy simple ya que sólo necesita buscar la extensión o puede visitar nuestro sitio web y descargar la extensión desde allí.",
                },
                {
                    id: 8,
                    ques: "Es seguro utilizar Trueadblocker en varios sitios?",
                    ans: "Sí, la extensión es absolutamente segura en varios navegadores, incluidos Google Chrome y Firefox.",
                },
                {
                    id: 9,
                    ques: "Existe alguna versión gratuita de Trueadblocker?",
                    ans: "Sí, nuestra extensión es de uso gratuito. Puede bloquear todo tipo de anuncios de forma gratuita y mejorar su experiencia en línea.",
                },
                {
                    id: 10,
                    ques: "Por qué Trueadblocker es mejor que otros bloqueadores de publicidad?",
                    ans: "La mayoría de los bloqueadores de anuncios no pueden eliminar anuncios innecesarios, pero al instalar nuestra extensión puedes bloquear todo tipo de anuncios ocultos que puedan arruinar tu experiencia. No sólo bloquea anuncios sino que también protege su navegador de sitios web peligrosos.",
                },
            ],
        },
        turkish: {
            title: "FAQs",
            button: "Daha çok soru",
            questions: [
                {
                    id: 1,
                    ques: "Trueadblocker nedir ve nasıl çalışır?",
                    ans: "Her türlü sinir bozucu reklamı engelleyerek çevrimiçi deneyiminizi geliştirmek için tasarlanmış en iyi uzantıdır. Ayrıca gizliliğinizi korur ve veri kullanımınızdan tasarruf sağlar. En iyi yanı, kullanımının ücretsiz olmasıdır.",
                },
                {
                    id: 2,
                    ques: "Bu uzantı tüm reklam türlerini engelliyor mu?",
                    ans: "Evet bu adblocker Chrome extension banner reklamlar, pop-up'lar, video reklamlar ve çok daha fazlası dahil olmak üzere her türlü reklamı engeller.",
                },
                {
                    id: 3,
                    ques: "Bu uzantı web tarama hızınızı etkileyebilir mi?",
                    ans: "Tüm istenmeyen reklamları engelleyerek sayfanızın yüklenmesini hızlandırabilir.",
                },
                {
                    id: 4,
                    ques: "Trueadblocker'da web siteleri nasıl beyaz listeye alınır?",
                    ans: "Web sitelerini ayarlarında izin verilenler listesine ekleyerek beyaz listeye ekleyebilirsiniz; bu, seçilen sitelerdeki tüm reklamlara izin verecektir.",
                },
                {
                    id: 5,
                    ques: "Bunu kullanıyor adblocker Chrome extension yasal?",
                    ans: "Evet, bu uzantının kullanımı yasal ve güvenlidir.",
                },
                {
                    id: 6,
                    ques: "Bu uzantı diğer web siteleriyle uyumlu mu?",
                    ans: "Bu adblocker Chrome extension dahil olmak üzere başlıca tarayıcıların çoğuyla uyumludur Google and Firefox.",
                },
                {
                    id: 7,
                    ques: "Trueadblocker'ı web tarayıcıma nasıl yükleyebilirim?",
                    ans: "Sadece uzantıyı aramanız gerektiğinden çok basittir veya web sitemizi ziyaret edip uzantıyı oradan indirebilirsiniz.",
                },
                {
                    id: 8,
                    ques: "Trueadblocker'ı birden fazla sitede kullanmak güvenli midir?",
                    ans: "Evet, uzantıyı Google Chrome ve Firefox dahil birden fazla tarayıcıda kullanmak kesinlikle güvenlidir.",
                },
                {
                    id: 9,
                    ques: "Trueadblocker'ın ücretsiz bir sürümü var mı?",
                    ans: "Evet, uzantımızın kullanımı ücretsizdir. Her türlü reklamı ücretsiz olarak engelleyebilir ve çevrimiçi deneyiminizi geliştirebilirsiniz.",
                },
                {
                    id: 10,
                    ques: "Neden Trueadblocker diğerlerinden daha iyi adblockers?",
                    ans: "Reklam engelleyicilerin çoğu gereksiz reklamlardan kurtulamaz, ancak uzantımızı yükleyerek deneyiminizi bozabilecek her türlü gizli reklamı engelleyebilirsiniz. Yalnızca reklamları engellemekle kalmaz, aynı zamanda tarayıcınızı tehlikeli web sitelerinden de korur.",
                },
            ],
        }
    }
    const data = lang[pathname];
    return (
        <div className={styles.container}>
            <Navbar />
            <FrequentlyAskedQuestion data={data} />
            <Footer />
        </div>
    )
}

export default Page