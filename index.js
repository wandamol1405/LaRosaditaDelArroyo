const menu =["Inicio", "Disponibilidad", "Reglamento", "Contacto"]

const nav = document.querySelector("#menu");

menu.forEach((option)=>{
    const optionDiv = document.createElement("div");
    optionDiv.innerHTML = option;
    nav.appendChild(optionDiv);
}
);

const articles = [
    {
        name: "Arroyo de los Patos",
        img: "./resources/Arroyo de los Patos.jpeg"
    },
    {
        name: "Habitaciones",
        img: "./resources/Habitacion planta baja 2.jpg"
    },
    {
        name: "Pileta",
        img: "./resources/pileta 8.jpg"
    },
    {
        name: "Predio",
        img: "./resources/Predio.jpeg"
    },
    {
        name: "Servicios",
        img: "./resources/Living 1.jpg"
    }
];

const section = document.querySelector("section");

articles.forEach((article)=>{
    const articleContainer = document.createElement("div");
    const title = document.createElement("h2");
    const img = document.createElement("img");

    articleContainer.setAttribute("class", "section");
    title.setAttribute("class", "text2");
    img.setAttribute("width", "850");
    img.setAttribute("height", "600");

    title.innerHTML = article.name;
    img.setAttribute("src", article.img);

    articleContainer.appendChild(title);
    articleContainer.appendChild(img);

    section.appendChild(articleContainer);
})