
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
        
        document.getElementById('redSection').style.display = 'none';
        document.getElementById('yellowSection').style.display = 'none';
        document.getElementById('greenSection').style.display = 'none';
        document.getElementById(sectionId).style.display = 'block';
    }

function toggleLight(light) {
    
    document.querySelectorAll('.light').forEach(function(lightElement) {
        lightElement.classList.remove('active');
    });

    
    var lightElement = document.getElementById(light + 'Light');
    lightElement.classList.add('active');
}

