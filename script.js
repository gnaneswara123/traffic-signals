document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('redButton').addEventListener('click', function() {
        showSection('redSection');
    });

    document.getElementById('yellowButton').addEventListener('click', function() {
        showSection('yellowSection');
    });

    document.getElementById('greenButton').addEventListener('click', function() {
        showSection('greenSection');
    });

    function showSection(sectionId) {
        // Hide all sections
        document.getElementById('redSection').style.display = 'none';
        document.getElementById('yellowSection').style.display = 'none';
        document.getElementById('greenSection').style.display = 'none';

        // Show the selected section
        document.getElementById(sectionId).style.display = 'block';
    }
});
