// Configuration - REPLACE WITH YOUR WHATSAPP NUMBER
const WHATSAPP_NUMBER = "2349138899162"; // Format: country code + number without + or 00

// Available accounts
const accounts = [
  {
    name: "@creativevibes",
    platform: "Instagram",
    followers: "125K",
    engagement: "8.5%",
    description: "Photography & Lifestyle",
    price: "$1,299",
    originalPrice: "$1,899",
    details: ["Aged: 2+ years", "Verified ✓", "Clean History"],
  },
  {
    name: "@trendingvibes",
    platform: "TikTok",
    followers: "89K",
    engagement: "12.3%",
    description: "Entertainment & Trends",
    price: "$699",
    originalPrice: "$1,299",
    details: ["Aged: 2+ years", "High Engagement", "Viral Content"],
  },
  {
    name: "Business Accounts Hub",
    platform: "Facebook",
    followers: "234K",
    engagement: "5.8%",
    description: "Business & Enterprise Solutions",
    price: "$499",
    originalPrice: "$999",
    details: ["Aged: 3+ years", "Business Verified", "Active Community"],
  },
];

let currentAccountIndex = 0;

// Switch account when thumbnail clicked
function switchAccount(index, thumb) {
  currentAccountIndex = index;
  const account = accounts[index];

  // Update main account card
  document.getElementById("followerCount").textContent = account.followers;
  document.getElementById("engagementRate").textContent = account.engagement;

  // Update product info
  document.querySelector(".product-info h1").textContent =
    "@" + account.name.replace("@", "") + " " + account.platform + " Account";
  document.querySelector(".price").textContent = account.price;
  document.querySelector(".original-price").textContent = account.originalPrice;
  document.querySelector(".description").textContent =
    "Established " +
    account.details[0] +
    " " +
    account.platform +
    " account with " +
    account.followers +
    " engaged followers. " +
    account.details[2] +
    " and high engagement rates. Perfect for influencers, brands, or content creators looking for an established platform to scale their presence.";

  // Update account info
  document.querySelector(".account-info h3").textContent = account.name;
  document.querySelector(".account-info p").textContent = account.description;

  // Update details tags
  const detailsContainer = document.querySelector(".account-details");
  detailsContainer.innerHTML = account.details
    .map(function (detail) {
      return '<span class="detail-tag">' + detail + "</span>";
    })
    .join("");

  // Update thumbnail active state
  document.querySelectorAll(".account-thumb").forEach(function (t) {
    t.classList.remove("active");
  });
  thumb.classList.add("active");
}

// Open WhatsApp with pre-filled message
function openWhatsApp(e) {
  e.preventDefault();
  const message = "I am interested in purchasing a social media account";
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL =
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodedMessage;

  // Open WhatsApp in new tab
  window.open(whatsappURL, "_blank");
}

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    // Handle escape if needed
  }
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Entrance animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll(".feature, .trust-item").forEach(function (el) {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "all 0.6s ease-out";
  observer.observe(el);
});
