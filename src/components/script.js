document.getElementById('btnMostrarRegister').addEventListener("click", function () {
    document.getElementById("pgRegister").classList.add("opacity-0");
    document.getElementById("pgRegister").classList.remove("opacity-100");
    document.getElementById("pgRegister").classList.add("hidden");
    document.getElementById("pgRegister").classList.remove("hidden");
    document.getElementById("pgRegister").classList.remove("opacity-0");
    document.getElementById("pgRegister").classList.add("opacity-100");
});