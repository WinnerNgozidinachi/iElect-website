function saveAndNavigate() {
    var username = document.getElementById("username").value;

    var usernameRegex = /^[a-zA-Z]+$/;
    if (!usernameRegex.test(username)) {
        alert("Please enter a valid username (alphanumeric characters only).");
        return;
    }

    localStorage.setItem("username", username);

    window.location.href = "page2.html";
}

var selectedAvatar = null;

        function selectAvatar(avatarPath) {
            // Remove the selection border from the previously selected avatar
            if (selectedAvatar) {
                selectedAvatar.classList.remove("selected-avatar");
            }

            // Set the selected avatar path
            selectedAvatar = event.target;
            localStorage.setItem("avatar", avatarPath);

            // Add a selection border to the clicked avatar
            selectedAvatar.classList.add("selected-avatar");

            // Enable the "Next" button
            enableNextButton();
        }

        function enableNextButton() {
            // Enable the "Next" button
            document.getElementById("nextButton").disabled = false;
        }

        function disableNextButton() {
            // Disable the "Next" button
            document.getElementById("nextButton").disabled = true;
        }

function saveAndNavigate2() {
    var email = document.getElementById("email").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

    localStorage.setItem("email", email);

    window.location.href = "page3.html";
}

function saveAndNavigateGetStarted() {
    var password = document.getElementById("password").value;
   
    if (password.length < 8) {
        alert("Please enter a password with at least 8 characters.");
        return;
    }

    localStorage.setItem("password", password);

    window.location.href = "page.html";
}


var username = localStorage.getItem("username");
var avatar = localStorage.getItem("avatar");

// Display username and avatar at the top left
document.getElementById("profile-avatar").src = avatar;
document.getElementById("profile-username").textContent = username;


var username = localStorage.getItem("username");
document.getElementById("welcome-message").textContent = "Welcome, " + username;

function toggleList() {
    var statesList = document.getElementById('statesList');
    statesList.style.display = (statesList.style.display === 'none') ? 'block' : 'none';
}
function scrollToComment() {
    var commentSection = document.getElementById("comment-section");

    if (commentSection) {
        commentSection.scrollIntoView({ behavior: 'smooth' });
    }
}


function toggleInput() {
    var inputContainer = document.getElementById('input-container');
    inputContainer.style.display = (inputContainer.style.display === 'none' || inputContainer.style.display === '') ? 'block' : 'none';
}

function postUpdate() {

    var username = localStorage.getItem("username");
    var avatar = localStorage.getItem("avatar");


    // Add your update posting logic here
    var updateInput = document.getElementById('update-input');
    var updateText = updateInput.value;

    if (updateText.trim() !== "") {
        // Create a new update container
        var updateContainer = document.createElement('div');
        updateContainer.classList.add('update');

        // Create a new paragraph element to display the update text
        var updateTextElement = document.createElement('p');
        updateTextElement.textContent = updateText;

        // Create elements for profile, comment, like, and repost
        var profileElement = document.createElement('div');
        profileElement.textContent = "User Profile";

        var commentElement = document.createElement('button');
        commentElement.textContent = "Comment";
        commentElement.onclick = function () {
            // Add your comment logic here
            console.log('Comment clicked for update:', updateText);
        };

        var likeElement = document.createElement('button');
        likeElement.textContent = "Like";
        likeElement.onclick = function () {
            // Add your like logic here
            console.log('Like clicked for update:', updateText);
        };

        var repostElement = document.createElement('button');
        repostElement.textContent = "Repost";
        repostElement.onclick = function () {
            // Add your repost logic here
            console.log('Repost clicked for update:', updateText);
        };

        // Append elements to the update container
        updateContainer.appendChild(profileElement);
        updateContainer.appendChild(updateTextElement);
        updateContainer.appendChild(commentElement);
        updateContainer.appendChild(likeElement);
        updateContainer.appendChild(repostElement);

        // Append the new update container to the updates container
        var updatesContainer = document.getElementById('updates-container');
        updatesContainer.appendChild(updateContainer);

        // Clear the input field after posting the update
        updateInput.value = '';

        // Hide the input container after posting the update
        toggleInput();
    }
}