const body = document.body;


const Themes = () => {

    const color = localStorage.getItem("colorName");

    if (color === "Default") {
        body.classList.remove("light-Theme");

    }

    if (color === "Light") {
        body.classList.add("light-Theme");
    }


}


export { Themes };