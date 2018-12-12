---
title: Order
categories: ['second']
---
### Order

En order som är lagd kan vi inte göra särskilt mycket med i Enova. Vi kan titta på ordrar som har lagts, sortera på olika parametrar eller ta bort ordrar. En order består av en Customer,  Products, Shipping Type, Payment Type och eventuell Promotion. Allt detta hämtas från Cart:en som kunden skapar när den börjar lägga produkter i varukorgen. En användare kan inte skapa en order utan alla dessa bitar på plats i varukorgen, så Cart:en fungerar även som en fail safe för oönskade Order i systemet.
