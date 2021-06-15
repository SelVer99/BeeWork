# BeeWork 

## Panoramica dell'applicazione

<img align="right" alt="BeeWork_logo" src="./imagesREADME/logo.png" width="200" height="200">

**BeeWork** è un'applicazione creata con l’obiettivo di promuovere la collaborazione ad un determinato progetto, aiutando i team a gestire e a dividere in modo semplice e veloce il proprio lavoro. 
Ogni team può creare per il proprio progetto una bacheca condivisa tra i vari collaboratori, nella quale si potranno gestire i diversi task da svolgere che daranno una panoramica complessiva degli obiettivi da raggiungere entro un determinato periodo di tempo. Ogni collaboratore in qualsiasi momento, dal proprio smartphone, può visualizzare la lista dei propri progetti e dei compiti a lui assegnati.  
I task aiutano il team a monitorare lo stato di avanzamento del progetto, che verrà aggiornata ogni volta che uno di questi viene completato.

## Implementazione
<img align="left" alt="BeeWork_logo" src="./imagesREADME/ionic_logo.png" width="200" height="70">

BeeWork è sviluppata lato client tramite l'utilizzo del framework **Ionic**, un SDK completo ed open-source per lo sviluppo *ibrido* di applicazioni mobili basato su **AngularJS** e **Apache Cordova**. 

Lato server si è invece sfruttato il framework **Spring Boot**, che facilita la creazione di applicazioni stand-alone basate su Spring ed immediatamente eseguibili. Si può consultare il progetto qui: [BeeWork-api](https://github.com/Flacaro/beework-api)

## Requisiti d'installazione
Per utilizzare BeeWork è necessario aver installato sulla propria macchina:
- **Node.js**, versione 14.17.0 o successive;
- **npm** (Node Package Manager), versione 7.14.0 o successive.

Si deve poi procedere con l'installazione dell'ultima versione di Ionic e della Cordova CLI:
```
$ npm install -g @ionic/cli native-run cordova-res
```
Infine, dopo aver clonato la repository, si deve lanciare questo comando da terminale nella directory del progetto, per garantirne il corretto funzionamento:
```
$ npm install
```

## Esecuzione
Dopo aver verificato i requisiti, è possibile eseguire l'applicazione tramite il comando:
```
$ ionic serve -l
```

## Team di sviluppo

- [Selene Verna](https://github.com/SelVer99)
- [Flaviana Caroselli](https://github.com/Flacaro)
- [Angelo Casciani](https://github.com/AngeloC99)
- [Mohamed Ossama Mohamed Mohamed](https://github.com/MohamedOssama24)