let CircularSlider = circularSlider.default;

const container = "slider";
const updateVal = (divId, val) => document.getElementById(divId).getElementsByClassName("amount")[0].innerHTML = "$" + val;

const transportation = new CircularSlider({container, color: "#5d3b6d", max: 1000, min: 0, step: 500, radius: 190, valueChange: val => updateVal('transportation', val)});
const food = new CircularSlider({container, color: "#127fc3", min: 10, max: 20, step: 2, radius: 160, valueChange: val => { updateVal('food', val)}});
const insurance = new CircularSlider({container, color: "#22a823", min: 500, max: 9000, step: 100, radius: 130, valueChange: val => updateVal('insurance', val)});
const entertainment = new CircularSlider({container, color: "#fd8123", min: 5, max: 30, step: 5, radius: 100, valueChange: val => updateVal('entertainment', val)});
const healthCare = new CircularSlider({ container, color: "#fd3b3f", min: 0, max: 4, step: 1, radius: 70, valueChange: val => updateVal('health-care', val)});

updateVal('transportation', transportation.currentValue);
updateVal('food', food.currentValue);
updateVal('insurance', insurance.currentValue);
updateVal('entertainment', entertainment.currentValue);
updateVal('health-care', healthCare.currentValue);

transportation.stepNo = 1;
food.stepNo = 4;
insurance.stepNo = 65;
entertainment.stepNo = 3;
healthCare.stepNo = 1;