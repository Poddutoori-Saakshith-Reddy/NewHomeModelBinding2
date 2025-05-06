function dataChanger(HouseSize, HouseName) {
   
    $.ajax({
        url: 'https://localhost:7230/Home/ChangeData',
        type: 'get',
        data: { "HouseSize": HouseSize, "HouseName": HouseName },
        success: function (data) {
            $("#size_" + data.houseName).text(data.houseSize)
            $("#bed_" + data.houseName).text(data.bedRooms)
            $("#bath_" + data.houseName).text(data.bathRooms)
            $("#car_" + data.houseName).text(data.carSpace)
            $("#storey_" + data.houseName).text(data.storey)
            $("#lot_" + data.houseName).text(data.minLotWidth + " m LOT")
        }
    })
}

function SetActive(element) {
    
    var elements = document.querySelectorAll('.pagination button');
    elements.forEach(b => b.classList.remove("active"))
    element.classList.add("active");
}
function imageChange(imagetype) {

    const images = document.querySelectorAll('.imgg');
    images.forEach(img => {
        if (imagetype === 'facades') {
            img.classList.add('card-img-top');
            img.src = img.getAttribute('data-facades');
        }
        else {
            img.classList.remove('card-img-top');
            img.src = img.getAttribute('data-floorPlans');
        }
    });
}

function SetActives(element) {

    var elements = document.querySelectorAll('.pagination button');
    elements.forEach(b => b.classList.remove("active"))
    element.classList.add("active");
}


var slider = document.getElementById('slider');
var budgetVal = document.getElementById('budgetVal'); // Element to display the value

if (!slider.noUiSlider) {
    noUiSlider.create(slider, {
        start: [211, 488],
        connect: true,
        range: {
            'min': 211,
            'max': 488
        },
        tooltips: true,
        step: 1,
        behaviour: 'drag',
        format: {
            to: value => Math.round(value),
            from: value => Number(value)
        }
    });

    // Listen for slider value changes
    slider.noUiSlider.on('update', function (values) {
        // Ensure the slider values are displayed without affecting the slider itself
        if (budgetVal) {
            budgetVal.innerHTML = `$${values[0]}k - $${values[1]}k`; // Display the range dynamically
        }
    });
}

var slider2 = document.getElementById('slider2');
var blockWidthVal = document.getElementById('blockWidthVal');
if (!slider2.noUiSlider) {
    noUiSlider.create(slider2, {
        start: [8, 14], // Starting values of the handles
        connect: true,   // Connects the bar between the handles
        range: {
            'min': 8,
            'max': 14
        },
        tooltips: true,   // Show tooltips above the handles
        step: 1,          // Increment steps
        behaviour: 'drag', // Allow dragging the selection
        format: {
            to: value => Math.round(value),
            from: value => Number(value)
        }
    });
    slider2.noUiSlider.on('update', function (values2) {
        if (blockWidthVal) {
            blockWidthVal.innerHTML = `${values2[0]}m - ${values2[1]}m`;
        }
    });
}

