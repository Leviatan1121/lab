var data;
const list = document.getElementById("list");
async function main() {
    const res = await fetch("assets/json/data.json");
    data = await res.json();
    data.forEach(project => {
        const ctn = document.createElement("div");
        ctn.classList.add("project");
        // ctn.classList.add("project-ctn");
        const name = document.createElement("h3");
        name.innerHTML = project.name;
        const desc = document.createElement("p");
        desc.innerHTML = project.description;
        //const img = document.createElement("img");
        //img.src = project.image;
        const link = document.createElement("a");
        link.innerText = "View Project";
        link.href = project.url;


        const downloads = document.createElement("div");
        downloads.classList.add("downloads");

        Object.entries(project.files).forEach(([type, filename]) => {
            const download = document.createElement("a");
            download.innerText = type;
            download.href = `https://cdn.levihub.dev/${filename}`;
            downloads.appendChild(download);
        });


        ctn.appendChild(name);
        ctn.appendChild(desc);
        //ctn.appendChild(img);
        ctn.appendChild(link);
        ctn.appendChild(downloads);
        list.appendChild(ctn);
    });
}
window.onload = () => main();