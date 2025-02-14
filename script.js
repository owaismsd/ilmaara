document.getElementById("searchButton").addEventListener("click", function () {
    let searchValue = document.getElementById("searchInput").value.toLowerCase();
    let items = document.querySelectorAll(".search-item");

    items.forEach(item => {
        let text = item.textContent.toLowerCase();
        let originalHTML = item.innerHTML;

        if (text.includes(searchValue) && searchValue !== "") {
            let regex = new RegExp(searchValue, "gi"); // Case-insensitive search
            let highlightedText = originalHTML.replace(regex, match => `<span class="highlight">${match}</span>`);
            item.innerHTML = highlightedText; // Apply highlight
            item.closest(".content").classList.remove("hidden"); // Show matching content
        } else {
            item.innerHTML = originalHTML; // Reset text if not matched
            item.closest(".content").classList.add("hidden"); // Hide if no match
        }
    });
});


// right side bar dropdown

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
