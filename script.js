
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
    
    if(light == 'red'){
        document.getElementById('redButton').classList.add('active');
        document.getElementById('yellowButton').classList.remove('active');
        document.getElementById('greenButton').classList.remove('active');

    }
    if(light == 'yellow'){
        document.getElementById('yellowButton').classList.add('active');
        document.getElementById('redButton').classList.remove('active');
        document.getElementById('greenButton').classList.remove('active');

    }
    if(light == 'green'){
        document.getElementById('greenButton').classList.add('active');
        document.getElementById('redButton').classList.remove('active');
        document.getElementById('yellowButton').classList.remove('active');

    }
}

