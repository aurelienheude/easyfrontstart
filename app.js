const fs = require('fs');


fs.writeFileSync('index.html', `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="assets/icon/favicon.ico" />

    <title>Projet</title>
    
    <meta name="description" content="C'est un super nouveau projet qui parle de blablabla">

    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <div class="container">
        <nav></nav>
        <main></main>
        <footer></footer>
    </div>
    <script src="assets/js/main.js"></script>
</body>
</html>
`);

fs.mkdirSync('assets');
process.chdir('assets');

fs.mkdirSync('img');
fs.mkdirSync('icon');
fs.mkdirSync('css');
fs.mkdirSync('js');
process.chdir('js');

fs.writeFileSync('main.js', '');

process.chdir('../../');

fs.mkdirSync('sass');
process.chdir('sass');

fs.writeFileSync('main.scss', `
@use "base/base";
@use "components";
@use "layout";
@use "pages";
`);

fs.mkdirSync('base');
fs.mkdirSync('utils');
fs.mkdirSync('layout');
fs.mkdirSync('components');
fs.mkdirSync('pages');
fs.mkdirSync('themes');
fs.mkdirSync('vendors');

process.chdir('base');
fs.writeFileSync('_base.scss', `@use "../utils" as *;

* {
    margin: 0;
    padding: 0;
}
`);

process.chdir('../components');
fs.writeFileSync('_btn.scss', '@use "../utils" as *;');
fs.writeFileSync('_input.scss', '@use "../utils" as *;');
fs.writeFileSync('_icon.scss', '@use "../utils" as *;');
fs.writeFileSync('_navigation.scss', '@use "../utils" as *;');

fs.writeFileSync('_index.scss', `@forward "navigation";
@forward "icon";
@forward "input";
@forward "btn";
`);

process.chdir('../layout');
fs.writeFileSync('_header.scss', '@use "../utils" as *;');
fs.writeFileSync('_grid.scss', '@use "../utils" as *;');
fs.writeFileSync('_footer.scss', '@use "../utils" as *;');
fs.writeFileSync('_forms.scss', '@use "../utils" as *;');
fs.writeFileSync('_modales.scss', '@use "../utils" as *;');

fs.writeFileSync('_index.scss', `@forward "footer";
@forward "header";
@forward "grid";
@forward "forms";
@forward "modales";
`);

process.chdir('../pages');
fs.writeFileSync('_home.scss', '@use "../utils" as *;');

fs.writeFileSync('_index.scss', '@forward "home";');

process.chdir('../utils');
fs.writeFileSync('_mixins.scss', '');
fs.writeFileSync('_placeholders.scss', '');
fs.writeFileSync('_breakpoints.scss', '');
fs.writeFileSync('_fonts.scss', '');
fs.writeFileSync('_colors.scss', '');

fs.writeFileSync('_index.scss', `@forward "mixins";
@forward "placeholders";
@forward "breakpoints";
@forward "fonts";
@forward "colors";
`);

for (let i = 0; i < 3; i++) {
    console.log("*****************************************************");
}
console.log("");
console.log("");
console.log("Application mise en place, bonne session d'intégration :p");
console.log("");
console.log("N'oubliez pas d'aller mettre une petite étoile sur le repo GitHub svp O: : https://github.com/aurelienheude/easyfrontstart");
console.log("");
console.log("");
console.log("Auteur : Aurélien Heude");
console.log("- - - - -");
console.log("Contact : aurelienheudepro@gmail.com");
console.log("- - - - -");
console.log("GitHub : https://github.com/aurelienheude");
console.log("");
console.log("");
for (let i = 0; i < 3; i++) {
    console.log("*****************************************************");;
}
console.log("");
console.log("");