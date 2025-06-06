// Grab elements
const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");
const links = document.querySelectorAll(".sidebar a");
let isSidebarOpen = false;

// Event listener to handle clicking the menu icon
menuIcon.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    // Mobile: toggle the 'open' class
    sidebar.classList.toggle("open");
  } else {
    // Desktop: use 'left' positioning to toggle visibility
    if (isSidebarOpen) {
      sidebar.style.left = "-200px";
    } else {
      sidebar.style.left = "0";
    }
  }

  // Toggle the state
  isSidebarOpen = !isSidebarOpen;
});

// Function to close the sidebar and navigate to a page
function selectPage(event) {
  event.preventDefault(); // Prevent the default link navigation to ensure the sidebar closes first
  const targetUrl = event.target.getAttribute("href"); // Get the target URL from the clicked link

  // Close the sidebar with a smooth transition
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("open"); // Close the sidebar on mobile
  } else {
    sidebar.style.left = "-200px"; // Close the sidebar on desktop
  }

  // Wait for the transition to complete before navigating
  setTimeout(() => {
    window.location.href = targetUrl; // Navigate to the new page after the sidebar closes
  }, 500); // Delay matches the CSS transition time (0.5s)
}

// Add event listeners to all sidebar links
links.forEach((link) => {
  link.addEventListener("click", selectPage);
});
