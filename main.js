

let projectZoom = document.getElementById("projectZoom");
let projectZoomPlaceholder = projectZoom.innerHTML;
let selectedProject = "";


document.querySelectorAll(".projectTitle").forEach(element => {
    element.onclick = e => {
        if (e.target.parentElement.id === selectedProject) {
            closeProjectZoom();
        } else {
            console.log(e.target.parentElement);
            console.log(e.target.parentElement.getElementsByClassName('projectDescription'));
            projectZoom.classList.add("filled");
            projectZoom.innerHTML =  `<div><h2>Projects</h2><button class="niceButton" onclick="closeProjectZoom()">close</button></div>
            <div id='projectZoomDescription'>${element.parentElement.getElementsByClassName('projectDescription')[0].innerHTML}</div>`;
            selectedProject = e.target.parentElement.id;
        }
    } 
});

window.onkeyup = function (event) {
    if (event.keyCode == 27) { // Escape key closes project description
        closeProjectZoom();
    }
}

function closeProjectZoom() {
    projectZoom.classList.remove("filled");
    projectZoom.innerHTML = projectZoomPlaceholder;
    selectedProject = "";
}
