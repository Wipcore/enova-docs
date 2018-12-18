---
title: Attribut
categories: ['general']
---

## Skapa attribut 

Alla produkter har ett antal attribut som listas när man går in på produktsidan. Eftersom en e-handel inte består av homogena produkter behöver vi skapa olika uppsättningar med attribut som kan användas på olika sorters produkter. Armaturer har andra attribut än ljuskällor och så vidare.  
  
Vi fortsätter med exemplet Golvlampor och skapar en uppsättning med attribut som ska passa alla golvlampor. När vi sedan skapar en produkt som är en golvlampa kommer vi koppla attributen vi skapar här till den produkten.  

#### Attributvärden  

På samma sätt som en nyskapad kategori är en tom behållare som vi kan populera, är en nyskapad Attribute Type en tom behållare som vi antingen kan populera med specifika värden eller fritextvärden. Detta sker genom alternativet IsContinous. Väljer vi att IsContinous ska vara påslagen, kan vi skriva vilka värden vi vill i värdefältet. Och när den är av måste vi specificera vilka värden som är valbara. När vi når fram till steget där vi ska skapa en produkt kommer skillnaden mellan IsContinous och ej IsContinous bli tydligare. 

    Följande attribut bestämmer vi att alla lampor bör ha
    
    - Antal ljuskällor
       Valfri siffra   
    - Höjd (cm)  
       Valfri siffra
    - Bredd (cm)  
       Valfri siffra
    - Längd (cm)   
       Valfri siffra
    - Lampskärmens färg
       Fritext  
    - Stommens färg
       Fritext  
    - Sockel
       Specifika socklar: E27, E14, GU10  
    
Av attributen ovan kommer alla utom Sockel att vara IsContinous. Det innebär att vi måste specificera vilka attribut en sockel kan ha.

I klippet nedan skapar vi två Attribute Types: Längd (cm) och Sockel. För Sockeln skapar vi 3 förutbestämda Attribute Values: E27, E14, GU10. 

##### Klicka på Catalog → Attribute Types → Add New Attribute Type  

`video: https://youtu.be/_hXQWeCO4J0`
