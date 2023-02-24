const menuGroupHeadings = document.querySelectorAll(".menu-group-heading");

menuGroupHeadings.forEach((heading) => {
  heading.addEventListener("click", () => {
    const menuGroup = heading.nextElementSibling;
    menuGroup.style.display = menuGroup.style.display === "none" ? "" : "none";
  });
});
