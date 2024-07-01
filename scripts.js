// Add any JavaScript you need here for animations or interactivity
document.addEventListener("DOMContentLoaded", function () {
    // Example: Animate the profile picture on hover
    const profilePic = document.querySelector('.profile-pic');
    profilePic.addEventListener('mouseover', function () {
        profilePic.style.transform = 'scale(1.1)';
        profilePic.style.transition = 'transform 0.3s';
    });
    profilePic.addEventListener('mouseout', function () {
        profilePic.style.transform = 'scale(1)';
    });
});
