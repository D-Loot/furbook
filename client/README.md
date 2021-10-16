# ArtSell

## Table of Contents:

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Link](#link)
- [Slides](#slides)
- [Contact](#contact)

## Description:

ArtSell is a full stack e-commerce project built by Dan Looten, Tyler Lawson and Mehalet Kesate. It is a small online art gallery for the purpose of purchasing art.

## Installation:

Must install the following node package managers:

- dotenv
- express
- mysql2
- sequelize
- bcrypt
- express-sessions
- express-handlebars
- stripe

## Usage:

From the terminal: ender npm start to run the server.
From a browser: navigate to http://localhost:3001

## Link:

https://artsell.herokuapp.com/

## Slides:

https://docs.google.com/presentation/d/1FHXKreLhIvNm4341Wc5z-3CErUvo7d3k_jE_VvV1SU0/edit?usp=sharing

## Contact:

Email:
Dan: danwlooten@gmail.com

Tyler: lifewithtnt@gmail.com

Mehalet: tatybcoding@gmail.com

Github: MehaletKB/ArtSell

## Screenshots:

![SS1](./Assets/SS1.PNG)

The homepage lists 6 pieces of art, and the header contains a login page along with a gallery page which links back to the main page.

![SS2](./Assets/SS2.PNG)

The login page requires an email and a password. If you have not signed up yet, select the Signup button to do so.

![SS3](./Assets/SS3.PNG)
Add a username, email and password to signup.

![SS4](./Assets/SS4.PNG)
Once signed in, the header displays the gallery, cart and logout links.

![SS5](./Assets/SS5.PNG)
After selecting the Lucid, Side and Vis artwork from the page before, they are now displayed in the cart.

![SS6](./Assets/SS6.PNG)
By selecting the Submit Order button on the previous page, the user is directed to the payment processing service Stripe, which displays the cart contents and allows the user to input their payment information to submit the sale.
