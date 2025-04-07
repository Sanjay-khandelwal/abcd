const toggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", () => {
    const equipmentList = document.querySelector(".equipment-list");
    const equipmentData = [
        { name: "Mini Excavator", details: "Compact and efficient for small tasks." },
        { name: "Crawler Excavator", details: "Powerful and suitable for heavy-duty work." },
        { name: "Dragline Excavator", details: "Perfect for deep excavation." },
        { name: "Hydraulic Shovel", details: "Ideal for mining and rock work." }
    ];

    equipmentData.forEach(equip => {
        const item = document.createElement("div");
        item.className = "equipment-item";
        item.innerHTML = `
            <h3>${equip.name}</h3>
            <p>${equip.details}</p>
        `;
        equipmentList.appendChild(item);
    });
});

// footer
document.addEventListener("DOMContentLoaded", function () {
    const footerData = [
      { name: "Instagram", url: "https://instagram.com", icon: "fab fa-instagram" },
      { name: "Twitter", url: "https://twitter.com", icon: "fab fa-twitter" },
      { name: "Facebook", url: "https://facebook.com", icon: "fab fa-facebook-f" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "fab fa-linkedin-in" }
    ];

    const footerContainer = document.getElementById("dynamic-footer");

    const footer = document.createElement("footer");
    footer.classList.add("animate__animated", "animate__fadeInUp");

    const section = document.createElement("div");
    section.className = "social-section";

    const heading = document.createElement("h3");
    heading.className = "animate__animated animate__fadeInDown";
    heading.textContent = "Stay Connected";

    const iconsDiv = document.createElement("div");
    iconsDiv.className = "social-icons";

    footerData.forEach(link => {
      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener";

      const icon = document.createElement("i");
      icon.className = link.icon;

      a.appendChild(icon);
      a.appendChild(document.createTextNode(link.name));
      iconsDiv.appendChild(a);
    });

    section.appendChild(heading);
    section.appendChild(iconsDiv);
    footer.appendChild(section);
    footerContainer.appendChild(footer);
  });