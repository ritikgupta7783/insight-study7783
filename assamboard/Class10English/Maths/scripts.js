function showOptions(chapter) {
    const selectedChapter = document.querySelector(`.chapter-list li:nth-child(${chapter})`);

    // Check if options are already shown
    if (selectedChapter.nextElementSibling && selectedChapter.nextElementSibling.classList.contains('options-container')) {
        selectedChapter.nextElementSibling.remove(); // Remove options if clicked again
        return;
    }

    // Remove any previously shown options
    document.querySelectorAll(".options-container").forEach(option => option.remove());

    // Create a new options container
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options-container");

    const optionsTitle = document.createElement("h3");
    optionsTitle.textContent = " (Options)";

    const optionsList = document.createElement("ul");
    const notesOption = document.createElement("li");
    const videoOption = document.createElement("li");

    notesOption.innerHTML = '<a href="#">Notes</a>';
    videoOption.innerHTML = '<a href="#">Video Lecture </a>';

    optionsList.appendChild(notesOption);
    optionsList.appendChild(videoOption);

    optionsContainer.appendChild(optionsTitle);
    optionsContainer.appendChild(optionsList);

    // Insert the options container below the selected chapter
    selectedChapter.after(optionsContainer);
}
