# E.F.S *easyfrontstart*
![Static Badge](https://img.shields.io/badge/V1.0.0-green)
<img  alt="HTML" width="30px" height="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
<img  alt="CSS" width="30px" height="30px"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
<img  alt="Sass" width="30px" height="30px"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
<img  alt="JavaScript" width="30px" height="30px"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
<img  alt="npm" width="30px" height="30px"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />

Découvrez **easy Front Start**, votre solution **tout-en-un** pour simplifier la création de projets d'intégration frontend HTML/SASS/JS à partir de zéro. Gagnez du temps, boostez votre productivité et lancez vos projets web plus rapidement avec ce petit script complet.

## Comment ça marche ?

Une fois le repo clone, vous pouvez facilement **démarrer votre projet** avec une simple petite commande :

```npm
npm run start
```

Pour utiliser le **watch sass**, rien de plus simple ! Il suffit de lancer cette commande et... c'est tout !

```npm
npm run sass
```

Vous avez fini votre projet et vous voulez **optimiser votre css en le minifiant** ? Rien de plus facile ! utiliser cette commande :

```npm
npm run build
```

Et voilà vous êtes prêt à vous lancer dans plein de projet superbe ! A vos clavier ! 💪

[![Static Badge](https://img.shields.io/badge/TELECHARGER-blue?style=for-the-badge)](https://github.com/aurelienheude/easyfrontstart/archive/refs/heads/main.zip)


## Architecture proposée

```
  Projet
  |
  ├── assets
  |   ├── img
  |   ├── icon
  |   ├── css
  |   |   └── style.css
  |   └── js
  |       └── main.js
  |
  ├── sass
  |   ├── base
  |   |   └── _base.scss
  |   |
  |   ├── components
  |   |   ├── _btn.scss
  |   |   ├── _input.scss
  |   |   ├── _icon.scss
  |   |   ├── _navigation.scss
  |   |   └── _index.scss
  |   |
  |   ├── layout
  |   |   ├── _header.scss
  |   |   ├── _grid.scss
  |   |   ├── _footer.scss
  |   |   ├── _forms.scss
  |   |   ├── _modals.scss
  |   |   └── _index.scss
  |   |
  |   ├── pages
  |   |   ├── _home.scss
  |   |   └── _index.scss
  |   |
  |   ├── themes
  |   ├── vendors
  |   └── utils
  |       ├── _mixins.scss
  |       ├── _placeholders.scss
  |       ├── _breakpoints.scss
  |       ├── _fonts.scss
  |       ├── _colors.scss
  |       └── _index.scss
  |
  └── main.scss

```
