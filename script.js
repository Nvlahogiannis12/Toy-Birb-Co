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

// ---------------- GENERATE THE Reviews ---------------- //
let customReviews = [
  {
    Rating: "5 Stars",
    Name: "Josh",
    Review: "Great Would Recommend",
    Time: "5/12/90",
  },
  {
    Rating: "5 Stars",
    Name: "Gordon",
    Review:
      "How do I exit this page. I was just trying to order a pizza for my grandkiddos.",
    Time: "12/31/19",
  },
  {
    Rating: "5 Stars",
    Name: "Hylia",
    Review: "Looking for excellent tool to use against Demons",
    Time: "2/14/08",
  },
  {
    Rating: "5 Stars",
    Name: "Las Pancake",
    Review: "I like wood",
    Time: "4/25/20",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("reviewList");

  const render = (list) => {
    grid.innerHTML = "";

    list.forEach((review, index) => {
      const col = document.createElement("div");
      col.className = "col-6 col-lg-2";

      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <h5 class="card-title mb-1">${review.Name}</h5>
            <div class="badge bg-warning text-dark mb-2">${review.Rating}</div>
            <p class="card-text small">${review.Review}</p>
            <div class="text-muted small">${review.Time}</div>
          </div>
        </div>
      `;

      grid.appendChild(col);
    });
  };

  render(customReviews);
});
